import React from "react";
import Link from "next/link"
import Script from "next/script"
import Image from "next/image"
import Competition from "../../images/compet_11zon.webp"
import RandD from "../../images/research_11zon.webp"
import Workshop from "../../images/workshop_11zon.webp"

const ZineActivities = () => {
    return(
        <div className="py-8">
            <h1 className="px-12 lg:px-24 xl:px-48 pb-8 text-5xl">ZINE Activities</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 px-12 lg:px-24 xl:px-48 gap-4">
                <div className="col-span-1">
                    <Image src={Competition}/>
                    <h1 className="text-2xl py-4">Participates in various competitions</h1>
                    <p>Our team has participated and emerged victorious in various national and international robotics events for the past decade owing to the skills and commitment of our members. We firmly believe that having participated in various national and international level events has lended us valuable experience and a knack for victory competing alongside the most premiere robotics teams of India.</p>
                    <Link href="/achievements"><p className="text-sm text-right text-red-500 underline">Find Out About Achievements</p></Link>
                </div>
                <div className="col-span-1">
                    <Image src={RandD}/>
                    <h1 className="text-2xl py-4">Research and Development</h1>
                    <p>Our research falls in many domains including Artifical Intelligence, Controls and System, Gait Analysis, Human Robot Interaction, Algorithm Development and many more. Spanning all domains, ZINE Robotics has 9 patents and multiple papers in reputed IEEE Journals. ZINE has also collaborated with several hospitals for research and development.</p>
                    <Link href="/projects"><p className="text-sm text-right text-red-500 underline">Find Out About our projects</p></Link>
                </div>
                <div className="col-span-1">
                    <Image src={Workshop}/>
                    <h1 className="text-2xl py-4">Workshop</h1>
                    <p>Our team conducts a 9 day workshop that guides the incoming freshers into the field of robotics, along with lectures on various other engineering skills such as Android app development, Website Development, Ethical hacking and many basic lectures which are required to enhance your skills in Robotics. Every year our team had successfully delivered the impactful lectures and practicals to more than 300 freshers.</p>
                    <Link href="/workshop"><p className="text-sm text-right text-red-500 underline">Register for Workshop 2021</p></Link>
                </div>
            </div>
            
        </div>
    )
}
// Responsiveness done
export default ZineActivities;