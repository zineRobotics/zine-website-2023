import { db, storage } from "../firebase";
import { deleteObject, ref } from "firebase/storage";
import { collection, query, where, getDocs, DocumentReference, addDoc, orderBy, limit, doc, Timestamp, deleteDoc, updateDoc, arrayRemove, arrayUnion, getDoc } from "firebase/firestore";
// import { IUser, addUserRoom } from "./users";
import { deleteImage } from "./image";
import axios from "../api/axios";

export const roomsCollection = collection(db, "rooms");
const usersCollection = collection(db, "users");

export const ANNOUNCEMENT_ROOM_ID = "Hn9GSQnvi5zh9wabLGuT";
export const announcementRoom = doc(roomsCollection, ANNOUNCEMENT_ROOM_ID);

const roomURL = "/rooms";
const memberURL = "/members";

export interface IMessageCreateData {
  type: string;
  content: string;
  contentUrl: string | null;
  sentFrom: Number | undefined;
  roomId: number | undefined;
  replyTo: number | null;
}

export interface IRoomData {
  id: number;
  name: string;
  description: string;
  type: "project" | "group";
  dpUrl: string;
  timestamp: Number[];
}

export interface IRoomCreateData {
  name: string;
  type: "project" | "group";
  description: string;
  dpUrl: string;
}
export interface IMessageData {
  id: number;
  type: string;
  content: string;
  contentUrl: string;
  timeStamp: number;
  sentFrom: {
    id: number;
    name: string;
  };
  roomId: number;
  replyTo: number;
}
export interface IMembersList {
  room: Number;
  members: IMembers[];
}

export interface IMembers {
  userEmail: string;
  role: string;
}
export const createRoom = async (roomData: IRoomCreateData) => {
  axios
    .post(roomURL + "/create", roomData)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getRoom = async (roomID: Number) => {
  axios
    .get(roomURL + "/get?roomId=" + roomID)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editRoom = async (roomid: string, data: IRoomCreateData) => {
  axios
    .post(roomURL + "/update?roomId=" + roomid, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteRoomByID = async (roomIDList: Number[]) => {
  axios
    .post(roomURL + "/delete", roomIDList)
    .then((res) => {
      res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchRoomsByUser = async (email: string) => {
  const response = await axios.get(roomURL + "/user?email=" + email);
  return response.data;
};

export const assignRoom = async (memList: IMembersList[]) => {
  if (!memList.length) return;
  axios
    .post(memberURL + "/add", memList)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// export const removeUsers = async (room: IRoomData, users: IUser[]) => {
//   if (!users.length) return;
//   const emailIDs = users.map((doc) => doc.email);
//   await Promise.all(
//     users.map(async (u) => {
//       await updateDoc(doc(db, "users", u.uid), {
//         rooms: arrayRemove(room.name),
//         roomids: arrayRemove(room.id),
//       });
//     })
//   );
//   return updateDoc(doc(db, "rooms", room.id), {
//     members: arrayRemove(...emailIDs),
//   });
// };

export const getMessages = async (room: DocumentReference, descending = true, count = -1) => {
  const msgCollection = collection(room, "messages");
  const sorting = descending ? "desc" : "asc";

  if (count > -1) return getDocs(query(msgCollection, orderBy("timeStamp", sorting), limit(count)));
  return getDocs(query(msgCollection, orderBy("timeStamp", sorting)));
};

export const sendMessage = async (msgBody: IMessageCreateData) => {
  axios
    .post("/messages/http-msg", msgBody)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchRoomMessages = async (roomID: number): Promise<IMessageData[]> => {
  try {
    const response = await axios.get("/messages/roomMsg", {
      params: {
        roomId: roomID,
      },
    });
    return response.data as IMessageData[];
  } catch (error) {
    console.error("Error fetching room messages:", error);
    return [];
  }
};

// export const deleteRoomByName = async (roomName: string) => {
//   const raw = await getRoom(roomName);
//   const room = raw.docs[0];
//   await deleteDoc(room.ref);
//   const members = await getDocs(query(usersCollection, where("roomids", "array-contains", room.id)));
//   return Promise.all(
//     members.docs.map(async (m) => {
//       return updateDoc(m.ref, { roomids: arrayRemove(room.id), rooms: arrayRemove(roomName) });
//     })
//   );
// };
