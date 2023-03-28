import React, { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import SideNav from "./sidenav";
import styles from "./styles";
import { useForm } from "react-hook-form";
import {db,storage} from '../../firebase';
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/router";

interface ITaskForm {
    name: string;
    description: string;
    taskType: "Team" | "Individual" ;
    members: "";
    team: "";
    dueDate: "";
    link: "";
}

const validateEmail = (emailids: string) => {
    for (const email of emailids) {
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email) || !['mnit.ac.in', 'iiitk.ac.in'].includes(email.split('@').pop()!)) return false
    }
    return true
}

const Tasks = () => {
    const { register, watch, handleSubmit } = useForm<ITaskForm>()
    const watchType = watch('taskType', 'Individual')

    const router = useRouter();
    const tasksCollection = collection(db, "tasks");

    const onSubmit = (data: ITaskForm) => {
        const { members, ...formData } = data
        const membersArray = members.split(',')
        addDoc(tasksCollection, { members: membersArray, ...formData })
        .then((docRef) => {
            //setMessage("Event successfuly created!")
            console.log("Document written with ID: ", docRef.id);
            localStorage.setItem('message', 'Task created successfully')
            router.push("/admin/dashboard")
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    return (
        <div className="grid grid-cols-12 h-screen" style={{background: "#EFEFEF"}}>
            <div className="col-span-9 px-12 flex flex-col">
                <h1 className="text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>Tasks</h1>

                <div className="row-span-5 bg-white rounded-xl py-4 px-6 my-8 w-full">
                    <h1 className="text-2xl font-bold" style={styles.textPrimary}>Create Task</h1>

                    <div className="grid grid-cols-5 gap-6 mt-4">
                        <div className="col-span-3">
                            <label className="block text-gray-600 text-sm">Task Name</label>
                            <input type="text" id="name" className="block w-full focus:outline-none bottom-border pt-2" {...register('name', {required: true})} />
                        </div>
                        <div className="col-span-3">
                            <label className="block text-gray-600 text-sm">Task Description</label>
                            <input type="text" id="description" className="block w-full focus:outline-none bottom-border pt-2" {...register('description', {required: true})} />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-gray-600 text-sm">Type</label>
                            <select id="type" className="block w-full focus:outline-none bottom-border pt-2" {...register('taskType')}>
                                <option>Individual</option>
                                <option>Team</option>
                            </select>
                        </div>

                        <div className="col-span-3">
                            <label className="block text-gray-600 text-sm">Members</label>
                            <input type="text" id="members" className="block w-full focus:outline-none bottom-border pt-2" {...register('members', {required: true, validate: validateEmail})} />
                        </div>
                        {
                            watchType === 'Team' && <div className="col-span-2">
                                <label className="block text-gray-600 text-sm">Team Name</label>
                                <input type="text" id="team" className="block w-full focus:outline-none bottom-border pt-2" {...register('team', {required: true})} />
                            </div>
                        }

                        <div className="col-span-3">
                            <label className="block text-gray-600 text-sm">Due Date</label>
                            <input type="date" id="dueDate" className="block w-full focus:outline-none bottom-border pt-2" {...register('dueDate', {required: true})} />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-gray-600 text-sm">Submission Link</label>
                            <input type="text" id="link" className="block w-full focus:outline-none bottom-border pt-2" {...register('link', {required: true})} />
                        </div>
                    </div>
                    <button className="p-3 block w-40 rounded-3xl text-white mt-8" style={{background: "#0C72B0"}} onClick={handleSubmit(onSubmit)}>Create</button>
                </div>
            </div>

            <SideNav />
        </div>
      )
}

export default Tasks;