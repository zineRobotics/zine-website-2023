import React, { useEffect, useState } from "react";
import SideNav from "../sidenav";
import ProtectedRoute from "./ProtectedRoute";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useAuth } from "../../../context/authContext";
import ToastMessage from "../toastMessage";
import { announcementRoom, getMessages } from "../../../apis/room";

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
    const [message, setMessage] = useState("")

    const { authUser } = useAuth();
    console.log(authUser)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMsg(e.target.value)
    }

    const onSubmit = async () => {
        if (!announcementRoom) return
        const name = authUser.name
        const newAnnouncement = {
            from: name,
            group: announcementRoom.id,
            message: msg,
            timeStamp: Timestamp.fromDate(new Date())
        }

        await addDoc(collection(announcementRoom, "messages"), newAnnouncement)
        setMsg("")
        setAnnouncements([newAnnouncement, ...announcements])
        setMessage("Successfully sent message to announcement channel")
    }

    useEffect(() => {
        getMessages(announcementRoom, true, 10).then(msgSnapshot => {
          setAnnouncements(msgSnapshot.docs.map(d => d.data() as IMessageData))
        })
      }, [])

    return (
        <ProtectedRoute>
            <ToastMessage message={message} setMessage={setMessage} />

            <div className="grid grid-cols-12 h-screen" style={{background: "#EFEFEF"}}>
                <div className="col-span-9 px-12 flex flex-col overflow-y-scroll">
                    <h1 className="text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>Announcements</h1>
                    <p className="mt-8 text-gray-500">Create Announcement</p>
                    <div className="bg-white rounded-xl py-4 px-6 mt-2 w-full flex items-center">
                        <input type="text" id="name" className="block w-full focus:outline-none bottom-border pt-2 mr-5" value={msg} onChange={onChange} />
                        <div onClick={onSubmit}>
                            <FontAwesomeIcon icon={faPaperPlane}/>
                        </div>
                    </div>

                    <p className="mt-8 text-gray-500">Previous Announcements</p>
                    <div className="mb-4">
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