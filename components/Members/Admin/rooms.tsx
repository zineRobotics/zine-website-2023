import { toast,ToastContainer } from "react-toastify"
import ProtectedRoute from "./ProtectedRoute"
import SideNav from "../sidenav"
import styles from "../../../constants/styles";
import { useEffect, useState } from "react";
import { Control, useFieldArray, useForm } from "react-hook-form";
import { IRoomData, assignRoom, createRoom, deleteRoomByID, editRoom, fetchRooms, removeUsers } from "../../../apis/room";
import { IUser, getUser, getUserEmailIn, getUsersByRoles } from "../../../apis/users";
import { getDoc, query } from "firebase/firestore";
import Modal from "../modal";
import { deleteImage, uploadImage } from "../../../apis/image";

interface IRoomForm{
    members: { value: string }[];
    name: string;
    type: "project" | "group";
    image: any;
    imagepath: string;
}

interface IState {
    search: string;
    editing: boolean;
    editingID: string; //ask about editingID
    deleteRoom: IRoomData | null;
    assignRoom: IRoomData | null;
}

interface IAssignState {
    input: string;
    emails: string[];
}

const Rooms = () => {
    const [state, setState] = useState<IState>({ search: "", editing: false, editingID: "", assignRoom: null, deleteRoom: null });
    const [rooms, setRooms] = useState<IRoomData[]>([]);
    const [assignState, setAssignState] = useState<IAssignState>({ input: "", emails: [] });

    const { register, watch, handleSubmit, setValue, reset, control, formState: { errors } } = useForm<IRoomForm>();

    const onSubmit = async (data: IRoomForm) => {
        console.log(data.image)
        if (data.image[0]){
            var imageName = new Date().getTime().toString()
            data.imagepath = `/rooms/${imageName}`
            var imagelink = await uploadImage(data.image[0], data.imagepath)
            data.image = imagelink
        }
        else{
            data.image = ""
            data.imagepath= ""
        }
        
        const { members, name, type, image, imagepath } = data
        const roomcreate = async() =>{
            createRoom(name, [], type, image, imagepath).then(room => {
                toast.success("Room successfully created!")
                reset()
                console.log("Room created:", room.id)
            }).catch((err) => {
                console.log(err)
                toast.error("An error occurred. Contact zine team")
            })
        }
        roomcreate();
    }

    const onEdit = async (data: IRoomForm) => {
        
        var imageexists = data.image[0]
        data.image = ""
        if (imageexists){
            if(data.imagepath) deleteImage(data.imagepath)
            var imageName = new Date().getTime().toString()
            data.imagepath = `/rooms/${imageName}`
            var imagelink = await uploadImage(imageexists, data.imagepath)
            data.image = imagelink
        }
        const { members, ...formData } = data
        const memberArray = members.map(m => m.value)

        reset()
        editRoom(state.editingID, {members: memberArray, ...formData }).then(room => {
            toast.success("Room successfully edited!")
            setState({ ...state, editing: false, editingID: "" })
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

    const roomDelete = async (room: IRoomData) => {
        toast.promise(deleteRoomByID(room.id), {
            pending: 'Deleting Room',
            success: `Room ${room.name} deleted successfully`,
        }).then(() => {
            setRooms(rooms.filter(t => t.id !== room.id))
        })
        setState({...state, deleteRoom: null})
    }

    const roomEdit = async (room: IRoomData) => {
        setValue("name", room.name)
        setValue("members", room.members.map(m => ({ value: m })))
        setValue("type", room.type)
        setValue("imagepath", room.imagepath)

        setState({ ...state, editing: true, editingID: room.id })
    }

    const roomAssign = (room: IRoomData) => {
        setAssignState({ input: "", emails: [] })
        setState({ ...state, assignRoom: room })
    }

    const addAssignEmail = () => {
        assignState.input.trim().split(/[ ,]+/).map(e => {
            if (assignState.emails.some(f => f === e)) return
            if (!/^\S+@\S+\.\S+$/.test(e) && !e.startsWith('$')) return
            assignState.emails.push(e)
            setAssignState({ input: "", emails: assignState.emails });
            return
        })
    };

    const _assignRoom = async () => {
        if (!state.assignRoom) return
        const room = state.assignRoom
        if (assignState.emails.length === 0) return toast.error('No users added!')

        setState({...state, assignRoom: null})
        const memberSnapshot = await getUserEmailIn(assignState.emails)
        const members1 = memberSnapshot.docs.map(d => d.data() as IUser)

        const memberSnapshot2 = await getUsersByRoles(assignState.emails.map(e => e.substring(1)))
        const members2 = memberSnapshot2?.docs.map(d => d.data() as IUser) || []
        const members = members1.concat(members2)

        const promise = assignRoom(room, members)
        
        let notfound = ""
        if (assignState.emails.length !== members.length) notfound = ` (${assignState.emails.length - members.length} users not found)`
        await toast.promise(promise, {
            pending: `Assigning room to ${members.length} users${notfound}`,
            success: `Assigned room to ${members.length} users${notfound}`,
            error: `An error occured. Contact Zine team`
        })
    }

    //could be written for multiple emails?
    const _removeUser = async (emailID: string) => {
        if (!state.assignRoom) return
        const room = state.assignRoom
        const memberSnapshot = await getUserEmailIn([emailID])
        const members = memberSnapshot.docs.map(d => d.data() as IUser)
        const promise = removeUsers(room, members)

        await toast.promise(promise, {
            pending: `Removing ${emailID} from room`,
            success: `Removed ${emailID} from room`,
            error: `An error occured. Contact Zine team`
        })
    }

    useEffect(() => {
        fetchRooms().then(res => {
            const rooms = res.docs.map(d => {
                const { dueDate, ...data } = d.data()
                return { id: d.id, ...data } as IRoomData
            })
            console.log(rooms)
            setRooms(() => rooms)
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

            <div className="grid grid-cols-12 h-screen" style={{background: "#EFEFEF"}}>
                <div className="col-span-12 px-6 md:px-12 flex flex-col overflow-y-scroll md:col-span-9">
                    <h1 className="text-4xl font-bold mt-16 md:mt-8" style={{color: "#AAAAAA"}}>Rooms</h1>
                    <div className="row-span-5 bg-white rounded-xl py-4 px-6 my-8 w-full shadow-md">
                        <h1 className="text-2xl font-bold" style={styles.textPrimary}>{state.editing ? "Edit Room" : "Create Room"}</h1>
                        <form>
                            <div className="grid grid-cols-5 gap-6 mt-4">
                                <div className="col-span-3">
                                    <label className="block text-gray-600 text-sm">Room Name<span className="text-red-500">*</span></label>
                                    <input type="text" id="name" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('name', { required: true })} />
                                    {errors.name && <p className="text-red-500 text-sm" role="alert">Title is required</p>}
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-gray-600 text-sm">Type<span className="text-red-500">*</span></label>
                                    <select id="type" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('type')}>
                                        <option>project</option>
                                        <option>group</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-gray-600 text-sm">Image</label>
                                    <input type="file" id="image" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('image', { required: false })} />
                                </div>
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

                    <div className="bg-white py-4 px-6 mb-8 rounded-xl shadow-md">
                        <div className="grid grid-cols-6 gap-4">
                            <div className="col-span-4 flex flex-col">
                                <label className="text-gray-500">Search</label>
                                <input id="search" type="text" className="pt-2 bottom-border focus:outline-none" onChange={onSearchChange} placeholder="Search email ID or name" value={state?.search} autoComplete="off" />
                            </div>
                        </div>

                        <table className="table-auto w-full mt-8 text-center">
                            <thead>
                                <tr className="text-left">
                                    <th className="border p-1">S.No</th>
                                    <th className="border p-1">Name</th>
                                    <th className="border p-1">Type</th>
                                    <th className="border p-1">Members</th>
                                    <th className="border p-1">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    rooms
                                        .filter(u => !state.search || u.name.toLowerCase().includes(state.search!.toLowerCase()))
                                        .map((u, index) => (
                                            <tr key={u.name} className="text-left border-black text-sm">
                                                <td className="border p-1 text-center">{index + 1}</td>
                                                <td className="border p-1">{u.name}</td>
                                                <td className="border p-1">{u.type}</td>
                                                <td className="border p-1 text-center">{ u.members?.length}</td>
                                                <td className="border p-1">
                                                    <button className="bg-yellow-500 text-white py-1 px-2 rounded-lg" onClick={() => roomEdit(u)}>Edit</button>
                                                    <button className="bg-red-500 text-white py-1 px-2 rounded-lg ml-1" onClick={() => setState({...state, deleteRoom: u})}>Delete</button>
                                                    <button className="bg-green-500 text-white py-1 px-2 rounded-lg ml-1" onClick={() => roomAssign(u)}>Manage Users</button>
                                                </td>
                                            </tr>
                                        ))
                                }
                            </tbody>
                        </table>
                        {!rooms.length && <p className="text-center text-xl mt-4">No results found</p>}
                    </div>
                </div>
                <SideNav />
            </div>

            {/* Confirm delete modal */}
            <Modal isOpen={state.deleteRoom !== null} onClose={() => setState({...state, deleteRoom: null})}>
                <div className="p-4 md:p-5 text-center">
                    <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    <h3 className="mb-5 text-lg font-normal text-gray-500">Are you sure you want to delete {state.deleteRoom?.name} room?</h3>
                    <button type="button" className="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2" onClick={() => roomDelete(state.deleteRoom!)}>
                        Delete
                    </button>
                    <button type="button" className="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border ml-2 border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900" onClick={() => setState({...state, deleteRoom: null})}>Cancel</button>
                </div>
            </Modal>

            {/* Assign Room Modal */}
            <Modal isOpen={state.assignRoom !== null} onClose={() => setState({...state, assignRoom: null})}>
                <div className="fixed inset-0 flex items-center justify-center overflow-y-auto">
                <div className="p-4 md:p-5 text-center relative bg-white rounded-lg w-3/4 h-3/4"  >
                    <h3 className="mb-2 text-lg font-bold text-gray-500">Manage Users {state.assignRoom?.name}</h3>
                    <div className="flex text-sm">
                        <input type='text' className="block w-full focus:outline-none bottom-border pt-2 px-1" value={assignState.input} placeholder="2021ucp1011@mnit.ac.in, $2023, $admin" onChange={(e) => setAssignState({...assignState, input: e.target.value})} />
                        <button type="button" className="text-white rounded-md ml-2 px-2 py-1" style={{ background: "#0C72B0" }} onClick={addAssignEmail}>Add</button>
                    </div>

                    <div className="grid grid-cols-2 text-sm font-medium mt-2 gap-1">
                        {assignState.emails.map((field, index) => (
                            <div key={field} className="flex py-1 px-2 rounded-3xl" style={{background: "#C2FFF48A", color: "#0C72B0F2"}}>
                                <input className="font-medium" disabled value={field} />
                                <button className="ml-1" type="button" onClick={() => setAssignState({...assignState, emails: assignState.emails.filter(t => t !== field)})}>✕</button>
                            </div>
                        ))}
                    </div>

                    <div className="flex mt-4 justify-center text-white text-sm gap-2">
                        <button type="button" className="p-2 block w-40 rounded-3xl" style={{ background: "#0C72B0" }} onClick={() => _assignRoom()}>
                            Assign Room
                        </button>
                        <button type="button" className="p-2 block w-40 rounded-3xl text-red-500 border" onClick={() => setState({...state, assignRoom: null})}>
                            Cancel
                        </button>
                    </div>
                    
                    <div className=" max-h-full overflow-y-auto h-3/4">
                        <table className="table-auto w-full mt-8 text-center ">
                            <thead>
                                <tr className="text-left">
                                    <th className="border p-1">S.No</th>
                                    <th className="border p-1">Email</th>
                                    <th className="border p-1">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.assignRoom?.members
                                        .map((u, index) => (
                                            <tr key={u} className="text-left border-black text-sm">
                                                <td className="border p-1 text-center">{index + 1}</td>
                                                <td className="border p-1">{u}</td>
                                                <td className="border p-1">
                                                    <button className="bg-red-500 text-white py-1 px-2 rounded-lg ml-1" onClick={() => _removeUser(u)}>Remove</button>
                                                </td>
                                            </tr>
                                        ))
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
                </div>
            </Modal>
        </ProtectedRoute>
    )
}

export default Rooms