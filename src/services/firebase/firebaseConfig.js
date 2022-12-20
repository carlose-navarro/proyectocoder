import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC8Te_0wNy4frq3q4Q0w3sZshucTReDksU",
    authDomain: "ecommerce-naga.firebaseapp.com",
    projectId: "ecommerce-naga",
    storageBucket: "ecommerce-naga.appspot.com",
    messagingSenderId: "237980492067",
    appId: "1:237980492067:web:91344b788bf0706062ac96"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)