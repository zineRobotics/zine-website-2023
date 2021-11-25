import React from "react";
import Link from "next/link";
import Image from "next/image";
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
import rushil from "../../images/thirdyear/rushil.jpg";
import vinamra from "../../images/secondyear/vinamra.jpg";
import divyansh from "../../images/secondyear/divyansh.jpg";
import nishant from "../../images/secondyear/nishant.jpg";
import abhinav from "../../images/secondyear/abhinav.jpeg";
import sudeshna from "../../images/secondyear/sudeshna.jpg";
import aman from "../../images/secondyear/aman.png";
import mahak from "../../images/secondyear/mahak.jpeg";

interface pic_detail {
  name: string;
  image: StaticImageData;
  desc: string;
}

const founders: pic_detail[] = [
  {
    name: "HIMANSHU GOTHWAL",
    image: himanshu,
    desc: "Software Developer Epic"
  },
  {
    name: "ARPIT JAIN",
    image: arpit,
    desc: "Co-Founder Engineer's Garage"
  },
  {
    name: "ANUPAM KUMAR",
    image: anupam,
    desc: "Signal Engineer Indian Railway Services"
  },
  {
    name: "SONIYA JAIN",
    image: soniya,
    desc: "Works at DRDO"
  }
];

const finalyear: pic_detail[] = [
  {
    name: "BHANU MOHINDRA",
    image: bhanu,
    desc: "Mechanical Engineering"
  },
  {
    name: "BRIJRAJ",
    image: brijraj,
    desc: "Mechanical Engineering"
  },
  {
    name: "CHARU",
    image: charu,
    desc: "Chemical Engineering"
  },
  {
    name: "DHRUV GOYAL",
    image: dhruv,
    desc: "Computer Science"
  },
  {
    name: "HARSH CHAUDHARY",
    image: harsh,
    desc: "Mechanical Engineering"
  },
  {
    name: "MUSKAN GARG",
    image: muskan,
    desc: "Civil Engineering"
  },
  {
    name: "NIKITA RAUTELA",
    image: nikita,
    desc: "Mechanical Engineering"
  },
  {
    name: "PRAVESH SINGH",
    image: pravesh,
    desc: "Computer Science"
  },
  {
    name: "RAJAT AGRAWAL",
    image: rajat,
    desc: "Electrical Engineering"
  },
  {
    name: "SNEHA YADAV",
    image: sneha,
    desc: "Electrical Engineering"
  }
];

const thirdyear: pic_detail[] = [
  {
    name: "APOORVA RAJ",
    image: apoorva,
    desc: "Mechanical Engineering"
  },
  {
    name: "ARYAMAN SINGH",
    image: aryaman,
    desc: "Electrical Engineering"
  },
  {
    name: "CHIRAYU RANKAWAT",
    image: chirayu,
    desc: "Mechanical Engineering"
  },
  {
    name: "DARSHAN DUSAD",
    image: darshan,
    desc: "Computer Science"
  },
  {
    name: "DEVANSH GARG",
    image: devansh,
    desc: "Mechanical"
  },
  {
    name: "HARSHIT GARG",
    image: harshit,
    desc: "Mechanical"
  },
  {
    name: "ISHIKA PANWAR",
    image: ishika,
    desc: "Computer Science"
  },
  {
    name: "PAVNESH CHATURVEDI",
    image: pavnesh,
    desc: "Electronics and Communication Engineering"
  },
  {
    name: "PUNEET SINGH",
    image: puneet,
    desc: "Electronics and Communication Engineering"
  },
  {
    name: "RAHUL RAJ",
    image: rahul,
    desc: "Mechanical Engineering"
  },
  {
    name: "RUSHIL MAKKAR",
    image: rushil,
    desc: "Electronics and Communication Engineering"
  }
];

const secondyear: pic_detail[] = [
  {
    name: "VINAMRA VASHISHTH",
    image: vinamra,
    desc: "Computer Science and Engineering"
  },
  {
    name: "NISHANT GARG",
    image: nishant,
    desc: "Computer Science and Engineering"
  },
  {
    name: "DIVYANSH GARG",
    image: divyansh,
    desc: "Electronics and Communication Engineering"
  },
  {
    name: "ABHINAV KUMAR",
    image: abhinav,
    desc: "Electrical Engineering"
  },
  {
    name: "SUDESHNA SONKAR",
    image: sudeshna,
    desc: "Mechanical Engineering"
  },
  {
    name: "PRANJALI SRIVASTAVA",
    image: RajeshSir,
    desc: "Mechanical Engineering"
  },
  {
    name: "MAHAK GARG",
    image: mahak,
    desc: "Electrical Engineering"
  },
  {
    name: "AMAN MITTAL",
    image: aman,
    desc: "Computer Science and Engineering"
  },
]

const Team = () => {
    return(
      <div className="text-black bg-white w-screen justify-center">
        <div className="bg-cover bg-bg-team h-60 md:h-80 lg:h-120 px-12 lg:px-24"></div>
        <h1 className="pt-8 text-4xl text-center px-12 lg:px-24">Our Founders: The Roots Of Our Tree</h1>
        <div className="pt-16 grid grid-cols-1 lg:grid-cols-2 px-12 lg:px-24">
          <div className="col-span-1 w-48 lg:w-80 justify-self-center"><Image className="rounded-full" src={RajeshSir} /></div>
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
                    <div className="w-48 mx-auto"><Image className="rounded-full" src={item.image} /></div>
                    <p className="text-center">{item.name}</p>
                    <p className="text-center">{item.desc}</p>
                  </h1>
                </div>
              ))}
        </div>
        <h1 className="pt-32 text-center font-bold text-4xl px-12 lg:px-24">FINAL YEAR</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-16 px-12 lg:px-24">
        {finalyear.map((item, index) => (
          <div key={index} className="col-span-1">
            <h1 className="text-black text-xl py-2 font-nunito text-center">
              <div className="w-48 mx-auto"><Image className="rounded-full" src={item.image}></Image></div>
              <p className="text-center">{item.name}</p>
              <p className="text-center">{item.desc}</p>
            </h1>
          </div>
        ))}
        </div>
        <h1 className="pt-32 text-center font-bold text-4xl px-12 lg:px-24">THIRD YEAR</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-16 px-12 lg:px-24">
        {thirdyear.map((item, index) => (
          <div key={index} className="col-span-1">
            <h1 className="text-black text-xl py-2 font-nunito text-center">
              <div className="w-48 mx-auto"><Image className="rounded-full" src={item.image}></Image></div>
              <p className="text-center">{item.name}</p>
              <p className="text-center">{item.desc}</p>
            </h1>
          </div>
        ))}
        </div>
        <h1 className="pt-32 text-center font-bold text-4xl px-12 lg:px-24">SECOND YEAR</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-16 px-12 lg:px-24">
        {secondyear.map((item, index) => (
          <div key={index} className="col-span-1">
            <h1 className="text-black text-xl py-2 font-nunito text-center">
              <div className="w-48 mx-auto"><Image className="rounded-full" src={item.image}></Image></div>
              <p className="text-center">{item.name}</p>
              <p className="text-center">{item.desc}</p>
            </h1>
          </div>
        ))}
        </div>
      </div>
    )
}

export default Team;

// float effect on image hover.