import React, { useEffect, useState } from 'react';

import { useContext } from "react";
import { authContext } from "../context/authContext";
import canvasfakeUser from '../canvas.json';
export const UserLogged = () => {

    const { userLoggedIn } = useContext(authContext);
    const [userCanvas, setUserCanvas] = useState([]); // Define el estado "customers" usando useState


    useEffect(() => {
        setUserCanvas(canvasfakeUser); // Establece los datos del cliente utilizando el JSON importado
    }, []);
    return (
        <div>
            <h1 className='sm:text-5xl text-2xl text-start font-bold mb-3 flex'>Welcome, {userLoggedIn.email}</h1>
            <div class="bg-white  shadow overflow-hidden sm:rounded-lg">
                <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        User database
                    </h3>
                    <p class="mt-1  text-sm text-gray-500">
                        Details and information about user.
                    </p>
                </div>
                <div class="border-t border-gray-200">
                    <dl className='flex flex-col sm:flex-row'>

                        <div className="bg-white sm:px-6 sm:py-5 px-4 py-5  sm:w-1/2">
                            <dt className="text-sm font-medium text-gray-500">
                                Email address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {userLoggedIn.email}
                            </dd>
                        </div>

                        <div className="bg-gray-50 px-4 py-5 sm:w-1/2">
                            <dt className="text-sm font-medium text-gray-500">
                                Password
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                * * * * * *
                            </dd>
                        </div>

                    </dl>
                </div>
            </div>
            <div class="bg-white  shadow overflow-hidden sm:rounded-lg mt-5">
                <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        My designs
                    </h3>
                    <p class="mt-1  text-sm text-gray-500">
                        Designes made by me
                    </p>
                    <div className="flex flex-wrap justify-center">
                        {userCanvas
                            .sort(() => Math.random() - 0.5) // Ordenar aleatoriamente la matriz
                            .slice(0, Math.floor(Math.random() * userCanvas.length) + 1)
                            .map((userCanva, index) => (
                                <div key={index} className="flex sm:w-1/3 w-full py-4 justify-center">
                                    <img src={userCanva.img} />
                                </div>
                            ))}
                    </div>

                </div>
            </div>
        </div>
    )
}


