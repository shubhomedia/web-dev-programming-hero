import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const initailizeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initailizeAuthentication;