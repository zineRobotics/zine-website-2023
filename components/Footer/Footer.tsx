import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '../../images/zinelogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer_Main = () => {
    return(
        <div className="sticky bg-gray-1400 bg-cover bg-center z-30 flex justify-evenly items-start pb-1 pt-10 mt-6">
            <div>
                <div className="w-28 h-28 mb-10"><Image src={logo}></Image></div>
                <div className="text-base text-center font-bold font-sans text-gray-1500 mb-4">Connect With ZINE!</div>
                <div className="flex">
                    <Link href = "https://github.com/zine-robotics"><FontAwesomeIcon icon={faGithub} className="cursor-pointer text-gray-1000 mr-4" size="3x" /></Link>
                    <Link href = "https://www.linkedin.com/company/de-zine-limited/"><FontAwesomeIcon icon={faLinkedin} className="cursor-pointer text-gray-1000 mr-6" size="3x" /></Link>
                    <Link href = "https://instagram.com/zine.robotics?utm_medium=copy_link"><FontAwesomeIcon icon={faInstagram} className="cursor-pointer text-gray-1000 mr-6" size="3x" /></Link>
                </div>
            </div>
            <div>
                <h1 className="text-4xl text-gray-1500 font-bold mb-6 text-center ">Register for <br/> Workshop by ZINE <br/> </h1>
                <p className="text-2xl text-gray-1000 font-medium mb-3 pb-8 ">Where imagination leads to creation!</p>
                <button className="bg-white hover:bg-black hover:text-white text-xl text-gray-1000 py-3 px-12 rounded-full mb-32 mx-24">Apply Now</button>
            </div>
        </div>
    )
}

export default Footer_Main;
