import React from "react";
import Link from "next/link";
import Image from "next/image";
import Web from "../../../images/blog/webdev/home/web.png";


const WebDev = () => {
    return (
        <div className="text-black bg-white w-screen">
          <div className="mx-auto text-center text-2xl lg:text-3xl xl:text-4xl mt-8">
            BLOGS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 mt-12 lg:mx-16 xl:mx-32">
            <div className="col-span-1 mb-8">
              <Image src={Web} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Web Development</h1>
              <p className="h-52 md:h-72 lg:h-80 xl:h-68">          Before diving into the sea of web development, we must first
          understand how the web works.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/webdev/web">Go to Blog</Link>
              </div>
            </div>
          </div>
        </div>
    )
}

export default WebDev;