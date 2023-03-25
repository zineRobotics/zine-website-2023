import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import SideNav from "./sidenav";
import styles from "./styles";


const Tasks = () => {
    const [state, setState] = useState({
        name: "",
        description: "",
        type: "",
        members: "",
        team: "",
        dueDate: "",
        link: ""
    })

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {id, value} = e.target;
        setState({ ...state, [id]: value })
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
                            <input type="text" id="name" className="block w-full focus:outline-none bottom-border pt-2" value={state.name} onChange={onChange} required />
                        </div>
                        <div className="col-span-3">
                            <label className="block text-gray-600 text-sm">Task Description</label>
                            <input type="text" id="description" className="block w-full focus:outline-none bottom-border pt-2" value={state.description} onChange={onChange} required />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-gray-600 text-sm">Type</label>
                            <select id="type" className="block w-full focus:outline-none bottom-border pt-2" value={state.type} onChange={onChange}>
                                <option>Individual</option>
                                <option>Team</option>
                            </select>
                        </div>

                        <div className="col-span-3">
                            <label className="block text-gray-600 text-sm">Members</label>
                            <input type="text" id="members" className="block w-full focus:outline-none bottom-border pt-2" value={state.members} onChange={onChange} required />
                        </div>
                        {
                            state.type === "Team" && <div className="col-span-2">
                                <label className="block text-gray-600 text-sm">Team Name</label>
                                <input type="text" id="team" className="block w-full focus:outline-none bottom-border pt-2" value={state.team} onChange={onChange} required />
                            </div>
                        }

                        <div className="col-span-3">
                            <label className="block text-gray-600 text-sm">Due Date</label>
                            <input type="date" id="dueDate" className="block w-full focus:outline-none bottom-border pt-2" value={state.dueDate} onChange={onChange} required />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-gray-600 text-sm">Submission Link</label>
                            <input type="text" id="link" className="block w-full focus:outline-none bottom-border pt-2" value={state.link} onChange={onChange} required />
                        </div>
                    </div>
                    <button className="p-3 block w-40 rounded-3xl text-white mt-8" style={{background: "#0C72B0"}}>Create</button>
                </div>
            </div>

            <SideNav />
        </div>
      )
}

export default Tasks;