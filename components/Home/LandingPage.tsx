import React from "react";
import Link from "next/link";
import Macbook from "../../images/macbook.svg";
import Image from "next/image";

const LandingPage = () => {
    return (
        <div className="leading-normal tracking-normal text-indigo-400 m-6 bg-cover bg-fixed bg-body-bg">
          <h1 className="my-4 text-2xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center">
            Welcome to 
            <br />
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 text-3xl sm:text-4xl md:text-7xl lg:text-8xl">
              Zine Robotics and Research
            </div>
            <br />
          </h1>
          <p className="leading-normal text-base text-xl md:text-2xl mb-8 text-center">
            Where Imagination Leads to Creation
          </p>

          <div className="flex justify-center">
          <form className="bg-gray-900 opacity-75 w-120  shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-blue-300 py-2 text-center font-bold mb-2">
                Register for our workshop
              </label>
              <input
                className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                id="emailaddress"
                type="text"
                placeholder="2021***@mnit.ac.in"
              />
            </div>

            <div className="flex justify-center">
              <button
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </form>
          </div>
        </div>
      )
}

export default LandingPage;