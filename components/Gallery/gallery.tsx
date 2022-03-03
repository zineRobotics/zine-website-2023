import React from "react";
import Link from "next/link";
import Image from "next/image";
import a1 from "../../images/gallery/1.jpg";
import a2 from "../../images/gallery/2.jpeg";
import a3 from "../../images/gallery/3.jpg";
import a4 from "../../images/gallery/4.jpg";
import a5 from "../../images/gallery/5.jpg";
import a6 from "../../images/gallery/6.jpg";
import a7 from "../../images/gallery/7.jpg";
import a8 from "../../images/gallery/8.jpg";
import a9 from "../../images/gallery/9.jpg";
import a10 from "../../images/gallery/10.jpg";
import a11 from "../../images/gallery/11.jpg";
import a12 from "../../images/gallery/12.jpg";
import a13 from "../../images/gallery/13.jpg";
import a14 from "../../images/gallery/14.jpg";
import a15 from "../../images/gallery/15.jpg";
import a16 from "../../images/gallery/16.jpg";
import a17 from "../../images/gallery/17.jpg";
import a18 from "../../images/gallery/18.jpg";
import a19 from "../../images/gallery/19.jpg";
import a20 from "../../images/gallery/20.jpg";
import a23 from "../../images/gallery/23.jpg";
import a24 from "../../images/gallery/24.jpg";
import a25 from "../../images/gallery/25.jpg";
import a26 from "../../images/gallery/26.jpg";
import a27 from "../../images/gallery/27.jpg";
import a28 from "../../images/gallery/28.jpg";
import a29 from "../../images/gallery/29.jpg";
import a30 from "../../images/gallery/30.jpg";
import a31 from "../../images/gallery/carousel/competition.jpg";
import a32 from "../../images/gallery/exo1.png";
import a33 from "../../images/gallery/exo2.jpg";
import a34 from "../../images/gallery/drdo.jpg";

const Gallery = () => {

    return(
        <section className="overflow-hidden text-gray-700">
          <h1 className="text-4xl text-center mx-auto mt-8 mb-20">PROJECTS</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 ">
            <Image src={a8} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <Image src={a9} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <Image src={a20} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <Image src={a32} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <Image src={a33} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <Image src={a34} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <video className="opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden" autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover'}}>
              <source src="/basanti.mp4"/>
            </video>
          </div>
          <h1 className="text-4xl text-center mx-auto my-20">WORKSHOP AND ORIENTATION</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 ">
            <video className="opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden" autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover'}}>
              <source src="/21.mp4"/>
            </video>
            <video className="opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden" autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover'}}>
              <source src="/22.mp4"/>
            </video>
            <Image src={a16} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <Image src={a17} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <Image src={a18} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <Image src={a19} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <Image src={a24} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <Image src={a26} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <Image src={a27} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <Image src={a28} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <Image src={a29} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <Image src={a30} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
          </div>
          <h1 className="text-4xl text-center mx-auto my-20">COMPETITIONS</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 ">
            <Image src={a1} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <Image src={a2} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <Image src={a11} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <Image src={a14} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <Image src={a31} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
          </div>
          <h1 className="text-4xl text-center mx-auto my-20">ZINE DRONE RACING</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 ">
            <Image src={a7} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <Image src={a10} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <Image src={a12} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <Image src={a13} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
            <Image src={a15} className="object-cover opacity-50 hover:opacity-100 transition duration-500 ease-in-out overflow-hidden"/>
          </div>
        </section>
    )
}

export default Gallery;