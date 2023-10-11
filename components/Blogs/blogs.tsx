import React from "react";
import Link from "next/link";
import Image from "next/image";
import Aeroplane from "../../images/blog/aero/image19.webp";
import Algo from "../../images/blog/algo/algo.webp";
import Ee from "../../images/blog/bee/ee.webp";
import Bme from "../../images/blog/bme/image30.webp";
import Mcu from "../../images/blog/ic-mcu/mc.webp";
import ML from "../../images/blog/ml/ml.jpg";
import WebDev from "../../images/blog/webdev/webdev.jpg";


const Blogs = () => {
    return(
        <div className="text-black bg-white w-screen mb-16">
          <div className="mx-auto text-center text-2xl lg:text-3xl xl:text-4xl mt-8">
            BLOGS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 mt-12 lg:mx-16 xl:mx-32">
            <div className="col-span-1 shadow-xl p-4 flex flex-col">
              <Image src={Ee} className="" width={2000} height={1200} />
              <h1 className="text-xl my-4 px-2">Basic Electrical and Electronics</h1>
              <p className="flex-1 px-2">Do you know the difference between electrical and electronics? Why do we need two separate fields in which both of them have to deal with electricity? Ever wondered why do we have electrical engineering and electronics engineering as separate branches in college? Think! Try a little harder! Still not getting it? No problemo.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/bee">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1 shadow-xl p-4 flex flex-col">
              <Image src={Algo} className="" width={2000} height={1200} />
              <h1 className="text-xl my-4 px-2">Algo Pseudo</h1>
              <p className="flex-1 px-2">Are you one of those who feel programming languages and algorithms are extremely hard to understand and you have no clue where to even start? Or you have a bit of an idea about them and want to expand your knowledge? Then you are in the right place.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/algo">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1 shadow-xl p-4 flex flex-col">
              <Image src={Bme} className="" width={2000} height={1200} />
              <h1 className="text-xl my-4 px-2">BME</h1>
              <p className="flex-1 px-2">But, before robots are capable of doing tasks, they have to be created! Engineers get to take the credit for designing the robots to do what they are programmed for. As all types of engineers work together, they build a complete robot.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/bme">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1 shadow-xl p-4 flex flex-col">
              <Image src={Mcu} className="" width={2000} height={1200} />
              <h1 className="text-xl my-4 px-2">IC-MCU</h1>
              <p className="flex-1 px-2">How is this journey of yours with robotics going? Awesome? Good! Shall we proceed? Ok! We’ll first learn about the ICs and then we shall continue with the processing unit in which you’ll get along with microcontrollers and the genius saints sitting inside the core of computers.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/ic-mcu">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1 shadow-xl p-4 flex flex-col">
              <Image src={Aeroplane} className="" width={2000} height={1200} />
              <h1 className="text-xl my-4 px-2">Aeromodelling</h1>
              <p className="flex-1 px-2">If you have ever wondered how someone could fly, what would you think of? Wings? Propellers? But how does it work? We are here to answer that question for you. That’s what we do in aeromodelling, we design, construct and fly our airplanes.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/aero">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1 shadow-xl p-4 flex flex-col">
              <Image src={WebDev} className="" width={2000} height={1200} />
              <h1 className="text-xl my-4 px-2">Web Development</h1>
              <p className="flex-1 px-2">Before diving into the sea of web development, we must first understand how the web works.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/webdev">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1 shadow-xl p-4 flex flex-col">
              <Image src={ML} className="" width={2000} height={1200} />
              <h1 className="text-xl my-4 px-2">Machine Learning</h1>
              <p className="flex-1 px-2">Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn,</p>
              <div className="text-right text-red-600 underline">
                <Link href="https://docs.google.com/document/d/e/2PACX-1vRX9SdN78Zl2ws_c74cqArk5Tu1yo6DQOMFiJrWZc6weyL-tYJnlOJT_EFxrjIQ4LoIGzDRRJEGdvXp/pub">Go to Blog</Link>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Blogs;