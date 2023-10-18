import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import SideNav from "../sidenav";
import styles from "../../../constants/styles";
import ProtectedRoute from "./ProtectedRoute";
import { ToastContainer, toast } from "react-toastify";
import { createTask, deleteTask, editTask, fetchTasks } from "../../../apis/tasks";
import { Control, useFieldArray, useForm } from "react-hook-form";


interface ITaskForm {
    title: string;
    type: "Team" | "Individual";
    link: "";
    subheading: "";
    description: string;
    submissionLink?: string;
    dueDate: Date;
    mentors: { value: string }[];
    createRoom: boolean;
    roomName?: string;
}

interface ITaskData {
    id: string;
    title: string;
    type: "Team" | "Individual";
    link: "";
    subheading: "";
    description: string;
    submissionLink: string;
    dueDate: Date;
    mentors: string[];
    createRoom: boolean;
    roomName?: string;
}

// const validateEmail = (emailids: string) => {
//     for (const email of emailids) {
//         if (!/^20\d\d((kucp)|(kuec)|(ucp)|(uec)|(uee)|(uch)|(ume)|(uce)|(umt))\d{4}@((mnit)|(iiitkota)).ac.in$/g.test(email)) return false
//     }
//     return true
// }

const EmailListInput = ({ control }: { control: Control<ITaskForm, any> }) => {
    const { fields, append, remove } = useFieldArray({ control, name: 'mentors' });
    const [nextEmail, setNextEmail] = useState('')
    const handleAddEmail = () => {
        if (fields.some(f => f.value === nextEmail)) return
        append({ value: nextEmail });
        setNextEmail("")
    };

    return (
        <div>
            <div className="flex text-sm font-medium flex-wrap gap-1">
                {fields.map((field, index) => (
                    <div key={field.id} className="flex py-1 px-2 rounded-3xl" style={{background: "#C2FFF48A", color: "#0C72B0F2"}}>
                        <input className="font-medium" disabled {...field} />
                        <button className="ml-1" type="button" onClick={() => remove(index)}>✕</button>
                    </div>
                ))}
            </div>
            <div className="flex mt-1">
                <input type='text' className="block w-full focus:outline-none bottom-border pt-2 px-1" value={nextEmail} onChange={(e) => setNextEmail(e.target.value)} />
                <button type="button" className="text-white rounded-md ml-2 px-2 py-1" style={{ background: "#0C72B0" }} onClick={handleAddEmail}>Add</button>
            </div>
        </div>
    );
};


const Tasks = () => {
    const [state, setState] = useState({ search: "", editing: false, editingID: "" })
    const [tasks, setTasks] = useState<ITaskData[]>([])

    const { register, watch, handleSubmit, setValue, reset, control, formState: { errors } } = useForm<ITaskForm>()
    const watchCreateRoom = watch('createRoom', false)

    const onSubmit = async (data: ITaskForm) => {
        const { mentors, submissionLink, ...formData } = data
        const mentorsArray = mentors.map(m => m.value)

        createTask({ submissionLink: submissionLink || "", mentors: mentorsArray, ...formData }).then(task => {
            toast.success("Task successfully created!")
            console.log("Task created:", task.id)
        }).catch((err) => {
            console.log(err)
            toast.error("An error occurred. Contact zine team")
        })
    }

    const onEdit = async (data: ITaskForm) => {
        const { mentors, submissionLink, ...formData } = data
        const mentorsArray = mentors.map(m => m.value)

        editTask(state.editingID, { submissionLink: submissionLink || "", mentors: mentorsArray, ...formData }).then(task => {
            toast.success("Task successfully edited!")
        }).catch((err) => {
            console.log(err)
            toast.error("An error occurred. Contact zine team")
        })
    }

    const onCancel = () => {
        setState({ ...state, editing: false, editingID: "" })
        reset()
    }

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    const taskDelete = async (task: ITaskData) => {
        toast.promise(deleteTask(task.id), {
            pending: 'Deleting Task',
            success: `Task ${task.title} deleted successfully`,
        }).then(() => {
            setTasks(tasks.filter(t => t.id !== task.id))
        })
    }

    const taskEdit = async (task: ITaskData) => {
        setValue("title", task.title)
        setValue("description", task.description)
        setValue("subheading", task.subheading)
        // @ts-ignore
        setValue("dueDate", task.dueDate.toLocaleDateString('en-CA'))
        setValue("createRoom", task.createRoom)
        setValue("submissionLink", task.submissionLink)
        setValue("link", task.link)
        setValue("mentors", task.mentors.map(m => ({ value: m })))
        setValue("type", task.type)
        setValue("roomName", task.roomName)

        setState({ ...state, editing: true, editingID: task.id })
    }

    useEffect(() => {
        fetchTasks().then(res => {
            const tasks = res.docs.map(d => {
                const { dueDate, ...data } = d.data()
                return { id: d.id, dueDate: dueDate.toDate(), ...data } as ITaskData
            })
            console.log(tasks)
            setTasks(() => tasks)
        })
    }, [])

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
                <div className="col-span-9 px-12 flex flex-col overflow-y-scroll">
                    <h1 className="text-4xl font-bold mt-8" style={{ color: "#AAAAAA" }}>Tasks</h1>
                    <div className="row-span-5 bg-white rounded-xl py-4 px-6 my-8 w-full">
                        <h1 className="text-2xl font-bold" style={styles.textPrimary}>{state.editing ? "Edit Task" : "Create Task"}</h1>
                        <form>
                            <div className="grid grid-cols-5 gap-6 mt-4">
                                <div className="col-span-3">
                                    <label className="block text-gray-600 text-sm">Task Name<span className="text-red-500">*</span></label>
                                    <input type="text" id="name" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('title', { required: true })} />
                                    {errors.title && <p className="text-red-500 text-sm" role="alert">Title is required</p>}
                                </div>
                                <div className="col-span-3">
                                    <label className="block text-gray-600 text-sm">Task Subheading<span className="text-red-500">*</span></label>
                                    <input type="text" id="name" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('subheading', { required: true })} />
                                    {errors.subheading && <p className="text-red-500 text-sm" role="alert">Subheading is required</p>}
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-gray-600 text-sm">Type<span className="text-red-500">*</span></label>
                                    <select id="type" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('type')}>
                                        <option>Individual</option>
                                        <option>Team</option>
                                    </select>
                                </div>
                                <div className="col-span-5">
                                    <label className="block text-gray-600 text-sm">Task Description<span className="text-red-500">*</span></label>
                                    <textarea id="description" className="block w-full focus:outline-none bottom-border pt-2 px-1" rows={1} {...register('description', { required: true })}></textarea>
                                    {errors.description && <p className="text-red-500 text-sm" role="alert">Title is required</p>}
                                </div>
                                <div className="col-span-3">
                                    <label className="block text-gray-600 text-sm">Mentor Email IDs (upto 30, comma seperated)<span className="text-red-500">*</span></label>
                                    <EmailListInput control={control} />
                                    {/* <input type="text" id="mentors" className="block w-full focus:outline-none bottom-border pt-2 px-1" placeholder="2021ucp1011@mnit.ac.in, 2021ucp1013@mnit.ac.in" {...register('mentors', {required: true})} /> */}
                                    {errors.mentors && <p className="text-red-500 text-sm" role="alert">Mentors list is required</p>}
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-gray-600 text-sm">Submission Link</label>
                                    <input type="text" id="submissionlink" className="block w-full focus:outline-none bottom-border pt-2" {...register('submissionLink')} />
                                </div>
                                <div className="col-span-3">
                                    <label className="block text-gray-600 text-sm">Due Date<span className="text-red-500">*</span></label>
                                    <input type="date" id="dueDate" className="block w-full focus:outline-none bottom-border pt-2" {...register('dueDate', { required: true, valueAsDate: true })} />
                                    {errors.dueDate && <p className="text-red-500 text-sm" role="alert">Due Date is required</p>}
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-gray-600 text-sm">PS Link<span className="text-red-500">*</span></label>
                                    <input type="text" id="link" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('link', { required: true })} />
                                    {errors.link && <p className="text-red-500 text-sm" role="alert">Link is required</p>}
                                </div>
                                <div className="col-span-2 flex items-center">
                                    <input type="checkbox" {...register('createRoom')}></input>
                                    <label className="ml-8">Automatically Create Room?</label>
                                </div>
                                {
                                    watchCreateRoom === true && <div className="col-span-3">
                                        <label className="block text-gray-600 text-sm">Default Room Name (Optional)</label>
                                        <input type="text" className="block w-full focus:outline-none bottom-border pt-2" {...register('roomName', { required: false })} />
                                    </div>
                                }
                                {
                                    watchCreateRoom === false && <div className="col-span-3">
                                        <label className="block text-gray-600 text-sm">Existing Room Name<span className="text-red-500">*</span></label>
                                        <input type="text" className="block w-full focus:outline-none bottom-border pt-2" {...register('roomName', { required: true })} />
                                        {errors.roomName && <p className="text-red-500 text-sm" role="alert">Existing room name is required</p>}
                                    </div>
                                }
                            </div>
                            {
                                !state.editing ?
                                    <button className="p-3 block w-40 rounded-3xl text-white mt-8" style={{ background: "#0C72B0" }} onClick={handleSubmit(onSubmit)}>Create</button> :
                                    <div className="text-white mt-8 flex gap-2">
                                        <button className="p-3 block w-40 rounded-3xl" style={{ background: "#0C72B0" }} onClick={handleSubmit(onEdit)}>Edit</button>
                                        <button className="p-3 block w-40 rounded-3xl bg-red-500" onClick={() => onCancel()}>Cancel</button>
                                    </div>
                            }
                        </form>
                    </div>

                    <div className="bg-white py-4 px-6 mb-8 rounded-xl">
                        <div className="grid grid-cols-6 gap-4">
                            <div className="col-span-4 flex flex-col">
                                <label className="text-gray-500">Search</label>
                                <input id="search" type="text" className="text-lg pt-2 bottom-border focus:outline-none" onChange={onSearchChange} placeholder="Search email ID or name" value={state?.search} />
                            </div>

                            {/* <button className="p-2 mt-4 text-white rounded-xl" style={{background: "#0C72B0"}}>Search</button> */}
                        </div>

                        <table className="table-auto w-full mt-8 text-center">
                            <thead>
                                <tr className="text-left">
                                    <th className="border p-1">S.No</th>
                                    <th className="border p-1">Title</th>
                                    <th className="border p-1">Type</th>
                                    <th className="border p-1">Due Date</th>
                                    <th className="border p-1">Mentors</th>
                                    <th className="border p-1">PS Link</th>
                                    <th className="border p-1">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tasks
                                        .filter(u => !state.search || u.title.toLowerCase().includes(state.search!.toLowerCase()) || u.subheading?.toLowerCase().includes(state.search!.toLowerCase()))
                                        .map((u, index) => (
                                            <tr key={u.title} className="text-left border-black">
                                                <td className="border p-1 text-center">{index + 1}</td>
                                                <td className="border p-1">{u.title}</td>
                                                <td className="border p-1">{u.type}</td>
                                                <td className="border p-1">{u.dueDate.toDateString()}</td>
                                                <td className="border p-1 text-center">{u.mentors.length}</td>
                                                <td className="border p-1 text-blue-500 overflow-hidden"><a href={u.submissionLink}>{u.submissionLink}</a></td>
                                                <td className="border p-1">
                                                    <button className="bg-yellow-500 text-white py-1 px-4 rounded-lg" onClick={() => taskEdit(u)}>Edit</button>
                                                    <button className="bg-red-500 text-white py-1 px-4 rounded-lg ml-2" onClick={() => taskDelete(u)}>Delete</button>

                                                </td>
                                            </tr>
                                        ))
                                }
                            </tbody>
                        </table>
                        {!tasks.length && <p className="text-center text-xl mt-4">No results found</p>}
                    </div>
                </div>
                <SideNav />
            </div>
        </ProtectedRoute>
    )
}

export default Tasks;