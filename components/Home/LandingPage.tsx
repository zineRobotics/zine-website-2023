import React from "react";
import Link from "next/link";
import Macbook from "../../images/macbook.svg";
import Image from "next/image";

const LandingPage = () => {
    return (
        <div className="leading-normal tracking-normal text-indigo-400 pt-4 bg-cover bg-fixed bg-white">
          <h1 className="my-4 text-2xl md:text-5xl text-black opacity-75 font-bold leading-tight text-center">
            Welcome to 
            <br />
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 text-3xl sm:text-4xl md:text-7xl lg:text-8xl">
              Zine Robotics and Research
            </div>
            <br />
          </h1>
          <p className="leading-normal text-base text-xl md:text-2xl mb-8 -mt-4 text-center">
            Where Imagination Leads to Creation
          </p>
        </div>
      )
}
// Responsiveness done
export default LandingPage;