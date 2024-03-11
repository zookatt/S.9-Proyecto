import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import config from '../config/config';
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { CustomButton, AIPicker, ColorPicker, FilePicker, Tab } from '../components';



export const Customiser = () => {
    const snap = useSnapshot(state);
    const [file, setFile] = useState('');
    const [prompt, setPrompt] = useState('');
    const [generatingImg, setGeneratingImg] = useState(false);

    const [design, setDesign] = useState(null);

    const [activeEditorTab, setActiveEditorTab] = useState("");
    const [activeFilterTab, setActiveFilterTab] = useState({
        logoShirt: true,
        stylishShirt: false,
    });

    // show tab content depending on the activeTab
    const generateTabContent = () => {
        switch (activeEditorTab) {
            case "colorpicker":
                return <ColorPicker />
            case "filepicker":
                return <FilePicker
                    file={file}
                    setFile={setFile}
                    readFile={readFile}
                />

            // Es posible que no voy a usar AiPicker
            case "aipicker":
                return <AIPicker
                    prompt={prompt}
                    setPrompt={setPrompt}
                    generatingImg={generatingImg}
                    handleSubmit={handleSubmit}
                />

            default:
                return null;
        }
    }

    const handleSubmit = async (type) => {
        if (!prompt) return alert("Please enter a prompt");

        try {
            setGeneratingImg(true);//call our backend to generate an ai image

            const response = await fetch('https://t-shirt-customizer-f0m6.onrender.com/api/v1/dalle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt,
                })
            })

            const data = await response.json();

            handleDecals(type, `data:image/png;base64,${data.photo}`)
        } catch (error) {
            alert(error)
        } finally {
            setGeneratingImg(false);
            setActiveEditorTab("");
        }
    }

    const handleDecals = (type, result) => {
        const decalType = DecalTypes[type];

        state[decalType.stateProperty] = result;

        if (!activeFilterTab[decalType.filterTab]) {
            handleActiveFilterTab(decalType.filterTab)
        }
    }

    const handleActiveFilterTab = (tabName) => {
        switch (tabName) {
            case "logoShirt":
                state.isLogoTexture = !activeFilterTab[tabName];
                break;
            case "stylishShirt":
                state.isFullTexture = !activeFilterTab[tabName];
                break;
            default:
                state.isLogoTexture = true;
                state.isFullTexture = false;
                break;
        }

        setActiveFilterTab((prevState) => {
            return {
                ...prevState,
                [tabName]: !prevState[tabName]
            }
        })
    }

    const readFile = (type) => {
        reader(file)
            .then((result) => {
                handleDecals(type, result);
                setActiveEditorTab("");
            })
    }

    const saveDesignToFile = async () => {
        try {
            const canvas = document.createElement('canvas');
            // Ajusta el tamaño del lienzo según tus necesidades
            canvas.width = 1000;
            canvas.height = 800;
            const ctx = canvas.getContext('2d');

            // Dibuja tu diseño en el lienzo (aquí deberías tener lógica para dibujar tu diseño en el lienzo)

            // Convertir el lienzo a una imagen PNG
            const imgData = canvas.toDataURL('image/png');

            // Descargar la imagen
            downloadCanvasToImage(imgData, 'my_design.png');

            // Mostrar un mensaje de éxito
            alert("Your design has been saved!");
        } catch (error) {
            // Manejar cualquier error que pueda ocurrir durante el proceso de guardado
            console.error('Error saving design:', error);
            alert("An error occurred while saving your design. Please try again later.");
        }
    }

    return (
        <AnimatePresence>
            {!snap.intro && (
                <>
                    <motion.div key="custom" className="absolute top-0 left z-10" {...slideAnimation('left')}>

                        <div className="flex items-center min-h-screen">
                            <div className='editortabs-container tabs'>
                                {EditorTabs.map((tab) => (
                                    <Tab key={tab.name}
                                        tab={tab}
                                        handleClick={() => setActiveEditorTab(tab.name)} />
                                ))}
                                {generateTabContent()}
                            </div>
                        </div>


                    </motion.div>
                    {/* <motion.div className="absolute z-10 top-5 right-5" {...fadeAnimation}>



                    </motion.div> */}


                    <motion.div className="filtertabs-container" {...slideAnimation('up')}>
                        {FilterTabs.map((tab) => (
                            <Tab key={tab.name} tab={tab} isFilterTab isActiveTab={activeFilterTab[tab.name]} handleClick={() => handleActiveFilterTab(tab.name)} />
                        ))}

                    </motion.div>
                    <div className='mt-4 flex flex-wrap gap-3 mb-5'>
                        <CustomButton type="filled"
                            title="Go Back"
                            handleClick={() => state.intro = true}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm" />

                        <CustomButton type="outline"
                            title="Save Your Design"
                            handleClick={saveDesignToFile}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm" />
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}


