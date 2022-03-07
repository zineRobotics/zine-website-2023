import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import maillogo from "../../images/mailicon_11zon.webp";
import phonelogo from "../../images/phoneicon_11zon.webp";
import locationlogo from "../../images/locationicon_11zon.webp";

const SecFooter = () => {
    return(
        <div className="pb-8 bg-black grid grid-cols-1 lg:grid-cols-5 xl:pl-32 md:pl-14 pr-14">
            {/* 1st grid */}
            <div className="text-white col-span-1 pt-16 ml-12 md:ml-0 text-center lg:text-left">
                <Link href="/"><p className="pb-4 cursor-pointer">Home</p></Link>
                <Link href="/projects"><p className="pb-4 cursor-pointer">Projects</p></Link>
                <Link href="/team"><p className="pb-4 cursor-pointer">Team</p></Link>
                <Link href="/achievements"><p className="pb-4 cursor-pointer ">Achievements</p></Link>
            </div>
            {/* 2nd grid */}
            <div className="col-span-3 text-white pt-16">
              {/* <h1 className="text-sm pb-4 ml-12 md:ml-0">About ZINE</h1>
              <p className="ml-12 md:ml-0">Zine is a creative group of engineering undergraduates of Malaviya National Institute of Technology, Jaipur who are together to learn, improve and apply their technical skills to help foster the growth of society and India in the field of technology by utilising their engineering skills to work on real time problems. It is comprised of students from various disciplines working under the guidance of Dr. Rajesh Kumar from Electrical Engineering department and various alumni working in reputed firms and doing research in esteemed universities in India and abroad. Zine has been the only active robotics and research group of MNIT for the last 12 years, since its foundation.</p> */}


              <div className="grid grid-cols-5 py-8 ml-18 md:mx-24">
                <div className="w-12 md:w-16 cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href="https://www.facebook.com/ROBOTICS.ZINE/"><FontAwesomeIcon icon={faFacebook} className="text-white mr-4" size="2x" /></Link></div>
                <div className="w-8 md:w-8 cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href="https://www.linkedin.com/company/de-zine-limited/mycompany/"><FontAwesomeIcon icon={faLinkedin} className="text-white mr-4" size="2x" /></Link></div>
                <div className="w-12 md:w-16 cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href="https://www.youtube.com/channel/UC92-Bhcl13KcI0UUU2ZrN1Q"><FontAwesomeIcon icon={faYoutube} className="text-white mr-4" size="2x" /></Link></div>
                <div className="w-8 md:w-8 cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href="https://www.instagram.com/zine.robotics/"><FontAwesomeIcon icon={faInstagram} className="text-white mr-4" size="2x" /></Link></div>
                <div className="w-8 md:w-8 cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href="https://github.com/zine-robotics"><FontAwesomeIcon icon={faGithub} className="text-white mr-4" size="2x" /></Link></div>
              </div>
            </div>

            <div className="pt-16 pl-8 col-span-1 text-white lg:-ml-20 lg:w-80">
              <div className="pb-4 grid grid-cols-2">
                <div className="w-8 mx-auto"><Image src={maillogo} /></div>  { /* Here the mail icon should come */}
                <div className="cursor-pointer my-auto text-lg"><Link href="mailto:zine.nitj@gmail.com">zine.nitj@gmail.com</Link></div>
              </div>
              <div className="pb-4 grid grid-cols-2">
                <div className="w-8 mx-auto"><Image src={phonelogo} /></div>  { /* Here the phone icon should come */}
                <div className="cursor-pointer my-auto text-lg">+91 7488960146</div>
              </div>
              <div className="pb-4 grid grid-cols-2">
                <div className="w-8 mx-auto"><Image src={locationlogo} /></div>  { /* Here the location icon should come */}
                <div className="cursor-pointer my-auto text-lg"><Link href="https://www.google.com/maps/place/Raman+Lab/@26.8605804,75.8161274,17z/data=!4m5!3m4!1s0x396db6777a9a3ecd:0x74302e6112616971!8m2!3d26.8619742!4d75.8104223">ZINE</Link></div>  {/* Here the link to location should come */}
              </div>
            </div>
        </div>
    )
}

export default SecFooter;
