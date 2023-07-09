import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, getDoc, doc, collection, query } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCSSIgM_OdbDqXt_Zl_uwBPNIjye5KE_dk",
    authDomain: "tatami-f2ad1.firebaseapp.com",
    projectId: "tatami-f2ad1",
    storageBucket: "tatami-f2ad1.appspot.com",
    messagingSenderId: "896115515729",
    appId: "1:896115515729:web:7bc9fe7d0ce483c5f33370"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app);

const getAll = async (resource) => {
    const querySnapshot = await getDocs(collection(db, resource));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return data
}

const find = async (resource, searchParam) => {
    const q = query(collection(db, resource), searchParam);
    
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return data
}

const getOne = async (resource, id) => {
    const docSnap = await getDoc(doc(db, resource, id));
    const data = docSnap.data()
    return {id: docSnap.id, ...data}
}

export { app, db, auth, getAll, getOne, find }