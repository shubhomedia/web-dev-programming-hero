import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.Init";

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

initializeAuthentication();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { authError, setauthError } = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setauthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // Save User to the Database
                saveUser(email, name);
                // Send Name To Firebase after Creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/');
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

    // Google Sign In
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setauthError('');
            }).catch((error) => {
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

    const saveUser = (email, displayName) => {

    }


    return {
        user,
        isLoading,
        authError,
        loginUser,
        registerUser,
        logout,
        signInWithGoogle,
    }
};

export default UseFirebase;