import React, { useEffect, useState } from "react";import { useForm } from "react-hook-form";
import { db } from '../../firebase';
import { collection, doc, arrayUnion, arrayRemove, updateDoc, getDocs, query, where } from "firebase/firestore";
import SideNav from "./sidenav";
import styles from "./styles";
import ProtectedRoute from "./ProtectedRoute";

interface IUserChannel {
    emails: string;
    channel: string[];
}

interface IUserChannelCard {
    channels: string[];
    setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const validateEmail = (emailids: string) => {
    for (const email of emailids.split(',')) {
        if (!/^20\d\d((kucp)|(kuec)|(ucp)|(uec)|(uee)|(uch)|(ume)|(uce)|(umt))\d{4}@((mnit)|(iiitkota)).ac.in$/g.test(email)) return false
    }
    return true
}

const AddUser = ({ channels, setMessage }: IUserChannelCard) => {
    const {register, handleSubmit} = useForm<IUserChannel>()
    const usersCollection = collection(db, "users")

    const onSubmit = async (data: IUserChannel) => {
        if (!data.channel) return
        if (!Array.isArray(data.channel)) data.channel = [data.channel]

        const emails = data.emails.split(/[, ]+/).map(e => e.replace(/\W+$/, "").replace(/^\W+/, ""))
        console.log(emails, data.channel)
        for (const channel of data.channel) {
            for (const email of emails) {
                const user = await getDocs(query(usersCollection, where("email", "==", email.trim())))
                user.forEach(async (u) => {
                    // Only 1 user
                    await updateDoc(u.ref, {
                        rooms: arrayUnion(channel)
                    })
                })
            }
        }

        setMessage(`Successfully added ${emails.length} user(s) to ${data.channel.length} channel(s)`)
        
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

const RemoveUser = ({ channels, setMessage }: IUserChannelCard) => {
    const {register, handleSubmit} = useForm<IUserChannel>()
    const usersCollection = collection(db, "users")
    const onSubmit = async (data: IUserChannel) => {
        if (!data.channel) return
        if (!Array.isArray(data.channel)) data.channel = [data.channel]

        const emails = data.emails.split(/[, ]+/).map(e => e.replace(/\W+$/, "").replace(/^\W+/, ""))
        console.log(emails, data.channel)
        for (const channel of data.channel) {
            for (const email of emails) {
                const user = await getDocs(query(usersCollection, where("email", "==", email.trim())))
                user.forEach(async (u) => {
                    console.log(channel, u.data())
                    // Only 1 user
                    await updateDoc(u.ref, {
                        rooms: arrayRemove(channel)
                    })
                })
            }
        }

        setMessage(`Removed ${emails.length} user(s) from ${data.channel.length} channel(s)`)
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
    const [message, setMessage] = useState("")

    useEffect(() => {
        const fetchedChannels = [] as string[]
        getDocs(query(roomsCollection)).then((res) => {
            res.forEach(c => fetchedChannels.push(c.data().name))
            setChannels(fetchedChannels.filter(c => c !== "Announcements"))
        })
    }, [])

    useEffect(() => {
        setTimeout(() => setMessage(""), 2000)
    }, [message])

    return (
        <ProtectedRoute>
            <div className="grid grid-cols-12 h-screen" style={{background: "#EFEFEF"}}>
            {
                message &&
                <div className="flex items-center p-4 bg-white rounded-lg fixed bottom-5 right-5" role="alert">
                    <p className="mr-3">{message}</p>
                </div>
            }
                <div className="col-span-9 px-12 flex flex-col">
                    <h1 className="text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>Users And Channels</h1>
                    <div className="grid gap-8 my-8 flex-1">
                        <AddUser setMessage={setMessage} channels={channels} />
                        <RemoveUser setMessage={setMessage} channels={channels} />
                    </div>
                </div>
                <SideNav />
            </div>
        </ProtectedRoute>
      )
}

export default Users;