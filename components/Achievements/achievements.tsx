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
    author: "Tanishk Dudi",
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
        <div className="text-black bg-white w-screen px-32">
          {achievements.map((item, index) => (
            <div className="grid grid-cols-2">
              <div key={index} className="bg-white col-span-1">
                <h1 className="text-2xl text-center font-bold pt-8">{item.name}</h1>
                <p className="pt-4 text-gray-600">{item.info}</p>
                <p className="text-gray-600">Author: {item.author}</p>
                <hr />
            </div>
            <div className="col-span-1 text-center">
              1st prize
              <br />
              {item.date}
            </div>
            <hr />
            </div>
          ))}
        </div>
    )
}

export default Achievements;