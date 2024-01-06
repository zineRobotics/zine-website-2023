import React, { useEffect, useState } from "react";import { useForm } from "react-hook-form";
import { db } from '../../../firebase';
import { collection, arrayUnion, arrayRemove, updateDoc, getDocs, query, where } from "firebase/firestore";
import SideNav from "../sidenav";
import styles from "../../../constants/styles";
import ProtectedRoute from "./ProtectedRoute";
import { ToastContainer, toast } from "react-toastify";

interface IUserChannel {
    emails: string;
    channel: string[];
    group: ("firstyears" | "admins")[]
}

interface IUserChannelCard {
    channels: string[];
}

const validateEmail = (emailids: string) => {
    for (const email of emailids.split(',')) {
        if (!/^20\d\d((kucp)|(kuec)|(ucp)|(uec)|(uee)|(uch)|(ume)|(uce)|(umt))\d{4}@((mnit)|(iiitkota)).ac.in$/g.test(email)) return false
    }
    return true
}

const firstyear = "2022"

const AddUser = ({ channels }: IUserChannelCard) => {
    const {register, handleSubmit} = useForm<IUserChannel>()
    const usersCollection = collection(db, "users")

    const onSubmit = async (data: IUserChannel) => {
        if (!data.channel) return
        if (!Array.isArray(data.channel)) data.channel = [data.channel]

        const emails = data.emails.split(/[, ]+/).map(e => e.replace(/\W+$/, "").replace(/^\W+/, "")).filter(e => e)

        const allusers = await getDocs(query(usersCollection))
        const results: Promise<void>[] = []
        allusers.forEach(async (u) => {
            const e = u.data().email
            if (emails.length > 0 && !emails.includes(e)) return
            if (data.group && data.group.includes('firstyears') && !e.startsWith(firstyear)) return
            if (data.group && data.group.includes('admins') && u.data().type !== "admin") return
            
            results.push(updateDoc(u.ref, { rooms: arrayUnion(...data.channel), roomids: arrayUnion() }))
        })

        Promise.all(results).then(() => {
            toast.success(`Successfully added ${results.length} user(s) to ${data.channel.length} channel(s)`)
        })
    }

    return (
        <div className=" bg-white rounded-xl py-4 px-6 w-full relative">
            <h1 className="text-2xl font-bold" style={styles.textPrimary}>Add user to channel</h1>
            <form>
                <div className="mt-4">
                    <label className="block text-gray-600 text-sm">Email Address</label>
                    <input type="email" id="email" className="block w-full focus:outline-none bottom-border pt-2" placeholder="xyz@mnit.ac.in" {...register('emails')} />
                </div>
                <div className="grid grid-cols-2">
                    <div className="mt-4 flex flex-col">
                        {channels.map((c) => (
                            <div key={c} className="inline-block">
                                <input className="text-gray-600 text-sm mr-2" type="checkbox" {...register("channel")} value={c}  />
                                <label>{c}</label>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex flex-col">
                        <p className="text-gray-500">User Groups</p>
                        <div className="inline-block">
                            <input className="text-gray-600 text-sm mr-2" type="checkbox" {...register("group")} value="firstyears"/>
                            <label>First Years</label>
                        </div>
                        <div className="inline-block">
                            <input className="text-gray-600 text-sm mr-2" type="checkbox" {...register("group")} value="admins"/>
                            <label>Admins</label>
                        </div>
                    </div>
                </div>
            </form>

            <button className="p-3 block w-40 rounded-3xl text-white mt-4" style={{background: "#0C72B0"}} onClick={handleSubmit(onSubmit)}>Add</button>
        </div>
    )
}

const RemoveUser = ({ channels }: IUserChannelCard) => {
    const {register, handleSubmit} = useForm<IUserChannel>()
    const usersCollection = collection(db, "users")
    const onSubmit = async (data: IUserChannel) => {
        if (!data.channel) return
        if (!Array.isArray(data.channel)) data.channel = [data.channel]

        const emails = data.emails.split(/[, ]+/).map(e => e.replace(/\W+$/, "").replace(/^\W+/, "")).filter(e => e)
        const allusers = await getDocs(query(usersCollection))
        const results: Promise<void>[] = []

        allusers.forEach(async (u) => {
            const e = u.data().email
            if (emails.length > 0 && !emails.includes(e)) return
            if (data.group && data.group.includes('firstyears') && !e.startsWith(firstyear)) return
            if (data.group && data.group.includes('admins') && u.data().type !== "admin") return
            
            results.push(updateDoc(u.ref, { rooms: arrayRemove(...data.channel) }))
        })

        Promise.all(results).then(() => {
            toast.success(`Successfully removed ${results.length} user(s) from ${data.channel.length} channel(s)`)
        })
    }

    return (
        <div className=" bg-white rounded-xl pt-4 px-6 relative">
            <h1 className="text-2xl font-bold" style={styles.textGray}>Remove user from channel</h1>
            <div className="mt-4">
                <label className="block text-gray-600 text-sm" style={styles.textGray}>Email Address</label>
                <input type="email" id="email" className="block w-full focus:outline-none bottom-border pt-2" placeholder="xyz@abc.com" {...register('emails')} />
            </div>

            <div className="grid grid-cols-2">
                    <div className="mt-4 flex flex-col">
                        {channels.map((c) => (
                            <div key={c} className="inline-block">
                                <input className="text-gray-600 text-sm mr-2" type="checkbox" {...register("channel")} value={c}  />
                                <label>{c}</label>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex flex-col">
                        <p className="text-gray-500">User Groups</p>
                        <div className="inline-block">
                            <input className="text-gray-600 text-sm mr-2" type="checkbox" {...register("group")} value="firstyears"/>
                            <label>First Years</label>
                        </div>
                        <div className="inline-block">
                            <input className="text-gray-600 text-sm mr-2" type="checkbox" {...register("group")} value="admins"/>
                            <label>Admins</label>
                        </div>
                    </div>
                </div>
            <button className="p-3 block w-40 rounded-3xl text-white my-4" style={{background: "#8D989F"}} onClick={handleSubmit(onSubmit)}>Remove</button>
        </div>
    )
}

const Users = () => {
    const roomsCollection = collection(db, "rooms")
    const [channels, setChannels] = useState<string[]>([])

    useEffect(() => {
        const fetchedChannels = [] as string[]
        getDocs(query(roomsCollection)).then((res) => {
            res.forEach(c => fetchedChannels.push(c.data().name))
            setChannels(fetchedChannels.filter(c => c !== "Announcements"))
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
            <div className="grid grid-cols-12 h-screen" style={{background: "#EFEFEF"}}>
                <div className="col-span-9 px-12 flex flex-col overflow-y-scroll">
                    <h1 className="text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>Users And Channels</h1>
                    <div className="grid gap-8 my-8 flex-1">
                        <AddUser channels={channels} />
                        <RemoveUser channels={channels} />
                    </div>
                </div>
                <SideNav />
            </div>
        </ProtectedRoute>
      )
}

export default Users;