import React from "react";
import SideNav from "./sidenav";
import styles from "./styles";
import {db,storage} from '../../firebase';
import { collection, addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import ProtectedRoute from "./ProtectedRoute";

const eventTypes = ["Workshop", "Meeting", "Discussion", "Showcase", "Exhibition"] as const
interface IEventForm {
    name: string;
    description: string;
    eventType: typeof eventTypes[number];
    venue: string;
    date: string;
    time: string;
}

const Events = () => {
    const { register, setError, formState: {errors}, handleSubmit } = useForm<IEventForm>()

    const eventsCollection = collection(db, "events");
    const router = useRouter()
    const onSubmit = (data: IEventForm) => {
        const { date, time, ...formdata } = data
        const timeDate = new Date(`${date} ${time}`)

        addDoc(eventsCollection, { timeDate, ...formdata })
        .then((docRef) => {
            //setMessage("Event successfuly created!")
            console.log("Document written with ID: ", docRef.id);
            localStorage.setItem('message', 'Event created successfully')
            router.push("/admin/dashboard")
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    return (
        <ProtectedRoute>
            <div className="grid grid-cols-12 h-screen overflow-y-scroll" style={{background: "#EFEFEF"}}>
                <div className="col-span-9 px-12 flex flex-col">
                    <h1 className="text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>Events</h1>
                    <div className="row-span-5 bg-white rounded-xl py-4 px-6 my-8 w-full">
                        <h1 className="text-2xl font-bold" style={styles.textPrimary}>Create Event</h1>
                        <div className="grid grid-cols-5 gap-6 mt-4">
                            <div className="col-span-3">
                                <label className="block text-gray-600 text-sm">Event Name</label>
                                <input type="text" id="name" className="block w-full focus:outline-none bottom-border pt-2" {...register("name", {required: true})} />
                            </div>
                            <div className="col-span-3">
                                <label className="block text-gray-600 text-sm">Event Description</label>
                                <input type="text" id="description" className="block w-full focus:outline-none bottom-border pt-2" {...register("description", {required: true})} />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-gray-600 text-sm">Type</label>
                                <select id="type" className="block w-full focus:outline-none bottom-border pt-2" {...register("eventType")}>
                                    {
                                        eventTypes.map(event => (
                                            <option key={event}>{event}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="col-span-3">
                                <label className="block text-gray-600 text-sm">Event Location</label>
                                <input type="text" id="location" className="block w-full focus:outline-none bottom-border pt-2" {...register("venue", {required: true})} />
                            </div>
                            <div className="col-span-3">
                                <label className="block text-gray-600 text-sm">Event Date</label>
                                <input type="date" id="date" className="block w-full focus:outline-none bottom-border pt-2" {...register("date", {required: true})} />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-gray-600 text-sm">Event Time</label>
                                <input type="time" id="time" className="block w-full focus:outline-none bottom-border pt-2" {...register("time", {required: true})} />
                            </div>
                        </div>
                        <button className="p-3 block w-40 rounded-3xl text-white mt-8" style={{background: "#0C72B0"}} onClick={handleSubmit(onSubmit)}>Create</button>
                    </div>
                </div>
                <SideNav />
            </div>
        </ProtectedRoute>
      )
}

export default Events;