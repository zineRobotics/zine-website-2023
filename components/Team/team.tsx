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
    desc: "/"
  },
  {
    name: "ARPIT JAIN",
    image: RajeshSir,
    desc: "/team"
  },
  {
    name: "ANUPAM KUMAR",
    image: RajeshSir,
    desc: "/projects"
  },
  {
    name: "SONIYA JAIN",
    image: RajeshSir,
    desc: "/achievements"
  }
];

const finalyear: pic_detail[] = [
  {
    name: "TANMAY AGARWAL",
    image: RajeshSir,
    desc: "/"
  },
  {
    name: "PAARTH BIR",
    image: RajeshSir,
    desc: "/team"
  },
  {
    name: "VIBHOR RAWAL",
    image: RajeshSir,
    desc: "/projects"
  },
  {
    name: "VISHAL KOTHARI",
    image: RajeshSir,
    desc: "/achievements"
  },
  {
    name: "TANISHK DUDI",
    image: RajeshSir,
    desc: "/achievements"
  },
  {
    name: "PRANAV KULSHESHTRA",
    image: RajeshSir,
    desc: "/achievements"
  },
  {
    name: "SUMIT SONI",
    image: RajeshSir,
    desc: "/achievements"
  },
  {
    name: "KESHAV",
    image: RajeshSir,
    desc: "/achievements"
  }
];

const thirdyear: pic_detail[] = [
  {
    name: "BHANU MOHINDRA",
    image: RajeshSir,
    desc: "/"
  },
  {
    name: "BRIRAJ",
    image: RajeshSir,
    desc: "/team"
  },
  {
    name: "CHARU",
    image: RajeshSir,
    desc: "/projects"
  },
  {
    name: "DHRUV GOYAL",
    image: RajeshSir,
    desc: "/achievements"
  },
  {
    name: "HARSH CHAUDHARY",
    image: RajeshSir,
    desc: "/achievements"
  },
  {
    name: "MUSKAN GARG",
    image: RajeshSir,
    desc: "/achievements"
  },
  {
    name: "NIKITA RAULA",
    image: RajeshSir,
    desc: "/achievements"
  },
  {
    name: "PRAVESH SINGH",
    image: RajeshSir,
    desc: "/achievements"
  },
  {
    name: "RAJAT AGRAWAL",
    image: RajeshSir,
    desc: "/achievements"
  },
  {
    name: "SNEHA YADAV",
    image: RajeshSir,
    desc: "/achievements"
  }
];

const secondyear: pic_detail[] = [
  {
    name: "APOORVA RAJ",
    image: RajeshSir,
    desc: "/"
  },
  {
    name: "ARYAMAN SINGH",
    image: RajeshSir,
    desc: "/team"
  },
  {
    name: "CHIRAYU RANKAWAT",
    image: RajeshSir,
    desc: "/projects"
  },
  {
    name: "DARSHAN DUSAD",
    image: RajeshSir,
    desc: "/achievements"
  },
  {
    name: "DEVANSH GARG",
    image: RajeshSir,
    desc: "/achievements"
  },
  {
    name: "HARSHIT GARG",
    image: RajeshSir,
    desc: "/achievements"
  },
  {
    name: "ISHIKA PANWAR",
    image: RajeshSir,
    desc: "/achievements"
  },
  {
    name: "PAVNESH CHATURVEDI",
    image: RajeshSir,
    desc: "/achievements"
  },
  {
    name: "PUNEET SINGH",
    image: RajeshSir,
    desc: "/achievements"
  },
  {
    name: "RAHUL RAJ",
    image: RajeshSir,
    desc: "/achievements"
  },
  {
    name: "RUSHIL MAKKAR",
    image: RajeshSir,
    desc: "/achievements"
  }
];

const Team = () => {
    return(
      // first div mein h-screen ki problem hai. Change it everywhere.
      <div className="text-black bg-white w-screen justify-center px-24">
        <h1 className="pt-8 text-4xl text-center">Our Founders: The Roots Of Our Tree</h1>
        <div className="pt-16 pl-48 grid grid-cols-2">
          <div className="col-span-1 w-80 right-0"><Image className="rounded-full" src={RajeshSir} /></div>
          <div className="col-span-1 -ml-32 mt-24">
            <h1 className="text-2xl">DR. RAJESH KUMAR</h1>
            <p>Ph.D., PDF(NUS, Singapore) SMIEEE, FIETE, MIE (I),SMIACSIT, LMISTE, MIAENG,</p>
            <p>Professor of Elec. Engg.</p>
          </div>
        </div>
        <div className="grid grid-cols-4 pt-16">
        {founders.map((item, index) => (
                <div key={index} className="w-64">
                  <h1 className="text-black text-xl py-2 font-nunito">
                    <div className=""><Image className="rounded-full" src={item.image}></Image></div>
                    <p className="text-center">{item.name}</p>
                  </h1>
                </div>
              ))}
        </div>
        <h1 className="pt-32 text-center font-bold text-4xl">FINAL YEAR</h1>
        <div className="grid grid-cols-4 pt-16">
        {finalyear.map((item, index) => (
          <div key={index} className="w-64">
            <h1 className="text-black text-xl py-2 font-nunito">
              <div className=""><Image className="rounded-full" src={item.image}></Image></div>
              <p className="text-center">{item.name}</p>
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
            </h1>
          </div>
        ))}
        </div>
        <h1 className="pt-32 text-center font-bold text-4xl">SECOND YEAR</h1>
        <div className="grid grid-cols-4 pt-16">
        {thirdyear.map((item, index) => (
          <div key={index} className="w-64">
            <h1 className="text-black text-xl py-2 font-nunito">
              <div className=""><Image className="rounded-full" src={item.image}></Image></div>
              <p className="text-center">{item.name}</p>
            </h1>
          </div>
        ))}
        </div>
      </div>
    )
}

export default Team;