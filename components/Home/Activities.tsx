import React from "react";
import Link from "next/link";
import Script from "next/script";

const ZineActivities = () => {
    return(
        <div className="text-center -mt-120 leading-normal tracking-normal text-indigo-400 m-6 bg-cover bg-fixed bg-body-bg">
            <div className="lg:grid lg:grid-cols-5 pb-16 rounded-lg rounded-lg 
            transform hover:bg-blue-600 transition duration-500 hover:scale-110">
                <div className="col-span-1 pl-8 -mt-24">
                <div className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 text-3xl lg:text-4xl xl:text-6xl mt-40">
                    Events
                </div>

                </div>

                <div className="col-span-4">
                    <div className="mx-60 md:mx-16 text-3xl h-48 lg:h-72 text-white rounded-lg">
                    <div className="text-sm md:text-xl lg:text-2xl xl:text-3xl pt-8 mx-8 text-center">Our team has participated and emerged victorious in various national and international robotics events for the past decade owing to the skills and commitment of our members. We firmly believe that having participated in various national and international level events has lended us valuable experience and a knack for victory competing alongside the most premiere robotics teams of India.</div>
                    </div>
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-5 pb-16 rounded-lg
            transform hover:bg-blue-600 transition duration-500 hover:scale-110">
                <div className="col-span-1 pl-8 -mt-24">
                <div className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 text-3xl lg:text-3xl xl:text-4xl mt-40">
                    Research and Development
                </div>

                </div>

                <div className="col-span-4">
                    <div className="mx-60 md:mx-16 text-3xl h-48 lg:h-72 text-white rounded-lg">
                    <div className="text-sm md:text-xl lg:text-2xl xl:text-3xl pt-8 mx-8 text-center">Our research falls in many domains including Artifical Intelligence, Controls and System, Gait Analysis, Human Robot Interaction, Algorithm Development and many more. Spanning all domains, ZINE Robotics has 9 patents and multiple papers in reputed IEEE Journals. ZINE has also collaborated with several hospitals for research and development.</div>
                    </div>
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-5 pb-16 rounded-lg
            transform hover:bg-blue-600 transition duration-500 hover:scale-110">
                <div className="col-span-1 pl-8 -mt-24">
                <div className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 text-3xl lg:text-4xl xl:text-5xl mt-40">
                    Workshop
                </div>

                </div>

                <div className="col-span-4">
                    <div className="mx-60 md:mx-16 text-3xl h-48 lg:h-72 text-white rounded-lg">
                    <div className="text-sm md:text-xl lg:text-2xl xl:text-3xl pt-8 mx-8 text-center">Our team conducts a 9 day workshop that guides the incoming freshers into the field of robotics, along with lectures on various other engineering skills such as Android app development, Website Development, Ethical hacking and many basic lectures which are required to enhance your skills in Robotics. Every year our team had successfully delivered the impactful lectures and practicals to more than 300 freshers.</div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default ZineActivities;