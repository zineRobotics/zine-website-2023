import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from 'next/router'
import ZineLogo from "../../images/zinelogo.png"
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";
import { db } from '../../firebase';
import { doc, getDoc } from "firebase/firestore";

interface ILoginData {
    email: string;
    password: string;
}

const Login = () => {
    const { register, reset, setError, formState: {errors}, handleSubmit } = useForm<ILoginData>()
    const router = useRouter()
    const { logIn } = useAuth()

    const onSubmit = async (data: ILoginData) => {
        const {email, password} = data
        reset()
        logIn(email, password).then(async (userCredential: any) => {
            // Signed in
            const _user = userCredential.user;

            const snapshot = await getDoc(doc(db, "users", _user.uid))
            if (!snapshot.exists()) return setError("root.authError", {message: ""})
            if (snapshot.data().type == "admin") return await router.push('/admin/dashboard')

            if (snapshot.data().roles?.includes("stage4")) return await router.push('/users/projects')
            setError("root.notQualified", {message: "Sorry you have not qualified for stage 3"})
        }).catch((error: any) => {
            console.log(error)
            setError("root.authError", {message: error.message})
        })
    }

    return (
        <div className="flex flex-col items-center" style={{background: "linear-gradient(to right, #003D63, #0C72B0)"}}>
            <div className="bg-white rounded-xl px-8 pb-8 md:px-16 my-16 w-11/12 md:w-1/2" style={{maxWidth: 651}}>
                <div className="flex justify-center">
                    <Image src={ZineLogo} width={150} height={150}/>
                </div>
                <p className="text-center -mt-8 font-semibold" style={{color: "#0C72B0"}}>Robotics and Research Group</p>
                <form>
                    <div className="mt-8">
                        <label className="block text-gray-600">Email</label>
                        <input type="email" id="email" className="block w-full focus:outline-none bottom-border text-lg pt-2" placeholder="xyz@abc.com" {...register("email", { required: true })} />
                        {errors.email && <p className="text-red-500 text-sm" role="alert">Email ID is required</p>}
                    </div>

                    <div className="mt-8">
                        <label className="block text-gray-600">Password</label>
                        <input type="password" id="password" className="block w-full focus:outline-none bottom-border text-lg pt-2" {...register("password", { required: true })} />
                        {errors.password && <p className="text-red-500 text-sm" role="alert">Password is required</p>}
                    </div>

                    {errors.root?.authError && <p className="text-sm text-red-500">Invalid username or password</p>}
                    {errors.root?.notQualified && <p className="text-sm text-red-500">{errors.root.notQualified.message}</p>}
                    <button className="mt-8 p-4 block w-full rounded-3xl text-white" onClick={handleSubmit(onSubmit)} style={{background: "#0C72B0"}}>Login</button>
                </form>
            </div>
        </div>
      )
}

export default Login;