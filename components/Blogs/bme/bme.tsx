import React from "react";
import Link from "next/link";
import Image from "next/image";
import Intro from "../../../images/blog/bme/home/intro.gif";
import Gears from "../../../images/blog/bme/home/gears.gif";
import Wheels from "../../../images/blog/bme/home/wheels.jpeg";
import DriveSystems from "../../../images/blog/bme/home/drive-systems.gif";
import Actuators from "../../../images/blog/bme/home/actuators.png";
import Prototyping from "../../../images/blog/bme/home/prototyping.gif";



const Bme = () => {
    return (
        <div className="text-black bg-white w-screen">
          <div className="mx-auto text-center text-2xl lg:text-3xl xl:text-4xl mt-8">
            BLOGS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 mt-12 lg:mx-16 xl:mx-32">
            <div className="col-span-1 mb-8">
              <Image src={Intro} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Introduction</h1>
              <p className="h-52 md:h-72 lg:h-80 xl:h-68">Mechanical Engg. is an integral part of robotics. It ranges from knowing why triangles are used in cardboard layers to finding a Planet’s surface gravity and terrain characteristics; to designing a Space rover’s drive system. Because the whole world isn’t a simulation, we need a device which can interact with the environment and are called bots. Here we give you a basic introduction to Mechanical Engg. for robotics to jumpstart your curiosity.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/bme/intro">Go to Blog</Link>
              </div>
            </div>

            <div className="col-span-1 mb-8">
              <Image src={Gears} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Gears</h1>
              <p className="h-52 md:h-72 lg:h-80 xl:h-68">Gears are toothed, mechanical transmission elements used to transfer motion and power between machine components.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/bme/gears">Go to Blog</Link>
              </div>
            </div>

            <div className="col-span-1 mb-8">
              <Image src={Wheels} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Wheels</h1>
              <p className="h-52 md:h-72 lg:h-80 xl:h-68">Lets take a look at different types of wheels that we use</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/bme/wheels">Go to Blog</Link>
              </div>
            </div>

            <div className="col-span-1 mb-8">
              <Image src={DriveSystems} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Drive Systems</h1>
              <p className="h-52 md:h-72 lg:h-80 xl:h-68">The drive system determines the speed of the arm movement, the strength of the robot, dynamic performance, and, to some extent, the kinds of application</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/bme/drive-systems">Go to Blog</Link>
              </div>
            </div>

            <div className="col-span-1 mb-8">
              <Image src={Actuators} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Actuators</h1>
              <p className="h-52 md:h-72 lg:h-80 xl:h-68">Actuators are used for moving the robot’s joints (such as picking up a block and placing it somewhere else). To be more specific, they require a control signal and a source of energy to provide a mechanical output.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/bme/actuators">Go to Blog</Link>
              </div>
            </div>

            <div className="col-span-1 mb-8">
              <Image src={Prototyping} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Prototyping</h1>
              <p className="h-52 md:h-72 lg:h-80 xl:h-68">The first physical build of putting those parts together to be able to complete the task is your prototype. A prototype helps you find out the factors you may have missed while working on paper and pushes development ahead as you can learn more about the project while in testing.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/bme/prototyping">Go to Blog</Link>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Bme;