import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import avatar from "../../images/thirdyear/images.jpg";
import piyush from "../../images/alumni/piyush.jpeg";
import nimesh from "../../images/alumni/nimesh.jpeg";
import devnath from "../../images/alumni/devnath.jpeg";
import vikalp from "../../images/alumni/vikalp.jpeg"
import Divyam from "../../images/2019/Divyam.webp";
import Kriti from "../../images/2019/Kriti.webp";
import MDSaif from "../../images/2019/MDSaif.webp";
import Mrigakshi from "../../images/2019/Mrigakshi.webp";
import puru from "../../images/2019/puru.webp";
import samidha from "../../images/2019/samidha.webp";
import vasanth from "../../images/2019/Vasanth.webp";
import manish from "../../images/2018/manish.webp";
import rahulravi from "../../images/2018/rahulravi.webp";
import saloni from "../../images/2018/saloni.webp";
import akshay from "../../images/2017/akshay.webp";
import ayush from "../../images/2017/ayush.webp";
import devang from "../../images/2017/devang.webp";
import jatin from "../../images/2017/jatin.webp";
import karsh from "../../images/2017/karsh.webp";
import sarthak from "../../images/2017/sarthak.webp";
import shubham from "../../images/2017/shubham.webp";
import keshav from "../../images/2021/keshav (1).webp";
import paarth from "../../images/2021/paarth (1).webp";
import pranav from "../../images/2021/pranav.webp";
import sumit from "../../images/2021/sumit.webp";
import tanishk from "../../images/2021/tanisk.webp";
import tanmay from "../../images/2021/tanmay.webp";
import vibhor from "../../images/2021/vibhor.webp";
import vishal from "../../images/2021/vishal.webp";
import akash from "../../images/2016/akash.jpg";
import anirudh from "../../images/2016/anirudh.jpg";
import anshul from "../../images/2016/anshul.jpg";
import avinash from "../../images/2016/avinash.jpg";
import mihika from "../../images/2016/mihika.jpg";
import paresh from "../../images/2016/paresh.jpg";
import piyush1 from "../../images/2016/piyush.jpg";
import rajatkumar from "../../images/2016/rajatkumar.png";
import sanjay from "../../images/2016/sanjay.jpg";
import satvik from "../../images/2016/satvik.jpg";
import sharad from "../../images/2016/sharad.v1.webp";
import vaibhav from "../../images/2016/vaibhav.jpg";
import alok from "../../images/2012/alok.webp";
import nirmala from "../../images/2012/nirmala.webp";
import ankita from "../../images/2012/ankita.jpg";
import anoop from "../../images/2012/anoop.jpg";
import ambarish from "../../images/2010/ambarish.webp";
import abhinav from "../../images/2010/abhinav.jpg";
import kriti1 from "../../images/2010/kriti1.jpg";
import devendra from "../../images/2009/white-devendra.jpg";
import himanshu1 from "../../images/2009/himanshu1.jpg";
import shashwat from "../../images/2011/shashwat.jpg";
import anshulrawat from "../../images/2018/anshul.webp";
// interface pic_detail {
//   name: string;
//   image: StaticImageData;
//   desc: string;
//   github: string;
//   linkedin: string;
//   twitter: string;
//   instagram: string;
//   facebook: string;
// }
const year2012= [
 
  {
    name: "Alok Agrawal",
    desc: "Sr. Software Controls Engineer at Medtronic\nM. S. Purdue University, USA",
    image: alok,
    linkedin: "https://www.linkedin.com/in/agrawalalok1/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Nirmala  Kunwar",
    desc: "Electronics Engineer, Australian Astronomical Optics, Macquarie",
    image: nirmala,
    linkedin: "https://www.linkedin.com/in/nirmala-kunwar-ranawat/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Rohit Saxena",
    desc: "Associate Manager - Demand Planning\nPGDIM, Logistics, Materials, and Supply Chain Management, National Institute of Industrial Engineering",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/rohit-saxena-692094189/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Ankita Gupta",
    desc: "Applied Scientist, Amazon India \n University of Massachusetts, Amherst\nIISc Banglore, India",
    image: ankita,
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "https://www.facebook.com/ankita.gupta.39142/",
    github: ""
  },
  {
    name: "Anoop Honnekeri",
    desc: " M. S. University of California, Berkeley, USA",
    image: anoop,
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },


];

const year2020 = [

  {
    name: "Nimesh Khandelwal",
    desc: "Ph.D. Graduate Student at Indian Institute of Technology, Kanpur",
    image: nimesh,
    linkedin: "https://www.linkedin.com/in/nimesh-khandelwal-464b6a125/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Devnath Nair",
    desc: "Robotics Engineer in Autonomous Guided Vehicles at Addverb Technologies, Australia",
    image: devnath,
    linkedin: "https://www.linkedin.com/in/devnath-nair/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Vikalp Saini",
    desc: "ESE 2020 - AIR 23,\nAssistant Director, Central Electricity Authority,\nMinistry of Power",
    image: vikalp,
    linkedin: "https://www.linkedin.com/in/vikalp-saini-3750961b2/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  
]

const year2016 = [
  {
    name: "Vaibhav Jain",
    desc: "SMTS at Salesforce",
    image: vaibhav,
    linkedin: "https://www.linkedin.com/in/vaibhavjainvj/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Sharad Garg",
    desc: "Project Leader at De Shaw",
    image: sharad,
    linkedin: "https://www.linkedin.com/in/sharad-garg-6b191194/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Paresh Anand",
    desc: "Senior Associate at PwC\nMBA, IIM Kozhikode ",
    image: paresh,
    linkedin: "	https://www.linkedin.com/in/paresh-anand/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Piyush Chauhan",
    desc: "Investment Banking Analyst at Bank of America \n MBA, Symbiosis Institute of Business Management, Pune",
    image: piyush1,
    linkedin: "	https://www.linkedin.com/in/piyush-chauhan-b91704138/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Rajat Kumar Arya",
    desc: "Saint-Gobain",
    image: rajatkumar,
    linkedin: "	https://www.linkedin.com/in/rajk21feb/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Mihika Gupta",
    desc: "Experienced Associate, PricewaterhouseCoopers\n MBA, IIM Indore",
    image: mihika,
    linkedin: "https://www.linkedin.com/in/mihika-gupta-a57846171/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },

  {
    name: "Anirudha Kumar",
    desc: "Assistant Commissioner, State Tax at Government of Bihar",
    image: anirudh,
    linkedin: "https://www.linkedin.com/in/anirudha-kumar-151635a0/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Akash Shah",
    desc: "Product & Growth @ OYO",
    image: akash,
    linkedin: "https://www.linkedin.com/in/akash-shah-604/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Avinash Sharma",
    desc: "Imaging Scientist at Algolux \n M.S. Concordia University, Montreal, QC, Canada",
    image: avinash,
    linkedin: "https://www.linkedin.com/in/avinash-sharma-561335a3/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Anshul Mittal",
    desc: "Founding Member at SALT - mysaltapp",
    image: anshul,
    linkedin: "https://www.linkedin.com/in/anshulmittal712/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Sanjay Thakur",
    desc: "Founder and CEO at Rydesafely\n M.S. McGill University, Montreal, Canada",
    image: sanjay,
    linkedin: "https://www.linkedin.com/in/sanjay-thakur-49a704176/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Saatvik Shah",
    desc: "Software Engineer at IMC Trading\nM.S. Carnegie Mellon University, Pittsburgh, USA",
    image: satvik,
    linkedin: "https://www.linkedin.com/in/saatvikshah/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
]

const year2017 = [
  {
    name: "Shubham Tripathi",
    desc: "Applied Researcher, Microsoft \n MS, Language Technology Institute, School of Computer Science, CMU, US.",
    image: shubham,
    linkedin: "https://www.linkedin.com/in/stripathi08/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Karsh Tharayani",
    desc: "Robotics Algorithm Developer at MathWorks \n M.S. Carnegie Mellon University, Pittsburgh, USA",
    image: karsh,
    linkedin: "https://www.linkedin.com/in/karsh-tharyani-264a48104/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Sarthak Jain",
    desc: "MS Software Engineering, San Jose State University, USA",
    image: sarthak,
    linkedin: "https://www.linkedin.com/in/sarthak-jain29/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Jatin Verma",
    desc: "AI Scientist at WaveScan Technologies Pte. Ltd. \n ME, Nanyang Technological University, Singapore, 17. M.S. Texas A&M University, USA",
    image: jatin,
    linkedin: "https://www.linkedin.com/in/jverma205/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Devang Anant Darode",
    desc: "R&D intern at BEC Robotics\nM. Sc. Robotic Systems Engineering, RWTH Aachen, Germany",
    image: devang,
    linkedin: "https://www.linkedin.com/in/devangdarode/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Ayush Jhalani",
    desc: "Software Developer at Honeywell Intelligrated\nMS, Robotic System Development, Carnegie Mellon University, US",
    image: ayush,
    linkedin: "https://www.linkedin.com/in/ayushjhalani/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Akshay Kumar",
    desc: "Computer Vision Engineer at Invisible AI\nMS, Robotics Engineering, Worcester Polytechnic Insitute, Massachusetts, US",
    image: akshay,
    linkedin: "https://www.linkedin.com/in/kumarakshay324/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },

]

const year2018 = [
  {
    name: "Saloni jain",
    desc: "Senior Software Engineer at Arcesium",
    image: saloni,
    linkedin: "https://www.linkedin.com/in/saloni-jain-60b32b126//",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },

  {
    name: "Manish Patki",
    desc: "Associate at JPMorgan Chase & Co",
    image: manish,
    linkedin: "https://www.linkedin.com/in/manish-patki-21aaa1137/?originalSubdomain=in",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
 

  {
    name: "Rahul Ravichandran",
    desc: "Robotics Engineer at Turftank\nMS, Robotics, Aalborg University, Denmark",
    image: rahulravi,
    linkedin: "https://www.linkedin.com/in/rahul-ravichandran-b89363129/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Anshul Rawat",
    desc: "SMTS at Salesforce",
    image: anshulrawat,
    linkedin: "https://www.linkedin.com/in/anshul-rawat-825287129/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },

]

const year2019 = [
  {
    name: "Mrigakshi Pandey",
    desc: "Software Engineer at Fidelity Investments",
    image: Mrigakshi,
    linkedin: "https://www.linkedin.com/in/mrigakshipandey/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Md Saif",
    desc: "Senior Product Engineer at Tredence Inc.",
    image: MDSaif,
    linkedin: "https://www.linkedin.com/in/md-saif-111267128/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Samidha Verma",
    desc: "SDE at Amazon",
    image: samidha,
    linkedin: "https://www.linkedin.com/in/samidhaverma/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Piyush Jha",
    desc: "MASc Student at University of Waterloo\nArtificial Intelligence R&D Engineer @Quadrical.ai",
    image: piyush,
    linkedin: "https://linkedin.com/in/piyush-j/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Puru Lokendra Singh",
    desc: "SDE at Publicis Sapient",
    image: puru,
    linkedin: "https://www.linkedin.com/in/puru-lokendra-singh-b9a948134/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Kriti Gupta",
    desc: "Software Developer at Apple\nGraduate Services Assistant at Arizona State University\n",
    image: Kriti,
    linkedin: "https://www.linkedin.com/in/kritigupta13/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Vasanth Reddy",
    desc: "Graduate Research Assistant at Virginia Tech",
    image: vasanth,
    linkedin: "https://www.linkedin.com/in/vasanth-reddy-778816108/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Divyam Aditya Singh",
    desc: "Rakuten Symphony",
    image: Divyam,
    linkedin: "https://www.linkedin.com/in/divyam-aditya-singh-870369140/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
]
const year2021 = [
  {
    name: "Vishal Kothari",
    desc: "Associate Software Engineer at Tekion Corp",
    image: vishal,
    linkedin: "https://www.linkedin.com/in/vishal81/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Vibhor Rawal",
    desc: "Software Developer at Gameskraft",
    image: vibhor,
    linkedin: "https://www.linkedin.com/in/vibhorrawal/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Tanmay Agarwal",
    desc: "Robotics Engineer at Addverb",
    image: tanmay,
    linkedin: "https://www.linkedin.com/in/tanmay98/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Tanishk Dudi",
    desc: "Associate Software Engineer at Quicket Solutions",
    image: tanishk,
    linkedin: "https://www.linkedin.com/in/tanishkdudi/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Sumit Soni",
    desc: "Software Engineer at Microsoft",
    image: sumit,
    linkedin: "https://www.linkedin.com/in/isumit19/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Paarth Bir",
    desc: "Software Engineer at Societe Generale Global Solution Centre",
    image: paarth,
    linkedin: "https://www.linkedin.com/in/paarthbir/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Pranav Kulshrestha",
    desc: "Software Developer at Nokia",
    image: pranav,
    linkedin: "https://www.linkedin.com/in/pranavkulshrestha/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Keshav Sarraf",
    desc: "SDE at Qi-Caps LLP",
    image: keshav,
    linkedin: "https://www.linkedin.com/in/keshav-sarraf-0a0176132/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
]
const year2011 =[
  {
    name: "Shashwat Bhattacharya",
    desc: " M.S. TU München, Munich, Germany.",
    image: shashwat,
    linkedin: "https://www.linkedin.com/in/shashwat-bhattacharya-73758114/	",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },]
  
  const year2010 =[
    {
      name: "Abhinav Sadu",
      desc: " Ph.D. RWTH Aachen University, Germany.",
      image: abhinav,
      linkedin: "https://www.linkedin.com/in/abhinav-sadu-64b71813/",
      twitter: "",
      instagram: "",
      facebook: "",
      github: ""
  
    },
    {
      name: "Kriti Saxena",
      desc: "PGDM. IIM Kozhikode, India.\nRPG Group, Summer Intern",
      image: kriti1,
      linkedin: "https://www.linkedin.com/in/kritisaxenaiimk/	",
      twitter: "",
      instagram: "",
      facebook: "",
      github: ""
  
    },
    {
      name: "Ambarish Desai",
      desc: "Controls Design EngineerControls, General Motors\n M.S. University of Michigan, USA",
      image: ambarish,
      linkedin: "https://www.linkedin.com/in/a14desai/",
      twitter: "",
      instagram: "",
      facebook: "",
      github: ""
  
    },

  ]

  const year2009 =[
    {
      name: "Devendra Sharma",
      desc: "Senior Manager at Biocon\n PG at Indian school of business",
      image: devendra,
      linkedin: "",
      twitter: "",
      instagram: "",
      facebook: "https://www.facebook.com/devendra.is.here",
      github: ""
  
    },
    {
      name: "Himanshu Gothwal",
      desc: "Software developer, Epic\nMS, Computer Science, IIT Roorkee",
      image: himanshu1,
      linkedin: "",
      twitter: "",
      instagram: "",
      facebook: "https://www.linkedin.com/in/himanshu-gothwal-8a61a816",
      github: ""
  
    },]




const Alumni = () => {
    return(
      <div className="text-black bg-white w-screen justify-center">
        {/* <div className="bg-cover bg-bg-alumni h-80 md:h-100 lg:h-130 px-12 lg:px-24"></div> */}
        <div className="keen-slider__slide number-slide12 h-60 md:h-100 lg:h-130 mb-4">
          <div className="absolute left-8 pl-16 text-xl md:text-3xl lg:text-5xl">
            <p>Alumni</p>
          </div>
        </div>
        <h1 className="pt-12 text-center font-bold text-4xl px-12 lg:px-24">2021</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-16 px-12 lg:px-24">
        {year2021.map((item, index) => (
          <div key={index} className="col-span-1">
            <h1 className="text-black py-2 font-nunito text-center">
              <div className="w-48 mx-auto member-hover">
                <Image className="rounded-full" src={item.image} placeholder="blur"></Image>
              </div>
              <p className="text-center text-xl font-bold">{item.name}</p>
              <p className="text-center text-gray-600 text-md preline">{item.desc}</p>
              <div className="text-center">
              <div className="grid grid-flow-col auto-cols-auto mt-2 w-64 mx-auto">
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
        <h1 className="pt-12 text-center font-bold text-4xl px-12 lg:px-24">2020</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-16 px-12 lg:px-24">
        {year2020.map((item, index) => (
          <div key={index} className="col-span-1">
            <h1 className="text-black py-2 font-nunito text-center">
              <div className="w-48 mx-auto member-hover">
                <Image className="rounded-full" src={item.image} placeholder="blur"></Image>
              </div>
              <p className="text-center text-xl font-bold">{item.name}</p>
              <p className="text-center text-gray-600 text-md preline">{item.desc}</p>
              <div className="text-center">
              <div className="grid grid-flow-col auto-cols-auto mt-2 w-64 mx-auto">
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
        <h1 className="pt-12 text-center font-bold text-4xl px-12 lg:px-24">2019</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-16 px-12 lg:px-24">
        {year2019.map((item, index) => (
          <div key={index} className="col-span-1">
            <h1 className="text-black py-2 font-nunito text-center">
              <div className="w-48 mx-auto member-hover">
                <Image className="rounded-full" src={item.image} placeholder="blur"></Image>
              </div>
              <p className="text-center text-xl font-bold">{item.name}</p>
              <p className="text-center text-gray-600 text-md preline">{item.desc}</p>
              <div className="text-center">
              <div className="grid grid-flow-col auto-cols-auto mt-2 w-64 mx-auto">
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
        <h1 className="pt-12 text-center font-bold text-4xl px-12 lg:px-24">2018</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-16 px-12 lg:px-24">
        {year2018.map((item, index) => (
          <div key={index} className="col-span-1">
            <h1 className="text-black py-2 font-nunito text-center">
              <div className="w-48 mx-auto member-hover">
                <Image className="rounded-full" src={item.image} placeholder="blur"></Image>
              </div>
              <p className="text-center text-xl font-bold">{item.name}</p>
              <p className="text-center text-gray-600 text-md preline">{item.desc}</p>
              <div className="text-center">
              <div className="grid grid-flow-col auto-cols-auto mt-2 w-64 mx-auto">
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
        <h1 className="pt-12 text-center font-bold text-4xl px-12 lg:px-24">2017</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-16 px-12 lg:px-24">
        {year2017.map((item, index) => (
          <div key={index} className="col-span-1">
            <h1 className="text-black py-2 font-nunito text-center">
              <div className="w-48 mx-auto member-hover">
                <Image className="rounded-full" src={item.image} placeholder="blur"></Image>
              </div>
              <p className="text-center text-xl font-bold">{item.name}</p>
              <p className="text-center text-gray-600 text-md preline">{item.desc}</p>
              <div className="text-center">
              <div className="grid grid-flow-col auto-cols-auto mt-2 w-64 mx-auto">
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
        <h1 className="pt-12 text-center font-bold text-4xl px-12 lg:px-24">2016</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-16 px-12 lg:px-24">
        {year2016.map((item, index) => (
          <div key={index} className="col-span-1">
            <h1 className="text-black py-2 font-nunito text-center">
              <div className="w-48 mx-auto member-hover">
                <Image className="rounded-full" src={item.image} placeholder="blur"></Image>
              </div>
              <p className="text-center text-xl font-bold">{item.name}</p>
              <p className="text-center text-gray-600 text-md preline">{item.desc}</p>
              <div className="text-center">
              <div className="grid grid-flow-col auto-cols-auto mt-2 w-64 mx-auto">
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
        <h1 className="pt-12 text-center font-bold text-4xl px-12 lg:px-24">2012</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-16 px-12 lg:px-24">
        {year2012.map((item, index) => (
          <div key={index} className="col-span-1">
            <h1 className="text-black py-2 font-nunito text-center">
              <div className="w-48 mx-auto member-hover">
                <Image className="rounded-full" src={item.image} placeholder="blur"></Image>
              </div>
              <p className="text-center text-xl font-bold">{item.name}</p>
              <p className="text-center text-gray-600 text-md preline">{item.desc}</p>
              <div className="text-center">
              <div className="grid grid-flow-col auto-cols-auto mt-2 w-64 mx-auto">
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
        <h1 className="pt-12 text-center font-bold text-4xl px-12 lg:px-24">2011</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-16 px-12 lg:px-24">
        {year2011.map((item, index) => (
          <div key={index} className="col-span-1">
            <h1 className="text-black py-2 font-nunito text-center">
              <div className="w-48 mx-auto member-hover">
                <Image className="rounded-full" src={item.image} placeholder="blur"></Image>
              </div>
              <p className="text-center text-xl font-bold">{item.name}</p>
              <p className="text-center text-gray-600 text-md preline">{item.desc}</p>
              <div className="text-center">
              <div className="grid grid-flow-col auto-cols-auto mt-2 w-64 mx-auto">
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
        <h1 className="pt-12 text-center font-bold text-4xl px-12 lg:px-24">2010</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-16 px-12 lg:px-24">
        {year2010.map((item, index) => (
          <div key={index} className="col-span-1">
            <h1 className="text-black py-2 font-nunito text-center">
              <div className="w-48 mx-auto member-hover">
                <Image className="rounded-full" src={item.image} placeholder="blur"></Image>
              </div>
              <p className="text-center text-xl font-bold">{item.name}</p>
              <p className="text-center text-gray-600 text-md preline">{item.desc}</p>
              <div className="text-center">
              <div className="grid grid-flow-col auto-cols-auto mt-2 w-64 mx-auto">
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
        <h1 className="pt-12 text-center font-bold text-4xl px-12 lg:px-24">2009</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-16 px-12 lg:px-24">
        {year2009.map((item, index) => (
          <div key={index} className="col-span-1">
            <h1 className="text-black py-2 font-nunito text-center">
              <div className="w-48 mx-auto member-hover">
                <Image className="rounded-full" src={item.image} placeholder="blur"></Image>
              </div>
              <p className="text-center text-xl font-bold">{item.name}</p>
              <p className="text-center text-gray-600 text-md preline">{item.desc}</p>
              <div className="text-center">
              <div className="grid grid-flow-col auto-cols-auto mt-2 w-64 mx-auto">
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

export default Alumni;

// float effect on image hover.