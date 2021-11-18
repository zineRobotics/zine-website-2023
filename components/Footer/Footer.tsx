import React from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import logo from '../../images/zinelogo.png';
import githublogo from '../../images/github.png';
import linkedinlogo from '../../images/linkedin.png';
import instagramlogo from '../../images/instagramicon.jpeg';

const Footer_Main = () => {
    return(
        <div className="sticky custom:bg-black z-30 custom:flex custom:flex-wrap gap-4 justify-center items-center pb-2 pt-10 mt-6">
            <Script type="text/javascript" src="/script.js" />
            <div className="box-border border-2 border-top custom:p-10 rounded-lg">
                <div className="w-20 h-20 sm:w-28 sm:h-28 mb-10 pt-5 transform-gpu mx-96"><Image src={logo}></Image></div>
                <div className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 text-3xl lg:text-3xl xl:text-4xl my-12 text-center">Connect With ZINE!</div>
                <div className="flex pb-5 gap-8 justify-center">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 mb-10 pt-5 transform-gpu">
                    <Link href = "https://github.com/zine-robotics"><Image className="cursor-pointer w-20 h-20" src={githublogo}/></Link>
                    </div>
                    <div id="linkedin" className="w-20 h-20 sm:w-28 sm:h-28 mb-10 pt-5 transform-gpu">
                    <Link href = "https://github.com/zine-robotics"><Image className="cursor-pointer w-20 h-20" src={linkedinlogo}/></Link>
                    </div>
                    <div className="w-20 h-20 sm:w-28 sm:h-28 mb-10 pt-5 transform-gpu pt-8">
                    <Link href = "https://github.com/zine-robotics"><Image className="cursor-pointer w-20 h-20" src={instagramlogo}/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer_Main;
