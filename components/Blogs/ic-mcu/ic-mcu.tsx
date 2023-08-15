import React from "react";
import Link from "next/link";
import Image from "next/image";
import Intro from "../../../images/blog/ic-mcu/home/intro.png";
import More from "../../../images/blog/ic-mcu/home/more.png";
import Microcontroller from "../../../images/blog/ic-mcu/home/microcontroller.png";
import Microprocessor from "../../../images/blog/ic-mcu/home/microprocessor.jpg";


const ICMCU = () => {
    return (
        <div className="text-black bg-white w-screen">
          <div className="mx-auto text-center text-2xl lg:text-3xl xl:text-4xl mt-8">
            BLOGS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 mt-12 lg:mx-16 xl:mx-32">
            <div className="col-span-1 mb-8">
              <Image src={Intro} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Introduction</h1>
              <p className="h-52 md:h-72 lg:h-80 xl:h-68">The first physical build of putting those parts together to be able to complete the task is your prototype. A prototype helps you find out the factors you may have missed while working on paper and pushes development ahead as you can learn more about the project while in testing.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/ic-mcu/intro">Go to Blog</Link>
              </div>
            </div>

            <div className="col-span-1 mb-8">
              <Image src={More} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">More about ICs (Integrated Circuits)</h1>
              <p className="h-52 md:h-72 lg:h-80 xl:h-68">The first physical build of putting those parts together to be able to complete the task is your prototype. A prototype helps you find out the factors you may have missed while working on paper and pushes development ahead as you can learn more about the project while in testing.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/ic-mcu/more">Go to Blog</Link>
              </div>
            </div>

            <div className="col-span-1 mb-8">
              <Image src={Microcontroller} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Microcontroller</h1>
              <p className="h-52 md:h-72 lg:h-80 xl:h-68">          A microcontroller is a small and low-cost microcomputer, which is
          designed to perform the specific tasks of embedded systems like
          displaying microwave information, receiving remote signals, etc.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/ic-mcu/microcontroller">Go to Blog</Link>
              </div>
            </div>

            <div className="col-span-1 mb-8">
              <Image src={Microprocessor} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Microprocessor</h1>
              <p className="h-52 md:h-72 lg:h-80 xl:h-68">This is the genius saint sitting in your computer and mobiles. It is also considered as a computer brain, but also it is an incredible calculator!</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/ic-mcu/microprocessor">Go to Blog</Link>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ICMCU;