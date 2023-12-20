import { Timestamp, arrayUnion, collection, doc, getDocs, orderBy, query, setDoc, updateDoc, where } from "firebase/firestore";
import styles from "../../constants/styles"
import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { db } from "../../firebase";
import sendFCMMessage from "../../apis/sendFcm";

interface IUserData {
    name: string;
    email: string;
}

interface IProjectData {
    createdDate: {seconds: number, nanoseconds: number};
    description: string;
    dueDate: {seconds: number, nanoseconds: number};
    link: string;
    title: string;
    type: string;
    submissionLink: string;
    tags: string[];
    id: string; // added for reference
}

export interface ICheckPoint {
    message: string;
    timeDate: Timestamp;
    user: string;
}

export interface IProject {
    checkpoints: ICheckPoint[]
    status: string;
    user: IUserData;
    task: IProjectData;
    id: string;
}

interface IMessageData {
    from: string;
    group: string;
    message: string;
    timeStamp: Timestamp;
}

const URL_REGEX = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

const Checkpoints = ({ projectData }: { projectData: IProject }) => {
    const [checkpointMessage, setCheckpointMessage] = useState("")
    const [project, setProject] = useState(projectData)
    const [panel, setPanel] = useState("checkpoints")
    const [messages, setMessages] = useState<IMessageData[]>([])
    const [inputMessage, setInputMessage] = useState("")
    const [groupid, setGroupID] = useState("")
    const { authUser } = useAuth();

    const roomsCollection = collection(db, "rooms")
    const roomName = `${projectData.task.title.split(' ')[0]}-${project.user.email.slice(4).split('@')[0]}`
    useEffect(() => {
        getDocs(query(roomsCollection, where("name", "==", roomName))).then(snapshots => {
            snapshots.forEach(d => {
                setGroupID(d.id)
                const newmsg: IMessageData[] = []
                getDocs(query(collection(d.ref, 'messages'), orderBy("timeStamp", 'asc'))).then(msgSnapshot => {
                    msgSnapshot.forEach(d => {
                        newmsg.push(d.data() as IMessageData)
                    })
                }).then(() => {
                    setMessages(newmsg)
                })
            })
        })
    }, [panel])

    const onSubmit = async () => {
        if (!groupid) return
        const name = authUser!.name
        const timeStamp = Timestamp.fromDate(new Date())
        const newMessage = {
            from: name,
            group: groupid,
            message: inputMessage.trim(),
            timeStamp
        }
        
        setInputMessage("")
        await setDoc(doc(db, "rooms", groupid, "messages", timeStamp.nanoseconds.toString()), newMessage)
        await sendFCMMessage(roomName, roomName, `${authUser!.name}: ${inputMessage.trim()}`)
        setMessages([...messages, newMessage])
    }

    const addCheckpoint = () => {
        if (!project) return
        if (!checkpointMessage) return

        setCheckpointMessage("")
        const checkpointData = {
            message: checkpointMessage.trim(),
            timeDate: Timestamp.fromDate(new Date()),
            user: authUser!.name
        }

        updateDoc(doc(db, "userTasks", project.id), {
            checkpoints: arrayUnion(checkpointData)
        }).then(async () => {
            const newCheckpoints = [...project.checkpoints, checkpointData]
            setProject({ ...project, checkpoints: newCheckpoints })
            const timeStamp = Timestamp.fromDate(new Date())
            const newMessage = {
                from: authUser!.name,
                group: groupid,
                message: `${authUser!.type === "admin" ? "[REMARK]:" : "[CHECKPOINT]:"} ${checkpointMessage.trim()}`,
                timeStamp
            }

            await setDoc(doc(db, "rooms", groupid, "messages", timeStamp.nanoseconds.toString()), newMessage)
            await sendFCMMessage(roomName, roomName, `${authUser!.name}: ${authUser!.type === "admin" ? "Remark Added" : "Checkpoint Added"}\n${checkpointMessage}`)
        })
    }

    return (
        <div className="">
            <h2 className="text-3xl font-bold my-2" style={styles.textPrimary}>{project.task.title}</h2>

            <div className="flex justify-between mb-2">
                <h2 className="text-2xl font-bold" style={styles.textPrimary}>{project.user.name}</h2>
                <a className="text-white rounded-xl px-3 py-2 font-bold text-center cursor-pointer" style={{background: "#0C72B0"}} href={project.task?.link} target="_blank">Problem Statement</a>
            </div>

            <div className="flex flex-col bg-white rounded-xl">
                <div className="flex">
                    <button className="w-full p-2 font-bold rounded-tl-xl" style={panel === "checkpoints" ? {background: "white", color: "#0C72B0" }: {background: "#0C72B0", color: "white" }} onClick={() => setPanel("checkpoints")}>Checkpoints</button>
                    <button className="w-full p-2 font-bold rounded-tr-xl" style={panel === "messages" ? {background: "white", color: "#0C72B0" }: {background: "#0C72B0", color: "white" }} onClick={() => setPanel("messages")}>Messages</button>
                </div>
                
                <div className="flex flex-col px-4 pt-2 pb-4">
                    {
                        panel === "checkpoints" && !project.checkpoints.length &&
                        <div className="px-4 mt-2" style={{color: "#AAAAAA"}}>
                        <p className="text-center text-lg">Add all the checkpoints, challenges faced with brief description for your project here</p>
                        <p className="text-center text-lg">Make sure to update your project checkpoint everyday</p>
                        <p className="text-center text-lg mt-2">Start by adding your github repository link here</p>
                        </div>
                    }
                    {
                        panel === "checkpoints" && project.checkpoints.map(checkpoint => (
                            <div key={checkpoint.timeDate.seconds} className="flex flex-wrap flex-col md:flex-row my-2">
                                <div className="text-xs md:text-sm md:w-2/12 flex gap-4 md:gap-0 md:flex-col" style={{color: "#8D989F"}}>
                                    <p className="font-bold">{checkpoint.timeDate.toDate().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
                                    <p className="font-bold">{checkpoint.timeDate.toDate().toLocaleTimeString('en-US', { hour: "numeric", minute: "numeric" })}</p>
                                    <p className="">{checkpoint.user}</p>
                                </div>
                                <div className="break-words w-full md:w-10/12 md:ml-auto">
                                    <p>{checkpoint.message.split(/\s+/g).map(word => word.match(URL_REGEX) ? <><a href={word} className="text-blue-500 underline" target="_blank">{word}</a>{" "}</> : word + " ")}</p>
                                </div>
                            </div>
                        ))
                    }

                    { 
                        panel === "messages" && <div className="text-sm text-blue-500 text-center">View these messages on the Zine App!</div>
                    }
                    {
                        panel === "messages" && messages.map(message => (
                            <div key={message.timeStamp.seconds} className="flex flex-wrap flex-col md:flex-row my-2">
                                <div className="text-xs md:text-sm md:w-2/12 flex gap-4 md:gap-0 md:flex-col" style={{color: "#8D989F"}}>
                                    <p className="font-bold">{message.timeStamp.toDate().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
                                    <p className="font-bold">{message.timeStamp.toDate().toLocaleTimeString('en-US', { hour: "numeric", minute: "numeric" })}</p>
                                    <p className="">{message.from}</p>
                                </div>
                                <div className="break-words w-full md:w-10/12 md:ml-auto">
                                    <p>{message.message.split(/\s+/g).map(word => word.match(URL_REGEX) ? <><a href={word} className="text-blue-500 underline" target="_blank">{word}</a>{" "}</> : word + " ")}</p>
                                </div>
                            </div>
                        ))
                    }

                    {
                        panel === "checkpoints" &&
                        <div className="flex mt-4 flex-col md:flex-row gap-4">
                            <textarea rows={3} className="w-full rounded-xl p-2" value={checkpointMessage} onChange={(e) => setCheckpointMessage(e.target.value)} style={{background: "#EFEFEF"}}/>
                            <button className="font-bold p-2 rounded-xl cursor-pointer" style={{...styles.textPrimary, background: "#C2FFF4"}} onClick={() => addCheckpoint()}>Add Checkpoint</button>
                        </div>
                    }

                    {
                        panel === "messages" &&
                        <div className="flex mt-4 flex-col md:flex-row gap-4">
                            <textarea rows={3} className="w-full rounded-xl p-2" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} style={{background: "#EFEFEF"}}/>
                            <button className="font-bold p-2 rounded-xl cursor-pointer" style={{...styles.textPrimary, background: "#C2FFF4"}} onClick={() => onSubmit()}>Send Message</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Checkpoints