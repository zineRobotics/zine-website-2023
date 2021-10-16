import React from "react";
import Image from "next/image";
import logo from '../../images/zinelogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer_Main = () => {
    return(
        <div className="bg-footer-bg bg-cover bg-center flex justify-around items-start pt-16 mt-96">
            <div>
                <div className="w-32 h-32 mb-16"><Image src={logo}></Image></div>
                <h1 className="text-4xl text-blue-900 font-light mb-4">Contact Us</h1>
                <FontAwesomeIcon icon={faGithub} className="text-blue-900 mr-4" size="3x" />
                <FontAwesomeIcon icon={faLinkedin} className="text-blue-900 mr-4" size="3x" />
                <FontAwesomeIcon icon={faInstagram} className="text-blue-900 mr-4" size="3x" />
            </div>
            <div>
                <h1 className="text-3xl text-blue-900 font-light mb-6">Lorem Ipsum</h1>
                <p className="text-xl text-blue-900 font-medium mb-1">Lorem</p>
                <p className="text-xl text-blue-900 font-medium mb-1">Lorem</p>
                <p className="text-xl text-blue-900 font-medium mb-1">Lorem</p>
                <p className="text-xl text-blue-900 font-medium mb-1">Lorem</p>
                <p className="text-xl text-blue-900 font-medium mb-32">Lorem</p>
            </div>
            <div>
                <h1 className="text-3xl text-blue-900 font-light mb-6">Lorem Ipsum</h1>
                <p className="text-xl text-blue-900 font-medium mb-1">Lorem</p>
                <p className="text-xl text-blue-900 font-medium mb-1">Lorem</p>
                <p className="text-xl text-blue-900 font-medium mb-1">Lorem</p>
                <p className="text-xl text-blue-900 font-medium mb-1">Lorem</p>
                <p className="text-xl text-blue-900 font-medium mb-1">Lorem</p>
                <p className="text-xl text-blue-900 font-medium mb-1">Lorem</p>
                <p className="text-xl text-blue-900 font-medium mb-1">Lorem</p>
                <p className="text-xl text-blue-900 font-medium mb-32">Lorem</p>
            </div>
            <div>
                <h1 className="text-3xl text-blue-900 font-light mb-6">Lorem Ipsum</h1>
                <p className="text-xl text-blue-900 font-medium mb-3">The best robotics club in the country.</p>
                <button className="bg-white hover:bg-black hover:text-white text-xl text-black py-3 px-12 rounded-full mb-32">Apply Now</button>
            </div>
        </div>
    )
}

export default Footer_Main;