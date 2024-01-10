import React from "react";
import SideNav from "../sidenav";
import ProtectedRoute from "./ProtectedRoute";
import { ToastContainer, toast } from "react-toastify";

const Donate = () => {
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
            <div className="flex flex-col md:grid grid-cols-12 h-screen" style={{ background: "#EFEFEF" }}>
                <SideNav />
                <div className="col-span-9 px-12 flex flex-col">
                    <h1 className="text-4xl font-bold mt-8" style={{ color: "#AAAAAA" }}>Alumni</h1>
                </div>
            </div>
        </ProtectedRoute>
    )
}

export default Donate;