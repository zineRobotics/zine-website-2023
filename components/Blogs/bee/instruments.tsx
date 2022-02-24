import React from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import FirstImage from "../../../images/blog/bee/instruments/image5.gif";
import DoctorStrange from "../../../images/blog/bee/instruments/image9.gif";
import Soldering from "../../../images/blog/bee/instruments/image24.gif";
import SolderingIron from "../../../images/blog/bee/instruments/image10.jpg";
import Wireless from "../../../images/blog/bee/instruments/image4.png";
import Cordless from "../../../images/blog/bee/instruments/image22.png";
import WireSpool from "../../../images/blog/bee/instruments/image18.png";
import Flux from "../../../images/blog/bee/instruments/image7.jpg";
import WithoutFlux from "../../../images/blog/bee/instruments/image16.gif";
import WithFlux from "../../../images/blog/bee/instruments/image2.gif";
import Microscopic from "../../../images/blog/bee/instruments/image12.png";
import Meme from "../../../images/blog/bee/instruments/image13.png";
import BreadBoard from "../../../images/blog/bee/instruments/image19.png";
import BreadBoard1 from "../../../images/blog/bee/instruments/image3.png";
import BreadBoard2 from "../../../images/blog/bee/instruments/image11.png";
import BreadBoard3 from "../../../images/blog/bee/instruments/image17.png";
import StripBoard from "../../../images/blog/bee/instruments/image20.jpg";
import ConnectedStripBoard from "../../../images/blog/bee/instruments/image21.png";
import PCB from "../../../images/blog/bee/instruments/image8.png";
import PCBStructure from "../../../images/blog/bee/instruments/image23.png";
import Multimeter from "../../../images/blog/bee/instruments/image14.jpg";
import WorkingMultimeter from "../../../images/blog/bee/instruments/image6.gif";
import SimpleMultimeter from "../../../images/blog/bee/instruments/image15.png";
import Label from "../../../images/blog/bee/instruments/image1.png";

const Instruments = () => {
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
              <div className="pl-32 backdrop-blur-xl">
                <h1 className="text-white text-4xl font-bold">Instruments</h1>
              </div>
          </div>

          <div className="mx-32 mt-8 text-lg">
            <p className="my-8">Now we are towards the end of our blogs on the heart of robotics. In this blog you are going to learn about various instruments which you are going to use to make your little robots ready for a fight in the arena.</p>

            <div className="text-center my-8">
              <Image src={FirstImage} />
            </div>

            <p>Let's start with how to make joints.</p>

            <div className="text-center my-8">
              <Image src={DoctorStrange} />
            </div>

            <p>In electronics, joints are made with the help of a process called soldering. Let’s dive to make joints, soldering joints 😏.</p>

            <h1 className="text-3xl my-8">Soldering</h1>
            <p>Rome was not built in a day and so weren’t our exciting robots which crushed every competitor in every competition they participated in. The controlling unit of our robots consists of various electronic components and combining them magically requires an elder wand and a magical fuel which is known as “Soldering Iron” and “solder” respectively in the Geek circle.</p>

            <div className="grid grid-cols-2">
              <div className="col-span-1">
                  <p>Various components have to be joined via a conductive link and in our case, the solder does the job, it is a highly conductive material with a low melting point.</p>
                  <p>The process in which two or more items are joined together (electronic components and boards) by melting and putting a filler metal also known as solder into the joint, the filler metal having a lower melting point than the adjoining metal i.e terminals of component or Circuit board is called Soldering.</p>
              </div>
              <div className="col-span-1 text-center">
              <Image src={Soldering} />
              </div>
            </div>

            <p className="my-8">Ok, moving to what soldering iron is and what it can do?</p>

            <h1 className="text-3xl my-8">Soldering iron</h1>
            <div className="text-center my-8 mx-32">
              <Image src={SolderingIron} />
            </div>

            <p>A soldering iron is a hand tool used in soldering. It supplies heat to melt solder so that it can flow into the joint between two workpieces. A soldering iron is composed of a heated metal tip and an insulated handle. Heating is often achieved electrically, by passing an electric current (supplied through an electrical cord or battery cables) through a resistive heating element.</p>

            <p className="my-8">There are other types of solder irons available in the market rather than a simple one :</p>

            <div className="text-center my-8">
              <Image src={Wireless} />
            </div>
            <p className="text-center">Cordless solder iron</p>

            <div className="text-center my-8">
              <Image src={Cordless} />
            </div>
            <p className="text-center">Variable temperature solder iron</p>

            <h1 className="text-3xl my-8">Solder</h1>
            <div className="grid grid-cols-4">
              <div className="col-span-3">
                <p>Solder is a conductive alloy substance with a low melting point, used in the electronics industry to electrically connect components together. It is frequently used to join wires to leads of components such as switches or to join components of all kinds to a circuit board or two pieces of metals etc. For regular electronic purposes, wire made of solder which is usually an alloy of tin and lead is used for soldering. This wire is melted with the help of soldering iron and fuses with the metal that is needed to be joined. It is necessary to avoid the fumes generated by soldering as they contain residue of lead which is harmful.</p>
              </div>
              <div className="col-span-1 text-center">
              <Image src={WireSpool} />
              </div>
            </div>

            <h1 className="text-3xl my-8">Flux</h1>
            <div className="text-center my-8">
              <Image src={Flux} height={500} width={500} />
            </div>
            <p>Sometimes, the metal contacts which we wanted to solder don't get soldered properly even if we follow all steps correctly. The reason behind it is the oxides formed on the metal surface due to the reaction with compounds in air which prevents the fusion of solder and the metal surface. To get rid of this layer of oxide, flux is used. It is usually in paste form at room temperature. It removes the layer of oxide and creates a clean site of pure metal ready to get fused with solder to make a perfect joint. Flux also leaves the residue of impurity on the board which needs to be cleaned with isopropyl alcohol if your flux is water insoluble or water if your flux is water soluble . To get a clean site of metal whose surface is oxidized, flux paste is applied and little heat with the solder iron is provided for flux to work on the site.</p>

            <div className="text-center my-8">
              <Image src={WithoutFlux} />
              <br />
              <Image src={WithFlux} />
            </div>

            <p>Above is the gif showing soldering on an oxidized metal surface (top) and soldering on the same surface after applying flux (bottom).</p>

            <div className="grid grid-cols-3">
              <div className="col-span-2">
                <p>Solder wires available these days already have flux at their core to ease the work of soldering. Flux automatically cleans the area while using such solder wire making sites prepared for soldering.</p>
                <p>External flux paste of rosin and liquid flux is also available in the market.</p>
                <p className="my-16">If you’re wondering how to solder components like professionals, this video will help you.</p>
              </div>
              <div className="col-span-1">
                <Image src={Microscopic} />
              </div>
            </div>

            <div className="text-center my-8 mx-32">
              <Image src={Meme} />
            </div>

            <h1 className="text-3xl my-8">Circuit Boards</h1>
            <p>To make our circuits more robust, portable and convenient, with ease of making. We require a base. Circuit boards are the base for circuits, a board on which we design our circuits. They are categorized in three types are as follows:</p>

            <div className="grid grid-cols-5">
              <div className="col-span-3">
                <Image src={BreadBoard} />
              </div>
              <div className="col-span-2">
                <h1 className="text-2xl my-8">Breadboard</h1>
                <p>Unlike the ones we would be making, we aren’t robots so we’re susceptible to make mistakes. Taking all the components we “think” we require and straightaway soldering them according to the way we “presume” could be a risky affair, and making mistakes at that stage would result in sacrificing several important and sometimes valuable components, so we tend to make a prototype and test our circuit design and functioning before permanently soldering them together. To make such prototypes, we tend to use a breadboard.</p>
              </div>
            </div>

            <p>A breadboard refers to a solder-free, plug-and-play platform allowing for speedy insertion and removal of electrical components in circuit-building applications. The breadboard has strips of metal underneath the board and connects the holes on the top of the board. The metal strips are laid out as shown below. Note that the top and bottom rows of holes are connected horizontally and split in the middle while the remaining holes are connected vertically.</p>

            <div className="grid grid-cols-2 my-8">
              <div className="col-span-1 text-center">
                <Image src={BreadBoard1} />
              </div>
              <div className="col-span-1 text-center">
                <Image src={BreadBoard2} />
              </div>
            </div>

            <div className="my-8 text-center">
                <Image src={BreadBoard3} />
              </div>

            <p>This is how an IC is used on a breadboard. And above mentioned are the internal connections of a breadboard. The colored lines show the connected pins of the breadboard. As a convention, pins on the right of the red line are used for positive terminals and pins at the left of blue line are used for negative terminals. Vertical lines are called power rails due to this reason and horizontal lines are called component rails as electrical and electronic components are used on thes rails/lines.</p>
            <p>But can you figure out why there is a channel in the middle of the breadboard. Think!</p>

            <h1 className="text-2xl my-8">Stripboard</h1>
            <div className="grid grid-cols-3">
              <div className="col-span-2">
                <p>Stripboard is one of the commonly-used types of prototyping boards. These boards are intended for permanently assembling one-off circuits, especially prototypes. The board is made from an insulating material, usually a resin-bonded plastic or fiberglass. One side has parallel copper strips on it, spaced 2.54 mm apart. There are holes bored in these strips, also 2.54 mm apart. Components are placed on the other side of the board with their wires bent to pass through the holes. The wires are soldered to the copper strips, the projecting ends being cut off to make the assembly neater. Only the shiny part with copper plated strips can get soldered, the other side with no copper plating cannot be soldered so components must be inserted and soldered with care.</p>
              </div>
              <div className="col-span-1 text-center">
                <Image src={StripBoard} />
              </div>
            </div>

            <div className="grid grid-cols-5">
              <div className="col-span-2 text-center">
                <Image src={ConnectedStripBoard} />
              </div>
              <div className="col-span-3">
                <p>The strips correspond to the rows of sockets on breadboards, allowing several components to be joined together, but a strip has many more than five holes so numerous connections are possible. Using a special tool, strips can be cut into shorter lengths where it is necessary to use one strip for making several different connections. A circuit built on a stripboard has permanently soldered connections, but it is not difficult to remove a component and solder in one of a different value, or even to completely modify part of the circuit. A prototype circuit may be built and tested stage by stage.</p>
              </div>
            </div>

            <h1 className="text-2xl my-8">PCB</h1>

            <div className="grid grid-cols-3 my-8">
              <div className="col-span-2">
                <p>You must have encountered some green, red or blue colored boards inside electronic devices having shiny lines with components on them. These are the highly robust and portable circuit boards. They are PCBs or printed circuit boards. It is a board that has lines and pads that connect various points together. In the picture, there are traces that electrically connect the various connectors and components to each other. It allows signals and power to be routed between physical devices.</p>
              </div>
              <div className="col-span-1 text-center">
                <Image src={PCB} />
              </div>
            </div>

            <div className="grid grid-cols-2 my-8">
              <div className="col-span-1 text-center">
                <Image src={PCBStructure} />
              </div>
              <div className="col-span-1">
                <p>Solder makes the electrical connections between the surface of the PCB and the electronic components. Being metal, solder also serves as a strong mechanical adhesive. A PCB is printed with the help of a printing machine but the PCBs are first designed in CAD softwares like EAGLE, KiCAD, etc. and then these software aid the printing of PCBs.</p>
              </div>
            </div>

            <p className="my-8">PCB is composed of four layers usually stacked on one another as shown in left.</p>

            <p># Substrate is the very base of PCB that provides strength to the PCB and support to its components. It is usually made of fiberglass.</p>
            <p># A layer of copper is fabricated above the substrate of PCB which makes the conductive electrical paths of circuit boards. Some boards with dual side circuitry have both sides fabricated with copper layers so that components can be soldered on both sides.</p>
            <p># A solder mask is applied above the copper layer so as to prevent it from shorting from external metals and also it acts as a protective mask for copper from being damaged physically and chemically making the circuit path undisturbed.</p>
            <p># A white layer of silk screen is used to print visuals on the circuit board above the solder mask which helps the manufacturer or designer to share info about component values or placement directly via board.</p>

            <p className="my-8">So, these are the basics regarding PCBs. You’ll again encounter PCBs in near future but till then, let’s just measure the components we soldered on our board are of correct values or not coz one of the resistors lost its color code. How to measure? No worries! Just go further in the blog.</p>

            <h1 className="text-2xl my-8">Multimeter</h1>
            <p>A multimeter is an electronic measuring device. It typically measures Voltage, Current, and Resistance. Two types of multimeters available in the market are- Analog and Digital.</p>

            <div className="grid grid-cols-2 my-8">
            <div className="col-span-1 text-center">
                <Image src={Multimeter} />
              </div>
              <div className="col-span-1 text-center">
                <Image src={WorkingMultimeter} />
              </div>
            </div>

            <p>The most common and cheap multimeter you can get is the Haoyue DT830D. It can measure -</p>

            <div className="grid grid-cols-5 my-8">
              <div className="col-span-3">
                <p># AC/DC voltage</p>
                <p># DC current</p>
                <p># Resistance value</p>
                <p># Frequency of square wave</p>
                <p># hFE or forward current gain of transistor</p>
                <p># Continuity of a circuit</p>
                <p># Temperature (some other version of it can measure)</p>
              </div>
              <div className="col-span-2 text-center">
                <Image src={SimpleMultimeter} />
              </div>
            </div>

            <p className="my-8">What are the components of multimeter?</p>

            <p>Here they are-</p>
            <div className="my-8 text-center">
                <Image src={Label} />
              </div>

            <p>{`>>`} Two wire probes with different colors are provided to aid in work, they can be inserted easily in jacks provided shown above.</p>

            <p className="mt-8"># 10A jack is internally connected to a 10A max fuse and only measures utmost 10A for max 10 seconds. From convention, the red probe is connected to this jack as it signifies high potential.</p>
            <p># VΩmA jack has a fuse that allows max 200mA max, 600V AC/DC max. From convention, a red probe is used with this jack.</p>
            <p># COM is the ground jack and black probe is used with it from convention.</p>
            <p># hFE measuring jack is used to measure forward current gain of transistor. How? Follow this link.</p>

            <p className="mt-8">{`>>`} Function switch is a knob which is used to set the mode for the component whose measurement or testing we need. The arrow indicates the mode on which the multimeter is at.</p>
            <p>{`>>`} LCD is used to display the info about the component.</p>
            <p>{`>>`} These multimeters use batteries for their functioning but some versions support charging of these batteries.</p>

            <p className="mt-8">How and where to use a multimeter?</p>
            <p>Follow this(complete the link) tutorial here and get an insight of how to use it. But-</p>

            <p className="border-2 border-solid border-black px-4 my-8">What will happen if I set my multimeter to check continuity and connect the probes to each end of a resistor of 6.3Ω and a resistor of 29Ω? Will it beep for both resistors or not? And why? Do some research.</p>

            <p>Time to wrap this up now guys.</p>
            <p>I think we have our first stone of robotics “BEE Stone”...or not?🤔 Now it’s time to get “Soul(Algorithm) stone”. In the next few blogs, we will study the body of robotics, so be with us on the journey to collect all stones of robotics.</p>

            <p className="border-2 border-solid border-black px-4 my-8">Mail your assignment answers to puneet@zine.co.in and contact us in communication channel with doubts.</p>
          </div>
        </div>
    )
}

export default Instruments;