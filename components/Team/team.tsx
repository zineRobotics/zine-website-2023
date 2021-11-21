import React from "react";
import Link from "next/link";
import Image from "next/image";
import RajeshSir from "../../images/rajeshsir.jpg"

interface pic_detail {
  name: string;
  image: StaticImageData;
  desc: string;
}

const founders: pic_detail[] = [
  {
    name: "HIMANSHU GOTHWAL",
    image: RajeshSir,
    desc: "Software Developer Epic"
  },
  {
    name: "ARPIT JAIN",
    image: RajeshSir,
    desc: "Co-Founder Engineer's Garage"
  },
  {
    name: "ANUPAM KUMAR",
    image: RajeshSir,
    desc: "Signal Engineer Indian Railway Services"
  },
  {
    name: "SONIYA JAIN",
    image: RajeshSir,
    desc: "Works at DRDO"
  }
];

const finalyear: pic_detail[] = [
  {
    name: "BHANU MOHINDRA",
    image: RajeshSir,
    desc: "Mechanical Engineering"
  },
  {
    name: "BRIRAJ",
    image: RajeshSir,
    desc: "Mechanical Engineering"
  },
  {
    name: "CHARU",
    image: RajeshSir,
    desc: "Chemical Engineering"
  },
  {
    name: "DHRUV GOYAL",
    image: RajeshSir,
    desc: "Computer Science"
  },
  {
    name: "HARSH CHAUDHARY",
    image: RajeshSir,
    desc: "Mechanical Engineering"
  },
  {
    name: "MUSKAN GARG",
    image: RajeshSir,
    desc: "Civil Engineering"
  },
  {
    name: "NIKITA RAULA",
    image: RajeshSir,
    desc: "Mechanical Engineering"
  },
  {
    name: "PRAVESH SINGH",
    image: RajeshSir,
    desc: "Computer Science"
  },
  {
    name: "RAJAT AGRAWAL",
    image: RajeshSir,
    desc: "Electrical Engineering"
  },
  {
    name: "SNEHA YADAV",
    image: RajeshSir,
    desc: "Electrical Engineering"
  }
];

const thirdyear: pic_detail[] = [
  {
    name: "APOORVA RAJ",
    image: RajeshSir,
    desc: "Mechanical Engineering"
  },
  {
    name: "ARYAMAN SINGH",
    image: RajeshSir,
    desc: "Electrical Engineering"
  },
  {
    name: "CHIRAYU RANKAWAT",
    image: RajeshSir,
    desc: "Mechanical Engineering"
  },
  {
    name: "DARSHAN DUSAD",
    image: RajeshSir,
    desc: "Computer Science"
  },
  {
    name: "DEVANSH GARG",
    image: RajeshSir,
    desc: "Mechanical"
  },
  {
    name: "HARSHIT GARG",
    image: RajeshSir,
    desc: "Mechanical"
  },
  {
    name: "ISHIKA PANWAR",
    image: RajeshSir,
    desc: "Computer Science"
  },
  {
    name: "PAVNESH CHATURVEDI",
    image: RajeshSir,
    desc: "Electronics and Communication Engineering"
  },
  {
    name: "PUNEET SINGH",
    image: RajeshSir,
    desc: "Electronics and Communication Engineering"
  },
  {
    name: "RAHUL RAJ",
    image: RajeshSir,
    desc: "Mechanical Engineering"
  },
  {
    name: "RUSHIL MAKKAR",
    image: RajeshSir,
    desc: "Electronics and Communication Engineering"
  }
];

const secondyear: pic_detail[] = [
  {
    name: "VINAMRA VASHISHTH",
    image: RajeshSir,
    desc: "Computer Science and Engineering"
  },
  {
    name: "NISHANT GARG",
    image: RajeshSir,
    desc: "Computer Science and Engineering"
  },
  {
    name: "DIVYANSH GARG",
    image: RajeshSir,
    desc: "Electronics and Communication Engineering"
  },
  {
    name: "ABHINAV KUMAR",
    image: RajeshSir,
    desc: "Electrical Engineering"
  },
  {
    name: "SUDESHNA SONKAR",
    image: RajeshSir,
    desc: "Mechanical Engineering"
  },
  {
    name: "PRANJALI SRIVASTAVA",
    image: RajeshSir,
    desc: "Mechanical Engineering"
  },
  {
    name: "MAHAK GARG",
    image: RajeshSir,
    desc: "Electrical Engineering"
  },
  {
    name: "AMAN MITTAL",
    image: RajeshSir,
    desc: "Computer Science and Engineering"
  },
]

const Team = () => {
    return(
      // first div mein h-screen ki problem hai. Change it everywhere.
      <div className="text-black bg-white w-screen justify-center px-12 lg:px-24 xl:px-48">
        <h1 className="pt-8 text-4xl text-center">Our Founders: The Roots Of Our Tree</h1>
        <div className="pt-16 grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1 w-48 lg:w-80 justify-self-center"><Image className="rounded-full" src={RajeshSir} /></div>
          <div className="col-span-1">
            <h1 className="text-2xl text-center">DR. RAJESH KUMAR</h1>
            <p className="text-center">Ph.D., PDF(NUS, Singapore) SMIEEE, FIETE, MIE (I),SMIACSIT, LMISTE, MIAENG,</p>
            <p className="text-center">Professor of Elec. Engg.</p>
          </div>
        </div>
        <div className="grid grid-cols-4 pt-16">
        {founders.map((item, index) => (
                <div key={index} className="w-64">
                  <h1 className="text-black text-xl py-2 font-nunito">
                    <div className=""><Image className="rounded-full" src={item.image}></Image></div>
                    <p className="text-center">{item.name}</p>
                    <p className="text-center">{item.desc}</p>
                  </h1>
                </div>
              ))}
        </div>
        {/* <h1 className="pt-32 text-center font-bold text-4xl">FINAL YEAR</h1>
        <div className="grid grid-cols-4 pt-16">
        {finalyear.map((item, index) => (
          <div key={index} className="w-64">
            <h1 className="text-black text-xl py-2 font-nunito">
              <div className=""><Image className="rounded-full" src={item.image}></Image></div>
              <p className="text-center">{item.name}</p>
              <p className="text-center">{item.desc}</p>
            </h1>
          </div>
        ))}
        </div>
        <h1 className="pt-32 text-center font-bold text-4xl">THIRD YEAR</h1>
        <div className="grid grid-cols-4 pt-16">
        {thirdyear.map((item, index) => (
          <div key={index} className="w-64">
            <h1 className="text-black text-xl py-2 font-nunito">
              <div className=""><Image className="rounded-full" src={item.image}></Image></div>
              <p className="text-center">{item.name}</p>
              <p className="text-center">{item.desc}</p>
            </h1>
          </div>
        ))}
        </div>
        <h1 className="pt-32 text-center font-bold text-4xl">SECOND YEAR</h1>
        <div className="grid grid-cols-4 pt-16">
        {secondyear.map((item, index) => (
          <div key={index} className="w-64">
            <h1 className="text-black text-xl py-2 font-nunito">
              <div className=""><Image className="rounded-full" src={item.image}></Image></div>
              <p className="text-center">{item.name}</p>
              <p className="text-center">{item.desc}</p>
            </h1>
          </div>
        ))}
        </div> */}
      </div>
    )
}

export default Team;