import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '../../images/zinelogo_11zon.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram, faLinkedin, faGithub,  faWordpress} from '@fortawesome/free-brands-svg-icons';

const Footer_Main = () => {
    return(
        <div className="bg-black grid grid-cols-1 lg:grid-cols-2 px-16">
            {/* 1st grid */}
            <div className="sticky custom:bg-black z-30 flex flex-wrap gap-4 justify-center items-center pb-4 pt-10 mt-6">
                <div id="footerid" className="box-border border-2 border-top pt-4 rounded-lg justify-center">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 mb-10 mx-32"><Image src={logo}></Image></div>
                    <div className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 text-3xl xl:text-4xl text-center">Connect With ZINE!</div>
                    <div className="flex gap-8 justify-center mb-10 mx-auto">
                        <div className="lg:w-20 lg:h-20 w-12 h-12 pt-5 transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <Link href = "https://github.com/zine-robotics"><FontAwesomeIcon icon={faGithub} className="text-white mr-4" size="4x" /></Link>
                        </div>
                        <div className="lg:w-20 lg:h-20 w-12 h-12 pt-5 transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <Link href = "https://www.linkedin.com/company/de-zine-limited/mycompany/"><FontAwesomeIcon icon={faLinkedin} className="text-white mr-4" size="4x" /></Link>
                        </div>
                        <div className="lg:w-20 lg:h-20 w-12 h-12 pt-5 transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <Link href = "https://www.instagram.com/zine.robotics/"><FontAwesomeIcon icon={faInstagram} className="text-white mr-4" size="4x" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* 2nd grid */}
            <div className="flex justify-center mt-20">
          <form className="bg-gray-900 border-2 opacity-75 w-80 md:w-120 lg:w-120 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-blue-300 py-12 text-center font-bold mb-2">
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

export default Footer_Main;
