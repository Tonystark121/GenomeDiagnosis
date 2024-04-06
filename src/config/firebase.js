import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAHMOPKSl0udCVCqla4XiAxlC3_sROual8",
    authDomain: "genome-diagnosis.firebaseapp.com",
    projectId: "genome-diagnosis",
    storageBucket: "genome-diagnosis.appspot.com",
    messagingSenderId: "351235629787",
    appId: "1:351235629787:web:7ab948ff1d65645a40a2fe"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const imagedb = getStorage(app);