import React from "react";
import Link from "next/link";
import Image from "next/image";


const ICMCU = () => {
    return (
        <div className="text-black bg-white w-screen">
          <div className="bg-blog-bg bg-no-repeat bg-center bg-cover bg-fixed py-96">
          </div>

          {/* Links to blogs */}
          <div className="mx-auto text-center text-2xl lg:text-3xl xl:text-4xl mt-8">
            BLOGS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 mt-12 lg:mx-16 xl:mx-32">
            <div className="col-span-1 mb-8">
              <Image src={""} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Introduction</h1>
              <p className="h-52 md:h-72 lg:h-80 xl:h-68">The first physical build of putting those parts together to be able to complete the task is your prototype. A prototype helps you find out the factors you may have missed while working on paper and pushes development ahead as you can learn more about the project while in testing.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/ic-mcu/intro">Go to Blog</Link>
              </div>
            </div>

            <div className="col-span-1 mb-8">
              <Image src={""} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">More about ICs (Integrated Circuits)</h1>
              <p className="h-52 md:h-72 lg:h-80 xl:h-68">The first physical build of putting those parts together to be able to complete the task is your prototype. A prototype helps you find out the factors you may have missed while working on paper and pushes development ahead as you can learn more about the project while in testing.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/ic-mcu/more">Go to Blog</Link>
              </div>
            </div>

            <div className="col-span-1 mb-8">
              <Image src={""} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4"></h1>
              <p className="h-52 md:h-72 lg:h-80 xl:h-68"></p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/ic-mcu/microcontroller">Go to Blog</Link>
              </div>
            </div>

            <div className="col-span-1 mb-8">
              <Image src={""} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4"></h1>
              <p className="h-52 md:h-72 lg:h-80 xl:h-68"></p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/ic-mcu/microprocessor">Go to Blog</Link>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ICMCU;