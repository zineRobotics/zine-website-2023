//fix the image upload to firebase
//number of members in a room is currently not implemented

import { toast,ToastContainer } from "react-toastify"
import ProtectedRoute from "./ProtectedRoute"
import SideNav from "../sidenav"
import styles from "../../../constants/styles";
import { useEffect, useState } from "react";
import { Control, set, useFieldArray, useForm } from "react-hook-form";
import { IRoomCreateData, IRoomData, IRoomEditData, IMembersList, IMembers, IRoomMember, IRoomResponseData, addUsersToRoom, createRoom, deleteRoom, editRoom, fetchAllRooms, getMembers, removeMembers, editMemberRole, /* removeUsers, addMembersToRoom,*/  } from "../../../apis/room";
import Modal from "../modal";
import { deleteImage, uploadImage } from "../../../apis/image";
import { getAllRoles, getRoleMembers, IRoleData, IRoleMember } from "../../../apis/roles";
import { get } from "http";
import { uploadFile, deleteFile } from "../../../apis/room";

interface IRoomForm{
    name: string;
    type: "project" | "group" | "workshop";
    // image: any;
    dpUrl: string;
    description: string;
}

interface IState {
    search: string;
    editing: boolean;
    editingID: number ; //-1 for not editing
    deleteRoom: IRoomData | null;
    assignRoom: IRoomData | null;
}

type Role = "user" | "admin";
interface IAssignState {
    role: Role
    input: string;
    emailList: string[];
}

const Rooms = () => {
    const [state, setState] = useState<IState>({ search: "", editing: false, editingID: -1, assignRoom: null, deleteRoom: null });
    const [members, setMembers] = useState<IRoomMember[]>([]);
    const [rooms, setRooms] = useState<IRoomData[]>([]);
    const [roles, setRoles] = useState<IRoleData[]>([]);
    const [assignState, setAssignState] = useState<IAssignState>({ role: "user", input: "" , emailList: []});
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [changedImage, setChangedImage] = useState<boolean>(false);

    const { register, watch, handleSubmit, setValue, reset, control, formState: { errors } } = useForm<IRoomForm>();

    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setChangedImage(true);
        const file = event.target.files?.[0];
        if (file) {
            try {
                const response = await uploadFile(file, "event image");
                setImageUrl(response.url);
                setValue("dpUrl", response.url);
                console.log("Uploaded file:", response.url);
            } catch (error) {
                console.error("Error uploading file:", error);
            }
        }
    };

    const handleImageDelete = async () => {
        if (imageUrl) {
            try {
                await deleteFile("", imageUrl);
                setImageUrl(null);
            } catch (error) {
                console.error("Error deleting file:", error);
            }
        }
    };

    const onSubmit = async (data: IRoomForm) => {
        const { ...formData } = data
        setImageUrl(null)
        const roomcreate = async() =>{
            let roomData: IRoomCreateData = formData
            createRoom(roomData).then(room => {
                
                //Can implement adding members to room here??
                if (room === undefined){ 
                    toast.error("room create failed")
                    return
                }
                setRooms([...rooms, room])
                toast.success("Room successfully created!")
                setImageUrl(null)
                reset()
            }).catch((err) => {
                toast.error("An error occurred. Contact zine team")
            })
        }
        roomcreate();
    }

    const onEdit = async (data: IRoomForm) => {
        const { ...formData } = data

        reset()
        editRoom({id:state.editingID, ...formData }).then(status => {
            if(status === 200){
                toast.success("Room successfully edited!")
                setRooms(rooms.map(r => r.id === state.editingID ? {...r, ...formData} : r)) //changes the room that was edited
                setState({ ...state, editing: false, editingID:-1 })
                setImageUrl(null)
                reset()
            }
            else{
                toast.error("An error occurred. Try again later.")
            }
        }).catch((err) => {
            toast.error("An error occurred. Contact zine team")
        })
    }

    const onCancel = () => {
        setState({ ...state, editing: false, editingID:-1 })
        if (changedImage) handleImageDelete()
        setImageUrl(null)
        reset()
    }

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    const roomDelete = async (room: IRoomData) => {
        deleteFile("", room.dpUrl)
        toast.promise(deleteRoom([room.id]), {
            pending: 'Deleting Room',
            success: `Room ${room.name} deleted successfully`,
        }).then(() => {
            setRooms(rooms.filter(t => t.id !== room.id))
        })
        setState({...state, deleteRoom: null})
    }

    const roomEdit = async (room: IRoomData) => {
        setValue("name", room.name)
        setValue("type", room.type)
        setValue("dpUrl", room.dpUrl)
        setValue("description", room.description)
        setImageUrl(room.dpUrl)

        setState({ ...state, editing: true, editingID: room.id })
    }

    const roomAssign = (room: IRoomData) => {
        setAssignState({ input: "", role: "user", emailList: [] })
        setState({ ...state, assignRoom: room })
        getMembers(room.id).then(members => {
            if(members){
                setMembers(members)
            }
            else{
                setMembers([])
            }
        })
    }

    const addAssignEmail = () => {
        assignState.input.trim().split(/[ ,]+/).map(e => {
            const emails = assignState.emailList
            if (emails.some(f => f === e)) return
            if (!/^\S+@\S+\.\S+$/.test(e) && !e.startsWith('$')) return
            emails.push(e)
            setAssignState({...assignState, input: "", emailList: emails });
        })
    };

    const _assignRoom = async () => {
        if (!state.assignRoom) return
        const room = state.assignRoom
        if (assignState.emailList.length === 0) return toast.error('No users added!')
    
        setState({...state, assignRoom: null})
        let membersList: (IMembers|null)[] = []
        let rolePromises: Promise<void>[] = []
    
        assignState.emailList.forEach((e) => {
            if(e.startsWith('$')){
                let name = e.slice(1).trim() //role name
                let roleId = roles.find(r => (r.roleName).trim() === name)?.id
                if(roleId === undefined){
                    toast.error(`Role ${name} not found`)
                    return
                }
                
                const rolePromise = getRoleMembers(roleId).then(users => {
                    if(users){
                        users.forEach(user => {
                            if(!assignState.emailList.includes(user.email)){
                                membersList.push({userEmail: user.email, role: assignState.role})
                            }
                        })
                    }
                    else{
                        toast.error(`Error getting members of role ${name}.`)
                    }
                })
                rolePromises.push(rolePromise)
            }
            else {
                if(membersList.some(m => m?.userEmail === e)) return
                membersList.push({userEmail: e, role: assignState.role})
            }
        })
    
        // Wait for all rolePromises to resolve
        await Promise.all(rolePromises)
    
        let newMembersList = membersList.filter(m => m !== null)
        newMembersList = newMembersList.filter(m => !members.some(member => member.email === m?.userEmail));
        const assignList: IMembersList = {
            room: room.id,
            members: newMembersList
        }
        
        addUsersToRoom(assignList).then(res => {
            if(res != undefined){
                if(res.status === "success"){
                    toast.success("Successfully assigned users to room")
                }
                else if(res.status === "fail"){
                    toast.error("Failed to add users.")
                }
                if(res.unassignedEmails && res.unassignedEmails.length > 0){
                    toast.error(`The following emails are not registered: ${res.unassignedEmails.join(", ")}`)
                }
                if(res.alreadyAssignedEmails && res.alreadyAssignedEmails.length > 0){
                    toast.error(`The following emails are already assigned to the room: ${res.alreadyAssignedEmails.join(", ")}`)
                }
            }
            else{
                toast.error("An error occurred. Try again later.")
            }
        })
    }
    

    //could be written for multiple emails?
    const _removeUser = async (member: IRoomMember) => {
        if (!state.assignRoom) return
        const room = state.assignRoom
        const response = await removeMembers(room.id, [member.email])
        if(response === 200){
            toast.success(`Successfully removed ${member.email} from ${room.name}`)
            setMembers(members.filter(m => m.email !== member.email))
        }
        else{
            toast.error("An error occurred. Try again later.")
        }
    }

    const _editMemberRole = async (member: IRoomMember) => {
        if (!state.assignRoom) return
        const room = state.assignRoom
        const response = await editMemberRole(room.id, member.email, member.role)
        if(response){
            toast.success(`Successfully changed ${member.email}'s role to ${member.role}`)
            setMembers(members.map(m => m.email === member.email ? {...m, role: member.role} : m))
        }
        else{
            toast.error("An error occurred. Try again later.")
        }
    }

    useEffect(() => {
        fetchAllRooms().then(rooms => {
            setRooms(() => rooms)
        })
        getAllRoles().then(roles => {
            if(roles) setRoles(roles)
            else toast.error("Error fetching roles")
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
                <SideNav />
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
                                        <option>workshop</option>
                                    </select>
                                </div>
                                {/* <div className="col-span-2">
                                    <label className="block text-gray-600 text-sm">Image</label>
                                    <input type="file" id="image" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('image', { required: false })} />
                                </div> */}
                                <div className="col-span-3">
                                    <label className="block text-gray-600 text-sm">Description</label>
                                    <input type="text" id="description" className="block w-full focus:outline-none bottom-border pt-2 px-1" {...register('description', { required: false, maxLength: 100 })} />
                                </div>
                                <div className="col-span-5">
                                    <label className="block text-gray-600 text-sm">Room Image</label>
                                    <input type="file" id="eventImage" className="block w-full focus:outline-none bottom-border pt-2" onChange={handleImageUpload} />
                                    {imageUrl && (
                                        <div className="mt-2">
                                            <img src={imageUrl} alt="Event" className="w-full h-auto" />
                                            <button type="button" className="text-red-500 text-sm mt-2" onClick={handleImageDelete}>Delete Image</button>
                                        </div>
                                    )}
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
                                    <th className="border p-1">Name</th>
                                    <th className="border p-1">Type</th>
                                    {/* <th className="border p-1">Members</th> */}
                                    <th className="border p-1">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    rooms
                                        .filter(u => !state.search || u.name.toLowerCase().includes(state.search!.toLowerCase()))
                                        .map((u, index) => (
                                            <tr key={u.id} className="text-left border-black text-sm">
                                                <td className="border p-1 text-center">{index + 1}</td>
                                                <td className="border p-1">{u.name}</td>
                                                <td className="border p-1">{u.type}</td>
                                                {/* <td className="border p-1 text-center">{ u.members?.length}</td> */} 
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
                        <select className="block w-full focus:outline-none bottom-border pt-2 px-1" value={assignState.role} onChange={(e) => setAssignState({...assignState, role: e.target.value as Role})}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                        <button type="button" className="text-white rounded-md ml-2 px-2 py-1" style={{ background: "#0C72B0" }} onClick={addAssignEmail}>Add</button>
                    </div>

                    <div className="grid grid-cols-2 text-sm font-medium mt-2 gap-1">
                        {assignState.emailList.map((email, index) => (
                            <div key={email} className="flex py-1 px-2 rounded-3xl" style={{background: "#C2FFF48A", color: "#0C72B0F2"}}>
                                <input className="font-medium" disabled value={email} />
                                <button className="ml-1" type="button" onClick={() => setAssignState({...assignState, emailList: assignState.emailList.filter(t => t !== email)})}>✕</button>
                            </div>
                        ))}
                    </div>

                    <div className="flex mt-4 justify-center text-white text-sm gap-2">
                        <button type="button" className="p-2 block w-40 rounded-3xl" style={{ background: "#0C72B0" }} onClick={() => _assignRoom()}>
                            Assign Room
                        </button>
                        <button type="button" className="p-2 block w-40 rounded-3xl text-red-500 border" onClick={() => {
                            setState({...state, assignRoom: null})
                            setMembers([])
                        }}>
                            Cancel
                        </button>
                    </div>
                    
                    <div className=" max-h-full overflow-y-auto h-3/4">
                        <table className="table-auto w-full mt-8 text-center ">
                            <thead>
                                <tr className="text-left">
                                    <th className="border p-1">S.No</th>
                                    <th className="border p-1">Email</th>
                                    <th className="border p-1">Role</th>
                                    <th className="border p-1">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    members
                                        .map((m, index) => (
                                            <tr key={m.email} className="text-left border-black text-sm">
                                                <td className="border p-1 text-center">{index + 1}</td>
                                                <td className="border p-1">{m.email}</td>
                                                <td className="border p-1">{m.role}</td>
                                                <td className="border p-1">
                                                    {/* <button className="bg-green-500 text-white py-1 px-2 rounded-lg ml-1" onClick={() => _removeUser(m)}>Change Role</button> */}
                                                    <button className="bg-red-500 text-white py-1 px-2 rounded-lg ml-1" onClick={() => _removeUser(m)}>Remove</button>
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