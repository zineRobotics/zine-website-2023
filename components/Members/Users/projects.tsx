import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import SideNav from "../sidenav";
import styles from "../../../constants/styles";
import { db, storage } from '../../../firebase';
import { collection, addDoc, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../../../context/authContext";
import Checkpoints from "../checkpoints";
import { ITaskData, assignTask } from "../../../apis/tasks";
import { IProject, IUserProject } from "../../../apis/projects";


const Projects = () => {
    const { authUser } = useAuth();
    const [state, setState] = useState("")
    const [projects, setProjects] = useState<ITaskData[]>([])
    const [selectedProject, setSelectedProject] = useState<IProject>()
    const [confirmProject, setConfirmProject] = useState<ITaskData>()

    const userTasksCollection = collection(db, "userTasks")
    const tasksCollection = collection(db, "tasks")

    useEffect(() => {
        if (!authUser) return
        const userRef = doc(db, "users", authUser.uid)

        getDocs(query(userTasksCollection, where("users", "array-contains", userRef))).then(snapshots => {
            snapshots.forEach(d => {
                const taskData = { ...d.data(), id: d.id } as IUserProject
                getDoc(taskData.task).then(res => {
                    const projectData = { ...res.data(), id: res.id } as ITaskData
                    setConfirmProject(projectData)
                    setSelectedProject({
                        ...taskData,
                        taskData: projectData,
                        usersData: [authUser],
                    })
                    setState("inprogress")
                })
            })
            return !snapshots.empty
        }).then((isAssigned) => {
            if (isAssigned) return
            getDocs(query(tasksCollection, where("type", "==", "Project"))).then(snapshots => {
                snapshots.forEach(d => {
                    const taskData = { ...d.data(), id: d.id } as ITaskData
                    setProjects(state => [...state, taskData ])
                })
                // TODO: add this
                // setState("selection")
            })
        })
    }, [authUser])

    const onChoose = (index: number) => {
        setState("confirmation")
        setConfirmProject(projects[index])
    }

    const closeConfirmation = () => {
        setState("selection")
        setConfirmProject(undefined)
    }

    const selectProject = async () => {
        if (!confirmProject) return

        const userProject = await assignTask(confirmProject, [authUser!]) as IUserProject[]
        setSelectedProject({
            ...userProject[0],
            usersData: [authUser!],
            taskData: confirmProject,
        })
        setState("inprogress")
    }

    return (
        <ProtectedRoute>
            {/* // <ToastMessage message={message} setMessage={setMessage} /> */}
            <div className="grid grid-cols-12 h-screen" style={{background: "#EFEFEF"}}>
                <SideNav />

                <div className="col-span-12 px-6 relative overflow-y-scroll md:px-12 md:col-span-9">

                    <h1 className="text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>
                        {(state === "selection" || state === "confirmation") && "Choose your major project"}
                        {state === "inprogress" && "Project Progress"}
                    </h1>
                    {
                        state && state !== "inprogress" &&
                        <p className="mt-2 text-lg font-bold" style={{color: "#AAAAAA"}}>You can choose any one project that you feel you can complete in 5 days. You will be assigned mentors for each project</p>
                    }

                    <div className="my-8">
                    {
                        state === "selection" && 
                        projects.map((project, index) => (
                            <div key={project.title} className="row-span-5 bg-white rounded-xl mb-8 w-full grid grid-cols-7 md:grid-cols-8">
                                <div className="col-span-7 p-4 md:p-8">
                                    <h3 className="md:text-3xl font-extrabold text-2xl" style={styles.textPrimary}>{project.title}</h3>
                                    <div className="flex gap-2 mt-2 flex-col text-center md:flex-row text-sm md:text-normal">
                                        {
                                            project.tags?.map(tag => (
                                                <div key={tag} className="py-1 px-4 rounded-xl" style={{background: "#C2FFF4"}}><p>{tag}</p></div>
                                            ))
                                        }
                                    </div>
                                    <p className="mt-4">{project.description}</p>
                                </div>
                                <div className="flex md:flex-col text-white font-bold text-lg col-span-7 md:col-span-1">
                                    <a className="flex flex-1 items-center justify-center rounded-bl-xl md:rounded-bl-none md:rounded-tr-xl cursor-pointer" style={{background: "#95C5E2"}} href={project.link} target="_blank">VIEW PS</a>
                                    <a className="text-center flex-1 md:flex-none py-4 px-2 rounded-br-xl cursor-pointer" style={{background: "#0C72B0"}} onClick={() => onChoose(index)}>CHOOSE</a>
                                </div>
                            </div>
                        ))             
                    }
                    </div>

                    {
                        state === "confirmation" && 
                        <div className="bg-white rounded-xl mb-4 md:my-20 shadow-xl md:mx-12">
                            <div className="p-8">
                                <h3 className="md:text-3xl font-extrabold text-2xl" style={styles.textPrimary}><span className="text-red-500">⚠️</span> {confirmProject?.title}</h3>
                                <p className="mt-4 text-lg font-semibold" style={{color: "#AAAAAA"}}>Are you sure you want to choose the project ?</p>
                                <p className="text-lg font-semibold" style={{color: "#AAAAAA"}}>Once you choose the project you can't go back and change the project that you have chosen.</p>
                            </div>
                            <div className="flex text-center text-white font-bold text-lg">
                                <a className="flex-1 p-2 rounded-bl-xl cursor-pointer" style={{background: "#0C72B0"}} onClick={() => selectProject()}>proceed</a>
                                <a className="flex-1 p-2 rounded-br-xl cursor-pointer" style={{background: "#8D989F"}} onClick={() => closeConfirmation()}>close</a>
                            </div>
                        </div>
                    }

                    {
                        state === "inprogress" &&
                        <>
                        <Checkpoints projectData={selectedProject!} />
                        <div className="my-4 flex justify-between text-white">
                            <a className="font-bold float-right px-3 py-2 rounded-xl" style={{background: "#0C72B0"}} href={selectedProject?.taskData.submissionLink} target="_blank">Add Submission</a>
                            <p className="font-bold rounded-xl py-2 px-5 text-center" style={{background: "#0C72B0"}}>{selectedProject?.status}</p>
                        </div>
                        </>
                    }
                </div>
            </div>
        </ProtectedRoute>
      )
}

export default Projects;