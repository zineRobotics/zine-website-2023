import React from "react";
import Link from "next/link";
import Image from "next/image";

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
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
  {
    name: "IEEE Research Paper",
    date: "November 2020",
    info: "Software Developer Epic",
    author: "",
    desc: "",
  },
];

const Achievements = () => {
    return(
        <div className="text-black bg-white w-screen px-12 md:px-24 lg:px-48">
          {achievements.map((item, index) => (
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div key={index} className="bg-white col-span-1">
                <h1 className="text-2xl text-center font-bold pt-8">{item.name}</h1>
                <p className="pt-4 text-gray-600">{item.info}</p>
                <p className="text-gray-600">{item.author}</p>
                <hr />
            </div>
            <div className="col-span-1 text-center my-auto">
              {item.date}
            </div>
            <hr />
            </div>
          ))}
        </div>
    )
}

export default Achievements;