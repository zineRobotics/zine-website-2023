import React from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import FirstImage from "../../../images/blog/bee/wires/image18.gif";
import Toden from "../../../images/blog/bee/wires/image20.png";
import SolidStranded from "../../../images/blog/bee/wires/image14.jpg";
import MemeBreadBoard from "../../../images/blog/bee/wires/image9.jpg";
import MultiCoreWires from "../../../images/blog/bee/wires/image3.png";
import VideoGames from "../../../images/blog/bee/wires/image8.gif";
import CoAxialCable from "../../../images/blog/bee/wires/image13.jpg";
import Makeup from "../../../images/blog/bee/wires/image17.gif";
import NonMetallic from "../../../images/blog/bee/wires/image4.jpg";
import FourWires from "../../../images/blog/bee/wires/image19.jpg";
import TwistedMeme from "../../../images/blog/bee/wires/image1.gif";
import TwistedCable from "../../../images/blog/bee/wires/image12.jpg";
import RibbonCable from "../../../images/blog/bee/wires/image11.jpg";
import Ofc from "../../../images/blog/bee/wires/image6.jpg";
import GlassOfc from "../../../images/blog/bee/wires/image2.gif";
import Drumroll from "../../../images/blog/bee/wires/image21.gif";
import JumperWires from "../../../images/blog/bee/wires/image16.jpg";
import Connection from "../../../images/blog/bee/wires/image15.png";
import FtoF from "../../../images/blog/bee/wires/image5.png";
import MtoM from "../../../images/blog/bee/wires/image10.png";
import MtoF from "../../../images/blog/bee/wires/image22.png";

interface blogPosted {
  title: string; // date
  cardTitle: string; // heading
}

const Wires = () => {
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
              <div className="pl-32 backdrop-blur-xl">
                <h1 className="text-white text-4xl font-bold">Wires</h1>
              </div>
          </div>

          <div className="mx-32 mt-8 text-lg">
            <div className="grid grid-cols-4">
              <div className="col-span-3">
                <p>The very first thing you would notice if you were to enter the zine lab for the first time is that there are several reels of different types of wires all around. Wires and wiring are at the very centre of BEE and robotics. They can very well be the difference between winning and losing in competitions. Proper wiring is one of the most crucial conditions for your bot to work as intended. Remember our analogy with BEE being like the heart of the human body. Well, wires are like the arteries and veins, and maybe even the nerves. Hence, as much as a small hiccup in the wiring can lead to significant consequences. On the other hand, when your wiring works perfectly it’s a feel of its own!</p>
              </div>
              <div className="col-span-1 text-center">
                <Image src={FirstImage} />
              </div>
            </div>

            <p>To ensure that we don’t get “tangled” up in wires, we must at least know some common types of wires and their uses. The very first type of wires we are going to take a look at are - Single-core wires.</p>

            <h1 className="text-3xl my-8">Single Core Wires</h1>

            <div className="grid grid-cols-5">
              <div className="col-span-3 text-center">
                <Image src={Toden} />
              </div>
              <div className="col-span-2">
                <p className="my-8">As their name suggests, single-core wires have a single conductor (usually copper or aluminium) at their core with insulation covering. They can be both solid and stranded. Solid ones have more strength, whereas stranded ones provide better flexibility.</p>
                <p>Uses of single-core wires include household appliances, computer panels and small gadgets such as power banks and USB cables. Some disadvantages of these types of wires are that they are usually sensitive to external force damage and susceptible to magnetic interference. We’ll look at how other types of wires overcome these drawbacks.</p>
              </div>
            </div>

            <div className="text-center my-8">
              <Image src={SolidStranded} />
            </div>

            <div className="grid grid-cols-2 gap-16">
              <div className="col-span-1">
                <p>PRO TIP: While making breadboard circuits, try using single-core wires for a firmer, robust and more durable circuit. But what is this breadboard !?</p>
                <p className="mb-8">Something like this?</p>
                <p>No!! But don’t worry we’ll soon get to it. For now, just keep this in mind.</p>
                <p>Now for the next type, multi-core wires.</p>
              </div>
              <div className="col-span-1 text-center">
                <Image src={MemeBreadBoard} />
              </div>
            </div>

            <h1 className="text-3xl my-8">Multi Core Wires</h1>
            <div className="grid grid-cols-4">
              <div className="col-span-1 text-center">
              <Image src={MultiCoreWires} />
              </div>
              <div className="col-span-3">
                <p className="my-8">Multicore wires on the other hand combine multiple conductors all with their own insulation into a single outer sheath of PVC or cross-linked Polyethylene. An aluminium cover is also sometimes used to provide electromagnetic shielding, overcoming a major drawback of single-core wires. Let’s now look at some basic uses.</p>

                <p>They can excellently conduct large amounts of electricity and power large machines.</p>
                <p>They are also widely used in the automobile sector.</p>

                <p className="my-8">Multi-core wires are way more durable and tensile than single-core wires. However, they lose out on flexibility and rating(because of less heat dissipation).</p>
              </div>
            </div>

            <p>Guess which kind of wires are used in connectors for your Xboxes? Yep, Multi-core wires!</p>

            <div className="text-center my-8">
              <Image src={VideoGames} />
            </div>

            <p>We have now understood the two basic types of wires. Let us further explore this lane and discuss some others.</p>

            <h1 className="text-3xl my-8">Coaxial Cable</h1>
            <p>So, what exactly is a coaxial cable? It’s really simple!</p>
            <p className="my-8">A coaxial cable has four parts as illustrated. The signal in a coaxial cable is transferred simultaneously through the inner conductor as well as the mesh. The main advantage of this being that the magnetic fields of both cancel each other, allowing this wire to be used near electronic devices and metals without interacting with them.</p>

            <div className="grid grid-cols-4">
              <div className="col-span-1">
                <Image src={CoAxialCable} />
              </div>
              <div className="col-span-3">
                <p>Coaxial cables are commonly used by cable operators, telephone companies and internet providers around the world to transmit all kinds of data and information. So as such most of what we do on the internet and watch on television, and even calling with our telephones, is made possible by these amazing wires. So the next time you surf the internet endlessly or binge your favourite show, remember to thank Olivier Heaviside, the grandfather of the modern coaxial cable.</p>
              </div>
            </div>

            <div className="text-center my-8">
                <Image src={Makeup} />
              </div>

            <h1 className="text-3xl my-8">Non-Metallic Sheathed Cable</h1>

            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <p>The next cable we have is the Non-Metallic Sheathed Cable, commonly known by its really interesting name Romex, after a popular selling brand.</p>
                <p className="my-8">So what is this “Romex”?</p>
                <p>These types of wires consist of at least two insulated conductors and a base conductor. The base conductor acts as a ground for excess charge. The other two are the ones actually used.</p>
                <p className="my-8">These types of wires consist of at least two insulated conductors and a base conductor. The base conductor acts as a ground for excess charge. The other two are the ones actually used. The colour of the insulation of a Non-metallic sheathed cable is indicative of its capacity.</p>
              </div>
              <div className="col-span-1 text-center">
              <Image src={NonMetallic} />
              </div>
            </div>

            <div className="my-8 text-center">
              <Image src={FourWires} />
            </div>

            <p>Note that ga here stands for gauge which is a measure of the wire’s diameter. As for the use, these cables are predominantly used in residential wiring. They are safer and cheaper and hence their use has bumped up in recent years.</p>

            <h1 className="text-3xl my-8">Twisted Pair Cable</h1>

            <div className="col-span-1 text-center">
              <Image src={TwistedMeme} />
            </div>

            <p>Well, it's in the name!</p>

            <div className="col-span-1 text-center">
              <Image src={TwistedCable} />
            </div>

            <p>The next type of wire is the twisted pair cable. In this type, a pair of two separately insulated conductors are wound together. The concept behind the cable is similar to that of a coaxial cable. Two wires of a pair cancel each other’s magnetic fields, making our wiring more “magnetically-compatible. Many such pairs are then insulated together with a thick layer of insulation. Singular wires of a pair are usually solid single-core wires.</p>

            <p className="my-8">Twisted pair cables are generally used in ethernet and telephone systems and some security camera systems. Their structure makes them endurable and hence they are also preferred in exterior cabling exposed to environmental elements.</p>

            <p>Onto the next one then,</p>

            <h1 className="text-3xl my-8">Ribbon Cable</h1>

            <div className="grid grid-cols-9">
              <div className="col-span-2 text-center">
              <Image src={RibbonCable} />
              </div>
              <div className="col-span-7">
                <p className="my-8">Now for the ribbon cable! In a ribbon cable, several conducting wires run parallel to each other in the same plane. The ends of a ribbon cable have a connector attached for proper use.</p>
                <p>Ribbon cables are usually used to connect internal peripherals in a computer such as hard drives and CD drives. On some older machines, they were also used for external connections.</p>
              </div>
            </div>

            <h1 className="text-3xl my-8">Optical Fibre Cable</h1>
            <div className="grid grid-cols-2">
              <div className="col-span-1 text-center">
              <Image src={Ofc} />
              </div>
              <div className="col-span-1">
                <p>The next wire we have is the Optical Fibre Cable. We are sure you must have come across the name in your JEE preparation and know the principle of working of these cables. Optical Fibre Cable is a medium of data transmission using light waves travelling along a long fibre made of glass or plastic. They are an application of the phenomenon of Total Internal Reflection, in which light moving from one medium to another …… Ummm, you know T.I.R, let’s move forward.</p>
              </div>
            </div>

            <div className="text-center my-8">
              <Image src={GlassOfc} />
            </div>

            <p>The Optical Fibre Cable has a wide range of applications. They can transfer large amounts of data at high speed over long distances. They are beginning to replace traditional telephone wires and enable clearer, faster connections. Optical fibre communication is secure and free from external interferences, and its use is increasing in the military and aerospace fields as well as in medicine and surgical research.</p>

            <p className="my-8">The next type of wires are probably the most important of all we have learnt so far. You will be using these wires all the time and their connections will trouble you the most. Taking our human analogy even further, these are the cranial nerves connecting the brain to various parts of the body.</p>

            <p>Drumroll please!</p>

            <div className="text-center my-8">
              <Image src={Drumroll} />
            </div>

            <p>Enter Jumper wires.</p>

            <h1 className="text-3xl my-8">Jumper Wires</h1>
            <div className="grid grid-cols-9">
              <div className="col-span-2 text-center">
              <Image src={JumperWires} />
              </div>
              <div className="col-span-7">
                <p>Jumper wires are quite simple really. They are wires with connector pins on both sides. So what makes them so important? Let’s have a look.</p>
                <div className="grid grid-cols-2">
                  <div className="col-span-1">
                    <p>They connect the brain of the robot to its various parts. What brain!?, you might ask. The answer to that question is so vast, it is the topic of another upcoming blog.</p>
                  </div>
                  <div className="col-span-1 text-center">
                    <Image src={Connection} />
                  </div>
                </div>
              </div>
            </div>
            <p>For the time being, understand that the blue board on the left side is the brain of the robot that decides what the robot will do, how it will react to what event. The board on the right side is called a breadboard(again, more on breadboards later) , it is a part of the robot and jumpers connect it to the brain. Jumpers are essential to prototyping your robot. In Spite of their vital applications, it doesn’t get much simpler than jumper wires. They are of three basic types illustrated below:-</p>

            <h1 className="text-2xl my-8">Female to Female</h1>
            <div className="text-center my-8">
              <Image src={FtoF} />
            </div>

            <h1 className="text-2xl my-8">Male to Male</h1>
            <div className="text-center my-8">
              <Image src={MtoM} />
            </div>

            <h1 className="text-2xl my-8">Male to Female</h1>
            <div className="text-center my-8">
              <Image src={MtoF} />
            </div>

            <p>Their applications will get more apparent in the upcoming blogs.</p>

            <p className="my-8">With this, we come to the end of this section. Hope that now you wouldn’t tangle up and fall facing various kinds of wires.</p>
          </div>
        </div>
    )
}

export default Wires;