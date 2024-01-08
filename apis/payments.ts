import axios from "axios"

interface ICreateOrder {
    amount: string;
    // currency: string;
    // receipt: string;
    remark: string;
    email: string;
    currency: string;

}

const PAYMENT_BACKEND_SERVER = "http://zinedocker.onrender.com/api"
// const PAYMENT_BACKEND_SERVER = "http://localhost:8080/api"

export const createOrder = async (order: ICreateOrder) => {
    return axios.post(`${PAYMENT_BACKEND_SERVER}/create-order`, order)
}

interface IVerifyPayment {
    paymentId: string;
    orderId: string;
    signature: string;
}

export const verifyPayment = async (payment: IVerifyPayment) => {
    return axios.post(`${PAYMENT_BACKEND_SERVER}/verify-payment`, payment)
}

export interface IDonation {
    id: number;
    amount: number;
    timestamp: number;
    email: string;
    status: string;
    type: string;
    remarks: string;
    orderId: string;
}

export const fetchAllDonations = async () => {
    return axios.get(`${PAYMENT_BACKEND_SERVER}/get-donations`)
}