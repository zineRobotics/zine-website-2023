import React from "react";
import Link from "next/link";
import Macbook from "../../images/macbook.svg";
import Image from "next/image";

const PatentSection = () => {
    return (
        <div className="leading-normal tracking-normal text-indigo-400 pt-4 bg-cover bg-fixed bg-white">
          <div className="leading-normal tracking-normal py-32 bg-cover bg-fixed bg-black">
            <div className="grid grid-cols-2">
              <div className="col-span-1 mx-auto">
                <p className="text-center text-8xl text-blue1">50+</p>
                <p className="text-center text-gray-400 mt-8 text-xl">Research Papers</p>
                <div className="w-8 h-8 border-b-2 border-blue-600 mx-auto"></div>
              </div>
              <div className="col-span-1 mx-auto">
                <p className="text-center text-8xl text-blue1 shadow-lg">10+</p>
                <p className="text-center text-gray-400 mt-8 text-xl">Patents</p>
                <div className="w-8 h-8 border-b-2 border-blue-600 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      )
}
// Responsiveness done
export default PatentSection;