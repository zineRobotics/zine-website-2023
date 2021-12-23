import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram, faLinkedin, faGithub,  faWordpress} from '@fortawesome/free-brands-svg-icons';
import team from "../../images/team.png"
import RajeshSir from "../../images/rajeshsir.webp"
import anupam from "../../images/founders/anupam.webp"
import arpit from "../../images/founders/arpit.webp"
import himanshu from "../../images/founders/himanshu.webp"
import soniya from "../../images/founders/soniya.webp"
import bhanu from "../../images/finalyear/bhanu.webp";
import brijraj from "../../images/finalyear/brijraj.webp";
import charu from "../../images/finalyear/charu.webp";
import dhruv from "../../images/finalyear/dhruv.webp";
import harsh from "../../images/finalyear/harsh.webp";
import muskan from "../../images/finalyear/muskan.webp";
import nikita from "../../images/finalyear/nikita.webp";
import pravesh from "../../images/finalyear/pravesh.webp";
import rajat from "../../images/finalyear/rajat.webp";
import sneha from "../../images/finalyear/sneha.webp";
import apoorva from "../../images/thirdyear/apoorva.webp";
import aryaman from "../../images/thirdyear/aryaman.webp";
import chirayu from "../../images/thirdyear/chirayu.webp";
import darshan from "../../images/thirdyear/darshan.webp";
import devansh from "../../images/thirdyear/devansh.webp";
import harshit from "../../images/thirdyear/harshit.webp";
import ishika from "../../images/thirdyear/ishika.webp";
import pavnesh from "../../images/thirdyear/pavnesh.webp";
import puneet from "../../images/thirdyear/puneet.webp";
import rahul from "../../images/thirdyear/rahul.webp";
import vinamra from "../../images/secondyear/vinamra.webp";
import divyansh from "../../images/secondyear/divyansh.webp";
import nishant from "../../images/secondyear/nishant.webp";
import abhinav from "../../images/secondyear/abhinav.webp";
import sudeshna from "../../images/secondyear/sudeshna.webp";
import aman from "../../images/secondyear/aman.webp";
import mahak from "../../images/secondyear/mahak.webp";
import pranjali from "../../images/secondyear/pranjali.webp";

interface pic_detail {
  name: string;
  image: StaticImageData;
  desc: string;
  github: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  facebook: string;
}

const founders: pic_detail[] = [
  {
    name: "HIMANSHU GOTHWAL",
    image: himanshu,
    desc: "Software Developer Epic",
    github: "",
    linkedin: "https://www.linkedin.com/in/himanshu-gothwal-8a61a816/",
    twitter: "",
    instagram: "",
    facebook: "https://www.facebook.com/hims333"
  },
  {
    name: "ARPIT JAIN",
    image: arpit,
    desc: "Co-Founder Engineer's Garage",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "https://www.facebook.com/arpit.jain.37604"
  },
  {
    name: "ANUPAM KUMAR",
    image: anupam,
    desc: "Signal Engineer Indian Railway Services",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "https://www.facebook.com/anupamkrmeena"
  },
  {
    name: "SONIYA JAIN",
    image: soniya,
    desc: "Works at DRDO",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "https://www.facebook.com/soniya.jain.583671"
  }
];

const finalyear: pic_detail[] = [
  {
    name: "BHANU MOHINDRA",
    image: bhanu,
    desc: "Mechanical Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "https://www.facebook.com/bhanu.mohindra?ref=br_rs "
  },
  {
    name: "BRIJRAJ",
    image: brijraj,
    desc: "Mechanical Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "https://www.facebook.com/brijraj.jangir.5"
  },
  {
    name: "CHARU",
    image: charu,
    desc: "Chemical Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "DHRUV GOYAL",
    image: dhruv,
    desc: "Computer Science",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "https://www.facebook.com/dhruv.goyal.37853"
  },
  {
    name: "HARSH CHAUDHARY",
    image: harsh,
    desc: "Mechanical Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "https://www.facebook.com/harsh.chaudhary.39501789"
  },
  {
    name: "MUSKAN GARG",
    image: muskan,
    desc: "Civil Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "https://www.facebook.com/profile.php?id=100029074120608"
  },
  {
    name: "NIKITA RAUTELA",
    image: nikita,
    desc: "Mechanical Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "https://www.facebook.com/nikita.rautela"
  },
  {
    name: "PRAVESH SINGH",
    image: pravesh,
    desc: "Computer Science",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "https://www.facebook.com/parvesh.sandhu.71"
  },
  {
    name: "RAJAT AGRAWAL",
    image: rajat,
    desc: "Electrical Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "https://www.facebook.com/rajat.agrawal.524381"
  },
  {
    name: "SNEHA YADAV",
    image: sneha,
    desc: "Electrical Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "https://www.facebook.com/profile.php?id=100028068090094"
  }
];

const thirdyear: pic_detail[] = [
  {
    name: "APOORVA RAJ",
    image: apoorva,
    desc: "Mechanical Engineering",
    github: "",
    linkedin: "https://www.linkedin.com/in/apoorva-raj-840a871ab",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "ARYAMAN SINGH",
    image: aryaman,
    desc: "Electrical Engineering",
    github: "",
    linkedin: "https://www.linkedin.com/in/aryaman-singh-kushwaha-a139491b0/",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "CHIRAYU RANKAWAT",
    image: chirayu,
    desc: "Mechanical Engineering",
    github: "",
    linkedin: "https://in.linkedin.com/in/chirayu-rankawat",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "DARSHAN DUSAD",
    image: darshan,
    desc: "Computer Science",
    github: "",
    linkedin: "https://www.linkedin.com/in/darshan-dusad-22b96b1ab/",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "DEVANSH GARG",
    image: devansh,
    desc: "Mechanical",
    github: "",
    linkedin: "https://www.linkedin.com/in/DevanshGarg31",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "HARSHIT GARG",
    image: harshit,
    desc: "Mechanical",
    github: "",
    linkedin: "https://www.linkedin.com/in/harshitgrg",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "ISHIKA PANWAR",
    image: ishika,
    desc: "Computer Science",
    github: "",
    linkedin: "https://www.linkedin.com/in/ishika-panwar-23a5551a1/",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "PAVNESH CHATURVEDI",
    image: pavnesh,
    desc: "Electronics and Communication Engineering",
    github: "",
    linkedin: "https://www.linkedin.com/in/pavnesh-chaturvedi-208b15197/",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "PUNEET SINGH",
    image: puneet,
    desc: "Electronics and Communication Engineering",
    github: "",
    linkedin: "https://www.linkedin.com/in/puneet-singh-2001/",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "RAHUL RAJ",
    image: rahul,
    desc: "Mechanical Engineering",
    github: "",
    linkedin: "https://www.linkedin.com/in/rahul-raj-4b6a271ba/",
    twitter: "",
    instagram: "",
    facebook: ""
  },
];

const secondyear: pic_detail[] = [
  {
    name: "VINAMRA VASHISHTH",
    image: vinamra,
    desc: "Computer Science and Engineering",
    github: "https://github.com/VinVash",
    linkedin: "https://www.linkedin.com/in/vinamra-vashishth-721785201/",
    twitter: "",
    instagram: "https://www.instagram.com/vinvash01/",
    facebook: ""
  },
  {
    name: "NISHANT GARG",
    image: nishant,
    desc: "Computer Science and Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "DIVYANSH GARG",
    image: divyansh,
    desc: "Electronics and Communication Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "ABHINAV KUMAR",
    image: abhinav,
    desc: "Electrical Engineering",
    github: "https://github.com/54AbhinavKumar",
    linkedin: "https://www.linkedin.com/in/abhinav-kumar-5b2097205/",
    twitter: "",
    instagram: "https://www.instagram.com/_magnetrix__/",
    facebook: ""
  },
  {
    name: "SUDESHNA SONKAR",
    image: sudeshna,
    desc: "Mechanical Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "https://www.instagram.com/dopolavita/",
    facebook: ""
  },
  {
    name: "PRANJALI SRIVASTAVA",
    image: pranjali,
    desc: "Mechanical Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "MAHAK GARG",
    image: mahak,
    desc: "Electrical Engineering",
    github: "https://github.com/Mahak5457",
    linkedin: "https://www.linkedin.com/in/mahak-garg-825213212/",
    twitter: "",
    instagram: "https://www.instagram.com/mahak._1008/",
    facebook: ""
  },
  {
    name: "AMAN MITTAL",
    image: aman,
    desc: "Computer Science and Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
]

const Team = () => {
    return(
      <div className="text-black bg-white w-screen justify-center">
        <div className="bg-cover bg-bg-team h-60 md:h-80 lg:h-120 px-12 lg:px-24"></div>
        <h1 className="pt-8 text-4xl text-center px-12 lg:px-24">Our Founders: The Roots Of Our Tree</h1>
        <div className="pt-16 grid grid-cols-1 lg:grid-cols-2 px-12 lg:px-24">
          <div className="col-span-1 w-48 member-hover lg:w-80 justify-self-center">
            <Image className="rounded-full" src={RajeshSir} />
            <div className="text-center grid grid-cols-3">
              <div className="cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href="https://drrajeshkumar.wordpress.com/"><FontAwesomeIcon icon={faWordpress} className="text-black mr-4" size="2x" /></Link></div>
              <div className="cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href="https://www.linkedin.com/in/drrajeshkumar/"><FontAwesomeIcon icon={faLinkedin} className="text-blue-600 mr-4" size="2x" /></Link></div>
              <div className="cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href="https://www.facebook.com/ROBOTICS.ZINE/"><FontAwesomeIcon icon={faFacebook} className="text-blue-800 mr-4" size="2x" /></Link></div>
            </div>
          </div>
          <div className="col-span-1 my-auto">
            <h1 className="text-2xl text-center">DR. RAJESH KUMAR</h1>
            <p className="text-center">Ph.D., PDF(NUS, Singapore) SMIEEE, FIETE, MIE (I),SMIACSIT, LMISTE, MIAENG,</p>
            <p className="text-center">Professor of Elec. Engg.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-16 px-12 lg:px-24">
        {founders.map((item, index) => (
          <div key={index} className="col-span-1">
            <h1 className="text-black text-xl py-2 font-nunito text-center">
              <div className="w-48 mx-auto member-hover">
                <Image className="rounded-full" src={item.image} />
              </div>
              <p className="text-center font-bold">{item.name}</p>
              <p className="text-center">{item.desc}</p>
              <div className="text-center">
              <div className="grid grid-flow-col auto-cols-auto w-64 mx-auto">
                {item.github !== "" ? <div className="cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href={item.facebook}><FontAwesomeIcon icon={faGithub} className="text-black mr-4" size="2x" /></Link></div> : <></>}
                {item.linkedin !== "" ? <div className="cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href={item.linkedin}><FontAwesomeIcon icon={faLinkedin} className="text-blue-600 mr-4" size="2x" /></Link></div> : <></>}
                {item.instagram !== "" ? <div className="cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href={item.twitter}><FontAwesomeIcon icon={faInstagram} className="text-red-500 mr-4" size="2x" /></Link></div> : <></>}
                {item.facebook !== "" ? <div className="cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href={item.facebook}><FontAwesomeIcon icon={faFacebook} className="text-blue-800 mr-4" size="2x" /></Link></div> : <></>}
              </div>
              </div>
            </h1>
          </div>
        ))}
        </div>
        <h1 className="pt-32 text-center font-bold text-4xl px-12 lg:px-24">FINAL YEAR</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-16 px-12 lg:px-24">
        {finalyear.map((item, index) => (
          <div key={index} className="col-span-1">
            <h1 className="text-black text-xl py-2 font-nunito text-center">
              <div className="w-48 mx-auto member-hover">
                <Image className="rounded-full" src={item.image}></Image>
              </div>
              <p className="text-center font-bold">{item.name}</p>
              <p className="text-center">{item.desc}</p>
              <div className="text-center">
              <div className="grid grid-flow-col auto-cols-auto w-64 mx-auto">
                {item.github !== "" ? <div className="cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href={item.facebook}><FontAwesomeIcon icon={faGithub} className="text-black mr-4" size="2x" /></Link></div> : <></>}
                {item.linkedin !== "" ? <div className="cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href={item.linkedin}><FontAwesomeIcon icon={faLinkedin} className="text-blue-600 mr-4" size="2x" /></Link></div> : <></>}
                {item.instagram !== "" ? <div className="cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href={item.twitter}><FontAwesomeIcon icon={faInstagram} className="text-red-500 mr-4" size="2x" /></Link></div> : <></>}
                {item.facebook !== "" ? <div className="cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href={item.facebook}><FontAwesomeIcon icon={faFacebook} className="text-blue-800 mr-4" size="2x" /></Link></div> : <></>}
              </div>
              </div>
            </h1>
          </div>
        ))}
        </div>
        <h1 className="pt-32 text-center font-bold text-4xl px-12 lg:px-24">THIRD YEAR</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-16 px-12 lg:px-24">
        {thirdyear.map((item, index) => (
          <div key={index} className="col-span-1">
            <h1 className="text-black text-xl py-2 font-nunito text-center">
              <div className="w-48 mx-auto member-hover">
                <Image className="rounded-full" src={item.image}></Image>
              </div>
              <p className="text-center font-bold">{item.name}</p>
              <p className="text-center">{item.desc}</p>
              <div className="text-center">
              <div className="grid grid-flow-col auto-cols-auto w-64 mx-auto">
                {item.github !== "" ? <div className="cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href={item.facebook}><FontAwesomeIcon icon={faGithub} className="text-black mr-4" size="2x" /></Link></div> : <></>}
                {item.linkedin !== "" ? <div className="cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href={item.linkedin}><FontAwesomeIcon icon={faLinkedin} className="text-blue-600 mr-4" size="2x" /></Link></div> : <></>}
                {item.instagram !== "" ? <div className="cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href={item.twitter}><FontAwesomeIcon icon={faInstagram} className="text-red-500 mr-4" size="2x" /></Link></div> : <></>}
                {item.facebook !== "" ? <div className="cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href={item.facebook}><FontAwesomeIcon icon={faFacebook} className="text-blue-800 mr-4" size="2x" /></Link></div> : <></>}
              </div>
              </div>
            </h1>
          </div>
        ))}
        </div>
        <h1 className="pt-32 text-center font-bold text-4xl px-12 lg:px-24">SECOND YEAR</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 py-16 px-12 lg:px-24">
        {secondyear.map((item, index) => (
          <div key={index} className="col-span-1">
            <h1 className="text-black text-xl py-2 font-nunito text-center">
              <div className="w-48 mx-auto member-hover">
                <Image className="rounded-full" src={item.image}></Image>
              </div>
              <p className="text-center font-bold">{item.name}</p>
              <p className="text-center">{item.desc}</p>
              <div className="text-center">
              <div className="grid grid-flow-col auto-cols-auto w-64 mx-auto">
                {item.github !== "" ? <div className="cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href={item.facebook}><FontAwesomeIcon icon={faGithub} className="text-black mr-4" size="2x" /></Link></div> : <></>}
                {item.linkedin !== "" ? <div className="cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href={item.linkedin}><FontAwesomeIcon icon={faLinkedin} className="text-blue-600 mr-4" size="2x" /></Link></div> : <></>}
                {item.instagram !== "" ? <div className="cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href={item.twitter}><FontAwesomeIcon icon={faInstagram} className="text-red-500 mr-4" size="2x" /></Link></div> : <></>}
                {item.facebook !== "" ? <div className="cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href={item.facebook}><FontAwesomeIcon icon={faFacebook} className="text-blue-800 mr-4" size="2x" /></Link></div> : <></>}
              </div>
              </div>
            </h1>
          </div>
        ))}
        </div>
      </div>
    )
}

export default Team;

// float effect on image hover.