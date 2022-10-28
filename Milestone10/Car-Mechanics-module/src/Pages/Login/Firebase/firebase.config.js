const firebaseConfig = {
    apiKey: ProcessingInstruction.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: ProcessingInstruction.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: ProcessingInstruction.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: ProcessingInstruction.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: ProcessingInstruction.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
    appId: ProcessingInstruction.env.REACT_APP_FIREBASE_APP_ID
};

export default firebaseConfig