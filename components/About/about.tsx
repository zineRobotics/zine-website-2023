import React from "react";
import Link from "next/link";
import Image from "next/image";
import RajeshSir from "../../images/rajeshsir.jpg"

const About = () => {
    return(
        <div className="text-black bg-white w-screen px-12 md:px-24 lg:px-48">
            <h1 className="text-2xl pt-8">About ZINE</h1>
            <p className="pt-8">Zine is a creative group of engineering undergraduates of Malaviya National Institute of Technology, Jaipur who are together to learn, improve and apply their technical skills to help foster the growth of society and India in the field of technology by utilising their engineering skills to work on real time problems. It is comprised of students from various disciplines working under guidance of Dr. Rajesh Kumar from Electrical Engineering department and various alumni working in reputed firms and doing research in Universities in India and abroad. Zine has been the only active robotics and research group of MNIT for the last 11 years, since its foundation.</p>

            <h1 className="text-3xl pt-16">Our Background and Mission</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 pt-8">
              <div>
                <h1 className="text-2xl">What We Do</h1>
                <p className="pt-8">We regularly participate in various national and international events related to a multitude of fields, publish research articles in reputed publications like IEEE Journals and provide services to industries like consultacy related to automation through embedded system based solution for Micro, Small, Medium scale enterprises(MSME).</p>
              </div>

              <div>
                <h1 className="text-2xl">Why We Do It</h1>
                <p className="pt-8">We believe in using our knowledge for the betterment of the society and the student community by providing ambitious people a platform to develop their ideas in the fields of Product development, Machine Learning, Software Development and Robotics.</p>
              </div>
              <div>
                <h1 className="text-2xl">Who We Are</h1>
                <p className="pt-8">Zine is a creative group of engineering undergraduates of Malaviya National Institute of Technology, Jaipur. Presently our team comprises of around 30 undergraduates from Electrical Engineering, Mechanical Engineering, Electronics and Communication Engineering and Computer Engineering.</p>
              </div>
            </div>
            <div className="grid grid-cols-5 pt-8">
              <div><Image src={RajeshSir}/></div>
            </div>
        </div>
    )
}

export default About;