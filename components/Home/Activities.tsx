import React from "react";
import Link from "next/link"
import Image from "next/image"
import compet from "../../images/compet.jpg"
import research from "../../images/research.jpg"
import workshop from "../../images/workshop.jpg"

const ZineActivities = () => {
    return(
        <div className="px-16 pb-8 pt-16 lg:px-24 xl:px-32">
            <h1 className="text-4xl text-blue-900 font-light mb-4">ZINE Activities</h1><br />
            <div className="grid grid-cols-3 gap-4">
                <div className="">
                    <Image className="rounded-lg" src={compet}/>
                    <h1 className="text-2xl pb-4 px-4">Participates in various competitions</h1>
                    <p className="px-4">Our team has participated and emerged victorious in various national and international robotics events for the past decade owing to the skills and commitment of our members. We firmly believe that having participated in various national and international level events has lended us valuable experience and a knack for victory competing alongside the most premiere robotics teams of India.</p>
                    <div className="text-xl text-center text-red-600 underline mt-4 mb-0"><Link href="">Find about our Achievements</Link></div>
                </div>
                <div className="">
                    <Image className="rounded-lg" src={research}/>
                    <h1 className="text-2xl pb-4 px-4">Research and Development</h1>
                    <p className="px-4">Our research falls in many domains including Artifical Intelligence, Controls and System, Gait Analysis, Human Robot Interaction, Algorithm Development and many more. Spanning all domains, ZINE Robotics has 9 patents and multiple papers in reputed IEEE Journals. ZINE has also collaborated with several hospitals for research and development.</p>
                    <div className="text-xl text-center text-red-600 underline mt-4 mb-0"><Link href="">Find about our Projects</Link></div>
                </div>
                <div className="">
                    <Image className="rounded-lg" src={workshop}/>
                    <h1 className="text-2xl pb-4 px-4">Workshop</h1>
                    <p className="px-4">Our team conducts a 9 day workshop that guides the incoming freshers into the field of robotics, along with lectures on various other engineering skills such as Android app development, Website Development, Ethical hacking and many basic lectures which are required to enhance your skills in Robotics. Every year our team had successfully delivered the impactful lectures and practicals to more than 300 freshers.</p>
                    <div className="text-xl text-center text-red-600 underline mt-4 mb-0"><Link href="">Register for workshop 2021</Link></div>
                </div>
            </div>
        </div>
    )
}

export default ZineActivities;