import { useEffect, useState } from "react"
import SideNav from "../sidenav"
import styles from "../../../constants/styles"
import ProtectedRoute from "./ProtectedRoute"
import { DocumentReference, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../../firebase";
import Checkpoints, { ICheckPoint, IProject } from "../checkpoints";

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

function sortTimestamps(a: ICheckPoint[], b: ICheckPoint[]) {
    return (a.length || b.length) ? (!a.length ? -1 : !b.length ? 1 : (a.slice(-1)[0].timeDate.seconds - b.slice(-1)[0].timeDate.seconds)) : 0
}

const Projects = () => {
    const [projects, setProjects] = useState<IProject[]>([])
    const [userProject, setUserProject] = useState<IProject>()
    const [state, setState] = useState("")

    const tasksCollection = collection(db, "tasks")
    const userTasksCollection = collection(db, "userTasks")
    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setState(e.target.value)
    }

    const onStatusChange = (status: string) => {
        if (!userProject) return
        updateDoc(doc(db, "userTasks", userProject.id), {
            status: status
        }).then(() =>{
            setUserProject({ ... userProject, status })
        })
    }

    useEffect(() => {
        getDocs(query(tasksCollection)).then(snapshots => {
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
                    const {name, email} = puser.data() as { name: string, email: string }
                    const project = {
                        checkpoints: userProject.checkpoints,
                        status: userProject.status,
                        user: {name, email},
                        task: tasks[userProject.task?.id],
                        id: d.id
                    }

                    setProjects(state => [...state, project])
                    if (!project.task) console.log(project.user.email, project.id)
                })
            })
        })
    }, [])

    return (
        <ProtectedRoute>
            <div className="grid grid-cols-12 h-screen" style={{background: "#EFEFEF"}}>
                <div className="col-span-12 md:col-span-9 px-12 flex flex-col overflow-y-scroll">
                    <h1 className="text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>Projects</h1>
                    
                    {                   
                        !userProject && 
                        <div className="my-8">
                            <div className="flex flex-col">
                                <label className="text-gray-500">Search</label>
                                <input id="search" type="text" className="text-lg p-2 bottom-border" onChange={onSearchChange} placeholder="Search email ID or name or project or status" value={state}/>
                            </div>
                            <div className="grid grid-cols-1 text-center md:grid-cols-3 gap-6 mt-2">
                                {
                                    projects
                                    .filter(p => !state || p.user.name.toLowerCase().includes(state.toLowerCase()) || p.user.email.includes(state.toLowerCase()) 
                                                        || p.task.title.toLowerCase().includes(state.toLowerCase()) || p.status.toLowerCase().includes(state.toLowerCase()))
                                    .sort((a, b) => sortTimestamps(b.checkpoints, a.checkpoints))
                                    .map(p => (
                                        <div key={p.id} className="bg-white rounded-xl flex flex-col justify-center py-2 cursor-pointer" onClick={() => setUserProject(p)}>
                                            <div className="mt-4 p-3 text-white font-extrabold text-3xl" style={{background: "#0C72B0"}}>
                                                <p>{p.task?.title}</p>
                                            </div>
                
                                            <h2 className="my-4 text-5xl font-extrabold" style={styles.textPrimary}>{p.checkpoints.length}</h2>
                                            <h3 className="mt-4 text-2xl font-bold" style={{color: "#95C5E2"}}>{p.user.name}</h3>
                                            <p className="mt-1 mb-4 text-lg font-bold" style={styles.textGray}>{p.user.email}</p>
                                            <div className="my-4 p-2 text-white font-bold text-xl" style={{background: "#0C72B0"}}>
                                                <p>{p.status}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    }
                    {
                        userProject &&
                        <>
                        <Checkpoints projectData={userProject} />
                        <div className="flex justify-between text-white my-2">
                            <button className="bg-red-500 py-2 px-5 rounded-xl font-bold" onClick={() => setUserProject(undefined)}>Back</button>
                            <select className="rounded-xl py-2 px-5 text-center font-bold" value={userProject.status} onChange={(e) => onStatusChange(e.target.value)} style={{background: "#0C72B0"}}>
                                <option>Assigned</option>
                                <option>Stage 1</option>
                                <option>Stage 2</option>
                                <option>Stage 3</option>
                                <option>Setup</option>
                                <option>In Review</option>
                                <option>Finished</option>
                            </select>
                        </div>
                        </>
                    }
                </div>
                <SideNav />
            </div>
        </ProtectedRoute>
    )
}

export default Projects