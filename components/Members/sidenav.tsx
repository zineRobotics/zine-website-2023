import React from "react";
import Link from "next/link";
import Image from "next/image";
import ZineLogo from "../../images/admin/logo.png"
import { useRouter } from "next/router";
import { useAuth } from "../../context/authContext";

const SideNav = () => {
    const { authUser, logOut } = useAuth()
    const router = useRouter()

    const onLogout = async () => {
        await router.push('/login')
        await logOut()
    }

    const page = router.pathname.split('/').pop()
    return (
        <>
        <div className="col-span-3 pt-8 px-12 text-white hidden relative md:block" style={{background: "linear-gradient(to right, #003D63, #0C72B0)"}}>
            <div className="flex items-center justify-between">
                <h3 className="text-3xl font-bold mr-2">{authUser?.name}</h3>
                <Image src={ZineLogo} width={80} height={80} />
            </div>

            {
                authUser.type === "admin" && 
                <div className="mt-24">
                    <Link href="/admin/dashboard">
                        <p className={`text-xl hover:text-gray-300 cursor-pointer ${page === "dashboard" ? "font-bold" : ""}`}>Dashboard</p>
                    </Link>
                    <Link href="/admin/registrations">
                        <p className={`text-xl hover:text-gray-300 cursor-pointer ${page === "registrations" ? "font-bold" : ""}`}>Registered</p>
                    </Link>
                    <Link href="/admin/users">
                        <p className={`text-xl hover:text-gray-300 cursor-pointer ${page === "users" ? "font-bold" : ""}`}>Users And Channels</p>
                    </Link>
                    <Link href="/admin/events">
                        <p className={`text-xl hover:text-gray-300 cursor-pointer ${page === "events" ? "font-bold" : ""}`}>Events</p>
                    </Link>
                    <Link href="/admin/tasks">
                        <p className={`text-xl hover:text-gray-300 cursor-pointer ${page === "tasks" ? "font-bold" : ""}`}>Tasks</p>
                    </Link>
                    <br />
                    <Link href="/admin/announcements">
                        <p className={`text-xl hover:text-gray-300 cursor-pointer ${page === "announcements" ? "font-bold" : ""}`}>Announcements</p>
                    </Link>
                    <p className="text-xl">Channels</p>
                    <Link href="/admin/projects">
                        <p className={`text-xl hover:text-gray-300 cursor-pointer ${page === "projects" ? "font-bold" : ""}`}>Projects</p>
                    </Link>
                </div>
            }
            {
                authUser.type === "user" && authUser.roles.includes("stage4") &&
                <div className="mt-24">
                    <Link href="/users/projects">
                        <p className={`text-xl hover:text-gray-300 cursor-pointer ${page === "projects" ? "font-bold" : ""}`}>Projects</p>
                    </Link>
                    <Link href="/users/announcements">
                        <p className={`text-xl hover:text-gray-300 cursor-pointer ${page === "announcements" ? "font-bold" : ""}`}>Announcements</p>
                    </Link>
                </div>
            }


            <div className="bg-white rounded-3xl text-center cursor-pointer absolute bottom-5 mx-8 left-0 right-0">
                <p className="text-xl text-red-500 py-3 px-4" onClick={onLogout}>Logout</p>
            </div>
        </div>

        {/* <div className="fixed w-full p-2 top-0 z-10 flex flex-row-reverse" style={{background: "linear-gradient(to right, #003D63, #0C72B0)"}}>
            <div className="bg-white rounded-xl text-center">
                <p className="text-red-500 px-4">Logout</p>
            </div>
        </div> */}
        </>
      )
}

export default SideNav;