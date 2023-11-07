/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";



export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currenUser => {
            setUser(currenUser)
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])
    const authInfo = {
        createUser,
        user,
        loading,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;