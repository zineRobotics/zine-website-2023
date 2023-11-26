import { db } from '../firebase';
import { collection, query, where, getDocs, DocumentReference, addDoc, orderBy, limit, doc, Timestamp, deleteDoc } from "firebase/firestore";


const roomsCollection = collection(db, "rooms")

export const ANNOUNCEMENT_ROOM_ID = "Hn9GSQnvi5zh9wabLGuT"
export const announcementRoom  = doc(roomsCollection, ANNOUNCEMENT_ROOM_ID)

export const getRoom = async (name: string) => {
    return getDocs(query(roomsCollection, where("name", "==", name)))
}

export const createRoom = async (name: string, members: DocumentReference[]) => {
    return addDoc(roomsCollection, { name, members })
}

export const getMessages = async (room: DocumentReference, descending=true, count=-1) => {
    const msgCollection = collection(room, 'messages')
    const sorting = descending ? 'desc' : 'asc'

    if (count > -1) return getDocs(query(msgCollection, orderBy("timeStamp", sorting), limit(count)))
    return getDocs(query(msgCollection, orderBy("timeStamp", sorting)))
}

export const sendMessage = async (room: DocumentReference, message: string, user: any) => {
    const msgData = {
        from: user.name,
        group: room.id,
        message,
        sender_id: user.id,
        timeStamp: Timestamp.fromDate(new Date())
    }

    await addDoc(collection(room, 'messages'), msgData)
    return msgData
}

export const deleteRoom = async (roomid: string) => {
    return deleteDoc(doc(roomsCollection, roomid))   
}