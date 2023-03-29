import React from "react";
import SideNav from "./sidenav";
import styles from "./styles";
import {db,storage} from '../../firebase';
import { collection, addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import ProtectedRoute from "./ProtectedRoute";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const eventTypes = ["Workshop", "Meeting", "Discussion", "Showcase", "Exhibition"] as const
interface IEventForm {
    name: string;
    description: string;
    eventType: typeof eventTypes[number];
    venue: string;
    date: string;
    time: string;
}

const Announcements = () => {

    return (
        <ProtectedRoute>
            <div className="grid grid-cols-12 h-screen overflow-y-scroll" style={{background: "#EFEFEF"}}>
                <div className="col-span-9 px-12 flex flex-col">
                    <h1 className="text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>Announcements</h1>
                    <p className="mt-8 text-gray-500">Create Announcement</p>
                    <div className="bg-white rounded-xl py-4 px-6 mt-2 w-full flex items-center">
                        <input type="text" id="name" className="block w-full focus:outline-none bottom-border pt-2 mr-5"  />
                        <FontAwesomeIcon icon={faPaperPlane}/>
                    </div>

                    <p className="mt-8 text-gray-500">Previous Announcements</p>
                    <div>
                        <div className="bg-white rounded-xl py-4 px-6 mt-2 w-full">
                            <p>Hello world</p>
                        </div>
                        <div className="bg-white rounded-xl py-4 px-6 mt-2 w-full">
                            <p>Hello world</p>
                        </div>
                    </div>
                </div>
                <SideNav />
            </div>
        </ProtectedRoute>
      )
}

export default Announcements;