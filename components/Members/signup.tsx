import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from 'next/router'
import ZineLogo from "../../images/logo_without_shadow.webp"
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";
import { db } from '../../firebase';
import { doc, getDoc } from "firebase/firestore";

interface ILoginData {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

const validateEmail = (email: string) => {
    return /^20\d\d((kucp)|(kuec)|(uar)|(ucp)|(uec)|(uee)|(uch)|(ume)|(uce)|(umt))\d{4}@((mnit)|(iiitkota)).ac.in$/g.test(email)
}

const Signup = () => {
    const { register, reset, setError, watch, formState: {errors}, handleSubmit } = useForm<ILoginData>()
    const router = useRouter()
    const { signIn } = useAuth()

    const checkPasswordConfirmation = (passwordConfirmation: string) => {
        return watch('password') === passwordConfirmation
    }

    const onSubmit = async (data: ILoginData) => {
        const {name, email, password, passwordConfirmation} = data
        reset()
        signIn(email, password).then(async (userCredential: any) => {
            // Signed in
            const _user = userCredential.user;
            console.log(_user)
        }).catch((error: any) => {
            console.log(error)
            setError("root.authError", {message: error.message})
        })
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
                        <label className="block text-gray-600">Full Name</label>
                        <input type="text" className="block w-full focus:outline-none bottom-border text-lg pt-2" {...register("name", { required: true })} />
                        {errors.email && <p className="text-red-500 text-sm" role="alert">Full Name is required</p>}
                    </div>

                    <div className="mt-8">
                        <label className="block text-gray-600">Email</label>
                        <input type="email" className="block w-full focus:outline-none bottom-border text-lg pt-2" {...register("email", { required: true, validate: validateEmail })} />
                        {errors.email && <p className="text-red-500 text-sm" role="alert">Email ID is required</p>}
                        {errors.email?.type === "validate" && <p className="text-red-500 text-sm" role="alert">Enter a valid college email id</p>}
                    </div>

                    <div className="mt-8">
                        <label className="block text-gray-600">Password</label>
                        <input type="password" className="block w-full focus:outline-none bottom-border text-lg pt-2" {...register("password", { required: true })} />
                        {errors.password && <p className="text-red-500 text-sm" role="alert">Password is required</p>}
                    </div>

                    <div className="mt-8">
                        <label className="block text-gray-600">Password Confirmation</label>
                        <input type="password" className="block w-full focus:outline-none bottom-border text-lg pt-2" {...register("passwordConfirmation", { required: true, validate: checkPasswordConfirmation })} />
                        {errors.passwordConfirmation?.type === "required" && <p className="text-red-500 text-sm" role="alert">Passwords Confirmation is required</p>}
                        {errors.passwordConfirmation?.type === "validate" && <p className="text-red-500 text-sm" role="alert">Passwords do not match</p>}

                    </div>

                    {errors.root?.authError && <p className="text-sm text-red-500">{errors.root.authError.message}</p>}
                    <button className="mt-8 p-4 block w-full rounded-3xl text-white" onClick={handleSubmit(onSubmit)} style={{background: "#0C72B0"}}>Sign Up</button>
                </form>
            </div>
        </div>
      )
}

export default Signup;