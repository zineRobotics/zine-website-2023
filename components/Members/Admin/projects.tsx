import { useEffect, useState } from "react"
import SideNav from "../sidenav"
import styles from "../styles"
import ProtectedRoute from "./ProtectedRoute"
import { DocumentReference, Timestamp, collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";

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

interface IUserProject {
    checkpoints: any[]
    status: string;
    users: DocumentReference[];
    task: DocumentReference;
    id: string; // added for reference
}

interface IUserData {
    name: string;
    email: string;
}

interface IProject {
    checkpoints: number
    status: string;
    user: IUserData;
    task: IProjectData;
}

const Projects = () => {
    const [projects, setProjects] = useState<IProject[]>([])

    const tasksCollection = collection(db, "tasks")
    const userTasksCollection = collection(db, "userTasks")
    useEffect(() => {
        getDocs(query(tasksCollection, where("type", "==", "Project"))).then(snapshots => {
            const tasks: {[key: string]: IProjectData} = {}
            snapshots.forEach(d => {
                tasks[d.id] = d.data() as IProjectData
            })
            return tasks;
        }).then(tasks => {
            console.log(tasks)
            getDocs(userTasksCollection).then(snapshots => {
                snapshots.forEach(async d => {
                    const userProject = d.data() as IUserProject
                    const puser = await getDoc(userProject.users[0])
                    const project = {
                        checkpoints: userProject.checkpoints.length,
                        status: userProject.status,
                        user: puser.data() as IUserData,
                        task: tasks[userProject.task.id] 
                    }
                    console.log(project)
                    setProjects(state => [...state, project])
                })
            })
        })
    }, [])

    return (
        // <ProtectedRoute>
            // {/* <ToastMessage message={message} setMessage={setMessage} /> */}
            <div className="grid grid-cols-12 h-screen" style={{background: "#EFEFEF"}}>
                <div className="col-span-12 md:col-span-9 px-12 flex flex-col overflow-y-scroll">
                    <h1 className="text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>Projects</h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                        {
                            projects.map(project => (
                                <div className="bg-white rounded-xl text-center py-2">
                                    <div className="mt-4 p-3 text-white font-extrabold text-3xl" style={{background: "#0C72B0"}}>
                                        <p>{project.task?.title}</p>
                                    </div>
        
                                    <h2 className="my-4 text-5xl font-extrabold" style={styles.textPrimary}>{project.checkpoints}</h2>
                                    <h3 className="mt-4 text-2xl font-bold" style={{color: "#95C5E2"}}>{project.user.name}</h3>
                                    <p className="mt-1 mb-4 text-lg font-bold" style={styles.textGray}>{project.user.email}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <SideNav />
            </div>
        // </ProtectedRoute>
    )
}

export default Projects