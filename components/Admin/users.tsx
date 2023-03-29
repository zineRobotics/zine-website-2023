import React, { useEffect, useState } from "react";import { useForm } from "react-hook-form";
import { db } from '../../firebase';
import { collection, doc, arrayUnion, arrayRemove, updateDoc, getDocs, query, where } from "firebase/firestore";
import SideNav from "./sidenav";
import styles from "./styles";
import ProtectedRoute from "./ProtectedRoute";

interface IUserChannel {
    emails: string;
    channel: string;
}

const validateEmail = (emailids: string) => {
    for (const email of emailids.split(',')) {
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email) || !['mnit.ac.in', 'iiitk.ac.in'].includes(email.split('@').pop()!)) return false
    }
    return true
}

const AddUser = ({ channels }: { channels: string[] }) => {
    const {register, handleSubmit} = useForm<IUserChannel>()
    const usersCollection = collection(db, "users")

    const onSubmit = async (data: IUserChannel) => {
        for (const channel of data.channel) {
            for (const email of data.emails.split(',')) {
                const user = await getDocs(query(usersCollection, where("email", "==", email.trim())))
                user.forEach(async (u) => {
                    // Only 1 user
                    await updateDoc(u.ref, {
                        rooms: arrayUnion(channel)
                    })
                })
            }
        }
    }

    return (
        <div className=" bg-white rounded-xl py-4 px-6 w-full relative">
            <h1 className="text-2xl font-bold" style={styles.textPrimary}>Add user to channel</h1>
            <form>
                <div className="mt-4">
                    <label className="block text-gray-600 text-sm">Email Address</label>
                    <input type="email" id="email" className="block w-full focus:outline-none bottom-border pt-2" placeholder="xyz@mnit.ac.in" {...register('emails', {required: true})} />
                </div>
                <div className="mt-4 flex flex-col">
                {channels.map((c) => (
                    <div key={c} className="inline-block">
                        <input className="text-gray-600 text-sm mr-2" type="checkbox" {...register("channel")} value={c}  />
                        <label>{c}</label>
                    </div>
                ))}
            </div>
            </form>

            <button className="p-3 block w-40 rounded-3xl text-white mt-4" style={{background: "#0C72B0"}} onClick={handleSubmit(onSubmit)}>Add</button>
        </div>
    )
}

const RemoveUser = ({ channels }: { channels: string[] }) => {
    const {register, handleSubmit} = useForm<IUserChannel>()
    const usersCollection = collection(db, "users")
    const onSubmit = async (data: IUserChannel) => {
        for (const channel of data.channel) {
            for (const email of data.emails.split(',')) {
                const user = await getDocs(query(usersCollection, where("email", "==", email.trim())))
                user.forEach(async (u) => {
                    // Only 1 user
                    await updateDoc(u.ref, {
                        rooms: arrayRemove(channel)
                    })
                })
            }
        }
    }

    return (
        <div className=" bg-white rounded-xl pt-4 px-6 relative">
            <h1 className="text-2xl font-bold" style={styles.textGray}>Remove user from channel</h1>
            <div className="mt-4">
                <label className="block text-gray-600 text-sm" style={styles.textGray}>Email Address</label>
                <input type="email" id="email" className="block w-full focus:outline-none bottom-border pt-2" placeholder="xyz@abc.com" {...register('emails', {required: true})} />
            </div>

            <div className="mt-4 flex flex-col">
                {channels.map((c) => (
                    <div key={c} className="inline-block">
                        <input className="text-gray-600 text-sm mr-2" type="checkbox" {...register("channel")} value={c}  />
                        <label>{c}</label>
                    </div>
                ))}
            </div>
            <button className="p-3 block w-40 rounded-3xl text-white mt-4" style={{background: "#8D989F"}} onClick={handleSubmit(onSubmit)}>Remove</button>
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
            <div className="grid grid-cols-12 h-screen" style={{background: "#EFEFEF"}}>
                <div className="col-span-9 px-12 flex flex-col">
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