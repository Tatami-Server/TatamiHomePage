import { db, storage } from '@lib/firebase';
import { firestoreTimestampFormat } from '@util/DateFormatter';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc, writeBatch, query, where, orderBy, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 as uuidv4 } from "uuid";

const dataProvider = {
    getList: async (resource, params) => {
        let dbQuery = collection(db, resource)

        if (params.filter && !params.filter === {}) {
            for (let field in params.filter) {
                const [ operator, value ] = params.filter[field]
                dbQuery = query(dbQuery, where(field, operator, value))
            }
        }

        if(params.sort.field !== 'id') {
            const { field, order } = params.sort
            dbQuery = query(dbQuery, orderBy(field, order.toLowerCase()))
        }
        else {
            dbQuery = query(dbQuery, orderBy('updatedAt', 'desc'))
        }
        
        const querySnapshot = await getDocs(dbQuery);
        const data = querySnapshot.docs.map(doc => {
            let docData = doc.data()
            docData = firestoreTimestampFormat(docData)
            return { id: doc.id, ...docData }
        })
        const { perPage, page } = params.pagination
        const start = (page - 1) * perPage
        const end = (page * perPage) - 1
        const pagination = data.slice(start, end)

        return { data: pagination, total: data.length };
    },
    getOne: async (resource, params) => {
        const docSnap = await getDoc(doc(db, resource, params.id));
        let data = { id: docSnap.id, ...docSnap.data() };
        data = firestoreTimestampFormat(data)
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
    create: async (resource, { data }) => {
        data = await uploadImages(resource, data)
        data = {
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            ...data, 
        }
        data = filterForDoc(data)
        const { id } = await addDoc(collection(db, resource), data);
        await updateDoc(doc(db, resource, id), { id });
        return { data: { id, ...data} };
    },
    update: async (resource, { id, data }) => {
        data = await uploadImages(resource, data)
        data = {
            updatedAt: serverTimestamp(),
            ...data, 
        }
        data = filterForDoc(data)
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
        if (data[key]?.hasOwnProperty('rawFile')) {
            const file = data[key].rawFile

            data[key] = {
                src: await dataProvider.uploadToStorage(resource, file) || '',
                ...await getImageDimensions(file)
            }
        }
    }))
    return data
}

const  getImageDimensions = (file) => {
    return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = function() {
        const width = this.width;
        const height = this.height;
        URL.revokeObjectURL(img.src);  // 一時的なURLを解放
        resolve({ width, height });
    };

    img.onerror = function() {
        reject(new Error("Failed to load image"));
    };

    img.src = URL.createObjectURL(file);
    });
}

const filterForDoc = (obj) => {
    for (const v in obj) {
        if (obj[v] === undefined) {
            delete obj[v];
        }
    }
    return obj
}

export default dataProvider;
