import React, { useEffect, useState } from "react";
import SideNav from "../sidenav";
import styles from "../styles";
import {db,storage} from '../../../firebase';
import { collection, addDoc, getDocs, updateDoc, query, where } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import ProtectedRoute from "./ProtectedRoute";
import ToastMessage from "../toastMessage";

const eventTypes = ["Workshop", "Meeting", "Discussion", "Showcase", "Exhibition"] as const
interface IEventForm {
    name: string;
    description: string;
    eventType: typeof eventTypes[number];
    venue: string;
    date: string;
    time: string;
}

interface IEventData {
    name: string;
    description: string;
    eventType: typeof eventTypes[number];
    stage: number;
    venue: string;
    timeDate: {seconds: number, nanoseconds: number};
}

interface IEventCard {
    setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const CreateEvent = ({ setMessage }: IEventCard) => {
    const { register, setError, formState: {errors}, handleSubmit } = useForm<IEventForm>()
    const eventsCollection = collection(db, "events");
    const onSubmit = (data: IEventForm) => {
        const { date, time, ...formdata } = data
        const timeDate = new Date(`${date} ${time}`)

        addDoc(eventsCollection, { timeDate, ...formdata })
        .then((docRef) => {
            setMessage("Created event successfully")
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    return (
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
    )
}

const EditEvent = ({ setMessage }: IEventCard) => {
    const { register, setValue, setError, formState: {errors}, handleSubmit } = useForm<IEventForm>()
    const [events, setEvents] = useState<IEventForm[]>([])
    const [selected, setSelected] = useState(0)
    const eventsCollection = collection(db, "events");

    const onSubmit = async (data: IEventForm) => {
        const {time, date, ...event} = data
        const res = await getDocs(query(eventsCollection, where("name", "==", events[selected].name)))
        const promises: Promise<void>[] = []
        res.forEach(d => {
            promises.push(updateDoc(d.ref, {
                timeDate: new Date(`${date} ${time}`),
                ...event
            }))
        })

        await Promise.all(promises)
        setMessage("Updated event successfully")
    }

    const setFormValues = (event: IEventForm) => {
        setValue('name', event.name)
        setValue('description', event.description)
        setValue('eventType', event.eventType)
        setValue('venue', event.venue)
        setValue('date', event.date)
        setValue('time', event.time)
    }

    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const v = parseInt(e.target.value)
        setSelected(parseInt(e.target.value))
        setFormValues(events[v])
    }

    useEffect(() => {
        getDocs(eventsCollection).then(res => {
            const rawevents: IEventData[] = []

            res.forEach(d => rawevents.push(d.data() as IEventData))
            const fetchedevents = rawevents.map(({timeDate, ...e}) => {
                const date = new Date(timeDate.seconds * 1000)
                return {...e, date: date.toLocaleDateString('en-CA'), time: date.toTimeString().substring(0,5)}
            })
            setEvents(fetchedevents)
            setFormValues(fetchedevents[0])
            console.log(fetchedevents)
        })
    }, [])

    return (
        <div className="row-span-5 bg-white rounded-xl py-4 px-6 my-8 w-full">
            <h1 className="text-2xl font-bold" style={styles.textPrimary}>Edit Event</h1>
            <div className="grid grid-cols-5 gap-6 mt-4">
                <div className="col-span-5">
                    <label className="block text-gray-600 text-sm">Select Event</label>
                    <select className="block w-full focus:outline-none bottom-border pt-2" value={selected} onChange={onSelectChange}>
                        {
                            events.map((e, id) => (
                                <option key={e.name} value={id}>{e.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-span-3">
                    <label className="block text-gray-600 text-sm">Event Name</label>
                    <input type="text" id="name" className="block w-full focus:outline-none bottom-border pt-2" {...register("name", {required: true})}/>
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
            <button className="p-3 block w-40 rounded-3xl text-white mt-8" style={{background: "#0C72B0"}} onClick={handleSubmit(onSubmit)}>Edit</button>
        </div>
    )
}

const Events = () => {
    const [message, setMessage] = useState("")

    return (
        <ProtectedRoute>
            <div className="grid grid-cols-12 h-screen" style={{background: "#EFEFEF"}}>
                <ToastMessage message={message} setMessage={setMessage} />
                <div className="col-span-9 px-12 flex flex-col overflow-y-scroll">
                    <h1 className="text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>Events</h1>
                    <CreateEvent setMessage={setMessage} />
                    <EditEvent setMessage={setMessage} />
                </div>
                <SideNav />
            </div>
        </ProtectedRoute>
      )
}

export default Events;