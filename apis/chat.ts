import axios from "axios";
import { db } from '../firebase';
import { addDoc, collection } from "firebase/firestore";


const apiURL = "https://positively-primary-stallion.ngrok-free.app"
export const askChatBot = (prompt: string) => {
    return axios.post(apiURL, null, { params: {ques: prompt}})
}

const chatCollection = collection(db, 'chatbot')
export const reportIncorrectResponse = async (question: string, response: string, flag: boolean) => {
    // console.log("Q", question)
    return addDoc(chatCollection, {
        question,
        response,
        flag
    })
}