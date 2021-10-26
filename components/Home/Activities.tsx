import React from "react";
import Link from "next/link";
import Script from "next/script";

const ZineActivities = () => {
    return(
        <div className="text-black text-center -mt-120">
            {/* <Script src="./scripter.js"/> */}
            <div className="grid grid-cols-5 pb-32">
                <div className="col-span-1 pl-8 -mt-24">
                    <Link href="https://github.com/"><div className="cursor-pointer w-72 h-72 bg-purple-300 rounded-full">
                        <div className="text-6xl mt-24 text-center pt-24">Events</div>
                    </div></Link>
                </div>

                <div className="col-span-4">
                    <div className="mr-32 ml-16 text-3xl h-72 text-white rounded-lg">
                    <div className="text-3xl pt-8 mx-8 text-center">Our team has participated and emerged victorious in various national and international robotics events for the past decade owing to the skills and commitment of our members. We firmly believe that having participated in various national and international level events has lended us valuable experience and a knack for victory competing alongside the most premiere robotics teams of India.</div>
                    </div>
                </div>
            </div>

            {/* 3-D eye animation here. */}
            <div className="grid grid-cols-6">
                <div className="col-span-1">
                <div className="box mt-16">
                    <div className="eye"></div>
                    <div className="eye"></div>
                </div>
                </div>

                <div className="col-span-5">
                <div className="grid grid-cols-5 pb-32 gap-4">
                <div className="col-span-1 pl-4 -mt-8">
                    <Link href="https://github.com/"><div className="cursor-pointer w-72 h-72 bg-purple-300 rounded-full ">
                        <div className="text-4xl mt-8 text-center pt-24">Research And Development</div>
                    </div></Link>
                </div>

                <div className="col-span-4 pl-16">
                    <div className="mr-16 text-3xl h-72 text-white rounded-lg">
                    <div className="text-3xl pt-8 mx-4 text-center">Our team has participated and emerged victorious in various national and international robotics events for the past decade owing to the skills and commitment of our members. We firmly believe that having participated in various national and international level events has lended us valuable experience and a knack for victory competing alongside the most premiere robotics teams of India.</div>
                    </div>
                </div>
            </div>
                </div>

            </div>

            <div className="grid grid-cols-5 pb-32">
                <div className="col-span-1 pl-8 -mt-28">
                    <Link href="https://github.com/"><div className="cursor-pointer w-72 h-72 bg-purple-300 rounded-full">
                        <div className="text-5xl mt-32 text-center pt-24">Workshop</div>
                    </div></Link>
                </div>

                <div className="col-span-4">
                    <div className="mr-32 ml-16 text-3xl h-72 text-white rounded-lg">
                    <div className="text-3xl pt-8 mx-8 text-center">Our team has participated and emerged victorious in various national and international robotics events for the past decade owing to the skills and commitment of our members. We firmly believe that having participated in various national and international level events has lended us valuable experience and a knack for victory competing alongside the most premiere robotics teams of India.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ZineActivities;