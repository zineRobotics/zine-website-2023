import React, { useEffect, useState } from "react";
import SideNav from "../sidenav";
import styles from "../../../constants/styles";
import { useForm } from "react-hook-form";
import ProtectedRoute from "./ProtectedRoute";
import { ToastContainer, toast } from "react-toastify";
import { IEventData, createEvent, deleteEvent, editEvent, eventTypes, fetchEvents } from "../../../apis/events";
import { deleteImage, uploadImage } from "../../../apis/image";

interface IEventForm {
    name: string;
    description: string;
    eventType: typeof eventTypes[number];
    venue: string;
    date: Date;
    time: string;
    id: string;
    recruitment: boolean;
    isHeading: boolean;
    stage: number;
    image: any;
    imagepath: string;
}

const Events = () => {
    const [events, setEvents] = useState<IEventForm[]>([])
    const [state, setState] = useState({ search: "", editing: false, editingID: "" })

    const { register, setValue, reset, formState: {errors}, handleSubmit } = useForm<IEventForm>({
        defaultValues: {
            isHeading: false,
            stage: 0,
            recruitment: false,
        }
    })
    const onSubmit = async(data: IEventForm) => {
        console.log("data: ",data);
        if (data.image[0]){
            var imageName = new Date().getTime().toString()
            data.imagepath = `/events/${imageName}`
            var imagelink = await uploadImage(data.image[0], data.imagepath)
            data.image = imagelink
        }
        else{
            data.image = ""
            data.imagepath= ""
        }
        const { date, time, ...formdata } = data
        const eventData = { ...formdata, timeDate: new Date(`${date.toLocaleDateString('en-CA')} ${time}`) }
        reset()
        createEvent(eventData).then((res) => {
            toast.success("Created event successfully")
            setEvents(oldEvents => [ ...oldEvents, data])
        }).catch((error) => {
            console.log(error)
            toast.error("Error adding document: ", error);
        });
    }

    useEffect(() => {
        // if (events) return
        fetchEvents().then(res => {
            const fetchedEvents: IEventForm[] = []

            res.forEach(d => {
                const data = d.data() as IEventData
                const date = new Date(data.timeDate.seconds * 1000)
                fetchedEvents.push({...data, date: date, time: date.toTimeString().substring(0,5), id: d.id})
            })
            setEvents(fetchedEvents)
            console.log(fetchedEvents)
        })
    }, [])

    const eventRemove = async (event: IEventForm) => {
        toast.promise(deleteEvent(event.id), {
            pending: 'Deleting Event',
            success: `Event ${event.name} deleted successfully`,
        }).then(() => {
            setEvents(events.filter(t => t.id !== event.id))
        })
    }

    const eventEdit = async (event: IEventForm) => {
        setValue("name", event.name)
        setValue("description", event.description)
        // @ts-ignore
        setValue("date", event.date.toLocaleDateString('en-CA'))
        setValue("time", event.time)
        setValue("venue", event.venue)
        setValue("eventType", event.eventType)
        setValue("imagepath", event.imagepath)
        setValue("stage", event.stage)

        setState({ ...state, editing: true, editingID: event.id })
    }

    const onEdit = async (data: IEventForm) => {
        var imageexists = data.image[0]
        data.image = ""
        if (imageexists){
            if(data.imagepath) deleteImage(data.imagepath)
            var imageName = new Date().getTime().toString()
            data.imagepath = `/events/${imageName}`
            var imagelink = await uploadImage(imageexists, data.imagepath)
            data.image = imagelink
        }
        const { date, time, ...formdata } = data
        const eventData = { ...formdata, timeDate: new Date(`${date.toLocaleDateString('en-CA')} ${time}`) }
        reset()
        editEvent(state.editingID, eventData).then((res) => {
            toast.success("Edited event successfully")
            setEvents(oldEvents => [...oldEvents.filter(e => e.id !== state.editingID), data])
        }).catch((error) => {
            console.log(error)
            toast.error("Error adding document: ", error);
        });
    }

    const onCancel = () => {
        setState({ ...state, editing: false, editingID: "" })
        reset()
    }

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setState({ ...state, search: e.target.value })
    }


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
            <div className="grid grid-cols-12 h-screen" style={{background: "#EFEFEF"}}>
                <div className="col-span-12 px-6 md:px-12 flex flex-col overflow-y-scroll md:col-span-9">
                    <h1 className="text-4xl font-bold mt-16 md:mt-8" style={{color: "#AAAAAA"}}>Events</h1>
                    <div className="row-span-5 bg-white rounded-xl py-4 px-6 my-8 w-full">
                    <h1 className="text-2xl font-bold" style={styles.textPrimary}>{state.editing ? "Edit Event" : "Create Event"}</h1>
                    <div className="grid grid-cols-5 gap-6 mt-4">
                        <div className="col-span-3">
                            <label className="block text-gray-600 text-sm">Event Name<span className="text-red-500">*</span></label>
                            <input type="text" id="name" className="block w-full focus:outline-none bottom-border pt-2" {...register("name", {required: true})} />
                            {errors.name && <p className="text-red-500 text-sm" role="alert">Event name is required</p>}
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
                        <div className="col-span-5">
                            <label className="block text-gray-600 text-sm">Event Description<span className="text-red-500">*</span></label>
                            <textarea id="description" className="block w-full focus:outline-none bottom-border pt-2" rows={1} {...register("description", {required: true})}></textarea>
                            {errors.description && <p className="text-red-500 text-sm" role="alert">Description is required</p>}
                        </div>
                        <div className="col-span-3">
                            <label className="block text-gray-600 text-sm">Event Location<span className="text-red-500">*</span></label>
                            <input type="text" id="location" className="block w-full focus:outline-none bottom-border pt-2" {...register("venue", {required: true})} />
                            {errors.venue && <p className="text-red-500 text-sm" role="alert">Venue is required</p>}
                        </div>
                        <div className="col-span-3">
                            <label className="block text-gray-600 text-sm">Event Date<span className="text-red-500">*</span></label>
                            <input type="date" id="date" className="block w-full focus:outline-none bottom-border pt-2" {...register("date", {required: true, valueAsDate: true})} />
                            {errors.date && <p className="text-red-500 text-sm" role="alert">Date is required</p>}
                        </div>
                        <div className="col-span-2">
                            <label className="block text-gray-600 text-sm">Event Time<span className="text-red-500">*</span></label>
                            <input type="time" id="time" className="block w-full focus:outline-none bottom-border pt-2" {...register("time", {required: true})} />
                            {errors.time && <p className="text-red-500 text-sm" role="alert">Time is required</p>}
                        </div>
                        <div className="col-span-1">
                            <label className=" text-gray-600 text-sm">Recruitment</label>
                            <input type="checkbox" id="recruitment" className="" {...register("recruitment")}></input>
                        </div>
                        <div className="col-span-1">
                            <label className=" text-gray-600 text-sm">isHeading</label>
                            <input type="checkbox" id="isHeading" className="" {...register("isHeading")}></input>
                        </div>
                        <div className="col-span-1">
                            <label className="block text-gray-600 text-sm">Stage</label>
                            <select id="stage" className="block w-full focus:outline-none bottom-border pt-2" {...register("stage", {required: true, valueAsNumber: true})}>
                                <option value={0}>0</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                            <label className="block text-gray-600 text-sm">Image</label>
                            <input type="file" id="image" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('image', { required: false })} />
                        </div>

                    </div>
                    {/* <button className="p-3 block w-40 rounded-3xl text-white mt-8" style={{background: "#0C72B0"}} onClick={handleSubmit(onSubmit)}>Create</button> */}
                    {
                        !state.editing ? 
                            <button className="p-3 block w-40 rounded-3xl text-white mt-8" style={{background: "#0C72B0"}} onClick={handleSubmit(onSubmit)}>Create</button> :
                            <div className="text-white mt-8 flex gap-2">
                                <button className="p-3 block w-40 rounded-3xl" style={{background: "#0C72B0"}} onClick={handleSubmit(onEdit)}>Edit</button>
                                <button className="p-3 block w-40 rounded-3xl bg-red-500" onClick={() => onCancel()}>Cancel</button>
                            </div>
                    }
                </div>
                    {/* <eventEdit setMessage={setMessage} /> */}
                <div className="bg-white py-4 px-6 mb-8 rounded-xl">
                    <h1 className="text-2xl font-bold" style={styles.textPrimary}>Search Events</h1>

                    <div className="grid grid-cols-6 gap-4">
                            <div className="col-span-4 flex flex-col">
                                {/* <label className="text-gray-500">Search</label> */}
                                <input id="search" type="text" className="text-lg pt-2 bottom-border focus:outline-none" onChange={onSearchChange} placeholder="Search name or venue" value={state?.search}/>
                            </div>

                            {/* <button className="p-2 mt-4 text-white rounded-xl" style={{background: "#0C72B0"}}>Search</button> */}
                    </div>
                    <table className="table-auto w-full mt-8 text-center">
                            <thead>
                                <tr className="text-left">
                                    <th className="border p-1">S.No</th>
                                    <th className="border p-1">Name</th>
                                    <th className="border p-1">Type</th>
                                    <th className="border p-1">Date</th>
                                    <th className="border p-1">Venue</th>
                                    <th className="border p-1">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    events
                                    .filter(u => !state.search || u.name.toLowerCase().includes(state.search!.toLowerCase()) || u.venue?.toLowerCase().includes(state.search!.toLowerCase()))
                                    .sort((a, b) => a.date.getTime() - b.date.getTime())
                                    .map((u,index) => (
                                        <tr key={u.name} className="text-left border-black">
                                            <td className="border p-1">{index + 1}</td>
                                            <td className="border p-1">{u.name}</td>
                                            <td className="border p-1">{u.eventType}</td>
                                            <td className="border p-1">{u.date.toLocaleDateString('en-CA')}</td>
                                            <td className="border p-1">{u.venue}</td>
                                            <td className="border p-1">
                                                <button className="bg-yellow-500 text-white py-1 px-4 rounded-lg" onClick={() => eventEdit(u)}>Edit</button>
                                                <button className="bg-red-500 text-white py-1 px-4 rounded-lg ml-2" onClick={() => eventRemove(u)}>Delete</button>

                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        { !events.length && <p className="text-center text-xl mt-4">No results found</p>}
                    </div>
                </div>
                <SideNav />
            </div>
        </ProtectedRoute>
      )
}

export default Events;