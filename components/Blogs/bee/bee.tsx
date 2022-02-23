import React from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import Battery from "../../../images/blog/bee/home/battery.jpg";
import BeeIntro from "../../../images/blog/bee/home/beeintro.jpg";
import CircuitElements from "../../../images/blog/bee/home/circuitelements.jpg";
import Diode from "../../../images/blog/bee/home/diode.png";
import Instruments from "../../../images/blog/bee/home/instruments.jpg";
import Switch from "../../../images/blog/bee/home/switch.jpg";
import Transformer from "../../../images/blog/bee/home/transformer.jpg";
import Transistor from "../../../images/blog/bee/home/transistor.jpg";
import Wires from "../../../images/blog/bee/home/wires.jpg";

const Bee = () => {
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-blog-bg bg-no-repeat bg-center bg-cover bg-fixed py-96">
          </div>

          {/* Links to blogs */}
          <div className="mx-auto text-center text-2xl lg:text-3xl xl:text-4xl mt-8">
            BLOGS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 mt-12 lg:mx-16 xl:mx-32">
            <div className="col-span-1 mb-8">
              <Image src={BeeIntro} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Introduction</h1>
              <p className="h-52 md:h-72 lg:h-80 xl:h-68">Robotics is the intersection of science, engineering, and technology that produces machines, called robots, that substitute for (or replicate) human actions. Simple isn't it. Earlier, it was meant to be used in the manufacturing sector only. Now, people are using robots at home, in hospitals, airports, and many more. So, let's begin our journey.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/bee/intro">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1 mb-8">
              <Image src={CircuitElements} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Circuit Elements</h1>
              <p className="h-52 md:h-72 lg:h-80 xl:h-68">And the journey starts😀. Let’s start with some conceptual things. So in this blog, we will study circuit elements. What are these and where do we see them in daily life and robotics?🤔 But before starting with circuit elements, do you know what a circuit is? A circuit is an arrangement of individual electronic components, such as resistors, transistors, capacitors, inductors, and diodes, connected by conductive wires or traces through which electric current can flow.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/bee/circuit-ele">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1 mb-8">
              <Image src={Diode} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Diodes</h1>
              <p className="h-52 md:h-72 lg:h-80 xl:h-68">In simple words, diode or di-ode or di-electrode is an electronic component that conducts current primarily in one direction; it has low (ideally zero) resistance in one direction, and high (ideally infinite) resistance in the other. A semiconductor diode, the most commonly used type today, is a crystalline piece of semiconductor material with a PN-junction connected to two electrical terminals.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/bee/diodes">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1 mb-8">
              <Image src={Switch} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Switch and Relays</h1>
              <p className="h-40 md:h-56 lg:h-64 xl:h-56">Yes! Switches! It seems such a normal thing. We use a switch to turn on or off any electrical device. Look at that power board in front of you. Yes, It is a switch. But is this it?🙄Pffff….No, obviously. And these are too. There’s much more to it. Let’s start scratching this simple topic and see what all magic it can do. A Switch is a device that breaks(sometimes diverts🙄) the flow of current in a circuit.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/bee/switches">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1 mb-8">
              <Image src={Transistor} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Transistors</h1>
              <p className="h-40 md:h-56 lg:h-64 xl:h-56">Imagine a machine that is as big as MNIT’s VLTC and all you could use it for is to send a text message to your friend , sounds absurd, right? Well, that would be the case if transistors weren’t invented, so before you proceed further reading this blog on your phone/laptop don’t forget to thank the noble scientists at Bell Labs who invented it. Well, what exactly is a transistor?</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/bee/transistors">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1 mb-8">
              <Image src={Transformer} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Transformers</h1>
              <p className="h-40 md:h-56 lg:h-64 xl:h-56">Remember those huge brown boxes with lots of wiring, that you were always warned not to go near. That was a transformer! These transformers form a crucial part of most circuits from the smallest ones to even power grids. They range in size from RF transformers being less than a cubic centimetre in volume, to units weighing hundreds of tons</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/bee/transformers">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1 mb-8">
              <Image src={Wires} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Wires</h1>
              <p className="h-32 md:h-44 lg:h-56 xl:h-48">The very first thing you would notice if you were to enter the zine lab for the first time is that there are several reels of different types of wires all around. Wires and wiring are at the very centre of BEE and robotics. They can very well be the difference between winning and losing in competitions.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/bee/wires">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1 mb-8">
              <Image src={Battery} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Batteries</h1>
              <p className="h-32 md:h-44 lg:h-56 xl:h-48">If you are getting interested in robotics, you are going to need a lot of different types of batteries for different uses, you'll need to know how to use them and understand the various ratings and specs. There are primary, secondary batteries and much more. Why do we need batteries?</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/bee/batteries">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1 mb-8">
              <Image src={Instruments} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Instruments</h1>
              <p className="h-32 md:h-44 lg:h-56 xl:h-48">Now we are towards the end of our blogs on the heart of robotics. In this blog you are going to learn about various instruments which you are going to use to make your little robots ready for a fight in the arena. In electronics, joints are made with the help of a process called soldering.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/bee/instruments">Go to Blog</Link>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Bee;