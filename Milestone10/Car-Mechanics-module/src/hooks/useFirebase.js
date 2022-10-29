import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [users, setUser] = useState;

    const auth = getAuth();
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            });
    }
    useEffect(() => {
        const unsubscibed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unsubscibed;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
    }
    return {
        users,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;
