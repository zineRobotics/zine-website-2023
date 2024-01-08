import { db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  DocumentReference,
  addDoc,
  orderBy,
  limit,
  doc,
  Timestamp,
  deleteDoc,
  updateDoc,
  arrayRemove,
} from "firebase/firestore";

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

export const getRoom = async (name: string) => {
  return getDocs(
    query(
      roomsCollection,
      where("name", "==", name),
      limit(1)
    )
  );
};

export const createRoom = async (
  name: string,
  members: string[],
  type: "project" | "group"
) => {
  return addDoc(roomsCollection, {
    name,
    members,
    type,
  });
};

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

export const deleteRoomByName = async (
  roomName: string
) => {
  const raw = await getRoom(roomName);
  const room = raw.docs[0];
  await deleteDoc(room.ref);
  const members = await getDocs(
    query(
      usersCollection,
      where("roomids", "array-contains", room.id)
    )
  );
  return Promise.all(
    members.docs.map(async (m) => {
      return updateDoc(m.ref, {
        roomids: arrayRemove(room.id),
        rooms: arrayRemove(roomName),
      });
    })
  );
};
