import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import { GalleryImages } from '../config/constants';

import config from '../config/config';
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { CustomButton, GaleryPicker, ColorPicker, FilePicker, Tab } from '../components';
import { Shirt } from '../canvasModel/Shirt';
import { Mug } from '../canvasModel/Mug';
//import { Mug } from '../canvasModel/Mug'
//import { Shirt } from '../canvasModel/Shirt';


export const Customiser = () => {
    const snap = useSnapshot(state);
    const [file, setFile] = useState('');
    const [image, setImage] = useState('Ring');

    const [design, setDesign] = useState(null);

    const [activeEditorTab, setActiveEditorTab] = useState("");
    const [activeFilterTab, setActiveFilterTab] = useState({
        logoShirt: true,
        stylishShirt: false,
    });

    //switch between options
    const [model, setModel] = useState('shirt');



    const [selectedImage, setSelectedImage] = useState(null);
    // Manejador para seleccionar una imagen
    const onSelectImage = (image) => {
        setSelectedImage(image);
        // Aquí puedes realizar cualquier acción adicional con la imagen seleccionada, como cargarla en otro componente, etc.
        console.log('Imagen seleccionada:', image);
    };
    // const renderModel = () => {
    //     switch (model) {
    //         case 'shirt':
    //             return <Shirt />
    //         case 'mug':
    //             return <Mug />
    //         default:
    //             return null;
    //     }

    // };

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
            case "galerypicker":
                return <GaleryPicker
                    type={file}
                    setFile={setFile}
                    selectedImage={selectedImage}
                    onSelectImage={onSelectImage}
                    readFile={readFile}
                />

            default:
                return null;
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

    // const readFile = (type) => {
    //     if (type === 'logo' || type === 'full') {
    //         // Si el tipo es 'logo' o 'full', encuentra la imagen correspondiente en GalleryImages
    //         const image = GalleryImages.find(image => image.type === type);
    //         if (image) {
    //             onSelectImage(image); // Llama a la función para seleccionar la imagen
    //         } else {
    //             console.error('Image not found in GalleryImages:', type);
    //         }
    //     } else {
    //         // Si el tipo es otro, realiza la lógica de lectura como antes
    //         reader(file)
    //             .then((result) => {
    //                 handleDecals(type, result);
    //                 setActiveEditorTab("");
    //             })
    //             .catch(error => {
    //                 console.error('Error reading file:', error);
    //             });
    //     }

    // }

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

                    {/* <div className='mt-4 flex flex-col gap-3 mb-5'>
                        <CustomButton
                            type="filled"
                            title="T-Shirt"
                            handleClick={() => renderModel('shirt')}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                        <CustomButton
                            type="filled"
                            title="Mug"
                            handleClick={() => renderModel('mug')}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </div> */}

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


