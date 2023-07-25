import { db } from '../firebase';
import { collection, getDocs, query, where } from "firebase/firestore";

const usersCollection = collection(db, "users")

export const getUserEmailIn = async (emailList: string[]) => {
    return getDocs(query(usersCollection, where("email", "in", emailList)))
}