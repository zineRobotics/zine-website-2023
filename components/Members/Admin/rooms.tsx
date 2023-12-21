import { ToastContainer } from "react-toastify"
import ProtectedRoute from "./ProtectedRoute"
import SideNav from "../sidenav"

const Rooms = () => {
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
                <div className="col-span-9 px-12 flex flex-col overflow-y-scroll">
                    <h1 className="text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>Rooms</h1>
                </div>
                <SideNav />
            </div>
        </ProtectedRoute>
    )
}

export default Rooms