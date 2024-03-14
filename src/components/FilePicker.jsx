import React from 'react'

import { CustomButton } from './CustomButton'

// upload imagenes to print
export const FilePicker = ({ file, setFile, readFile }) => {
    return (
        <div className='filepicker-container'>
            <h1 className='text-center text-[12px] mb-1'>Upload your design:</h1>
            <div className='flex-1 flex flex-col'>
                <input id='file-upload'
                    type='file'
                    accept='image/*'//solo png .png
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <label htmlFor="file-upload" className='filepicker-label'>Upload File</label>

                <p className='mt-2 text-gray-500 text-xs truncate'>
                    {file === '' ? "No file selected" : file.name}
                </p>

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
    )
}

