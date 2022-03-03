import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram, faLinkedin, faGithub,  faWordpress} from '@fortawesome/free-brands-svg-icons';
import team from "../../images/team.jpeg"
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
import avatar from "../../images/thirdyear/images.jpg";
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
import piyush from "../../images/alumni/piyush.jpeg";
import kriti from "../../images/alumni/kriti.jpeg";
import nimesh from "../../images/alumni/nimesh.jpeg";
import devnath from "../../images/alumni/devnath.jpeg";
import vikalp from "../../images/alumni/vikalp.jpeg"
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
const alumni = [
 
  {
    name: "Alok Agrawal",
    desc: "Sr. Software Controls Engineer at Medtronic",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/agrawalalok1/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Nirmala  Kunwar",
    desc: "Electronics Engineer",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/nirmala-kunwar-ranawat/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Rohit Saxena",
    desc: "Associate Manager - Demand Planning",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/rohit-saxena-692094189/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Ankita Gupta",
    desc: "Associate Manager - Demand Planning",
    image: avatar,
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "https://www.facebook.com/ankita.gupta.39142/about_work_and_education",
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
    desc: "ESE 2020 - AIR 23,\nPosting - Assistant Director,\nCentral Electricity Authority,\nMinistry of Power",
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
    image: avatar,
    linkedin: "https://www.linkedin.com/in/vaibhavjainvj/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Sharad Garg",
    desc: "Project Leader at De Shaw",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/sharad-garg-6b191194/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Paresh Anand",
    desc: "Senior Associate at PwC, MBA, IIM K ",
    image: avatar,
    linkedin: "	https://www.linkedin.com/in/paresh-anand/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Piyush Chauhan",
    desc: "Investment Banking Analyst at Bank of America	",
    image: avatar,
    linkedin: "	https://www.linkedin.com/in/piyush-chauhan-b91704138/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Rajat Kumar Arya",
    desc: "Saint-Gobain",
    image: avatar,
    linkedin: "	https://www.linkedin.com/in/rajk21feb/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Mihika Gupta",
    desc: " Experienced AssociateExperienced Associate",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/avinash-sharma-561335a3/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Maitreyee mehta",
    desc: "",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/mihika-gupta-a57846171/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Anirudha Kumar",
    desc: "Assistant Commissioner, State Tax at Government of Bihar",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/anirudha-kumar-151635a0/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Akash Shah",
    desc: "Product & Growth @ OYO",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/akash-shah-604/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Avinash Sharma",
    desc: "Imaging Scientist at Algolux",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/avinash-sharma-561335a3/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Anshul Mittal",
    desc: "Founding Member at SALT - mysaltapp",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/anshulmittal712/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Sanjay Thakur",
    desc: "Founder and CEO at Rydesafely",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/sanjay-thakur-49a704176/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Saatvik Shah",
    desc: "Software Engineer at IMC Trading",
    image: avatar,
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
    desc: "Applied Researcher, Microsoft",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/stripathi08/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Karsh Tharayani",
    desc: "Robotics Algorithm Developer at MathWorks",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/karsh-tharyani-264a48104/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Sarthak Jain",
    desc: "MS Software Engineering, San Jose State Univ, USA",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/sarthak-jain29/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Jatin Verma",
    desc: "AI Scientist at WaveScan Technologies Pte. Ltd.",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/jverma205/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Devang Anant Darode",
    desc: "R&D intern at BEC Robotics",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/devangdarode/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Ayush Jhalani",
    desc: "Software Developer at Honeywell Intelligrated",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/ayushjhalani/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Akshay Kumar",
    desc: "Computer Vision Engineer at Invisible AI | Roboticist",
    image: avatar,
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
    desc: "Senior Software Engineer at Arcesium, SMTS at Salesforce",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/saloni-jain-60b32b126//",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Parijeet Chatterjee",
    desc: "",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/jverma205/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Manish Patki",
    desc: "Associate at JPMorgan Chase & Co",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/manish-patki-21aaa1137/?originalSubdomain=in",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Mayank Gupta",
    desc: "",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/jverma205/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Deepank Negi",
    desc: "",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/deepank-negi-1b2a1510b",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Rahul Ravichandran",
    desc: "Robotics Engineer at Turftank",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/rahul-ravichandran-b89363129/",
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
    image: avatar,
    linkedin: "https://www.linkedin.com/in/mrigakshipandey/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "MD SAIF",
    desc: "Senior Product Engineer at Tredence Inc.",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/md-saif-111267128/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Samidha Verma",
    desc: "SDE at Amazon",
    image: avatar,
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
    image: avatar,
    linkedin: "https://www.linkedin.com/in/puru-lokendra-singh-b9a948134/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""
  },
  {
    name: "Kriti Gupta",
    desc: "Software Developer at Apple, Graduate Services Assistant at Arizona State University",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/kritigupta13/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Vasanth Reddya",
    desc: "Graduate Research Assistant at Virginia Tech",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/vasanth-reddy-778816108/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
  {
    name: "Divyam Aditya Singh",
    desc: "Rakuten Symphony",
    image: avatar,
    linkedin: "https://www.linkedin.com/in/divyam-aditya-singh-870369140/",
    twitter: "",
    instagram: "",
    facebook: "",
    github: ""

  },
]
 




const Alumni = () => {
    return(
      <div className="text-black bg-white w-screen justify-center">
        <div className="bg-cover bg-bg-alumni h-80 md:h-100 lg:h-130 px-12 lg:px-24"></div>
        <h1 className="pt-12 text-center font-bold text-4xl px-12 lg:px-24">ALUMNI</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pt-16 px-12 lg:px-24">
        {alumni.map((item, index) => (
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
        <h1 className="pt-12 text-center font-bold text-4xl px-12 lg:px-24">Year 2020</h1>
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
        <h1 className="pt-12 text-center font-bold text-4xl px-12 lg:px-24">Year 2019</h1>
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
        <h1 className="pt-12 text-center font-bold text-4xl px-12 lg:px-24">Year 2018</h1>
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
        <h1 className="pt-12 text-center font-bold text-4xl px-12 lg:px-24">Year 2017</h1>
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
        <h1 className="pt-12 text-center font-bold text-4xl px-12 lg:px-24">Year 2016</h1>
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
      </div>
    )
}

export default Alumni;

// float effect on image hover.