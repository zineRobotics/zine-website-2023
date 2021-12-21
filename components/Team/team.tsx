import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import team from "../../images/team.png"
import RajeshSir from "../../images/rajeshsir.jpg"
import anupam from "../../images/founders/anupam.jpg"
import arpit from "../../images/founders/arpit.jpg"
import himanshu from "../../images/founders/himanshu.jpg"
import soniya from "../../images/founders/soniya.jpg"
import bhanu from "../../images/finalyear/bhanu.jpeg";
import brijraj from "../../images/finalyear/brijraj.jpeg";
import charu from "../../images/finalyear/charu.jpg";
import dhruv from "../../images/finalyear/dhruv.jpg";
import harsh from "../../images/finalyear/harsh.jpg";
import muskan from "../../images/finalyear/muskan.jpg";
import nikita from "../../images/finalyear/nikita.jpg";
import pravesh from "../../images/finalyear/pravesh.jpg";
import rajat from "../../images/finalyear/rajat.jpg";
import sneha from "../../images/finalyear/sneha.jpg";
import apoorva from "../../images/thirdyear/apoorva.jpg";
import aryaman from "../../images/thirdyear/aryaman.jpg";
import chirayu from "../../images/thirdyear/chirayu.jpeg";
import darshan from "../../images/thirdyear/darshan.jpeg";
import devansh from "../../images/thirdyear/devansh.jpg";
import harshit from "../../images/thirdyear/harshit.jpeg";
import ishika from "../../images/thirdyear/ishika.jpg";
import pavnesh from "../../images/thirdyear/pavnesh.jpg";
import puneet from "../../images/thirdyear/puneet.jpg";
import rahul from "../../images/thirdyear/rahul.jpg";
import vinamra from "../../images/secondyear/vinamra.jpg";
import divyansh from "../../images/secondyear/divyansh.jpg";
import nishant from "../../images/secondyear/nishant.jpg";
import abhinav from "../../images/secondyear/abhinav.jpeg";
import sudeshna from "../../images/secondyear/sudeshna.jpg";
import aman from "../../images/secondyear/aman.png";
import mahak from "../../images/secondyear/mahak.jpeg";
import pranjali from "../../images/secondyear/pranjali.jpeg";

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
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "ARPIT JAIN",
    image: arpit,
    desc: "Co-Founder Engineer's Garage",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "ANUPAM KUMAR",
    image: anupam,
    desc: "Signal Engineer Indian Railway Services",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "SONIYA JAIN",
    image: soniya,
    desc: "Works at DRDO",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
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
    facebook: ""
  },
  {
    name: "BRIJRAJ",
    image: brijraj,
    desc: "Mechanical Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
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
    facebook: ""
  },
  {
    name: "HARSH CHAUDHARY",
    image: harsh,
    desc: "Mechanical Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "MUSKAN GARG",
    image: muskan,
    desc: "Civil Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "NIKITA RAUTELA",
    image: nikita,
    desc: "Mechanical Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "PRAVESH SINGH",
    image: pravesh,
    desc: "Computer Science",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "RAJAT AGRAWAL",
    image: rajat,
    desc: "Electrical Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "SNEHA YADAV",
    image: sneha,
    desc: "Electrical Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  }
];

const thirdyear: pic_detail[] = [
  {
    name: "APOORVA RAJ",
    image: apoorva,
    desc: "Mechanical Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "ARYAMAN SINGH",
    image: aryaman,
    desc: "Electrical Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "CHIRAYU RANKAWAT",
    image: chirayu,
    desc: "Mechanical Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "DARSHAN DUSAD",
    image: darshan,
    desc: "Computer Science",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "DEVANSH GARG",
    image: devansh,
    desc: "Mechanical",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "HARSHIT GARG",
    image: harshit,
    desc: "Mechanical",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "ISHIKA PANWAR",
    image: ishika,
    desc: "Computer Science",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "PAVNESH CHATURVEDI",
    image: pavnesh,
    desc: "Electronics and Communication Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "PUNEET SINGH",
    image: puneet,
    desc: "Electronics and Communication Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "RAHUL RAJ",
    image: rahul,
    desc: "Mechanical Engineering",
    github: "",
    linkedin: "",
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
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: ""
  },
  {
    name: "SUDESHNA SONKAR",
    image: sudeshna,
    desc: "Mechanical Engineering",
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
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
    github: "",
    linkedin: "",
    twitter: "",
    instagram: "",
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
            <div className="text-center grid grid-cols-4">
              <div className="cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href="https://www.facebook.com/ROBOTICS.ZINE/"><FontAwesomeIcon icon={faGithub} className="text-black mr-4" size="2x" /></Link></div>
              <div className="cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href="https://www.facebook.com/ROBOTICS.ZINE/"><FontAwesomeIcon icon={faLinkedin} className="text-blue-600 mr-4" size="2x" /></Link></div>
              <div className="cursor-pointer transform-gpu transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><Link href="https://www.facebook.com/ROBOTICS.ZINE/"><FontAwesomeIcon icon={faInstagram} className="text-red-500 mr-4" size="2x" /></Link></div>
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