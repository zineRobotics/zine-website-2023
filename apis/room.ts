import { db } from '../firebase';
import { collection, query, where, getDocs, DocumentReference, addDoc } from "firebase/firestore";

const roomsCollection = collection(db, "rooms")

export const getRoom = async (name: string) => {
    return getDocs(query(roomsCollection, where("name", "==", name)))
}

export const createRoom = async (name: string, members: DocumentReference[]) => {
    return addDoc(roomsCollection, { name, members })
}