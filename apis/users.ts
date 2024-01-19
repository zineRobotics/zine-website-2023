import { db } from "../firebase";
import {
  DocumentReference,
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

const usersCollection = collection(db, "users");
export interface IUser {
  name: string;
  email: string;
  type: "user" | "admin" | "alumni";
  uid: string;
  roomids: any;
}

export const getUser = async (email: string) => {
  return getDocs(
    query(
      usersCollection,
      where("email", "==", email)
    )
  );
};

export const getUserEmailIn = async (
  emailList: string[]
) => {
  return getDocs(
    query(
      usersCollection,
      where("email", "in", emailList)
    )
  );
};

interface ICreateUser {
  uid: string;
  name: string;
  email: string;
}

export const createUser = async ({
  uid,
  name,
  email,
}: ICreateUser) => {
  const roles = [];
  if (
    email.endsWith("@mnit.ac.in") ||
    email.endsWith("@iiitkota.ac.in")
  )
    roles.push("mnit");
  return setDoc(doc(usersCollection, uid), {
    name,
    email,
    uid,
    type: "user",
    dp: Math.floor(Math.random() * 27),
    registered: false,
    roomids: ["52vnFJ9cxVALugPY4BiF",
      "qLrEBufSFtNuy6AKivgc",
      "epPlq8YRBHXdK0Fo8gwa",
    "gAbWhESbn0aNTIYjiyG6",
    "uGvjwISYpVQAIhjKLzot",
    "u4MsUCWoGfh87G5KOpLD",
    "ZLu0q9BhvvoithpQTbbZ",
    "rz4qKqWeaP0u6s0h8ZZK",
    "zGZeEnyF0K7WdaT0euZn"
  ],
    rooms: ["Aptitude Test",
      "BME",
      "BEE",
    "Aeromodelling",
    "ALGO",
    "Machine Learning",
    "OpenCV",
    "IC/MCU",
    "IOT"
  ],
    roles: [],
  });
};

export const addUserRoom = async (
  user: IUser,
  roomnames: string[],
  roomids: string[]
) => {
  console.log(roomnames, roomids);
  await Promise.all(
    roomids.map(async (id) => {
      await updateDoc(doc(db, "rooms", id), {
        members: arrayUnion(user.email),
      });
    })
  );
  return updateDoc(
    doc(usersCollection, user.uid),
    {
      rooms: arrayUnion(...roomnames),
      roomids: arrayUnion(...roomids),
    }
  );
};
