import React from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import Aeroplane from "../../images/blog/aero/image19.webp";
import Algo from "../../images/blog/algo/algo.webp";
import Ee from "../../images/blog/bee/ee.webp";
import Bme from "../../images/blog/bme/image30.webp";
import Mcu from "../../images/blog/ic-mcu/mc.webp";

const Blogs = () => {
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-blog-bg bg-no-repeat bg-center bg-cover bg-fixed py-96">
          </div>

          {/* Links to blogs */}
          <div className="mx-auto text-center text-2xl lg:text-3xl xl:text-4xl mt-8">
            BLOGS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 mt-12 lg:mx-16 xl:mx-32">
            <div className="col-span-1">
              <Image src={Ee} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Basic Electrical and Electronics</h1>
              <p className="h-40 xl:h-40">Do you know the difference between electrical and electronics? Why do we need two separate fields in which both of them have to deal with electricity? Ever wondered why do we have electrical engineering and electronics engineering as separate branches in college? Think! Try a little harder! Still not getting it? No problemo.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/bee">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1">
              <Image src={Algo} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Algo Pseudo</h1>
              <p className="h-40 lg:h-60 xl:h-40">Are you one of those who feel programming languages and algorithms are extremely hard to understand and you have no clue where to even start? Or you have a bit of an idea about them and want to expand your knowledge? Then you are in the right place.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/algo">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1">
              <Image src={Bme} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">BME</h1>
              <p className="h-40 lg:h-60 xl:h-40">But, before robots are capable of doing tasks, they have to be created! Engineers get to take the credit for designing the robots to do what they are programmed for. As all types of engineers work together, they build a complete robot.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/bme">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1">
              <Image src={Mcu} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">IC-MCU</h1>
              <p className="h-40 lg:h-60 xl:h-40">How is this journey of yours with robotics going? Awesome? Good! Shall we proceed? Ok! We’ll first learn about the ICs and then we shall continue with the processing unit in which you’ll get along with microcontrollers and the genius saints sitting inside the core of computers.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/icmcu">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1 mb-8">
              <Image src={Aeroplane} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Aeromodelling</h1>
              <p className="h-40 lg:h-60 xl:h-40">If you have ever wondered how someone could fly, what would you think of? Wings? Propellers? But how does it work? We are here to answer that question for you. That’s what we do in aeromodelling, we design, construct and fly our airplanes.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/aero">Go to Blog</Link>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Blogs;