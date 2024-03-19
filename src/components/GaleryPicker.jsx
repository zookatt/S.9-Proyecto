import React from 'react';
import { GalleryImages } from '../config/constants';
import { CustomButton } from './CustomButton';

export const GaleryPicker = ({ handleSubmit, selectedImage, readFile, onSelectImage }) => {


    return (
        <div className='galerypicker-container'>
            <h1 className='text-center text-[12px] mb-1'>Choose one of our designs!</h1>
            <div className="flex flex-wrap gap-3">
                < div className="grid grid-cols-3 gap-4">
                    {/* Renderizar cada imagen disponible */}
                    {GalleryImages.map((image) => (
                        <button onChange={(e) => onSelectImage(image)}> <img
                            key={image.id}
                            src={image.src}
                            title={image.title}
                            className={`gallery-image ${selectedImage === image ? 'selected' : ''}`}

                        /></button>

                    ))}
                </div>
                <p className='mt-2 text-gray-500 text-xs truncate'>
                    {selectedImage ? selectedImage.title : "No image selected"}
                </p>

                <div className='mt-4 flex flex-wrap gap-3'>
                    <CustomButton
                        type="outline"
                        title="Logo"
                        handleClick={() => handleSubmit('logo')}
                        customStyles="text-xs"
                    />
                    <CustomButton
                        type="filled"
                        title="Full"
                        handleClick={() => handleSubmit('full')}
                        customStyles="text-xs"
                    />
                </div>
            </div>
        </div >

    );
};

