import React, { ChangeEvent, FormEvent, useState } from "react";
import SideNav from "../sidenav";
import styles from "../styles";
import {db,storage} from '../../../firebase';
import { collection, getDocs, query, updateDoc, where, writeBatch } from "firebase/firestore";
import ProtectedRoute from "./ProtectedRoute";
import ToastMessage from "../toastMessage";


interface ITaskForm {
    name: string;
    description: string;
    taskType: "Team" | "Individual" ;
    members: "";
    team: "";
    dueDate: "";
    link: "";
}

const Tasks = () => {
    const [message, setMessage] = useState("")
    const [state, setState] = useState("")
    const users = collection(db, "users");

    const onSubmit = async () => {
        const batch = writeBatch(db)
        const emails = state.toLowerCase().split(' ')
        console.log(emails)
        let count = 0;
        emails.map(async e => {
            const snapshots = await getDocs(query(users, where("email", "==", e)))
            snapshots.forEach(d => {
                console.log(d.data().email)
                count ++
                updateDoc(d.ref, {
                    roles: ["stage4"]
                })
            })
        })

        console.log(count)
    }

    return (
        <ProtectedRoute>
            <ToastMessage message={message} setMessage={setMessage} />
            <div className="grid grid-cols-12 h-screen" style={{background: "#EFEFEF"}}>
                <div className="col-span-9 px-12 flex flex-col">
                    <h1 className="text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>Tasks</h1>
                    <input type="text" value={state} onChange={(e) => setState(e.target.value)}/>
                    <button className="bg-blue-500 p-4" onClick={onSubmit}>Submit</button>
                </div>
                <SideNav />
            </div>
        </ProtectedRoute>
      )
}

export default Tasks;