import React from "react";import { useForm } from "react-hook-form";
import { db } from '../../firebase';
import { collection, doc, arrayUnion, arrayRemove, updateDoc } from "firebase/firestore";
import SideNav from "./sidenav";
import styles from "./styles";

interface IUserChannel {
    email: string;
    channel: string;
}

const AddUser = () => {
    const {register, handleSubmit} = useForm<IUserChannel>()
    const usersCollection = collection(db, "users")
    const onSubmit = (data: IUserChannel) => {
        console.log(data)
    }

    return (
        <div className=" bg-white rounded-xl py-4 px-6 w-full relative">
            <h1 className="text-2xl font-bold" style={styles.textPrimary}>Add user to channel</h1>
            <form>
                <div className="mt-4">
                    <label className="block text-gray-600 text-sm">Email Address</label>
                    <input type="email" id="email" className="block w-full focus:outline-none bottom-border pt-2" placeholder="xyz@mnit.ac.in" {...register('email', {required: true})} />
                </div>
                <div className="mt-4">
                    <label className="block text-gray-600 text-sm">Channel Name</label>
                    <input type="name" id="name" className="block w-full focus:outline-none bottom-border pt-2" {...register('channel', {required: true})} />
                </div>
            </form>

            <button className="p-3 block w-40 rounded-3xl text-white absolute bottom-5" style={{background: "#0C72B0"}} onClick={handleSubmit(onSubmit)}>Add</button>
        </div>
    )
}

const RemoveUser = () => {
    const {register, handleSubmit} = useForm<IUserChannel>()
    const usersCollection = collection(db, "users")
    const onSubmit = (data: IUserChannel) => {
        updateDoc(doc(db, data.email), {
            rooms: arrayRemove(data.channel)
        })
    }

    return (
        <div className=" bg-white rounded-xl pt-4 px-6 relative">
            <h1 className="text-2xl font-bold" style={styles.textGray}>Remove user from channel</h1>
            <div className="mt-4">
                <label className="block text-gray-600 text-sm" style={styles.textGray}>Email Address</label>
                <input type="email" id="email" className="block w-full focus:outline-none bottom-border pt-2" placeholder="xyz@abc.com" {...register('email', {required: true})} />
            </div>
            <div className="mt-4">
                <label className="block text-gray-600 text-sm" style={styles.textGray}>Channel Name</label>
                <input type="name" id="name" className="block w-full focus:outline-none bottom-border pt-2" {...register('channel', {required: true})} />
            </div>
            <button className="p-3 block w-40 rounded-3xl text-white absolute bottom-5" style={{background: "#8D989F"}} onClick={handleSubmit(onSubmit)}>Remove</button>
        </div>
    )
}

const Users = () => {

    return (
        <div className="grid grid-cols-12 h-screen" style={{background: "#EFEFEF"}}>
            <div className="col-span-9 px-12 flex flex-col">
                <h1 className="text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>Users And Channels</h1>

                <div className="grid gap-8 my-8 flex-1">

                    <AddUser />
                    <RemoveUser />

                </div>
            </div>

            <SideNav />
        </div>
      )
}

export default Users;