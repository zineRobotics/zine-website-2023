import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from 'next/router'
import ZineLogo from "../../images/zinelogo.png"
import { useForm } from "react-hook-form";
import { logIn, useAuth } from "../../context/authContext";
import { db } from '../../firebase';
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";

const errorMessages: { [key: string]: string; } = {
    'auth/invalid-email': 'Invalid email address. Please check your email format.',
    'auth/user-not-found': 'Incorrect email id or password.',
    'auth/wrong-password': 'Incorrect email id or password.',
    'default': 'An error occurred. Please try again later.'
  };

interface ILoginData {
    email: string;
    password: string;
}

const Login = () => {
    const { register, reset, setError, formState: {errors}, handleSubmit } = useForm<ILoginData>()
    const router = useRouter()
    const { authUser } = useAuth()

    useEffect(() => {
        if (authUser) {
            console.log(authUser.type)
            if (authUser.type === "admin") router.push('/admin/dashboard')
            // else if (authUser.type === "user") router.push('/users/announcements')
            else if (authUser.type === "user") router.push('/users/announcements') //CHANGED THIS
            else if (authUser.type === "alumni") router.push('/alumni/dashboard')

        }
    }, [authUser])

    const onSubmit = async (data: ILoginData) => {
        const {email, password} = data
        reset()
        
        const promise = logIn(email, password)
        toast.promise(promise, {
            pending: "Logging In",
            success: "Login Success!",
            error: "Login Failed"
        }).catch((error: any) => {
            console.log(error)
            const message = errorMessages[error.code] || errorMessages["default"]
            setError("root.authError", { message })
        })

        // promise.then(async (userCredential: any) => {
        //     // Signed in
        //     const _user = userCredential.user;

        //     const snapshot = await getDoc(doc(db, "users", _user.uid))
        //     if (!snapshot.exists()) return setError("root.authError", {message: "Invalid username or password"})
        //     if (!_user.emailVerified) return setError("root.authError", {message: "Email is not verified"})

        //     if (snapshot.data().type == "admin") return await router.push('/admin/dashboard')

        //     // if (snapshot.data().roles?.includes("stage4")) return await router.push('/users/projects')
        //     // setError("root.notQualified", {message: "Sorry you have not qualified for stage 3"})
        //     return await router.push('/users/announcements')
        // })
    }

    return (
        <div className="flex flex-col items-center" style={{background: "linear-gradient(to right, #003D63, #0C72B0)"}}>
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

            <div className="bg-white shadow-md rounded-xl px-8 pb-8 md:px-16 my-16 w-11/12 md:w-1/2" style={{maxWidth: 651}}>
                <div className="flex justify-center">
                    <Image src={ZineLogo} width={150} height={150}/>
                </div>
                <p className="text-center -mt-8 font-semibold" style={{color: "#0C72B0"}}>Robotics and Research Group</p>
                <form>
                    <div className="mt-8">
                        <label className="block text-gray-600">Email<span className="text-red-500">*</span></label>
                        <input type="email" id="email" className="block w-full focus:outline-none bottom-border pt-2" placeholder="xyz@abc.com" {...register("email", { required: true })} />
                        {errors.email && <p className="text-red-500 text-sm" role="alert">Email ID is required</p>}
                    </div>

                    <div className="mt-8">
                        <label className="block text-gray-600">Password<span className="text-red-500">*</span></label>
                        <input type="password" id="password" className="block w-full focus:outline-none bottom-border pt-2" {...register("password", { required: true })} />
                    </div>

                    <div className="flex md:flex-row-reverse flex-col justify-between mt-2">
                        <p className="">
                            <Link href="/forgotPassword"><a className="text-blue-500 text-sm underline">Forgot Password</a></Link>
                        </p>

                        <div>
                            {errors.password && <p className="text-red-500 text-sm" role="alert">Password is required</p>}
                            {errors.root?.authError && <p className="text-sm text-red-500">{errors.root?.authError.message}</p>}
                        </div>
                        {/* {errors.root?.notQualified && <p className="text-sm text-red-500">{errors.root.notQualified.message}</p>} */}
                    </div>

                    <button className="mt-8 p-4 block w-full rounded-3xl text-white opacity-90 hover:opacity-100" onClick={handleSubmit(onSubmit)} style={{background: "#0C72B0"}}>Login</button>
                    <p className="mt-8 text-sm text-center">
                        Dont have an account? <Link href="/signup"><a className="text-blue-500 underline">Signup</a></Link>
                    </p>
                </form>
            </div>
        </div>
      )
}

export default Login;