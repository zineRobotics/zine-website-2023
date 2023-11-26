import React, { useEffect, useState } from "react";
import SideNav from "../sidenav";
import ProtectedRoute from "./ProtectedRoute";
import { useForm } from "react-hook-form";
import useRazorpay from "react-razorpay";
import { useAuth } from "../../../context/authContext";
import { ICreateOrderResult, IDonation, IVerifyPaymentResult, createOrder, fetchAllDonations, verifyPayment } from "../../../apis/payments";
import { ToastContainer, toast } from "react-toastify";
import styles from "../../../constants/styles";

const MAX_TRANSACTION_LIMIT = 500000
interface IDonateForm {
    remarks: string;
    amount: number;
    currency: string;
    projectName?: string;
}

const Donate = () => {
    const [donations, setDonations] = useState<IDonation[]>([])
    const { register, reset, formState: { errors }, handleSubmit } = useForm<IDonateForm>()
    const currencies = ["INR"]
    const projectNames: string[] = []

    const [Razorpay] = useRazorpay();
    const { authUser } = useAuth()

    const onSubmit = async (data: IDonateForm) => {
        let { amount, currency, remarks } = data
        amount = Math.floor(amount * 100)
        createOrder({
            amount: amount.toString(),
            currency,
            remarks,
            receipt: "ZINE Donation",
            email: authUser!.email,
            userid: authUser!.uid
        }).then(order => {
            const data = order.data as ICreateOrderResult
            const rzpay = new Razorpay({
                key: process.env.REACT_APP_RAZORPAY_ID as string,
                amount: amount.toString(),
                currency: currency,
                order_id: data.orderid,
                name: "ZINE",
                description: remarks,
                theme: {
                    color: "#0C72B0"
                },
                prefill: {
                    name: authUser!.name,
                    email: authUser!.email,
                },
                handler: async (response) => {
                    console.log(response)
                    const result = await verifyPayment({ orderid: data.orderid, paymentid: data.paymentid })
                    const resdata = result.data as IVerifyPaymentResult
                    if (resdata.success) toast.success(resdata.message)
                    else toast.error(resdata.message)
                },
                modal: {
                    ondismiss: () => toast.info("Payment Cancelled")
                },
            })

            rzpay.on("payment.failed", () => {
                toast.error("Payment Failed")
            })
            rzpay.on("payment.ondismiss", () => {
                toast.info('Payment Cacelled')
            });

            rzpay.open()
        }).catch(err => {
            toast.error(err)
        })
    }

    useEffect(() => {
        fetchAllDonations(authUser!.uid).then(res => {
            setDonations(res.docs.map(d => {
                const data = d.data()
                return { ...data, date: new Date(data.date.seconds * 1000) } as IDonation
            }))
        })
    }, [])


    return (
        <ProtectedRoute>
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="grid grid-cols-12 h-screen" style={{ background: "#EFEFEF" }}>
                <div className="col-span-9 px-12 flex flex-col">
                    <h1 className="text-4xl font-bold mt-8" style={{ color: "#AAAAAA" }}>Donate</h1>
                    <div className="row-span-5 bg-white rounded-xl py-4 px-6 my-8 w-full">
                        <h1 className="text-2xl font-bold" style={styles.textPrimary}>Make A Donation</h1>
                        <div className="grid grid-cols-5 gap-6 mt-4">
                            <div className="col-span-3">
                                <label className="block text-gray-600 text-sm">Amount<span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <span className="absolute top-2">₹</span>
                                    <input type="number" id="amount" className="block w-full focus:outline-none bottom-border pt-2 ml-4" placeholder="0.00" {...register("amount", { required: true, valueAsNumber: true, max: MAX_TRANSACTION_LIMIT, min: 1 })} />
                                </div>
                                {errors.amount && <p className="text-red-500 text-sm" role="alert">Amount is required</p>}
                            </div>
                            <div className="col-span-2">
                                <label className="block text-gray-600 text-sm">Project Name</label>
                                <select id="projectName" className="block w-full focus:outline-none bottom-border pt-2" {...register("projectName")}>
                                    {
                                        projectNames.map(project => (
                                            <option key={project}>{project}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            {/* <div className="col-span-2">
                                <label className="block text-gray-600 text-sm">Currency</label>
                                <select id="projectName" className="block w-full focus:outline-none bottom-border pt-2" {...register("currency")}>
                                    {
                                        currencies.map(project => (
                                            <option key={project}>{project}</option>
                                        ))
                                    }
                                </select>
                            </div> */}
                            <div className="col-span-5">
                                <label className="block text-gray-600 text-sm">Remarks / Comments<span className="text-red-500">*</span></label>
                                <textarea id="remarks" className="block w-full focus:outline-none bottom-border pt-2" rows={1} {...register("remarks", { required: true })}></textarea>
                                {errors.remarks && <p className="text-red-500 text-sm" role="alert">Remarks is required</p>}
                            </div>
                        </div>
                        <button className="p-3 block w-40 rounded-3xl text-white mt-8" style={{ background: "#0C72B0" }} onClick={handleSubmit(onSubmit)}>Donate</button>
                    </div>

                    <div className="bg-white py-4 px-6 mb-8 rounded-xl">
                        <h1 className="text-2xl font-bold" style={styles.textPrimary}>Donations Made</h1>
                        <div className="flex flex-col">
                            {
                                donations.map(d => (
                                    <div>
                                        [{d.date.toLocaleDateString('en-CA')}] {d.amount}₹ donated by {d.email}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <SideNav />
            </div>
        </ProtectedRoute>
    )
}

export default Donate;