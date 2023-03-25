import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCalendar, faUsers, faVolumeOff, faMessage, faListCheck } from "@fortawesome/free-solid-svg-icons";
import SideNav from "./sidenav";
import styles from "./styles";


const Users = () => {
    const [state, setState] = useState({
        email: "",
        name: ""
    })

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;
        setState({ ...state, [id]: value })
    }

    return (
        <div className="grid grid-cols-12 h-screen" style={{background: "#EFEFEF"}}>
            <div className="col-span-9 px-12 flex flex-col">
                <h1 className="text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>Users And Channels</h1>

                <div className="grid grid-rows-10 gap-8 my-8 flex-1">
                    <div className="row-span-5 bg-white rounded-xl py-4 px-6 w-full">
                        <h1 className="text-2xl font-bold" style={styles.textPrimary}>Add user to channel</h1>
                        <div className="mt-4">
                            <label className="block text-gray-600 text-sm">Email Address</label>
                            <input type="email" id="email" className="block w-full focus:outline-none bottom-border pt-2" placeholder="xyz@abc.com" value={state.email} onChange={onChange} required />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-600 text-sm">Channel Name</label>
                            <input type="name" id="name" className="block w-full focus:outline-none bottom-border pt-2" value={state.name} onChange={onChange} required />
                        </div>
                        <button className="p-3 block w-40 rounded-3xl text-white mt-6" style={{background: "#0C72B0"}}>Add</button>
                    </div>

                    <div className="row-span-5 bg-white rounded-xl pt-4 px-6">
                        <h1 className="text-2xl font-bold" style={styles.textGray}>Remove user from channel</h1>
                        <div className="mt-4">
                            <label className="block text-gray-600 text-sm" style={styles.textGray}>Email Address</label>
                            <input type="email" id="email" className="block w-full focus:outline-none bottom-border pt-2" placeholder="xyz@abc.com" value={state.email} onChange={onChange} required />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-600 text-sm" style={styles.textGray}>Channel Name</label>
                            <input type="name" id="name" className="block w-full focus:outline-none bottom-border pt-2" value={state.name} onChange={onChange} required />
                        </div>
                        <button className="p-3 block w-40 rounded-3xl text-white mt-4" style={{background: "#8D989F"}}>Remove</button>
                    </div>
                </div>
            </div>

            <SideNav />
        </div>
      )
}

export default Users;