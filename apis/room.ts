import { db, storage } from '../firebase';
import { deleteObject, ref } from 'firebase/storage';
import { collection, query, where, getDocs, DocumentReference, addDoc, orderBy, limit, doc, Timestamp, deleteDoc, updateDoc, arrayRemove, arrayUnion, getDoc } from "firebase/firestore";
import { IUser, addUserRoom } from './users';
import { deleteImage } from './image';

const roomsCollection = collection(db, "rooms");
const usersCollection = collection(db, "users");

export const ANNOUNCEMENT_ROOM_ID =
  "Hn9GSQnvi5zh9wabLGuT";
export const announcementRoom = doc(
  roomsCollection,
  ANNOUNCEMENT_ROOM_ID
);

export interface IMessageData {
  from: string;
  group: string;
  message: string;
  timeStamp: Timestamp;
}

export interface IRoomData{
    id: string;
    members: string[];
    name: string;
    type: "project" | "group";
    image: string
    imagepath: string
}

export interface IRoomCreateData{
    members: string[];
    name: string;
    type: "project" | "group";
    image: string
    imagepath: string
}

export const getRoom = async (name: string) => {
  return getDocs(
    query(
      roomsCollection,
      where("name", "==", name),
      limit(1)
    )
  );
};

export const fetchRooms = async () =>{
    return getDocs(roomsCollection)
}

export const createRoom = async (name: string, members: string[], type: "project" | "group", image: string, imagepath: string) => {
    return addDoc(roomsCollection, { name, members, type, image, imagepath })
}

export const editRoom = async (roomid: string, data: IRoomCreateData) => {

    const roomData = {
        ...data,
    }

    console.log(data, roomid)
    if(data.image){
        return updateDoc(doc(roomsCollection, roomid), {
            name: data.name,
            type: data.type,
            image: data.image,
            imagepath: data.imagepath
        })
    }
    else return updateDoc(doc(roomsCollection, roomid), {
        name: data.name,
        type: data.type
    })
}

export const assignRoom = async (room: IRoomData, users: IUser[]) => {
    if (!users.length) return
    const emailIDs = users.map((doc)=>doc.email)
    await Promise.all(users.map(async(u)=>{
        await updateDoc(doc(db,"users", u.uid), {
            rooms: arrayUnion(room.name),
            roomids: arrayUnion(room.id)
        })
    }))
    return updateDoc(doc(db, "rooms", room.id), {
        members: arrayUnion(...emailIDs)
    })
}

export const removeUsers = async (room: IRoomData, users: IUser[]) => {
    if (!users.length) return
    const emailIDs = users.map((doc)=>doc.email)
    await Promise.all(users.map(async(u)=>{
        await updateDoc(doc(db,"users", u.uid), {
            rooms: arrayRemove(room.name),
            roomids: arrayRemove(room.id)
        })
    }))
    return updateDoc(doc(db, "rooms", room.id), {
        members: arrayRemove(...emailIDs)
    })
}


export const getMessages = async (
  room: DocumentReference,
  descending = true,
  count = -1
) => {
  const msgCollection = collection(
    room,
    "messages"
  );
  const sorting = descending ? "desc" : "asc";

  if (count > -1)
    return getDocs(
      query(
        msgCollection,
        orderBy("timeStamp", sorting),
        limit(count)
      )
    );
  return getDocs(
    query(
      msgCollection,
      orderBy("timeStamp", sorting)
    )
  );
};

export const sendMessage = async (
  room: DocumentReference,
  message: string,
  user: any,
  replyTo: any = null
) => {
  const msgData = {
    from: user.name,
    group: room.id,
    message,
    sender_id: user.id,
    timeStamp: Timestamp.fromDate(new Date()),
    replyTo: replyTo, //repyTo: message id
  };
  console.log(msgData);

  await addDoc(
    collection(room, "messages"),
    msgData
  );
  return msgData;
};


export const deleteRoomByName = async (roomName: string) => {
    const raw = await getRoom(roomName)
    const room = raw.docs[0]
    await deleteDoc(room.ref)
    const members = await getDocs(query(usersCollection, where('roomids', 'array-contains', room.id)))
    return Promise.all(members.docs.map(async (m) => {
        return updateDoc(m.ref, { roomids: arrayRemove(room.id), rooms: arrayRemove(roomName) })
    }))
}

export const deleteRoomByID = async (roomid: string) => {
    const room = await getDoc(doc(roomsCollection, roomid))
    const roomName = room.data()?.name 

    if(room.data()?.imagepath) deleteImage(room.data()?.imagepath)

    await deleteDoc(doc(roomsCollection, roomid))
    const members = await getDocs(query(usersCollection, where('roomids', 'array-contains', roomid)))
    return Promise.all(members.docs.map(async (m) => {
        return updateDoc(m.ref, { roomids: arrayRemove(roomid), rooms: arrayRemove(roomName) })
    }))
}

