import React, { useEffect, useState } from "react";import { useForm } from "react-hook-form";
import { db } from '../../../firebase';
import { collection, arrayUnion, arrayRemove, updateDoc, getDocs, query, where, doc } from "firebase/firestore";
import SideNav from "../sidenav";
import styles from "../../../constants/styles";
import ProtectedRoute from "./ProtectedRoute";
import { ToastContainer, toast } from "react-toastify";
import { IRoomData, roomsCollection } from "../../../apis/room";
import { IUser, getUserEmailIn, getUsersByRoles } from "../../../apis/users";

interface IUserChannel {
    emails: string;
    channel: string[];
    group: ("2022" | "admin" | "2023")[]
}

interface IUserChannelCard {
    channels: IRoomData[];
}

const AddUser = ({ channels }: IUserChannelCard) => {
    const {register, handleSubmit} = useForm<IUserChannel>()
    const usersCollection = collection(db, "users")

    const onSubmit = async (data: IUserChannel) => {
        if (!data.channel) return
        if (!Array.isArray(data.channel)) data.channel = [data.channel]

        const emails = data.emails.split(/[, ]+/).map(e => e.replace(/\W+$/, "").replace(/^\W+/, "")).filter(e => e)
        const channelids = data.channel.map(c => channels.find(a => a.name === c)!.id)

        let allusers = [] as IUser[]
        if (emails.length > 0) {
            const searchedUsers = await getUserEmailIn(emails)
            allusers = allusers.concat(searchedUsers.docs.map(d => d.data() as IUser))
        }
        if (data.group) {
            const searchedUsers = await getUsersByRoles(data.group)
            allusers = allusers.concat(searchedUsers?.docs.map(d => d.data() as IUser) || [])
        }

        const allEmails = allusers.map(u => u.email)
        console.log(allEmails)
        Promise.all(allusers.map(u => updateDoc(
            doc(usersCollection, u.uid), 
            { rooms: arrayUnion(...data.channel), roomids: arrayUnion(...channelids) }
        )))
        .then(() => Promise.all(channelids.map(c => updateDoc(
            doc(roomsCollection, c), { members: arrayUnion(...allEmails) }))
        )).then(() => {
            toast.success(`Successfully added ${allEmails.length} user(s) to ${data.channel.length} channel(s)`)
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
                            <div key={c.id} className="inline-block">
                                <input className="text-gray-600 text-sm mr-2" type="checkbox" {...register("channel")} value={c.name}  />
                                <label>{c.name}</label>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex flex-col">
                        <p className="text-gray-500">User Groups</p>
                        <div className="inline-block">
                            <input className="text-gray-600 text-sm mr-2" type="checkbox" {...register("group")} value="2023"/>
                            <label>2023</label>
                        </div>
                        <div className="inline-block">
                            <input className="text-gray-600 text-sm mr-2" type="checkbox" {...register("group")} value="admin"/>
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
        const channelids = data.channel.map(c => channels.find(a => a.name === c)!.id)
        let allusers = [] as IUser[]
        if (emails.length > 0) {
            const searchedUsers = await getUserEmailIn(emails)
            allusers = allusers.concat(searchedUsers.docs.map(d => d.data() as IUser))
        }
        if (data.group) {
            const searchedUsers = await getUsersByRoles(data.group)
            allusers = allusers.concat(searchedUsers?.docs.map(d => d.data() as IUser) || [])
        }

        const allEmails = allusers.map(u => u.email)
        Promise.all(allusers.map(u => updateDoc(
            doc(usersCollection, u.uid), 
            { rooms: arrayRemove(...data.channel), roomids: arrayRemove(...channelids) }
        )))
        .then(() => Promise.all(channelids.map(c => updateDoc(
            doc(roomsCollection, c), { members: arrayRemove(...allEmails) }))
        )).then(() => {
            toast.success(`Successfully removed ${allEmails.length} user(s) to ${data.channel.length} channel(s)`)
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
                            <div key={c.id} className="inline-block">
                                <input className="text-gray-600 text-sm mr-2" type="checkbox" {...register("channel")} value={c.name}  />
                                <label>{c.name}</label>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex flex-col">
                        <p className="text-gray-500">User Groups</p>
                        <div className="inline-block">
                            <input className="text-gray-600 text-sm mr-2" type="checkbox" {...register("group")} value="2023"/>
                            <label>2023</label>
                        </div>
                        <div className="inline-block">
                            <input className="text-gray-600 text-sm mr-2" type="checkbox" {...register("group")} value="admin"/>
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
    const [channels, setChannels] = useState<IRoomData[]>([])

    useEffect(() => {
        // const fetchedChannels = [] as IRoomData[]
        getDocs(query(roomsCollection, where('name', '!=', 'Announcements'))).then((res) => {
            const fetchedChannels = res.docs.map(c => ({ id: c.id, ...c.data()} as IRoomData))
            console.log(fetchedChannels)
            setChannels(() => fetchedChannels)
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
                <div className="col-span-12 px-6 md:px-12 flex flex-col overflow-y-scroll md:col-span-9">
                    <h1 className="text-4xl font-bold mt-16 md:mt-8" style={{color: "#AAAAAA"}}>Users And Channels</h1>
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