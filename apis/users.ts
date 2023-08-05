import { db } from '../firebase';
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";

const usersCollection = collection(db, "users")

export const getUserEmailIn = async (emailList: string[]) => {
    return getDocs(query(usersCollection, where("email", "in", emailList)))
}


interface ICreateUser {
    uid: string;
    name: string;
    email: string;
}

export const createUser = async ({ uid, name, email }: ICreateUser) => {
    return setDoc(doc(usersCollection, uid), {
        name, email, uid,
        type: 'user',
        dp: Math.floor(Math.random() * 27),
        registered: false,
        roomids: [],
        rooms: [],
        roles: []
    })
}