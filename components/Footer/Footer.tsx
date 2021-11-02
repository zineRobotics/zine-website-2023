import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '../../images/zinelogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer_Main = () => {
    return(
        <div className="sticky custom:bg-purple-800 z-30 custom:flex custom:flex-wrap gap-4 justify-evenly items-start pb-2 pt-10 mt-6">
            <div className="box-border bg-indigo-800 custom:p-10 rounded-lg">
                <div className="w-20 h-20 sm:w-28 sm:h-28 mb-10 pt-5 transform-gpu mx-96 sm:mx-44 md:mx-28"><Image src={logo}></Image></div>
                <div className="text-4xl transform-gpu mx-96 sm:mx-44 md:mx-28 font-bold font-sans text-gray-1500 mb-6">Connect With ZINE!</div>
                <div className="flex mx-96 sm:mx-44 md:mx-28 pb-5">
                    <Link href = "https://github.com/zine-robotics"><FontAwesomeIcon icon={faGithub} className="cursor-pointer text-gray-1000 mr-4" size="3x" /></Link>
                    <Link href = "https://www.linkedin.com/company/de-zine-limited/"><FontAwesomeIcon icon={faLinkedin} className="cursor-pointer text-gray-1000 mr-6" size="3x" /></Link>
                    <Link href = "https://instagram.com/zine.robotics?utm_medium=copy_link"><FontAwesomeIcon icon={faInstagram} className="cursor-pointer text-gray-1000 mr-6" size="3x" /></Link>
                </div>
            </div>
            
            <div className="box-border bg-purple-800 p-5 rounded-lg">
                <h1 className="text-2xl sm:text-4xl text-gray-1500 font-bold mb-6 text-center ">Register for <br/> Workshop by ZINE <br/> </h1>
                <p className="text-xl sm:text-2xl text-gray-1000 font-medium mb-3 pb-8 mx-96 sm:mx-0 sm:text-center">Where imagination leads to creation!</p>
                <div className="text-center">
                    <button className="bg-white hover:bg-black hover:text-white text-xl text-gray-1000 py-3 px-12 rounded-full">Apply Now</button>
                </div>
            </div>
        </div>
    )
}

export default Footer_Main;
