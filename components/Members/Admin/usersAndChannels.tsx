//fix the image upload to firebase
//number of members in a room is currently not implemented

import { toast,ToastContainer } from "react-toastify"
import ProtectedRoute from "./ProtectedRoute"
import SideNav from "../sidenav"
import styles from "../../../constants/styles";
import { useEffect, useState } from "react";
import { Control, set, useFieldArray, useForm } from "react-hook-form";
import { IRoomData, IMembersList, IMembers, IRoomMember, addUsersToRoom, fetchAllRooms, getMembers, removeMembers, addMembersToRooms, IAddToRooms } from "../../../apis/room";
import { getAllRoles, getRoleMembers, IRoleData, IRoleMember } from "../../../apis/roles";

interface IRoomForm{
    name: string;
    type: "project" | "group" | "workshop";
    dpUrl: string;
    description: string;
}

interface IState {
    search: string;
    assignRoom: IRoomData | null;
}

type Role = "user" | "admin";
interface IAssignState {
    role: Role
    input: string;
    emailList: string[];
    roomList: number[];
}

const UsersAndChannels = () => {
    const [members, setMembers] = useState<IRoomMember[]>([]);
    const [rooms, setRooms] = useState<IRoomData[]>([]);
    const [roles, setRoles] = useState<IRoleData[]>([]);
    const [assignState, setAssignState] = useState<IAssignState>({ role: "user", input: "" , emailList: [], roomList: []});

    const { register, watch, handleSubmit, setValue, reset, control, formState: { errors } } = useForm<IRoomForm>();

    const onSubmit = async () => {
        console.log(assignState.emailList, assignState.roomList)
    }

    const onCancel = () => {
        reset()
    }

    // const onSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    //     setState({ ...state, [e.target.id]: e.target.value })
    // }

    const roomAssign = (room: IRoomData) => {
        setAssignState({ input: "", role: "user", emailList: [], roomList: [] })
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
        assignState.input.trim().split(/[ ,]+/).forEach(e => {
            const emails = assignState.emailList
            if (emails.some(f => f === e)) return
            if (!/^\S+@\S+\.\S+$/.test(e) && !e.startsWith('$')) return
            emails.push(e)
            setAssignState({...assignState, input: "", emailList: emails });
        })
    };

    const _assignRoom = async () => {
        if (!assignState.roomList.length){
            toast.error('No Rooms Selected')
        }
        if (assignState.emailList.length === 0) return toast.error('No users added!')
        let membersList: (IMembers|null)[] = []
        let rolePromises: Promise<void>[] = []
    
        assignState.emailList.forEach((e) => {
            if(e.startsWith('$')){
                let name = e.slice(1).trim() //role name
                let roleId = roles.find(r => (r.roleName && (r.roleName).trim() === name))?.id
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
        const assignList: IAddToRooms = {
            roomIds: assignState.roomList,
            members: newMembersList
        }
        
        addMembersToRooms(assignList).then(res => {
            if(res != undefined){
                // if(res.status === "success"){
                //     toast.success("Successfully assigned users to room")
                // }
                // else if(res.status === "partial_success"){
                //     toast.success("Partial Success")
                // }
                // else if(res.status === "fail"){
                //     toast.error("Failed to add users.")
                // }
                if(res.invalidEmails && res.invalidEmails.length > 0){
                    toast.error(`The following emails are not registered: ${res.invalidEmails.join(", ")}`)
                }
                if(res.alreadyAssignedEmails){
                    Object.keys(res.alreadyAssignedEmails).forEach((e) => {
                        let index = Number(e)
                        toast.error(`The following emails are already assigned to the roomId ${e}: ${res.alreadyAssignedEmails[index].join(", ")}`)
                    })
                }
            }
            else{
                toast.error("An error occurred. Try again later.")
            }
        })
    }

    //could be written for multiple emails?

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
                    <h1 className="text-4xl font-bold mt-16 md:mt-8" style={{color: "#AAAAAA"}}>Users And Channels</h1>
                    <div className="row-span-5 bg-white rounded-xl py-4 px-6 my-8 w-full shadow-md">
                        <h1 className="text-2xl font-bold" style={styles.textPrimary}>{"Add Users"}</h1>
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

                        <div className="mt-4">
                            <h2 className="text-xl font-bold mb-2" style={styles.textPrimary}>Select Rooms</h2>
                            <div className="grid grid-cols-2 gap-2">
                                {rooms.map((room) => (
                                    <div key={room.id} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={`room-${room.id}`}
                                            checked={assignState.roomList.includes(room.id)}
                                            onChange={(e) => {
                                                const newRoomList = e.target.checked
                                                    ? [...assignState.roomList, room.id]
                                                    : assignState.roomList.filter((id) => id !== room.id);
                                                setAssignState({ ...assignState, roomList: newRoomList });
                                            }}
                                        />
                                        <label htmlFor={`room-${room.id}`} className="ml-2">{room.name}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex mt-4 justify-center text-white text-sm gap-2">
                            <button type="button" className="p-2 block w-40 rounded-3xl" style={{ background: "#0C72B0" }} onClick={() => _assignRoom()}>
                                Assign Room
                            </button>
                            <button type="button" className="p-2 block w-40 rounded-3xl text-red-500 border" onClick={() => {
                                setMembers([])
                            }}>
                                Cancel
                            </button>
                        </div>
                    
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    )
}

export default UsersAndChannels