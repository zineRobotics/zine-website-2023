import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import ZineLogo from "../../images/logo_without_shadow.webp"

const AdminLogin = () => {
    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;
        setState({ ...state, [id]: value })
    }
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log(state)
    }

    return (
        <div className="flex flex-col items-center" style={{background: "linear-gradient(to right, #003D63, #0C72B0)", marginBottom: -35}}>
            <div className="bg-white rounded-xl p-8 md:p-16 my-16 w-11/12 md:w-1/2" style={{maxWidth: 651}}>
                <div className="flex justify-center">
                    <Image src={ZineLogo} width={100} height={50}/>
                </div>
                <p className="text-center font-semibold" style={{color: "#0C72B0"}}>Robotics and Research Group</p>
                <form>
                    <div className="mt-8">
                        <label className="block text-gray-600">Email</label>
                        <input type="email" id="email" className="block w-full focus:outline-none bottom-border text-lg pt-2" placeholder="xyz@abc.com" value={state.email} onChange={onChange} required />
                    </div>

                    <div className="mt-8">
                        <label className="block text-gray-600">Password</label>
                        <input type="password" id="password" className="block w-full focus:outline-none bottom-border text-lg pt-2" value={state.password} onChange={onChange} required />
                    </div>

                    <button className="mt-12 p-4 block w-full rounded-3xl text-white" onClick={onSubmit} style={{background: "#0C72B0"}}>Login</button>
                </form>
            </div>
        </div>
      )
}

export default AdminLogin;