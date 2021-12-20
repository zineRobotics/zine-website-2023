import React from "react";
import Link from "next/link";
import Image from "next/image";
import image from "../../images/compet.jpg";
import secondimage from "../../images/rajeshsir.jpg";
import Head from "next/head";
import Script from "next/script";
import a1 from "../../images/achievements/1.jpg"
import a2 from "../../images/achievements/2.jpeg"
import a3 from "../../images/achievements/3.jpeg"
import a4 from "../../images/achievements/4.jpg"

 //import Slider from "../Slider";

interface achievement {
  name: string;
  date: string;
  info: string;
  author: string;
  desc: string;
}

const achievements: achievement[] = [
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "A research paper on 'Shortest Path Evaluation with Enhanced Linear Graph and Dijkstra Algorithm' was presented at 59th Annual Conference of SICE",
    author: "Author: Tanishk Dudi",
    desc: "",
  },
  {
    name: "CSAW Hack3D Hackathon 2020",
    date: "November 2020",
    info: "2nd Place in a global virtual hackathon event",
    author: "Team Members : Devansh Garg, Chirayu Rankawat",
    desc: "",
  },
  {
    name: "Indian Drone Racing League StayAtHome Season 2",
    date: "October 2020",
    info: "1st Place in Virtual Drone Race conducted on Velocidrone simulator",
    author: "Team Members : Devnath Nair, Vishal Kothari",
    desc: "",
  },
  {
    name: "HackJaipur Virtual Hackathon 2020",
    date: "August 2020",
    info: "1st Place among 2200+ participants and 360+ teams",
    author: "Team Members : Kshitiz Kamal, Muskan Garg, Saransh Tayal",
    desc: "",
  },
  {
    name: "Indian Drone Racing League 28, NIT Goa",
    date: "March 2020",
    info: "2nd Place in Pro Class Race ",
    author: "Team Members : Devnath Nair",
    desc: "",
  },
  {
    name: "India Drone Festival 2.0, ITDA, Dehradun",
    date: "March 2020",
    info: "2nd Place in Tie the Knot",
    author: "Team Members : Vishal Kothari",
    desc: "",
  },
  {
    name: "Indian Drone Racing League 27, ITDA, Dehradun",
    date: "March 2020",
    info: "1st Place in Pro Class Race",
    author: "Team Members : Devnath Nair",
    desc: "",
  },
  {
    name: "Indian Drone Racing League 26, BITS PIlani Goa",
    date: "February 2020",
    info: "2nd Place in Pro Class Race",
    author: "Team Members : Devnath Nair",
    desc: "",
  },
  {
    name: "Kshitij 2020, IIT Kharagpur",
    date: "January 2020",
    info: "2nd Place in Tesseract (autonomous event)",
    author: "Team Members : Devansh Garg, Puneet Singh, Apoorva Raj, Rahul Raj",
    desc: "",
  },
  {
    name: "Indian Drone Racing League 24, VJTI, Mumbai",
    date: "December 2019",
    info: "1st Place in Pro Class Race",
    author: "Team Members : Devnath Nair",
    desc: "",
  },
  {
    name: "Research Paper",
    date: "December 2019",
    info: "A research paper on A novel mobile based hybrid skin tone Classification algorithm for Cancer detection was presented at REDSET 19 Conference held at GD Goenka",
    author: "Author : Paarth Bir",
    desc: "",
  },
  {
    name: "Indian Drone Racing League 23, PDPU, Gandhinagar",
    date: "November 2019",
    info: "1st Place in Pro Class Race 3rd Place in Pro Class Race",
    author: "Team Members : Devnath Nair, Vishal Kothari",
    desc: "",
  },
  {
    name: "Sphinx 2019, MNIT Jaipur",
    date: "November 2019",
    info: "1st Place in Robotryst 1st Place in Drone Rush 3rd Place in Drone Rush",
    author: "Team Members : Harsh Chaudhary, Brijraj, Akash Sharma Team Members : Devnath Nair, Nimesh Khandelwal",
    desc: "",
  },
  {
    name: "Asia Drone League, Malaysia",
    date: "October 2019",
    info: "Qualified into Top 32, 18th Overall amongst the top 70 pilots in Asia",
    author: "Team Members : Devnath Nair",
    desc: "",
  },
  {
    name: "Indian Drone Racing League 22, IIT Gandhinagar",
    date: "October 2019",
    info: "1st Place in Pro Class Race",
    author: "Team Members : Vishal Kothari",
    desc: "",
  },
  {
    name: "Indian Drone Racing League 21, VIT Vellore",
    date: "October 2019",
    info: "2nd Place in Pro Class Race ",
    author: "Team Members : Devnath Nair",
    desc: "",
  },
  {
    name: "Indian Drone Racing League 20, GEU Dehradun",
    date: "June 2019",
    info: "2nd Place in Pro Class Race",
    author: "Team Members : Devnath Nair",
    desc: "",
  },
  {
    name: "Drone Race, Techidate 2019, Manipal University Jaipur",
    date: "March 2019",
    info: "1st Place",
    author: "Team Members : Nimesh Khandelwal",
    desc: "",
  },
  {
    name: "Game of Drones, JECRC College, Jaipur",
    date: "March 2019",
    info: "1st Place 3rd Place",
    author: "Team Members : Devnath Nair, Vishal Kothari",
    desc: "",
  },
  {
    name: "Drone TechX,JECRC University,Jaipur",
    date: "March 2019",
    info: "2nd Place 3rd Place",
    author: "Team Members : Devnath Nair, Nimesh Khandelwal",
    desc: "",
  },
  {
    name: "Indian Drone Racing League 19, IIT Delhi",
    date: "March 2019",
    info: "2nd Place in Pro Class Race",
    author: "Team Members : Devnath Nair",
    desc: "",
  },
  {
    name: "Aerial Drones, BML Munjal, Delhi NCR",
    date: "February 2019",
    info: "1st Place 2nd Place",
    author: "Team Members : Devnath Nair, Vishal Kothari",
    desc: "",
  },
  {
    name: "Indian Drone Racing League 17, BITS Pilani, Goa Campus",
    date: "February 2019",
    info: "3rd Place in Pro Class Race",
    author: "Team Members : Devnath Nair",
    desc: "",
  },
  {
    name: "Kshitij 2019, IIT-Kharagpur",
    date: "January 2019",
    info: "1st Place in Zenith (manual event) 2nd Place in Zenith (manual event)",
    author: "Team Members : Navdeep Singh, Bhanu Mohindra, Saransh Tayal, Kshitiz Kamal Team Members : Nikita Rautela, Pravesh Sandhu, Rajat Agrawal, Brijraj",
    desc: "",
  },
  {
    name: "Plinth 2019, LNMIIT, Jaipur",
    date: "November 2020",
    info: "1st Place in Drone Obstruction 3rd Place in Drone Obstruction",
    author: "Team Members : Devnath Nair, Vishal Kothari",
    desc: "",
  },
  {
    name: "Indian Drone Racing League 14, Chitkara University, Punjab",
    date: "October 2018",
    info: "1st Place in Pro Class Race",
    author: "Team Members : Devnath Nair",
    desc: "",
  },
  {
    name: "Indian Drone Racing League 13, IIT Gandhinagar, Gujarat",
    date: "October 2018",
    info: "3rd Place in Pro Class Race 1st Place in Beginner Class Race",
    author: "Team Members : Devnath Nair",
    desc: "",
  },
  {
    name: "Technoxian 2018, Thaygaraj Stadium, Delhi",
    date: "July 2018",
    info: "1st Place in World Robotics Championship (Quadcopter)",
    author: "Team Members : Devnath Nair",
    desc: "",
  },
  {
    name: "BMU Munjal University, Delhi NCR",
    date: "April 2018",
    info: "1st Place in Aerial Drones",
    author: "Team Members : Devnath Nair",
    desc: "",
  },
  {
    name: "JECRC College, Jaipur",
    date: "March 2018",
    info: "1st Place in Drone Racing Championship",
    author: "Team Members : Devnath Nair",
    desc: "",
  },
  {
    name: "JECRC University, Jaipur",
    date: "March 2018",
    info: "1st Place in Drone TechX",
    author: "Team Members : Devnath Nair",
    desc: "",
  },
  {
    name: "ICECA Conference, Coimbatore",
    date: "January 2018",
    info: "Joint Angle Measurement using MEMS based inertial sensors for a biped robot",
    author: "Author : Rahul Ravichandran",
    desc: "",
  },
  {
    name: "Sphinx 2018, MNIT Jaipur",
    date: "January 2018",
    info: "1st Place in Robowar 1st Place in Robostone 2nd Place in Android App Development 2nd Place in Robostone",
    author: "Team Members : Nimesh Khandelwal, Vikalp Saini Team Members : Nimesh Khandelwal, Vikalp Saini Team Members - Saksham Jain, Gaurav Team Members : Rohan Chauhan, Saksham Jain",
    desc: "",
  },
  {
    name: "Plinth 2018, LNMIIT",
    date: "January 2018",
    info: "1st Place in Drone Obstruction",
    author: "Team Members : Devnath Nair",
    desc: "",
  },
  {
    name: "Science Conclave 2018, MNIT Jaipur",
    date: "November 2020",
    info: "Most Innovative Project (Biped) and Silver for Best College Project (Tricopter)",
    author: "Team Members : Rahul Ravichandran, Devnath Nair, Nimesh Khandelwal",
    desc: "",
  },
  {
    name: "Kshitij’18,  IIT Kharagpur",
    date: "January 2018",
    info: "2nd place in Image Processing based Autonomous event Fortress",
    author: "Team Members : Vishal Kothari, Tanmay Agarwal",
    desc: "",
  },
  {
    name: "Blitzshlag 2017, MNIT Jaipur",
    date: "February 2017",
    info: "Secured 2nd position in Grid-O-Grinder.",
    author: "",
    desc: "",
  },
  {
    name: "Kshitij'17 IIT Kharagpur",
    date: "January 2017",
    info: "Finalists in Image Processing based Autonomous Event Conquest",
    author: "",
    desc: "",
  },
  {
    name: "GridTech'15, Pragati Maidan, New Delhi",
    date: "April 2015",
    info: "-Won 1st prize at Students Innovation Pavillion worth of Rs. 1 lakh in the category Robotic Technology in Inspection of Transmission Lines.",
    author: "",
    desc: "",
  },
  
  {
    name: "GridTech'15, Pragati Maidan, New Delhi",
    date: "April 2015",
    info: "-Won 1st prize at Students Innovation Pavillion worth of Rs. 50 thousand in the category Smartmeter.",
    author: "",
    desc: "",
  },
  {
    name: "Blitzschlag 2015, MNIT jaipur",
    date: "April 19 2015",
    info: "Circuit mania blitz 2015 2nd and 4th position",
    author: "",
    desc: "",
  },
  {
    name: "Texas Instruments Analog Design",
    date: "March 2015",
    info: "Project Solar tracker reached finals",
    author: "",
    desc: "",
  },
  {
    name: "Kshitij '15 IIT Kharagpur",
    date: "February 2015",
    info: "-Won first prize in manual event Skyfall.",
    author: "",
    desc: "",
  },
  {
    name: "Kshitij '15 IIT Kharagpur",
    date: "February 2015",
    info: "-Won first prize in semi-autonomous event MINEFIELD.",
    author: "",
    desc: "",
  },
  {
    name: "Kshitij '15 IIT Kharagpur",
    date: "February 2015",
    info: "-Finalist in manual event Cascade.",
    author: "",
    desc: "",
  },
  {
    name: "Autodesk 3D Student design challenge",
    date: "2014-15",
    info: "1st and 3rd position in Regionals held at Noida",
    author: "",
    desc: "",
  },
  {
    name: "Autodesk 3D Student design challenge",
    date: "2014-15",
    info: "Won the national title held at Mumbai",
    author: "",
    desc: "",
  },
  {
    name: "Autodesk 3D Student design challenge",
    date: "2014-15",
    info: "Presented the design at the Autodesk Panorama, Held in Shangai, China-9-13th March'15",
    author: "",
    desc: "",
  },
  {
    name: "Projects Approved",
    date: "2014",
    info: "5 Projects were approved by the TEQUIP worth of 2.5 lakh from Malaviya National Institute of Tehnology(MNIT Jaipur).",
    author: "",
    desc: "",
  },
  {
    name: "Projects Approved",
    date: "2014",
    info: "7 projects were approved worth of 42 lakh from Ministry of Micro Small and Medium Enterprises(MSME), Govt. of India.",
    author: "",
    desc: "",
  },
  {
    name: "Blitzschlag 2014, MNIT, Jaipur",
    date: "April 2014",
    info: "1st Runner up in Retro Electronics",
    author: "",
    desc: "",
  },
  {
    name: "Blitzschlag 2014, MNIT, Jaipur",
    date: "April 2014",
    info: "1st Runner up in AUTOQUIZ",
    author: "",
    desc: "",
  },
  {
    name: "Blitzschlag 2014, MNIT, Jaipur",
    date: "April 2014",
    info: "1st Runner up in Circuit Biz",
    author: "",
    desc: "",
  },
  {
    name: "Blitzschlag 2014, MNIT, Jaipur",
    date: "April 2014",
    info: "1st Runner Up in CADesign",
    author: "",
    desc: "",
  },
  {
    name: "Blitzschlag 2014, MNIT, Jaipur",
    date: "April 2014",
    info: "4th place in Piezo Alert",
    author: "",
    desc: "",
  },
  {
    name: "Research Papers",
    date: "2014-15",
    info: "Short Term Load Forecasting using Artificial Neural Networks: A State of Art ",
    author: "Author- Jatin Verma",
    desc: "",
  },
  {
    name: "Research Papers",
    date: "2014-15",
    info: "A robust technique for Detection of P300 signals.",
    author: ", Author- Saatvik Shah, Anirudha Kumar",
    desc: "",
  },
  {
    name: "Research Papers",
    date: "2014-15",
    info: "Classification of mental tasks from EEG data using backtracking search optimization based neural classifier at Neurocomputing, Elsevier",
    author: "",
    desc: "",
  },
  {
    name: "Research Papers",
    date: "2014-15",
    info: "Group based Swarm evolution algorithm (GSEA) driven mental task classifier at Memetic Computing,Springer",
    author: "",
    desc: "",
  },
  {
    name: "Research Papers",
    date: "2014-15",
    info: "Paper presentation on 'use of epoxy resin viscous fiber polymer in turbine blades',IIT ROORKEE ",
    author: "",
    desc: "",
  },
  {
    name: "Research Papers",
    date: "2014-15",
    info: "Designed and fabricated an RC S.P.A.D. Airplane",
    author: "",
    desc: "",
  },
  {
    name: "Research Papers",
    date: "2014-15",
    info: "Best Paper Award at International Conference on Advances in Computer Engineering and Applications (ICACEA) 2015, IMS Ghaziabad INDIA",
    author: "",
    desc: "",
  },
  {
    name: "Research Papers",
    date: "2014-15",
    info: "Best Paper Award in 3rd International Conference on 'Advance Trends in Engineering, Technology and Research' (ICATETR) 2014; 22-24 Dec BKIT, Kota Rajasthan.",
    author: "",
    desc: "",
  },
  {
    name: "Tech Expo 2014, MNIT, Jaipur",
    date: "2014",
    info: "1st prize SmartCopter, Mechanical Category",
    author: "",
    desc: "",
  },
  {
    name: "Tech Expo 2014, MNIT, Jaipur",
    date: "2014",
    info: "1st prize Solar Tracker, Electronics Category",
    author: "",
    desc: "",
  },
  {
    name: "Tech Expo 2014, MNIT, Jaipur",
    date: "2014",
    info: "1st prize Interactive SmartBoard , Computer Science Category",
    author: "",
    desc: "",
  },
  {
    name: "Tech Expo 2014, MNIT, Jaipur",
    date: "2014",
    info: "2nd Prize Bus Lane with Intermittent Priority, Civil Category",
    author: "",
    desc: "",
  },
  {
    name: "Tech Expo 2014, MNIT, Jaipur",
    date: "2014",
    info: "2nd prize Robotic Hand (Robo-Arm) in Open Category",
    author: "",
    desc: "",
  },
  {
    name: "Miscellaneous",
    date: "2014",
    info: "Participated in Fusion 360 Hackathon, Tongji University, China",
    author: "",
    desc: "",
  },
  {
    name: "Miscellaneous",
    date: "2014",
    info: "TATA MOTORS mind rover champion.. pre placement interview to KARSH Tharyani,(2nd year)",
    author: "",
    desc: "",
  },
  {
    name: "PREVENTIVE GEAR MAINTANENCE",
    date: "2014",
    info: "Filed for Patent, Nominated for Best Innovation Award",
    author: "Team Members: Saatvik Shah, Vaibhav Jain, Sanjay Thakur",
    desc: "",
  },
  {
    name: "GridTech'13, Pragati Maidan, New Delhi",
    date: "2014",
    info: "Organized by Power Grid Corporation of India Ltd. Is an international event in which companies, colleges and institutes present their prototypes for different real-time problems Our team was awarded 3rd prize in the competition",
    author: "Team Members: Nikhil Jain, Harshit Saxena, Abhishek Gupta, Avinash Baheti, Arush Pratap Singh Rawat",
    desc: "",
  },
  {
    name: "INSPIRON",
    date: "2014",
    info: "Won Third Prize in Kshitij, IIT Kharagpur 2014",
    author: "Team Members: Devang Darode, Karsh, Bharat",
    desc: "",
  },
  {
    name: "JBiofeedback through electronic Goniometer",
    date: "2012",
    info: "Patent is sought on the concept as well as on the device. Patent application filed in July 2011 by the Malaviya National Institute of Technology, Jaipur, India, Our team was awarded 3rd prize in the competition",
    author: "Team Members: Dr. Rajesh Kumar with Alok Agrawal, Anoop Honnekeri Nagraj, Rohit Saxena",
    desc: "",
  },
  {
    name: "Smart Card based Real Time Emission Measurement and Pollution Control Enforcement",
    date: "2012",
    info: "Patent application filed in January 2012 by the Malaviya National Institute of Technology, Jaipur, India, Nominated for Best Innovation Award",
    author: "Team Members: Dr. Rajesh Kumar with Alok Agrawal, Jai Dhariwal, Nirmala Kunwar, Ritika Dhyawala",
    desc: "",
  },
  {
    name: "Analog Design Contest 2012",
    date: "2011",
    info: "Five teams took part this year and again cleared the three interim stages of the contest, Out of 5 teams, one team was selected for paper presentation for the next round at TIIEC Conference, banglore and two other teams were also selected for poster presentation at the very same. The paper has been later published in the IEEE proceedings, Banglore chapter.",
    author: "",
    desc: "",
  },
  {
    name: "Analog Design Contest 2012",
    date: "2011",
    info: "Low cost plant fertilizer dispenser aid<",
    author: "Team Members:Deenbandhu, Prince Jain, Anshul Khandelwal",
    desc: "",
  },
  {
    name: "Analog Design Contest 2012",
    date: "2011",
    info: "A portable system to prevent tyre bursting",
    author: "Team Members:Hemant Yadav, Deepank, Mayank ",
    desc: "",
  },
  {
    name: "Analog Design Contest 2012",
    date: "2011",
    info: "Home Automation",
    author: "Team Members:Himanshu, Nilesh",
    desc: "",
  },
  {
    name: "Analog Design Contest 2012",
    date: "2011",
    info: "On Line Low cost unbalance Source Identifier",
    author: "Team Members:Bhanu Pratap Singh, Abhishek Gupta, Saurabh agarwal",
    desc: "",
  },
  {
    name: "Analog Design Contest 2012",
    date: "2011",
    info: "Potable Medical Meter",
    author: "Team Members:Umang, Akhil, Dhruv",
    desc: "",
  },
  {
    name: "Paper presentation",
    date: "2011",
    info: "On Line Low cost unbalance Source Identifier",
    author: "",
    desc: "",
  },
  {
    name: "Poster Presentation",
    date: "2011",
    info: "Low cost plant fertilizer dispenser aid, A portable system to prevent tyre bursting",
    author: "",
    desc: "",
  },
  {
    name: "JUST A TOUCH",
    date: "2010",
    info: "An event organized in IIT-jodhpur during their annual technical function. Our team won First Prize in the competition",
    author: "Team Members: Bhanu Pratap Singh, Abhishek Gupta, Avinash Baheti, Nikhil Jain",
    desc: "",
  },
  {
    name: "Nexus 2009",
    date: "2009",
    info: "Nexus is the regional competition of the biggest autonomous bot competition i-NEXUS at IIT-Bombay Techfest. The task was to make two autonomous bots which can coordinate among themselves and pick the boxes placed randomly in the arena and then dispose them off at a dumping site. Our team stood 1st at the regional level",
    author: "",
    desc: "",
  },
];

const Achievements = () => {
  const images = [a1, a2, a3, a4];
  
    return(
        <div className="text-black bg-white w-screen">
          <Head>
            <link
              rel="stylesheet"
              href="https://unpkg.com/swiper/swiper-bundle.min.css"
            />
          </Head>

          <Script src="https://unpkg.com/swiper/swiper-bundle.min.js" />
          <Script src="./scripter.js" strategy="afterInteractive"/>

          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <Image
                  className="object-cover w-full"
                  src={a1}
                  alt="image"
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="object-cover w-full"
                  src={a2}
                  alt="image"
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="object-cover w-full"
                  src={a3}
                  alt="image"
                />
              </div>
              <div className="swiper-slide">
                <Image
                  className="object-cover w-full"
                  src={a4}
                  alt="image"
                />
              </div>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
          </div>

          {achievements.map((item, index) => (
            <div className="grid grid-cols-1 lg:grid-cols-2 px-12 md:px-24 lg:px-48 pb-8">
              <div key={index} className="bg-white col-span-1">
                <h1 className="text-2xl text-center font-bold pt-8">{item.name}</h1>
                <p className="pt-4 text-gray-600">{item.info}</p>
                <p className="text-gray-600">{item.author}</p>
                <hr />
            </div>
            <div className="col-span-1 text-center my-auto  px-12 md:px-24 lg:px-48">
              {item.date}
            </div>
            <hr />
            </div>
          ))}
        </div>
    )
}

export default Achievements;