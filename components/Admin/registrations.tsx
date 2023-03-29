import React, { ChangeEvent, FormEvent, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import SideNav from "./sidenav";
import styles from "./styles";
import Notifications from "./notifications";
import ProtectedRoute from "./ProtectedRoute";


const Registrations = () => {
    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;
        setState({ ...state, [id]: value })
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (state.email === "" )
        console.log(state)
    }

    return (
        <ProtectedRoute>
            <div className="grid grid-cols-12 h-screen" style={{background: "#EFEFEF"}}>
                <div className="col-span-9 px-12 flex flex-col">
                    <h1 className="text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>Registrations</h1>
                    <div className="grid grid-cols-9 grid-rows-10 gap-8 my-8 flex-1">
                        <div className="col-span-3 row-span-4 bg-white rounded-xl py-4">
                            <h1 className="text-7xl text-center font-extrabold" style={{color: "#0C72B0"}}>45</h1>
                            <div className="text-center mt-4">
                                <FontAwesomeIcon icon={faCheck} size="2x" style={styles.textSecondary} />
                            </div>
                            <h3 className="text-2xl text-center font-bold mt-2" style={styles.textSecondary}>Registered</h3>
                        </div>
                        <div className="col-span-6 row-span-6 bg-white rounded-xl py-4 px-6 relative">
                            <h1 className="text-3xl font-bold" style={styles.textPrimary}>Add Registration</h1>
                            <div className="mt-4">
                                <label className="block text-gray-600">Enter Registered Email ID(s)</label>
                                <input type="email" id="email" className="block w-full focus:outline-none bottom-border text-lg pt-2" placeholder="xyz@abc.com" value={state.email} onChange={onChange} required />
                            </div>
                            <button className="p-4 block w-40 rounded-3xl text-white absolute bottom-5" style={{background: "#0C72B0"}}>Add</button>
                        </div>
                        {/* Notification Panel */}
                        <Notifications />
                        <div className="col-span-6 row-span-4 bg-white rounded-xl pt-4 px-6">
                            <h1 className="text-3xl font-bold" style={styles.textGray}>Remove Registration</h1>
                            <div className="mt-4">
                                <label className="block text-gray-600" style={styles.textGray}>Enter Registered Email ID</label>
                                <input type="email" id="email" className="block w-full focus:outline-none bottom-border text-lg pt-2" placeholder="xyz@abc.com" value={state.email} onChange={onChange} required />
                            </div>
                            <button className="p-4 block w-40 rounded-3xl text-white mt-8" style={{background: "#8D989F"}}>Remove</button>
                        </div>
                    </div>
                </div>
                <SideNav />
            </div>
        </ProtectedRoute>
      )
}

export default Registrations;