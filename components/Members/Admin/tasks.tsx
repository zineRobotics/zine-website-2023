import React, { useEffect, useState } from "react";
import SideNav from "../sidenav";
import styles from "../../../constants/styles";
import ProtectedRoute from "./ProtectedRoute";
import { ToastContainer, toast } from "react-toastify";
import TaskForm from "./tasks-components/taskForm";
import TaskInstanceForm from "./tasks-components/taskInstanceForm";

interface ITaskInstanceForm {
    completionPercentage: number;
    status: "Not Started" | "In Progress" | "Completed";
    name: string;
}
interface IAssignState {
    input: string;
    emails: string[];
}

const Tasks = () => {
    const [state, setState] = useState<number|null>(null) //indicates Task Id for instance form & null for task form

    return (
        <ProtectedRoute>
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        <div className="grid grid-cols-12 h-screen" style={{ background: "#EFEFEF" }}>
        {   (state === null)?
            <TaskForm 
                state={state}
                setState={setState}
            />
            :
            <TaskInstanceForm 
                state={state}
                setState={setState}
            />
        }
            <SideNav/>
        </div>
        </ProtectedRoute>
    )
}

export default Tasks;