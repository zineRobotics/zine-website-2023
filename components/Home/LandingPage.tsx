import React from "react";
import Link from "next/link";
import Macbook from "../../images/macbook.svg";
import Image from "next/image";

const LandingPage = () => {
    return (
        <div className="leading-normal tracking-normal text-indigo-400 pt-4 bg-cover bg-fixed bg-white">
          <h1 className="my-4 pt-20 pb-4 text-2xl md:text-5xl text-black opacity-75 font-bold leading-tight text-center">
            <div className="bg-clip-text text-base text-blue1 text-3xl sm:text-5xl md:text-6xl lg:text-8xl">
             
              ZINE 
              <span className="text-black"> Robotics and Research</span>
            </div>
          </h1>
        </div>
      )
}
// Responsiveness done
export default LandingPage;