import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';


export const AuthContext=createContext(null)

const auth =getAuth(app)


const Authprovider = ({children}) => {
    const [user,setUser]=useState(null)

    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{

        const subscribe=onAuthStateChanged(auth,currentuser=>{

            setUser(currentuser)
            setLoading(false)

        });

        return()=>{
            return subscribe
        }


    },[])



    const authInfo={
        user,
        createUser,
        signIn,
        logOut,
        loading
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default Authprovider;