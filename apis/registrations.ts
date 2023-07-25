import { db } from '../firebase';
import { collection, addDoc, getDocs, DocumentReference } from "firebase/firestore";

const regCollection = collection(db, "registrations")
interface IRegisteredUsers {
    id: DocumentReference;
    email: string;
    gender: "male" | "female" | "N/A";
    branch: string;
    name: string;
    platform: "ios" | "android" | "N/A";
    college: string;
    phone: string;
}

export const getRegistrations = async () => {
    let result = await getDocs(regCollection)
    const registered: IRegisteredUsers[] = result.docs.map(d => ({id: d.ref, ...d.data()} as IRegisteredUsers))
    return registered
}


const addRegistration = async () => {

}