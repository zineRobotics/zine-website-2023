import { toast,ToastContainer } from "react-toastify"
import ProtectedRoute from "./ProtectedRoute"
import SideNav from "../sidenav"
import styles from "../../../constants/styles";
import { useEffect, useState } from "react";
import { Control, set, useFieldArray, useForm } from "react-hook-form";
import Modal from "../modal";
import { ICreateRegistrationForm, IRegistrationForm, TextQuestion, PollQuestion, PollBody, getAllRegistrationForms, getRegistrationForm, deleteRegistrationForms, createRegistrationForm, IFormRetrievedData } from "../../../apis/forms";
import { getAllEvents, IEventData } from "../../../apis/events";

interface IState {
    search: string;
    editing: boolean;
    editingID: number ; //-1 for not editing
    deleteForm: IFormRetrievedData | null;
}

interface IAssignState {
    input: string;
    roleId: number;
    emailList: string[];
}

const RegistrationForms = () => {
    const [state, setState] = useState<IState>({ search: "", editing: false, editingID: -1, deleteForm: null });
    const [members, setMembers] = useState<IRegistrationForm[]>([]);
    const [forms, setForms] = useState<IFormRetrievedData[]>([]);
    const [events, setEvents] = useState<IEventData[]>([]);

    const { register, watch, handleSubmit, setValue, reset, control, formState: { errors } } = useForm<ICreateRegistrationForm>();
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormProvider)
        name: "questions", // unique name for your Field Array
      });

    const onSubmit = async (data: ICreateRegistrationForm) => {
        createRegistrationForm(data).then(form => {
            if (form === undefined){ 
                toast.error("form create failed")
                return
            }
            setForms([...forms, form])
            toast.success("form successfully created!")

            reset()

        }).catch((err) => {
            // console.log(err)
            toast.error("An error occurred. Contact zine team")
        })
    }

    // const onEdit = async (data: ICreateRegistrationForm) => {
        
    //     // let imageexists = data.image[0]
    //     // data.image = ""
    //     // if (imageexists){
    //     //     if(data.dpUrl) deleteImage(data.dpUrl)
    //     //     let imageName = new Date().getTime().toString()
    //     //     data.dpUrl = `/rooms/${imageName}`
    //     //     let imagelink = await uploadImage(imageexists, data.dpUrl)
    //     //     data.image = imagelink
    //     // }
    //     // const { image, ...formData } = data
    //     const formData: IRegistrationForm = {...data, id: state.editingID}

    //     reset()
    //     updateRegistrationForm(formData).then(form => {
    //         if(form!=undefined){
    //             toast.success("Role successfully edited!")
    //             setForms(forms.map(r => r.id === state.editingID ? {...r, ...formData} : r)) //changes the room that was edited
    //             setState({ ...state, editing: false, editingID:-1 })
    //         }
    //         else{
    //             toast.error("An error occurred. Try again later.")
    //         }
    //     }).catch((err) => {
    //         // console.log(err)
    //         toast.error("An error occurred. Contact zine team")
    //     })
    // }

    const onCancel = () => {
        setState({ ...state, editing: false, editingID:-1 })
        reset()
    }

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    const formDelete = async (form: IFormRetrievedData) => {
        toast.promise(deleteRegistrationForms(form.id), {
            pending: 'Deleting form',
            success: `form ${form.name} deleted successfully`,
        }).then(() => {
            setForms(forms.filter(t => t.id !== form.id))
        })
        setState({...state, deleteForm: null})
    }

    // const formEdit = async (form: IRegistrationForm) => {
    //     setValue("name", form.name)
    //     setValue("description", form.description)
    //     setValue("active", form.active)
    //     setValue("eventId", form.eventId)
    //     setValue("questions", form.questions)

    //     setState({ ...state, editing: true, editingID: form.id })
    // }

    //could be written for multiple emails?

    useEffect(() => {
        getAllRegistrationForms().then(forms => {
            // console.log(rooms)
            if(forms === undefined){
                toast.error("Error fetching forms")
                return
            }
            setForms(forms)
        })
        getAllEvents().then(events => {
            if(events === undefined){
                toast.error("Error fetching events")
                return
            }
            setEvents(events)
        })
    }, [])


    function removeOption(index: number, optIndex: number): void {
        // const updatedFields = [...fields];
        // const pollOptions = updatedFields[index].pollBody.pollOptions;
        const pollOptions = watch(`questions.${index}.poll.pollOptions`);
        pollOptions.splice(optIndex, 1);
        setValue(`questions.${index}.poll.pollOptions`, pollOptions);
    }

    function appendOption(index: number): void {
        const pollOptions = watch(`questions.${index}.poll.pollOptions`);
        const newPollOptions = [...pollOptions, ""];
        setValue(`questions.${index}.poll.pollOptions`, newPollOptions);
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
                <SideNav />
                <div className="col-span-12 px-6 md:px-12 flex flex-col overflow-y-scroll md:col-span-9">
                    <h1 className="text-4xl font-bold mt-16 md:mt-8" style={{color: "#AAAAAA"}}>Roles</h1>
                    <div className="row-span-5 bg-white rounded-xl py-4 px-6 my-8 w-full shadow-md">
                        <h1 className="text-2xl font-bold" style={styles.textPrimary}>{state.editing ? "Edit Role" : "Create Role"}</h1>
                        <form>
                            <div className="grid grid-cols-5 gap-6 mt-4">
                                <div className="col-span-3">
                                    <label className="block text-gray-600 text-sm">Form Name<span className="text-red-500">*</span></label>
                                    <input type="text" id="name" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('name', { required: true })} />
                                    {errors.name && <p className="text-red-500 text-sm" role="alert">Name is required</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-5 gap-6 mt-4">
                                <div className="col-span-3">
                                    <label className="block text-gray-600 text-sm">Description</label>
                                    <input type="text" id="name" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('description', { required: false })} />
                                </div>
                            </div>

                            <div className="grid grid-cols-5 gap-6 mt-4">
                                <div className="col-span-3">
                                    <label className="block text-gray-600 text-sm">Active</label>
                                    <input type="checkbox" id="active" className="block focus:outline-none pt-2 px-1" {...register('active')} />
                                </div>
                            </div>

                            <div className="grid grid-cols-5 gap-6 mt-4">
                                <div className="col-span-3">
                                    <label className="block text-gray-600 text-sm">Event<span className="text-red-500">*</span></label>
                                    <select id="eventId" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('eventId', { required: true })}>
                                        <option value="">Select an event</option>
                                        {events.map(event => (
                                            <option key={event.id} value={event.id}>{event.name}</option>
                                        ))}
                                    </select>
                                    {errors.eventId && <p className="text-red-500 text-sm" role="alert">Event is required</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-5 gap-6 mt-4">
                                <div className="col-span-3">
                                    <label className="block text-gray-600 text-sm">Questions</label>
                                    <button type="button" className="p-2 bg-blue-500 text-white rounded" onClick={() => append({ type: 'text', text: {content: ''} })}>
                                        Add Text Question
                                    </button>
                                    <button type="button" className="p-2 bg-green-500 text-white rounded ml-2" onClick={() => append({ type: 'poll', poll: {title: "", description: "", pollOptions: []} })}>
                                        Add Poll Question
                                    </button>
                                    {fields.map((field, index) => (field.type === 'text' ?
                                        <div key={field.id} className="mt-4">
                                            <input type="text" placeholder="Question" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register(`questions.${index}.text.content`, { required: true })} defaultValue={field.text?.content || ''} />
                                            {/* {errors.questions?.[index].content && <p className="text-red-500 text-sm" role="alert">Question is required</p>} */}
                                            <button type="button" className="p-2 bg-red-500 text-white rounded mt-2" onClick={() => remove(index)}>
                                                Remove Question
                                            </button>
                                        </div>
                                        :
                                        <div key={field.id} className="mt-4">
                                            {field.type === 'poll' && (
                                                <div className="mt-2">
                                                    <label className="block text-gray-600 text-sm">Poll Title</label>
                                                    <input type="text" placeholder="Poll Title" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register(`questions.${index}.poll.title`, { required: true })} />
                                                    {/* {errors.questions?.[index]?.pollBody?.title && <p className="text-red-500 text-sm" role="alert">Poll title is required</p>} */}

                                                    <label className="block text-gray-600 text-sm mt-2">Poll Description</label>
                                                    <input type="text" placeholder="Poll Description" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register(`questions.${index}.poll.description`, { required: false })} />
                                                    {/* {errors.questions?.[index]?.pollBody?.description && <p className="text-red-500 text-sm" role="alert">Poll description is required</p>} */}
                                                    {field.poll?.pollOptions.map((option, optIndex) => (
                                                        <div key={optIndex} className="flex items-center mt-2">
                                                            <input type="text" placeholder={`Option ${optIndex + 1}`} className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register(`questions.${index}.poll.pollOptions.${optIndex}`, { required: true })} />
                                                            <button type="button" className="p-2 bg-red-500 text-white rounded ml-2" onClick={() => removeOption(index, optIndex)}>
                                                                Remove
                                                            </button>
                                                        </div>
                                                    ))}
                                                    <button type="button" className="p-2 bg-blue-500 text-white rounded mt-2" onClick={() => appendOption(index)}>
                                                        Add Option
                                                    </button>
                                                </div>
                                            )}
                                            <button type="button" className="p-2 bg-red-500 text-white rounded mt-2" onClick={() => remove(index)}>
                                                Remove Question
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {
                                !state.editing ?
                                    <button className="p-3 block w-40 rounded-3xl text-white mt-8" style={{ background: "#0C72B0" }} onClick={handleSubmit(onSubmit)}>Create</button> :
                                    <div className="text-white mt-8 flex gap-2">
                                        {/* <button className="p-3 block w-40 rounded-3xl" style={{ background: "#0C72B0" }} onClick={handleSubmit(onEdit)}>Edit</button> */}
                                        <button className="p-3 block w-40 rounded-3xl bg-red-500" onClick={() => onCancel()}>Cancel</button>
                                    </div>
                            }
                        </form>
                    </div>

                    <div className="bg-white py-4 px-6 mb-8 rounded-xl shadow-md">
                        {/* <div className="grid grid-cols-6 gap-4">
                            <div className="col-span-4 flex flex-col">
                                <label className="text-gray-500">Search</label>
                                <input id="search" type="text" className="pt-2 bottom-border focus:outline-none" onChange={onSearchChange} placeholder="Search email ID or name" value={state?.search} autoComplete="off" />
                            </div>
                        </div> */}

                        <table className="table-auto w-full mt-8 text-center">
                            <thead>
                                <tr className="text-left">
                                    <th className="border p-1">S.No</th>
                                    <th className="border p-1">Form Name</th>
                                    {/* <th className="border p-1">Members</th> */}
                                    <th className="border p-1">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    forms
                                        .filter(u => !state.search || u.name.toLowerCase().includes(state.search!.toLowerCase()))
                                        .map((u, index) => (
                                            <tr key={u.id} className="text-left border-black text-sm">
                                                <td className="border p-1 text-center">{index + 1}</td>
                                                <td className="border p-1">{u.name}</td>
                                                {/* <td className="border p-1 text-center">{ u.members?.length}</td> */} 
                                                <td className="border p-1">
                                                    {/* <button className="bg-yellow-500 text-white py-1 px-2 rounded-lg" onClick={() => formEdit(u)}>Edit</button> */}
                                                    <button className="bg-red-500 text-white py-1 px-2 rounded-lg ml-1" onClick={() => setState({...state, deleteForm: u})}>Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                }
                            </tbody>
                        </table>
                        {!forms.length && <p className="text-center text-xl mt-4">No results found</p>}
                    </div>
                </div>
            </div>

            {/* Confirm delete modal */}
            <Modal isOpen={state.deleteForm !== null} onClose={() => setState({...state, deleteForm: null})}>
                <div className="p-4 md:p-5 text-center">
                    <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    <h3 className="mb-5 text-lg font-normal text-gray-500">Are you sure you want to delete {state.deleteForm?.name} room?</h3>
                    <button type="button" className="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2" onClick={() => formDelete(state.deleteForm!)}>
                        Delete
                    </button>
                    <button type="button" className="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border ml-2 border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900" onClick={() => setState({...state, deleteForm: null})}>Cancel</button>
                </div>
            </Modal>

        </ProtectedRoute>
    )
}

export default RegistrationForms