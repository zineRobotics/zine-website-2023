import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

const branches = [
    "Architecture",
    "Chemical Engineering",
    "Civil Engineering",
    "Computer Science & Engineering",
    "Electrical Engineering",
    "Electronics and Communication Engineering",
    "Metallurgical Engineering",
    "Mechanical Engineering"
]

const Registration = () => {
    const [state, setState] = useState({
        name: "",
        college: "MNIT Jaipur",
        email: "",
        branch: "Computer Science & Engineering",
        phone: "",
        gender: "",
        platform: ""
    });

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {id, value} = e.target;
        setState({ ...state, [id]: value })
    }

    const onGenderChange = (e: ChangeEvent) => setState({ ...state, gender: e.target.id})
    const onPlatformChange = (e: ChangeEvent) => setState({ ...state, platform: e.target.id})


    const onSubmit = (e: FormEvent) => {
        console.log("hello")
        e.preventDefault()
        console.log(state)
    }

    return (
        <div className="flex flex-col items-center" style={{background: "linear-gradient(to right, #0C72B0, #95C5E2)", marginBottom: -35}}>
            <div className="text-white font-bold">
                <h1 className="text-2xl mt-12 lg:text-3xl">WORKSHOP REGISTRATION</h1>
            </div>
            <div className="bg-white rounded-xl p-8 md:p-16 mt-8 mb-16 w-11/12 md:w-1/2" style={{maxWidth: 651}}>
                <form noValidate>
                    <div>
                        <label className="block text-gray-600">Full Name</label>
                        <input type="text" id="name" className="block w-full focus:outline-none bottom-border text-lg pt-2" placeholder="xyz abc" value={state.name} onChange={onChange} required />
                    </div>
                    <div className="mt-6">
                        <label className="block text-gray-600">College Name</label>
                        <select id="college" className="block w-full focus:outline-none bottom-border text-lg pt-2 indent-0" value={state.college} onChange={onChange}>
                            <option>MNIT Jaipur</option>
                            <option>IIIT Kota</option>
                        </select>
                    </div>
                    <div className="mt-6">
                        <label className="block text-gray-600">College Email Address</label>
                        <input type="email" id="email" className="block w-full focus:outline-none bottom-border text-lg pt-2" placeholder="abc@xyz.com" value={state.email} onChange={onChange} required />
                    </div>
                    <div className="mt-6">
                        <label className="block text-gray-600">Branch</label>
                        <select id="name" className="block w-full focus:outline-none bottom-border text-lg pt-2 indent-0">
                            {
                                branches.map(branch => (
                                    <option key={branch}>{branch}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="mt-6">
                        <label className="block text-gray-600">Phone Number</label>
                        <input type="number" id="phone" className="block w-full focus:outline-none bottom-border text-lg pt-2" placeholder="123456789" value={state.phone} onChange={onChange} required />
                    </div>

                    <div className="mt-6 flex flex-col">
                        <p>Gender</p>
                        <div>
                            <input className="mr-6" type="radio" name="gender" id="male" checked={state.gender === "male"} onChange={onGenderChange} />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div>
                            <input className="mr-6" type="radio" name="gender" id="female" checked={state.gender === "female"} onChange={onGenderChange}/>
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col">
                        <p>Platform</p>
                        <div>
                            <input className="mr-6" type="radio" name="platform" id="android" checked={state.platform === "android"} onChange={onPlatformChange}/>
                            <label htmlFor="android">Android</label>
                        </div>
                        <div>
                            <input className="mr-6" type="radio" name="platform" id="ios" checked={state.platform === "ios"} onChange={onPlatformChange} />
                            <label htmlFor="ios">IOS</label>
                        </div>
                    </div>

                    <button type="submit" className="mt-6 p-4 block w-full rounded-3xl text-white" onSubmit={onSubmit} style={{background: "#0C72B0"}}>Register</button>
                </form>
            </div>
        </div>
      )
}

export default Registration;