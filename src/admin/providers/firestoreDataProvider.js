import { db, storage } from '@lib/firebase';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc, writeBatch, query, where, orderBy } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 as uuidv4 } from "uuid";

const dataProvider = {
    getList: async (resource, params) => {
        let dbQuery = collection(db, resource)

        if (params.filter) {
            for (let field in params.filter) {
                const [ operator, value ] = params.filter[field]
                dbQuery = query(dbQuery, where(field, operator, value))
            }
        }

        if(params.sort) {
            const { field, order } = params.sort
            dbQuery = query(dbQuery, orderBy(field, order.toLowerCase()))
        }

        const querySnapshot = await getDocs(dbQuery);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return { data, total: data.length };
    },
    getOne: async (resource, params) => {
        const docSnap = await getDoc(doc(db, resource, params.id));
        const data = { id: docSnap.id, ...docSnap.data() };
        return { data };
    },
    getMany: async (resource, params) => {
        const data = [];
        for (const id of params.ids) {
            const docSnap = await getDoc(doc(db, resource, id));
            data.push({ id: docSnap.id, ...docSnap.data() });
        }
        return { data };
    },
    getManyReference: async (resource, params) => {
        const querySnapshot = await getDocs(collection(db, resource).where(params.target, '==', params.id));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return { data, total: data.length };
    },
    create: async (resource, { id, data }) => {
        data = await uploadImages(resource, data)
        const docRef = await addDoc(collection(db, resource), data);
        const docData = { id: docRef.id, ...data };
        await updateDoc(doc(db, resource, id), docData);
        return { data: docData };
    },
    update: async (resource, { id, data }) => {
        data = await uploadImages(resource, data)
        await updateDoc(doc(db, resource, id), data);
        const docData = { id, ...data };
        return { data: docData };
    },
    updateMany: async (resource, params) => {
        const batch = writeBatch(db);
        for (const id of params.ids) {
            const docRef = doc(db, resource, id);
            batch.update(docRef, params.data);
        }
        await batch.commit();
        return { data: params.ids };
    },
    delete: async (resource, params) => {
        await deleteDoc(doc(db, resource, params.id));
        return { data: params.previousData };
    },
    deleteMany: async (resource, params) => {
        const batch = writeBatch(db);
        for (const id of params.ids) {
            const docRef = doc(db, resource, id);
            batch.delete(docRef);
        }
        await batch.commit();
        return { data: params.ids };
    },
    uploadToStorage: async (resource, file) => {
        const id = uuidv4()
        const storageRef = ref(storage, `${resource}/${id}`)
        await uploadBytes(storageRef, file)
        return getDownloadURL(storageRef)
    } 
};


const uploadImages = async (resource, data) => {
    await Promise.all(Object.keys(data).map(async key => {
        if (data[key].hasOwnProperty('rawFile')) {
            data[key].src = await dataProvider.uploadToStorage(resource, data[key].rawFile)
            delete data[key].rawFile
        }
    }))
    return data
}

export default dataProvider;
