import React from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import Aeroplane from "../../../images/blog/aero/image19.webp";

interface blogPosted {
  title: string; // date
  cardTitle: string; // heading
}

const blogs: blogPosted[] = [
  {
    cardTitle: "Basic Electrical and Electronics",
    title: "23 Feb",
  },
  {
    cardTitle: "Algo Pseudo",
    title: "24 Feb",
  },
  {
    cardTitle: "Basic Mechanical Engineering",
    title: "25 Feb",
  },
  {
    cardTitle: "IC-MCU and Sensors",
    title: "26 Feb",
  },
  {
    cardTitle: "Aeromodelling",
    title: "27 Feb",
  },
];

const Blogs = () => {
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-blog-bg bg-no-repeat bg-center bg-cover bg-fixed py-96">
          </div>

          {/* Timeline */}
          <div className="my-20 mx-8 lg:mx-16 xl:mx-32" style={{ }}>
            <Chrono items={blogs} mode="VERTICAL_ALTERNATING" />
          </div>

          {/* Links to blogs */}
          <div className="mx-auto text-center text-2xl lg:text-3xl xl:text-4xl">
            BLOG
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 mt-12 lg:mx-16 xl:mx-32">
            <div className="col-span-1 mb-8">
              <Image src={Aeroplane} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Aeromodelling</h1>
              <p className="h-40 lg:h-60 xl:h-40">If you have ever wondered how someone could fly, what would you think of? Wings? Propellers? But how does it work? We are here to answer that question for you. That’s what we do in aeromodelling, we design, construct and fly our airplanes.</p>
              <div className="text-right text-red-600 underline">
                <Link href="https://www.google.co.in">Go to Blog</Link>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Blogs;