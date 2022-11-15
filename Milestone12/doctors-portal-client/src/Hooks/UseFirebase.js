import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.Init";

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

initializeAuthentication();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { authError, setauthError } = useState('');

    const auth = getAuth();

    const registerUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setauthError('');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setauthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                const user = userCredential.user;
                setauthError('');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setauthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    /// Observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    const logout = () => {
        signOut(auth).then(() => {
            //Sign Out 
        }).catch((error) => {
            // An Error Happend
            setauthError(error.message);
        })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        isLoading,
        authError,
        loginUser,
        registerUser,
        logout,
    }
};

export default UseFirebase;