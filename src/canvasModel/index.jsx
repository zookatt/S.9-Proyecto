import { useState } from 'react';

import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
//import { Mug } from './Mug'
import { Shirt } from './Shirt';
import { CameraRig } from './CameraRig';
import { Backdrop } from './Backdrop';
import { CustomButton } from '../components/CustomButton';

export const CanvasModel = () => {
    // const [model, setModel] = useState('shirt');

    // const handleClick = (modelName) => {
    //     console.log("Clicked:", modelName);
    //     setModel(modelName);
    // };



    return (
        <>
            {/* <div className='mt-4 flex flex-col gap-3 mb-5'>
                <CustomButton
                    type="filled"
                    title="Shirt"
                    handleClick={() => handleClick('shirt')}
                    customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                />
                <CustomButton
                    type="filled"
                    title="Mug"
                    handleClick={() => handleClick('mug')}
                    customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                />
            </div> */}

            <Canvas shadows camera={{ position: [0, 0, 0], fov: 25 }} gl={{ preserveDrawingBuffer: true }} className='w-full max-w-full transition-all ease-in'>
                <ambientLight intensity={0.5} />
                <Environment preset="city" />

                <CameraRig>
                    <Backdrop />
                    <Center>
                        {/* Renderiza el componente seleccionado por el usuario */}
                        {/* {model === 'shirt' ? <Shirt /> : <Mug />} */}
                        {/* <Mug /> */}
                        <Shirt />
                    </Center>
                </CameraRig>
            </Canvas>
        </>
    );
}


