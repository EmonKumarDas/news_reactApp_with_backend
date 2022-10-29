import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firbaseAuth/FirebaseAuth';

// creat context
export const userContext = createContext();

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const [User,setUser] = useState("")

    // Google SignIn
    const GoogleSignIn =()=> signInWithPopup(auth,provider);

    // signIn with Email and password
    const SingInWithForm=(email,password)=>createUserWithEmailAndPassword(auth,email,password);

    // LogIn with Email and password
    const LogInWithForm =(email,password)=>signInWithEmailAndPassword(auth,email,password);

    // LogOut
    const LogOut =()=>signOut(auth);

    //user observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(CurrentUser)=>{
            setUser(CurrentUser);
        })
        return unsubscribe;
    },[])

    const authInfo={GoogleSignIn,User,LogOut,SingInWithForm,LogInWithForm}

    return (
        <userContext.Provider value = {authInfo}>
            {children}
        </userContext.Provider>
    );
};

export default AuthProvider;