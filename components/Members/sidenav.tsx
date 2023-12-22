import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ZineLogo from "../../images/admin/logo.png"
import { useRouter } from "next/router";
import { useAuth } from "../../context/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import hamburger from "../../images/hamburger.svg";

const SideNav = () => {
    const { authUser, logOut } = useAuth()
    const [hide, setHide] = useState(true)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const updateScreenWidth = () => { setScreenWidth(window.innerWidth); };
    useEffect(() => {
      window.addEventListener("resize", updateScreenWidth);
      return () => window.removeEventListener("resize", updateScreenWidth);
    }, []);
    
    const router = useRouter()
    const page = router.pathname.split('/').pop()
    return (
        <>
        {        
        (!hide || screenWidth > 768) && <div className="fixed h-full w-full col-span-12 md:col-span-3 pt-8 px-12 text-white md:relative md:block z-50" style={{background: "linear-gradient(to right, #003D63, #0C72B0)"}}>

            <div className="flex flex-col items-center justify-between">
                <Image src={ZineLogo} width={80} height={80} />
                <h3 className="text-3xl font-bold mt-4 md:mr-2">{authUser?.name}</h3>
            </div>

            {
                authUser!.type === "admin" && 
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
                    <Link href="/admin/rooms">
                        <p className={`text-xl hover:text-gray-300 cursor-pointer ${page === "rooms" ? "font-bold" : ""}`}>Rooms</p>
                    </Link>
                    <Link href="/admin/projects">
                        <p className={`text-xl hover:text-gray-300 cursor-pointer ${page === "projects" ? "font-bold" : ""}`}>Projects</p>
                    </Link>
                </div>
            }
            {
                authUser!.type === "user" &&
                <div className="mt-24">
                    <Link href="/users/projects">
                        <p className={`text-xl hover:text-gray-300 cursor-pointer ${page === "projects" ? "font-bold" : ""}`}>Projects</p>
                    </Link>
                    <Link href="/users/announcements">
                        <p className={`text-xl hover:text-gray-300 cursor-pointer ${page === "announcements" ? "font-bold" : ""}`}>Announcements</p>
                    </Link>
                </div>
            }


            <div className="bg-white rounded-3xl text-center cursor-pointer absolute bottom-5 mx-8 left-0 right-0 shadow-md hover:bg-gray-100">
                <p className="text-xl text-red-500 py-3 px-4" onClick={logOut}>Logout</p>
            </div>
        </div>
        }

        <div className="col-span-12 p-2 md:hidden" style={{background: "linear-gradient(to right, #003D63, #0C72B0)"}}>
            <Image className="ml-4 z-50" height={30} width={40} src={hamburger} onClick={() => setHide(!hide)} />
        </div>
        </>
      )
}

export default SideNav;