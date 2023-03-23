import React from "react";
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
    return (
        <div className="flex flex-col items-center" style={{background: "linear-gradient(to right, #0C72B0, #95C5E2)", marginBottom: -35}}>
            <div className="text-white font-bold">
                <h1 className="text-2xl mt-12 lg:text-3xl">WORKSHOP REGISTRATION</h1>
            </div>
            <div className="bg-white rounded-xl p-8 md:p-16 mt-8 mb-16 w-11/12 md:w-1/2" style={{maxWidth: 651}}>
                <form>
                    <div>
                        <label className="block text-gray-600">Full Name</label>
                        <input type="text" id="name" className="block w-full focus:outline-none bottom-border text-lg pt-2" placeholder="xyz abc" required />
                    </div>
                    <div className="mt-6">
                        <label className="block text-gray-600">College Name</label>
                        <select id="name" className="block w-full focus:outline-none bottom-border text-lg pt-2 indent-0">
                            <option>MNIT Jaipur</option>
                            <option>IIIT Kota</option>
                        </select>
                    </div>
                    <div className="mt-6">
                        <label className="block text-gray-600">College Email Address</label>
                        <input type="email" id="email" className="block w-full focus:outline-none bottom-border text-lg pt-2" placeholder="abc@xyz.com" required />
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
                        <label className="block text-gray-600">Year</label>
                        <select id="name" className="block w-full focus:outline-none bottom-border text-lg pt-2 indent-0">
                            {
                                [1, 2, 3, 4, 5].map(year => (
                                    <option key={year}>Year {year}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="mt-6">
                        <label className="block text-gray-600">Phone Number</label>
                        <input type="number" id="phone" className="block w-full focus:outline-none bottom-border text-lg pt-2" placeholder="123456789" required />
                    </div>

                    <div className="mt-6 flex flex-col">
                        <p>Gender</p>
                        <div>
                            <input className="mr-6" type="radio" name="gender" id="male" />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div>
                            <input className="mr-6" type="radio" name="gender" id="female"/>
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col">
                        <p>Platform</p>
                        <div>
                            <input className="mr-6" type="radio" name="gender" id="ios" />
                            <label htmlFor="ios">IOS</label>
                        </div>
                        <div>
                            <input className="mr-6" type="radio" name="gender" id="android"/>
                            <label htmlFor="android">Android</label>
                        </div>
                    </div>

                    <button type="submit" className="mt-6 p-4 block w-full rounded-3xl text-white" style={{background: "#0C72B0"}}>Register</button>
                </form>
            </div>
        </div>
      )
}

export default Registration;