import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })

    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('insie state Change', user);
                setUser(user);
            }
        })
    }, [])

    return {
        user,
        error,
        signInUsingGoogle
    }
};

export default useFirebase;