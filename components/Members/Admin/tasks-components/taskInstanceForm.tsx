import React, { useEffect, useState } from "react";
import SideNav from "../../sidenav";
import styles from "../../../../constants/styles";
import ProtectedRoute from "../ProtectedRoute";
import { ToastContainer, toast } from "react-toastify";
import { ITaskData, ITaskInstanceData, createTask, createTaskInstance, deleteTask, deleteTaskInstance, editTask, editTaskInstance, getAllTaskInstances, getAllTasks } from "../../../../apis/tasks";
import { Control, set, useFieldArray, useForm } from "react-hook-form";
import { IUser } from "../../../../apis/users";
import Modal from "../../modal";
import { ITaskInstanceForm } from "./types";

interface TaskManagerProps {
    state: number;
    setState: React.Dispatch<React.SetStateAction<number|null>>;
}

export interface IState {
    search: string;
    editing: boolean;
    editingID: number;
    deleteTask: ITaskInstanceData | null;
    assignTask: ITaskInstanceData | null;
}


const EmailListInput = ({ control }: { control: Control<ITaskInstanceForm, any> }) => {
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

const TaskInstanceForm: React.FC<TaskManagerProps> = ({ state, setState}) => {
    const [taskInstances, setTaskInstances] = useState<ITaskInstanceData[]>([])
    const [formState, setFormState] = useState<IState>({ search: "", editing: false, editingID: -1, assignTask: null, deleteTask: null })

    const { register, handleSubmit, setValue, reset, control, formState: { errors } } = useForm<ITaskInstanceForm>()

    const onSubmit = async (data: ITaskInstanceForm) => {
        createTaskInstance(data, state).then(taskInstace => {
            if(taskInstace === undefined){
                toast.error("Error creating taskInstace.")
                return;
            }
            toast.success("TaskInstace successfully created!")
            reset()
            setTaskInstances([...taskInstances, taskInstace])
        }).catch((err) => {
            console.log(err)
            toast.error("Error creating task.")
        })
    }

    const onEdit = async (data: ITaskInstanceForm) => {
        reset()
        editTaskInstance(data, formState.editingID).then(taskInstance => {
            if(taskInstance === undefined){
                toast.error("Error editing task.")
                return;
            }
            toast.success("Task successfully edited!")
            setFormState({ ...formState, editing: false, editingID: -1 })
            setTaskInstances(taskInstances.map(t => t.id === formState.editingID ? taskInstance : t))
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

    const taskInstanceDelete = async (task: ITaskInstanceData) => {
        toast.promise(deleteTaskInstance([task.id], state), {
            pending: 'Deleting Task',
            success: `Task ${task.name} deleted successfully`,
        }).then(() => {
            setTaskInstances(taskInstances.filter(t => t.id !== task.id))
        })
        setFormState({...formState, deleteTask: null})
    }

    const taskEdit = async (task: ITaskInstanceData) => {
        setValue("name", task.name)
        setValue("status", task.status)
        setValue("completionPercentage", task.completionPercentage)

        setFormState({ ...formState, editing: true, editingID: task.id })
    }

    useEffect(() => {
        getAllTaskInstances(state).then(res => {
            if(res === undefined){
                toast.error("Error fetching tasks.")
                setTaskInstances([])
                return;
            }
            setTaskInstances(res)
        })
    }, [])

    return (
            <>
                <div className="col-span-12 px-6 md:px-12 flex flex-col overflow-y-scroll md:col-span-9">
                    <h1 className="text-4xl font-bold mt-16 md:mt-8" style={{ color: "#AAAAAA" }}>Task Instances</h1>
                    <button className="p-3 block w-40 rounded-3xl bg-red-500 justify-end" onClick={() => setState(null)}>Back</button>
                    <div className="row-span-5 bg-white rounded-xl py-4 px-6 my-8 w-full shadow-md">
                        <h1 className="text-2xl font-bold" style={styles.textPrimary}>{formState.editing ? "Edit Task Instance" : "Create Task Instance"}</h1>
                        <form>
                            <div className="grid grid-cols-5 gap-6 mt-4">
                                <div className="col-span-3">
                                    <label className="block text-gray-600 text-sm">Name<span className="text-red-500">*</span></label>
                                    <input type="text" id="name" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('name', { required: true })} />
                                    {errors.name && <p className="text-red-500 text-sm" role="alert">Name is required</p>}
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-gray-600 text-sm">Completion Percentage<span className="text-red-500">*</span></label>
                                    <input type="number" id="completionPercentage" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('completionPercentage', { required: true })} defaultValue={0} />
                                    {errors.completionPercentage && <p className="text-red-500 text-sm" role="alert">Completion Percentage is required</p>}
                                </div>
                                <div>
                                    <label className="block text-gray-600 text-sm">Status<span className="text-red-500">*</span></label>
                                    <select id="status" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('status', { required: true })} defaultValue="Not Started">
                                        <option value="Not Started">Not Started</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                    {errors.status && <p className="text-red-500 text-sm" role="alert">Status is required</p>}
                                </div>
                                <div>
                                    <label className="block text-gray-600 text-sm">Mentors</label>
                                    <EmailListInput control={control} />
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
                                    <th className="border p-1">Name</th>
                                    <th className="border p-1">Status</th>
                                    <th className="border p-1">Completion Percentage</th>
                                    <th className="border p-1">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Array.isArray(taskInstances) && taskInstances
                                        .filter(u => !formState.search || u.name.toLowerCase().includes(formState.search!.toLowerCase()))
                                        .map((u, index) => (
                                            <tr key={u.id} className="text-left border-black text-sm">
                                                <td className="border p-1 text-center">{index + 1}</td>
                                                <td className="border p-1">{u.name}</td>
                                                <td className="border p-1">{u.status}</td>
                                                <td className="border p-1">{u.completionPercentage}</td>
                                                <td className="border p-1">
                                                    <button className="bg-yellow-500 text-white py-1 px-2 rounded-lg" onClick={() => taskEdit(u)}>Edit</button>
                                                    <button className="bg-red-500 text-white py-1 px-2 rounded-lg ml-1" onClick={() => setFormState({...formState, deleteTask: u})}>Delete</button>
                                                    <button className="bg-green-500 text-white py-1 px-2 rounded-lg ml-1" onClick={() => taskAssign(u)}>Assign Task</button>
                                                </td>
                                            </tr>
                                        ))
                                }
                            </tbody>
                        </table>
                        {!taskInstances.length && <p className="text-center text-xl mt-4">No results found</p>}
                    </div>
                </div>

            {/* Confirm delete modal */}
            <Modal isOpen={formState.deleteTask !== null} onClose={() => setFormState({...formState, deleteTask: null})}>
                <div className="p-4 md:p-5 text-center">
                    <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    <h3 className="mb-5 text-lg font-normal text-gray-500">Are you sure you want to delete {formState.deleteTask?.name} instance?</h3>
                    <button type="button" className="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2" onClick={() => taskInstanceDelete(formState.deleteTask!)}>
                        Delete
                    </button>
                    <button type="button" className="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border ml-2 border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900" onClick={() => setFormState({...formState, deleteTask: null})}>Cancel</button>
                </div>
            </Modal>
        </>
    )
}

export default TaskInstanceForm;