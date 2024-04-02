import React, { useState } from 'react';
import torinologo from '../assets/images/torinologo.webp'
import user from "../assets/images/user.png";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { authContext } from "../context/authContext";
import { doSignOut } from "../firebase/auth";

export const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useContext(authContext);

    const [isCollapsed, setIsCollapsed] = useState(true);


    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };



    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-gray-800">
            <nav className="max-w-[90rem] w-full mx-auto  flex flex-wrap basis-full items-center justify-between" aria-label="Global">
                <Link to="/" className="sm:order-1 flex-none text-xl font-semibold dark:text-white self-start">
                    <img src={torinologo} alt="Logo" style={{ width: '100px', height: '100px' }} />
                </Link>
                <div className="sm:order-3 flex items-center gap-x-2">
                    <button type="button" className="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={toggleCollapse} aria-controls="navbar-alignment" aria-label="Toggle navigation">
                        <svg className={isCollapsed ? "hs-collapse-open:hidden flex-shrink-0 size-4" : "hs-collapse-open:block hidden flex-shrink-0 size-4"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" stroke="#E8D20E" /><line x1="3" x2="21" y1="12" y2="12" stroke="#D71987" /><line x1="3" x2="21" y1="18" y2="18" stroke="#0B4E9C" /></svg>
                    </button>
                    {userLoggedIn ? (
                        <>
                            <div className='flex gap-2'>
                                <div className="nav-item">
                                    <Link to='/user'><span className="nav-link mx-2 flex "><img src={user} alt="user" className='me-3' style={{ width: "20px" }} />My profile</span></Link>
                                </div>
                                <div className="nav-item">
                                    <button onClick={() => { doSignOut().then(() => { navigate('/') }) }} className='nav-link hover:text-SuperPink'>LOG OUT</button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to="/login"><button type="button" className="py-2 px-4 inline-flex items-center hover:text-white gap-x-2 text-sm font-bold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-DarkBlue disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                Log In
                            </button></Link>
                            <Link to="/signup"><button type="button" className="py-2 px-3 inline-flex items-center hover:text-white gap-x-2 text-sm font-bold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-SuperPink disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                Sign Up
                            </button></Link>
                        </>
                    )}

                </div>
                <div id="navbar-alignment" className={isCollapsed ? "hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2" : "hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"}>
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
                        <Link to="/" className="font-bold text-gray-800 hover:text-DarkBlue dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-current="page">HOME</Link>
                        <Link to="/about" className="font-bold text-gray-800 hover:text-DarkBlue dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">ABOUT</Link>
                        <Link to="/design" className="font-bold text-gray-800 hover:text-DarkBlue dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">DESIGN NOW</Link>
                        <Link to="/products" className="font-bold text-gray-800 hover:text-DarkBlue dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">PRODUCTS</Link>
                        <Link to="/contact" className="font-bold text-gray-800 hover:text-DarkBlue dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">CONTACT</Link>
                    </div>

                </div>
            </nav>
        </header>
    );
}



