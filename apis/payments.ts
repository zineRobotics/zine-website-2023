import axios from "axios"
import { Timestamp, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

interface ICreateOrder {
    amount: string;
    currency: string;
    receipt: string;
    remarks: string;
    email: string;
    userid: string;
}

export interface ICreateOrderResult {
    orderid: string;
    paymentid: string;
    amount: string | number;
}

const PAYMENT_BACKEND_SERVER = "http://localhost:4000"
const paymentsCollection = collection(db, "payments")
export const createOrder = async (order: ICreateOrder) => {
    return axios.post(`${PAYMENT_BACKEND_SERVER}/create-order`, order) //as Promise<ICreateOrderResult>
}

interface IVerifyPayment {
    paymentid: string;
    orderid: string;
}

export interface IVerifyPaymentResult {
    success: boolean;
    message: string;
}

export const verifyPayment = async (payment: IVerifyPayment) => {
    return axios.post(`${PAYMENT_BACKEND_SERVER}/verify-payment`, payment)
}

export interface IDonation {
    amount: number;
    date: Date;
    userid: string;
    email: string;
    status: string;
    orderid: string;
    paymentid: string;
    remarks: string;
}

export const fetchAllDonations = async (userid: string) => {
    return getDocs(paymentsCollection)
}