import React, { useEffect, useState } from "react";
import SideNav from "../sidenav";
import ProtectedRoute from "./ProtectedRoute";
import { DocumentData, DocumentReference, Timestamp, addDoc, collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import { useAuth } from "../../../context/authContext";
import ToastMessage from "../toastMessage";

interface ITimestamp {
    seconds: number;
    nanoseconds: number;
}

interface IMessageData {
    from: string;
    group: string;
    message: string;
    timeStamp: ITimestamp;
}

const ANNOUNCEMENT_ROOM = "Announcements"

const timestampToHuman = (timeStamp: ITimestamp) => {
    const date = new Date(timeStamp.seconds * 1000)
    return {
        date: date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }),
        time: date.toLocaleTimeString('en-US', { hour: "numeric", minute: "numeric" })
    }
}

const Announcements = () => {
    const [announcements, setAnnouncements] = useState<IMessageData[]>([])
    const [msg, setMsg] = useState("")
    const [announcementRoom, setAnnouncementRoom] = useState<DocumentReference<DocumentData>>()
    const [message, setMessage] = useState("")


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMsg(e.target.value)
    }

    const roomsCollection = collection(db, 'rooms')
    useEffect(() => {
        getDocs(query(roomsCollection, where("name", "==", ANNOUNCEMENT_ROOM))).then(roomsSnapshot => {
            roomsSnapshot.forEach(d => {
                setAnnouncementRoom(d.ref)
                getDocs(query(collection(d.ref, 'messages'), orderBy("timeStamp", 'desc'))).then(msgSnapshot => {
                    msgSnapshot.forEach(d => {
                        setAnnouncements(s => [...s, d.data() as IMessageData])
                    })
                })
            })
        })
    }, [])

    return (
        <ProtectedRoute>
            <ToastMessage message={message} setMessage={setMessage} />

            <div className="grid grid-cols-12 h-screen" style={{background: "#EFEFEF"}}>
                <div className="col-span-9 px-12 flex flex-col overflow-y-scroll">
                    <h1 className="text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>Announcements</h1>

                    <div className="my-4">
                        {
                            announcements.map(msg => {
                                const date = timestampToHuman(msg.timeStamp)
                                return (
                                    <div className="bg-white rounded-xl py-4 px-6 mt-2 w-full">
                                        <p className="text-gray-500 text-sm">{msg.from} | {date.time} {date.date}</p>
                                        <p>{msg.message}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <SideNav />
            </div>
        </ProtectedRoute>
      )
}

export default Announcements;