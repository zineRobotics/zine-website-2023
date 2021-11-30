import React from "react";
import Image from "next/image";
import Link from "next/link";
import githublogo from '../../images/github.png';
import linkedinlogo from '../../images/linkedinicon.png';
import instagramlogo from '../../images/instagramicon.png';
import facebooklogo from "../../images/facebookicon.jpeg";
import youtubelogo from "../../images/youtubeicon.png";
import maillogo from "../../images/mailicon.png";
import phonelogo from "../../images/phoneicon.png";
import locationlogo from "../../images/locationicon.png";

const SecFooter = () => {
    return(
        <div className="bg-black grid grid-cols-1 lg:grid-cols-5 xl:pl-32 md:pl-16 pr-16">
            {/* 1st grid */}
            <div className="text-white col-span-1 pt-16">
                <Link href="/"><p className="pb-4 cursor-pointer">Home</p></Link>
                <Link href="/projects"><p className="pb-4 cursor-pointer">Projects</p></Link>
                <Link href="/team"><p className="pb-4 cursor-pointer">Team</p></Link>
                <Link href="/achievements"><p className="pb-4 cursor-pointer ">Achievements</p></Link>
            </div>
            {/* 2nd grid */}
            <div className="col-span-3 text-white pt-16">
              <h1 className="text-sm pb-4">About ZINE</h1>
              <p>Zine is a creative group of engineering undergraduates of Malaviya National Institute of Technology, Jaipur who are together to learn, improve and apply their technical skills to help foster the growth of society and India in the field of technology by utilising their engineering skills to work on real time problems. It is comprised of students from various disciplines working under the guidance of Dr. Rajesh Kumar from Electrical Engineering department and various alumni working in reputed firms and doing research in esteemed universities in India and abroad. Zine has been the only active robotics and research group of MNIT for the last 12 years, since its foundation.</p>
              <div className="grid grid-cols-5 py-8 mx-28 md:mx-24">
                <div className="w-12 md:w-16"><Link href=""><Image src={facebooklogo} /></Link></div> {/* Here the facebook icon should come */}
                <div className="w-8 md:w-8"><Link href=""><Image src={linkedinlogo} /></Link></div> {/* Here the linkedin icon should come */}
                <div className="w-12 md:w-16"><Link href=""><Image src={youtubelogo} /></Link></div> {/* Here the youtube icon should come */}
                <div className="w-8 md:w-8"><Link href=""><Image src={instagramlogo} /></Link></div> {/* Here the instagram icon should come */}
                <div className="w-8 md:w-8"><Link href=""><Image src={githublogo} /></Link></div> {/* Here the github icon should come */}
              </div>
            </div>

            <div className="pt-16 pl-8 col-span-1 text-white">
              <div className="pb-4 grid grid-cols-2">
                <div className="w-8 mx-auto"><Image src={maillogo} /></div>  { /* Here the mail icon should come */}
                <div className="cursor-pointer my-auto text-lg"><Link href="mailto:zine@zine.co.in">zine@zine.co.in</Link></div>
              </div>
              <div className="pb-4 grid grid-cols-2">
                <div className="w-8 mx-auto"><Image src={phonelogo} /></div>  { /* Here the phone icon should come */}
                <div className="cursor-pointer my-auto text-lg">+91 123456789</div>
              </div>
              <div className="pb-4 grid grid-cols-2">
                <div className="w-8 mx-auto"><Image src={locationlogo} /></div>  { /* Here the location icon should come */}
                <div className="cursor-pointer my-auto text-lg"><Link href="http://www.google.co.in">ZINE</Link></div>  {/* Here the link to location should come */}
              </div>
            </div>
        </div>
    )
}

export default SecFooter;
