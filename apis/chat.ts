import axios from "axios";

const apiURL = "https://positively-primary-stallion.ngrok-free.app"
export const askChatBot = (prompt: string) => {
    return axios.post(apiURL, null, { params: {ques: prompt}})
}