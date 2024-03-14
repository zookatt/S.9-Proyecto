import React from 'react';
import { GalleryImages } from '../config/constants';
import { CustomButton } from './CustomButton';

export const GaleryPicker = ({ onSelectImage, selectedImage, readFile }) => {


    return (
        <div className='galerypicker-container'>
            <h1 className='text-center text-[12px]'>Choose one of our designs!</h1>
            <div className="flex flex-wrap gap-3">
                <div className="grid grid-cols-3 gap-4">
                    {/* Renderizar cada imagen disponible */}
                    {GalleryImages.map((image) => (
                        <div key={image.id} className="relative">
                            <img
                                type={image}
                                src={image.src}
                                title={image.title}
                                className="cursor-pointer"
                                onClick={() => onSelectImage(image)}//esto funciona bien
                            />
                            {selectedImage && selectedImage.id === image.id && (
                                <div>
                                    <div className="absolute inset-0 flex items-center justify-center bg-transparent bg-opacity-50">
                                    </div>
                                    <p className='text-center text-[10px]'>{image.title}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className='mt-4 flex flex-wrap gap-3'>
                    <CustomButton
                        type="outline"
                        title="Logo"
                        handleClick={() => readFile('logo')}
                        customStyles="text-xs"
                    />
                    <CustomButton
                        type="filled"
                        title="Full"
                        handleClick={() => readFile('full')}
                        customStyles="text-xs"
                    />
                </div>
            </div>
        </div>
    );
};

