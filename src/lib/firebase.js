import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, getDoc, doc, collection, query, orderBy } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { firestoreTimestampFormat, formatDate } from '@util/DateFormatter';

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
const storage = getStorage(app)
const auth = getAuth(app);

const getAll = async (resource, params) => {
    let dbQuery = collection(db, resource)

    if(params?.sort) {
        const { field, order } = params.sort
        dbQuery = query(dbQuery, orderBy(field, order))
    }
    const querySnapshot = await getDocs(dbQuery);
    const data = querySnapshot.docs.map(doc => {
        let docData = doc.data()
        docData = firestoreTimestampFormat(docData, true)
        return { id: doc.id, ...docData }
    })
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
    let data = docSnap.data()
    data = firestoreTimestampFormat(data, true)
    return {id: docSnap.id, ...data}
}

export { app, db, auth, storage, getAll, getOne, find }