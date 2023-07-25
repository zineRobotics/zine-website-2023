import React, { ChangeEvent, FormEvent, useState } from "react";
import SideNav from "../sidenav";
import styles from "../styles";
import { useForm } from "react-hook-form";
import {db,storage} from '../../../firebase';
import { collection, addDoc } from "firebase/firestore";
import ProtectedRoute from "./ProtectedRoute";
import ToastMessage from "../toastMessage";


interface ITaskForm {
    title: string;
    type: "Team" | "Individual";
    link: "";
    subheading: "";
    description: string;
    dueDate: "";
    mentors: "";
    createRoom: boolean;
    roomName?: string;
}

const validateEmail = (emailids: string) => {
    for (const email of emailids) {
        if (!/^20\d\d((kucp)|(kuec)|(ucp)|(uec)|(uee)|(uch)|(ume)|(uce)|(umt))\d{4}@((mnit)|(iiitkota)).ac.in$/g.test(email)) return false
    }
    return true
}

const Tasks = () => {
    const [message, setMessage] = useState("")

    const { register, watch, handleSubmit } = useForm<ITaskForm>()
    // const watchType = watch('type', 'Individual')
    const watchCreateRoom = watch('createRoom', false)

    const tasksCollection = collection(db, "tasks");

    const onSubmit = (data: ITaskForm) => {
        const { mentors, ...formData } = data
        const mentorsArray = mentors.split(/[\s,]+/g)
        // getUserEmailIn().docs.map(d => d.ref)
        // if (createRoom == false && roomName) roomid = getRoom(roomName)
        
        addDoc(tasksCollection, { mentors: mentorsArray, ...formData })
        .then((docRef) => {
            //setMessage("Event successfuly created!")
            console.log("Document written with ID: ", docRef.id);
            setMessage("Task created successfully")
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    return (
        <ProtectedRoute>
            <ToastMessage message={message} setMessage={setMessage} />
            <div className="grid grid-cols-12 h-screen" style={{background: "#EFEFEF"}}>
                <div className="col-span-9 px-12 flex flex-col">
                    <h1 className="text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>Tasks</h1>
                    <div className="row-span-5 bg-white rounded-xl py-4 px-6 my-8 w-full">
                        <h1 className="text-2xl font-bold" style={styles.textPrimary}>Create Task</h1>
                        <div className="grid grid-cols-5 gap-6 mt-4">
                            <div className="col-span-3">
                                <label className="block text-gray-600 text-sm">Task Name</label>
                                <input type="text" id="name" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('title', {required: true})} />
                            </div>
                            <div className="col-span-3">
                                <label className="block text-gray-600 text-sm">Task Subheading</label>
                                <input type="text" id="name" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('subheading', {required: true})} />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-gray-600 text-sm">Type</label>
                                <select id="type" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('type')}>
                                    <option>Individual</option>
                                    <option>Team</option>
                                </select>
                            </div>

                            <div className="col-span-5">
                                <label className="block text-gray-600 text-sm">Task Description</label>
                                <textarea id="description" className="block w-full focus:outline-none bottom-border pt-2 px-1" rows={1} {...register('description', {required: true})}></textarea>
                            </div>

                            <div className="col-span-3">
                                <label className="block text-gray-600 text-sm">Mentor Email IDs (upto 30, comma seperated)</label>
                                <input type="text" id="mentors" className="block w-full focus:outline-none bottom-border pt-2 px-1" placeholder="2021ucp1011@mnit.ac.in, 2021ucp1013@mnit.ac.in" {...register('mentors', {required: true, validate: validateEmail})} />
                            </div>
                            {/* {
                                watchType === 'Team' && <div className="col-span-2">
                                    <label className="block text-gray-600 text-sm">Team Name</label>
                                    <input type="text" id="team" className="block w-full focus:outline-none bottom-border pt-2" {...register('team', {required: true})} />
                                </div>
                            } */}
                            <div className="col-span-3">
                                <label className="block text-gray-600 text-sm">Due Date</label>
                                <input type="date" id="dueDate" className="block w-full focus:outline-none bottom-border pt-2" {...register('dueDate', {required: true})} />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-gray-600 text-sm">Link</label>
                                <input type="text" id="link" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('link', {required: true})} />
                            </div>
                            <div className="col-span-3 flex items-center">
                                <input type="checkbox" {...register('createRoom', {required: true})}></input>
                                <label className="ml-8">Automatically Create Room?</label>
                            </div>
                            {
                            watchCreateRoom === true && <div className="col-span-2">
                                <label className="block text-gray-600 text-sm">Default Room Name</label>
                                <input type="text" className="block w-full focus:outline-none bottom-border pt-2" {...register('roomName', {required: true})} />
                            </div>
                            }
                            {
                            watchCreateRoom === false && <div className="col-span-2">
                                <label className="block text-gray-600 text-sm">Existing Room Name</label>
                                <input type="text" className="block w-full focus:outline-none bottom-border pt-2" {...register('roomName', {required: true})} />
                            </div>
                            }

                        </div>
                        <button className="p-3 block w-40 rounded-3xl text-white mt-8" style={{background: "#0C72B0"}} onClick={handleSubmit(onSubmit)}>Create</button>
                    </div>
                </div>
                <SideNav />
            </div>
        </ProtectedRoute>
      )
}

export default Tasks;