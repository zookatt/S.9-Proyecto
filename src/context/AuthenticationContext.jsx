import React, { useState, useEffect } from "react";
import { authContext } from "./authContext";
import { auth } from "../firebase/firebase.js"
import { onAuthStateChanged } from "firebase/auth";

export const AuthenticationContext = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    const updateUserLoggedIn = (user) => {
        setUserLoggedIn(user);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, [])

    async function initializeUser(user) {
        if (user) {
            setCurrentUser({ ...user });
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    const value = {
        currentUser,
        userLoggedIn,
        loading
    }
    return (
        <div>
            <authContext.Provider value={{ userLoggedIn, updateUserLoggedIn }}>
                {children}
            </authContext.Provider >
        </div>
    )
}


