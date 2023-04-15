import { Timestamp, arrayUnion, doc, updateDoc } from "firebase/firestore";
import styles from "./styles"
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { db } from "../../firebase";

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

interface ICheckPoint {
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

const Checkpoints = ({ projectData }: { projectData: IProject }) => {
    const [checkpointMessage, setCheckpointMessage] = useState("")
    const [project, setProject] = useState(projectData)
    const { authUser } = useAuth();

    const addCheckpoint = () => {
        if (!project) return
        if (!checkpointMessage) return

        setCheckpointMessage("")
        const checkpointData = {
            message: checkpointMessage,
            timeDate: Timestamp.fromDate(new Date()),
            user: authUser.name as string
        }

        updateDoc(doc(db, "userTasks", project.id), {
            checkpoints: arrayUnion(checkpointData)
        }).then(() => {
            const newCheckpoints = [...project.checkpoints, checkpointData]
            setProject({ ...project, checkpoints: newCheckpoints })
        })
    }

    return (
        <div className="mt-2">
            <div className="flex justify-between">
                <h2 className="text-3xl font-bold" style={styles.textPrimary}>{project.task.title}</h2>
                <a className="text-white rounded-xl px-3 py-2 font-bold cursor-pointer" style={{background: "#0C72B0"}} href={project.task?.link}>Problem Statement</a>
            </div>

            <div className="flex flex-col bg-white rounded-xl my-4 px-4 pt-8 pb-4 gap-6">
                {
                    !project.checkpoints.length && 
                    <p className="text-center font-bold text-lg">No checkpoints added</p>
                }
                {
                    project.checkpoints.map(checkpoint => (
                        <div key={checkpoint.timeDate.seconds} className="flex">
                            <div className="text-sm" style={{color: "#8D989F"}}>
                                <p className="font-bold">{checkpoint.timeDate.toDate().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                                <p className="font-bold">{checkpoint.timeDate.toDate().toLocaleTimeString('en-US', { hour: "numeric", minute: "numeric" })}</p>
                                <p className="mt-2">{checkpoint.user}</p>
                            </div>
                            <div className="ml-6">
                                <p>{checkpoint.message}</p>
                            </div>
                        </div>
                    ))
                }

                <div className="flex mt-4">
                    <textarea rows={3} className="w-full rounded-xl p-2" value={checkpointMessage} onChange={(e) => setCheckpointMessage(e.target.value)} style={{background: "#EFEFEF"}}/>
                    <button className="ml-4 font-bold p-2 rounded-xl cursor-pointer" style={{...styles.textPrimary, background: "#C2FFF4"}} onClick={() => addCheckpoint()}>Add Checkpoint</button>
                </div>
            </div>
        </div>
    )
}

export default Checkpoints