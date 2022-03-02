import React from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "../../images/gallery/1.jpg"
import img2 from "../../images/gallery/2.jpg"
import img3 from "../../images/gallery/3.jpg"
import img4 from "../../images/gallery/4.jpg"
import img5 from "../../images/gallery/image1.jpg"
import img6 from "../../images/gallery/image4.jpg"

const Gallery = () => {

    return(
        <section className="overflow-hidden text-gray-700">
  <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
    <div className="flex flex-wrap -m-1 md:-m-2">
      <div className="flex flex-wrap w-1/2">
        <div className="w-1/2 p-1 md:p-2">
          <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={img1} />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <Image alt="gallery" className="block object-cover object-center w-full h-80 rounded-lg"
            src={img2} />
        </div>
        <div className="w-full p-1 md:p-2">
          <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={img3} />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="w-full p-1 md:p-2">
          <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={img4} />
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={img5} /> 
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <Image alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={img6} />
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Gallery;