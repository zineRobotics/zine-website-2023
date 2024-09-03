import React, { useEffect, useState } from "react";
import SideNav from "../../sidenav";
import styles from "../../../../constants/styles";
import ProtectedRoute from "../ProtectedRoute";
import { ToastContainer, toast } from "react-toastify";
import { ITaskData, createTask, deleteTask, editTask, getAllTasks } from "../../../../apis/tasks";
import { Control, set, useFieldArray, useForm } from "react-hook-form";
import { IUser } from "../../../../apis/users";
import Modal from "../../modal";
import { IState, ITaskForm } from "./types";

interface TaskManagerProps {
    state: number|null;
    setState: React.Dispatch<React.SetStateAction<number|null>>;
}

const EmailListInput = ({ control }: { control: Control<ITaskForm, any> }) => {
    const { fields, append, remove } = useFieldArray({ control, name: 'mentors' });
    const [nextEmail, setNextEmail] = useState('')
    const handleAddEmail = () => {
        nextEmail.split(/[ ,]+/).map(e => {
            if (fields.some(f => f.value === e)) return
            if (!/^\S+@\S+\.\S+$/.test(e)) return
            append({ value: e });
            setNextEmail("")
        })
    };

    return (
        <div>
            <div className="flex text-sm font-medium flex-wrap gap-1">
                {fields.map((field, index) => (
                    <div key={field.id} className="flex py-1 px-2 rounded-3xl" style={{background: "#C2FFF48A", color: "#0C72B0F2"}}>
                        <input className="font-medium" disabled {...field} />
                        <button className="ml-2" type="button" onClick={() => remove(index)}>✕</button>
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

const TaskForm: React.FC<TaskManagerProps> = ({ state, setState}) => {
    const [tasks, setTasks] = useState<ITaskData[]>([])
    const [formState, setFormState] = useState<IState>({ search: "", editing: false, editingID: -1, assignTask: null, deleteTask: null })

    const { register, watch, handleSubmit, setValue, reset, control, formState: { errors } } = useForm<ITaskForm>()
    // const watchCreateRoom = watch('createRoom', false)

    const onSubmit = async (data: ITaskForm) => {
        let { mentors, submissionLink, createdDate, ...formData } = data
        const mentorsArray: string[] = []
        if(mentors!=undefined){
            mentors.map(m => mentorsArray.push(m.value))
        }
        const crDate = new Date() //cant assign new object to createdDate

        createTask({ submissionLink: submissionLink || "", createdDate: crDate,...formData }, mentorsArray).then(task => {
            if(task === undefined){
                toast.error("Error creating task.")
                return;
            }
            toast.success("Task successfully created!")
            reset()
            task.dueDate = new Date(task.dueDate)
            task.createdDate = new Date(task.createdDate)
            setTasks([...tasks, task])
        }).catch((err) => {
            console.log(err)
            toast.error("Error creating task.")
        })
    }

    const onEdit = async (data: ITaskForm) => {
        const { mentors, submissionLink, ...formData } = data
        const mentorsArray: string[] = []
        if(mentors!=undefined){
            mentors.map(m => mentorsArray.push(m.value))
        }

        reset()
        editTask({ id: formState.editingID, submissionLink: submissionLink || "", ...formData }, mentorsArray).then(task => {
            if(task === undefined){
                toast.error("Error editing task.")
                return;
            }
            toast.success("Task successfully edited!")
            setFormState({ ...formState, editing: false, editingID: -1 })
            task.dueDate = new Date(task.dueDate)
            task.createdDate = new Date(task.createdDate)
            setTasks(tasks.map(t => t.id === formState.editingID ? task : t))
        }).catch((err) => {
            console.log(err)
            toast.error("Error editing task.")
        })
    }

    const onCancel = () => {
        setFormState({ ...formState, editing: false, editingID: -1 })
        reset()
    }

    // const onSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    //     setFormState({ ...formState, [e.target.id]: e.target.value })
    // }

    const taskDelete = async (task: ITaskData) => {
        toast.promise(deleteTask([task.id]), {
            pending: 'Deleting Task',
            success: `Task ${task.title} deleted successfully`,
        }).then(() => {
            setTasks(tasks.filter(t => t.id !== task.id))
        })
        setFormState({...formState, deleteTask: null})
    }

    const taskEdit = async (task: ITaskData) => {
        setValue("title", task.title)
        setValue("description", task.description)
        setValue("subtitle", task.subtitle)
        // @ts-ignore
        setValue("dueDate", task.dueDate.toLocaleDateString('en-CA'))
        setValue("submissionLink", task.submissionLink)
        setValue("psLink", task.psLink)
        // setValue("mentors", task.mentors.map(m => ({ value: m })))
        setValue("type", task.type)
        setValue("visible", task.visible)
        setValue("createdDate", task.createdDate)

        setFormState({ ...formState, editing: true, editingID: task.id })
    }

    useEffect(() => {
        getAllTasks().then(res => {
            if(res === undefined){
                toast.error("Error fetching tasks.")
                setTasks([])
                return;
            }
            for(const element of res){
                element.dueDate = new Date(element.dueDate)
                element.createdDate = new Date(element.createdDate)
            }
            setTasks(res)
        })
    }, [])

    return (
        <>
            <div className="col-span-12 px-6 md:px-12 flex flex-col overflow-y-scroll md:col-span-9">
                <h1 className="text-4xl font-bold mt-16 md:mt-8" style={{ color: "#AAAAAA" }}>Tasks</h1>
                <div className="row-span-5 bg-white rounded-xl py-4 px-6 my-8 w-full shadow-md">
                    <h1 className="text-2xl font-bold" style={styles.textPrimary}>{formState.editing ? "Edit Task" : "Create Task"}</h1>
                    <form>
                        <div className="grid grid-cols-5 gap-6 mt-4">
                            <div className="col-span-3">
                                <label className="block text-gray-600 text-sm">Title<span className="text-red-500">*</span></label>
                                <input type="text" id="name" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('title', { required: true })} />
                                {errors.title && <p className="text-red-500 text-sm" role="alert">Title is required</p>}
                            </div>
                            <div className="col-span-3">
                                <label className="block text-gray-600 text-sm">Subtitle<span className="text-red-500">*</span></label>
                                <input type="text" id="name" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('subtitle', { required: true })} />
                                {errors.subtitle && <p className="text-red-500 text-sm" role="alert">subtitle is required</p>}
                            </div>
                            <div className="col-span-2">
                                <label className="block text-gray-600 text-sm">Type<span className="text-red-500">*</span></label>
                                <select id="type" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('type')}>
                                    <option>Individual</option>
                                    <option>Team</option>
                                </select>
                            </div>
                            <div className="col-span-5">
                                <label className="block text-gray-600 text-sm">Description<span className="text-red-500">*</span></label>
                                <textarea id="description" className="block w-full focus:outline-none bottom-border pt-2 px-1" rows={1} {...register('description', { required: true })}></textarea>
                                {errors.description && <p className="text-red-500 text-sm" role="alert">Title is required</p>}
                            </div>
                            <div className="col-span-3">
                                <label className="block text-gray-600 text-sm">Mentor Email IDs (comma seperated)<span className="text-red-500">*</span></label>
                                <EmailListInput control={control} />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-gray-600 text-sm">Submission Link</label>
                                <input type="text" id="submissionlink" className="block w-full focus:outline-none bottom-border pt-2" {...register('submissionLink')} />
                            </div>
                            <div className="col-span-2 flex items-center">
                                <input type="checkbox" {...register('visible')}></input>
                                <label className="ml-8">Visible for selection</label>
                            </div>
                            <div className="col-span-3">
                                <label className="block text-gray-600 text-sm">Due Date<span className="text-red-500">*</span></label>
                                <input type="date" id="dueDate" className="block w-full focus:outline-none bottom-border pt-2" {...register('dueDate', { required: true, valueAsDate: true })} />
                                {errors.dueDate && <p className="text-red-500 text-sm" role="alert">Due Date is required</p>}
                            </div>
                            <div className="col-span-2">
                                <label className="block text-gray-600 text-sm">PS Link<span className="text-red-500">*</span></label>
                                <input type="text" id="psLink" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('psLink', { required: true })} />
                                {errors.psLink && <p className="text-red-500 text-sm" role="alert">Link is required</p>}
                            </div>
                        </div>
                        {
                            !formState.editing ?
                                <button className="p-3 block w-40 rounded-3xl text-white mt-8" style={{ background: "#0C72B0" }} onClick={handleSubmit(onSubmit)}>Create</button> :
                                <div className="text-white mt-8 flex gap-2">
                                    <button className="p-3 block w-40 rounded-3xl" style={{ background: "#0C72B0" }} onClick={handleSubmit(onEdit)}>Edit</button>
                                    <button className="p-3 block w-40 rounded-3xl bg-red-500" onClick={() => onCancel()}>Cancel</button>
                                </div>
                        }
                    </form>
                </div>

                <div className="bg-white py-4 px-6 mb-8 rounded-xl shadow-md">
                    <div className="grid grid-cols-6 gap-4">
                        {/* <div className="col-span-4 flex flex-col">
                            <label className="text-gray-500">Search</label>
                            <input id="search" type="text" className="pt-2 bottom-border focus:outline-none" onChange={onSearchChange} placeholder="Search email ID or name" value={formState?.search} autoComplete="off" />
                        </div> */}

                        {/* <button className="p-2 mt-4 text-white rounded-xl" style={{background: "#0C72B0"}}>Search</button> */}
                    </div>

                    <table className="table-auto w-full mt-8 text-center">
                        <thead>
                            <tr className="text-left">
                                <th className="border p-1">S.No</th>
                                <th className="border p-1">Title</th>
                                <th className="border p-1">Type</th>
                                <th className="border p-1">Due Date</th>
                                {/* <th className="border p-1">Mentors</th> */}
                                <th className="border p-1">PS Link</th>
                                <th className="border p-1">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.isArray(tasks) && tasks
                                    .filter(u => !formState.search || u.title.toLowerCase().includes(formState.search!.toLowerCase()) || u.subtitle.toLowerCase().includes(formState.search!.toLowerCase()))
                                    .map((u, index) => (
                                        <tr key={u.id} className="text-left border-black text-sm">
                                            <td className="border p-1 text-center">{index + 1}</td>
                                            <td className="border p-1">{u.title}</td>
                                            <td className="border p-1">{u.type}</td>
                                            <td className="border p-1">{u.dueDate.toDateString()}</td>
                                            {/* <td className="border p-1 text-center">{u.mentors.length}</td> */}
                                            <td className="border p-1 text-blue-500 overflow-hidden text-center"><a href={u.psLink} target="_blank">Link</a></td>
                                            <td className="border p-1">
                                                <button className="bg-yellow-500 text-white py-1 px-2 rounded-lg" onClick={() => taskEdit(u)}>Edit</button>
                                                <button className="bg-red-500 text-white py-1 px-2 rounded-lg ml-1" onClick={() => setFormState({...formState, deleteTask: u})}>Delete</button>
                                                <button className="bg-green-500 text-white py-1 px-2 rounded-lg ml-1" onClick={() => setState(u.id)}>Task Instances</button>
                                            </td>
                                        </tr>
                                    ))
                            }
                        </tbody>
                    </table>
                    {!tasks.length && <p className="text-center text-xl mt-4">No results found</p>}
                </div>
            </div>

            {/* Confirm delete modal */}
            <Modal isOpen={formState.deleteTask !== null} onClose={() => setFormState({...formState, deleteTask: null})}>
                <div className="p-4 md:p-5 text-center">
                    <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    <h3 className="mb-5 text-lg font-normal text-gray-500">Are you sure you want to delete {formState.deleteTask?.title} task?</h3>
                    <button type="button" className="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2" onClick={() => taskDelete(formState.deleteTask!)}>
                        Delete
                    </button>
                    <button type="button" className="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border ml-2 border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900" onClick={() => setFormState({...formState, deleteTask: null})}>Cancel</button>
                </div>
            </Modal>
        </>
    )
}

export default TaskForm;