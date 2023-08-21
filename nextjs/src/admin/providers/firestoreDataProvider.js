import { db } from '../../lib/firebase';

import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc, writeBatch, query, where, orderBy } from 'firebase/firestore';


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
    create: async (resource, params) => {
        const docRef = await addDoc(collection(db, resource), params.data);
        const data = { id: docRef.id, ...params.data };
        await updateDoc(doc(db, resource, data.id), data);
        return { data };
    },
    update: async (resource, params) => {
        await updateDoc(doc(db, resource, params.id), params.data);
        const data = { id: params.id, ...params.data };
        return { data };
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
};

export default dataProvider;