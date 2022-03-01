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
            <div className="bg-clip-text text-base text-blue1 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
             
              ZINE 
              <span className="text-black"> Robotics and Research</span>
            </div>
          </h1>
          <p className="leading-normal font-bold  text-base text-2xl text-black opacity-75 md:text-3xl mb-8 mt-8 text-center">
            Where Imagination Leads to Creation
          </p>
        </div>
      )
}
// Responsiveness done
export default LandingPage;