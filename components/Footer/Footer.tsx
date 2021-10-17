import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '../../images/zinelogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer_Main = () => {
    return(
        <div className="sticky bg-blue-500 bg-cover bg-center z-30 flex justify-evenly items-start pb-8 pt-16 mt-96">
            <div>
                <div className="w-32 h-32 mb-16"><Image src={logo}></Image></div>
                <h1 className="text-4xl text-blue-900 font-light mb-4">Connect With <br /> Zine</h1><br />
                <div className="flex cursor-pointer">
                    <Link href = "https://github.com/zine-robotics"><FontAwesomeIcon icon={faGithub} className="text-blue-900 mr-4" size="3x" /></Link>
                    <Link href = "https://www.linkedin.com/company/de-zine-limited/"><FontAwesomeIcon icon={faLinkedin} className="text-blue-900 mr-4" size="3x" /></Link>
                    <Link href = "https://instagram.com/zine.robotics?utm_medium=copy_link"><FontAwesomeIcon icon={faInstagram} className="text-blue-900 mr-4" size="3x" /></Link>
                </div>
            </div>
            <div>
                <h1 className="text-3xl text-blue-900 font-light mb-6">Want to join?</h1>
                <p className="text-xl text-blue-900 font-medium mb-3 pb-8 ">The best robotics club in the country.</p>
                <button className="bg-white hover:bg-black hover:text-white text-xl text-blue-700 py-3 px-12 rounded-full mb-32">Apply Now</button>
            </div>
        </div>
    )
}

export default Footer_Main;