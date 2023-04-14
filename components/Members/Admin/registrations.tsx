import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import SideNav from "../sidenav";
import styles from "../styles";
import ProtectedRoute from "./ProtectedRoute";
import { useForm } from "react-hook-form";
import { db } from '../../../firebase';
import { DocumentReference, collection, deleteDoc, getDocs } from "firebase/firestore";
import ToastMessage from "../toastMessage";

interface IAddRegistration {
    email: string;
}

interface IRegisteredUsers {
    email: string;
    gender: "male" | "female" | "N/A";
    branch: string;
    name: string;
    platform: "ios" | "android" | "N/A";
    college: string;
    phone: string;
}

interface ISearchData {
    search?: string;
    platform?: "ios" | "android" | "N/A";
    gender?: "male" | "female" | "N/A";
}

const validateEmail = (emailids: string) => {
    for (const email of emailids.split(',')) {
        if (!/^20\d\d((kucp)|(kuec)|(ucp)|(uec)|(uee)|(uch)|(ume)|(uce)|(umt))\d{4}@((mnit)|(iiitkota)).ac.in$/g.test(email)) return false
    }
    return true
}

const Registrations = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<IAddRegistration>();
    const regCollection = collection(db, "registrations")

    const [users, setUsers] = useState<IRegisteredUsers[]>([])
    const [message, setMessage] = useState("");
    const [refMap, setRefMap] = useState<{[key: string]: DocumentReference}>({})
    const [state, setState] = useState<ISearchData>({ search: "", platform: "N/A", gender: "N/A"})
    const onSubmit = (data: IAddRegistration) => {
        console.log(data)
    }

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        console.log(state)
        setState({ ...state, [e.target.id]: e.target.value })
    }

    const deleteRegistration = async (email: string) => {
        await deleteDoc(refMap[email])
        setMessage(`Registration ${email} deleted successfully`)
        setUsers(users.filter(u => u.email !== email))
    }

    useEffect(() => {
        const registeredEmails: any[] = []
        getDocs(regCollection).then(res => {
            const newusers: IRegisteredUsers[] = []
            res.forEach(d => { 
                newusers.push(d.data() as IRegisteredUsers)
                registeredEmails.push(d.data().email)
                setRefMap((state) => {return {...state, [d.data().email]: d.ref}})
            })
            setUsers(newusers)

            const userEmails: string[] = []
            getDocs(collection(db, "users")).then((res) => {
                res.forEach(d => userEmails.push(d.data().email))
                console.log("All app users email:")
                console.log(userEmails.filter(u => u.startsWith("2022")).join(" "))
                console.log("Registered but not app users: ")
                const registeredNotUsers = registeredEmails.filter(u => !userEmails.includes(u))
                console.log(registeredNotUsers.join(" "), registeredNotUsers.length)
            })
        })
    }, [])

    return (
        <ProtectedRoute>
            <div className="grid grid-cols-12 h-screen" style={{background: "#EFEFEF"}}>
                <ToastMessage message={message} setMessage={setMessage} />
                
                <div className="col-span-9 px-12 flex flex-col overflow-y-scroll">
                    <h1 className="text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>Registrations</h1>
                    <div className="grid grid-cols-9 gap-8 my-8">
                        <div className="col-span-3 bg-white rounded-xl py-4">
                            <h1 className="text-7xl text-center font-extrabold mt-4" style={{color: "#0C72B0"}}>{users.length}</h1>
                            <div className="text-center mt-4">
                                <FontAwesomeIcon icon={faCheck} size="2x" style={styles.textSecondary} />
                            </div>
                            <h3 className="text-2xl text-center font-bold mt-2" style={styles.textSecondary}>Registered</h3>
                        </div>
                        <div className="col-span-6 bg-white rounded-xl py-4 px-6">
                            <h1 className="text-3xl font-bold" style={styles.textPrimary}>Add Registration</h1>
                            <form>
                                <div className="mt-4">
                                    <label className="block text-gray-600">Enter Registered Email ID(s)</label>
                                    <input type="email" id="email" className="block w-full focus:outline-none bottom-border text-lg pt-2" {...register('email', {required: true, validate: validateEmail})} />
                                    { errors.email?.type === "required" && <p className="text-sm text-red-500" role="alert">Email ID is required</p>}
                                    { errors.email && <p className="text-sm text-red-500" role="alert">Invalid Email ID</p>}
                                </div>
                                <button className="p-4 block w-40 rounded-3xl text-white mt-8" style={{background: "#0C72B0"}} onClick={handleSubmit(onSubmit)}>Add</button>
                            </form>
                        </div>
                    </div>

                    <div className="bg-white py-4 px-6 mb-8 rounded-xl">
                        <div className="grid grid-cols-6 gap-4">
                            <div className="col-span-4 flex flex-col">
                                <label className="text-gray-500">Search</label>
                                <input id="search" type="text" className="text-lg pt-2 bottom-border" onChange={onSearchChange} placeholder="Search email ID or name" value={state?.search}/>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-500">Platform</label>
                                <select id="platform" className="text-lg pt-3 bottom-border" onChange={onSearchChange} value={state?.platform}>
                                    <option>N/A</option>
                                    <option>ios</option>
                                    <option>android</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-gray-500">Gender</label>
                                <select id="gender" className="text-lg pt-3 bottom-border" onChange={onSearchChange} value={state?.gender}>
                                    <option>N/A</option>
                                    <option>male</option>
                                    <option>female</option>
                                </select>
                            </div>

                            {/* <button className="p-2 mt-4 text-white rounded-xl" style={{background: "#0C72B0"}}>Search</button> */}
                        </div>

                        {/* <div className="flex flex-col mt-4">
                            <div className="rounded-lg p-2" style={{background: "#EFEFEF"}}>
                                <p className="float-left">2021ucp1011@mnit.ac.in</p>
                                <button className="float-right bg-red-500 text-white rounded-xl p-2">Remove</button>
                            </div>
                        </div> */}
                        <table className="table-auto w-full mt-8 text-center">
                            <thead>
                                <tr className="text-left">
                                    <th className="border p-1">S.No</th>
                                    <th className="border p-1">Name</th>
                                    <th className="border p-1">Email</th>
                                    <th className="border p-1">Platform</th>
                                    <th className="border p-1">Gender</th>
                                    <th className="border p-1">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users
                                    .filter(u => !state.search || u.email.toLowerCase().includes(state.search!.toLowerCase()) || u.name.toLowerCase().includes(state.search!.toLowerCase()))
                                    .filter(u => state.gender === "N/A" || u.gender === state.gender)
                                    .filter(u => state.platform === "N/A" || u.platform === state.platform)
                                    .map((u,index) => (
                                        <tr key={u.email + u.name} className="text-left border-black">
                                            <td className="border p-1">{index + 1}</td>
                                            <td className="border p-1">{u.name}</td>
                                            <td className="border p-1">{u.email}</td>
                                            <td className="border p-1">{u.platform}</td>
                                            <td className="border p-1">{u.gender}</td>
                                            <td className="border p-1"><button className="bg-red-500 text-white py-1 px-4 rounded-lg" onClick={() => deleteRegistration(u.email)}>Delete</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        { !users.length && <p className="text-center text-xl mt-4">No results found</p>}

                    </div>
                </div>
                <SideNav />
            </div>
        </ProtectedRoute>
      )
}

export default Registrations;