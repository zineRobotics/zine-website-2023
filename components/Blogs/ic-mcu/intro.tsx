import React from "react";
import Image from "next/image";
import clock from "../../../images/blog/ic-mcu/intro/image1.gif";
import Mobile from "../../../images/blog/ic-mcu/intro/image2.gif";
import Mouse from "../../../images/blog/ic-mcu/intro/image3.gif";
import Aurdino from "../../../images/blog/ic-mcu/intro/image4.png";
import ic1 from "../../../images/blog/ic-mcu/intro/image5.png";
import ic2 from "../../../images/blog/ic-mcu/intro/image6.jpg";
import Atmega from "../../../images/blog/ic-mcu/intro/image7.png";
import M8420 from "../../../images/blog/ic-mcu/intro/image8.jpg";
import Circuit from "../../../images/blog/ic-mcu/intro/image9.gif";
import Superhero from "../../../images/blog/ic-mcu/intro/image10.gif";
import Circuit1 from "../../../images/blog/ic-mcu/intro/image11.png";
import ic from "../../../images/blog/ic-mcu/intro/image12.jpg";



const Intro = () => {
    return (
        <div className="text-black bg-white w-screen">
            <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
                <div className="pl-32 backdrop-blur-xl">
                    <h1 className="text-white text-4xl font-bold">Introduction</h1>
                </div>
            </div>

            <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
                <p>Oh! Hello there. How is this journey of yours with robotics going? Awesome? Good! Shall we proceed? Ok! But before proceeding, if I ask you how a digital watch calculates time so precisely every time. If you try to count up to a minute, it all gets messed up sometimes. </p>
                <div className="my-8 text-center">
                    <Image src={clock} />
                </div>
                <p>What lies in the core of your computer? How does it know that 2+2 is equal to 4? Who is that genius saint sitting at the center, doing all the work, and how on earth can a phone recognize a fingerprint within a sec! Isn’t it impossible for a human being to figure out a fingerprint with a touch unless he is a superhuman or terminator? </p>
                <div className="my-8 text-center">
                    <Image src={Mobile} />
                </div>

                <p className="mt-8">No idea? Getting curious? Not to worry, we have got you covered! We’re going to unfold some concepts which will solve all these doubts.</p>
                <p>We’ll first introduce the ICs and then we’ll dive deep into what types of ICs we have, how they are classified, how an IC looks, and pretty much everything necessary for you to know.</p>
                <p>Then we shall continue with the processing unit in which you’ll get along with microcontrollers and the genius saints sitting inside the core of computers.  </p>
                <p>And then, we’ll descend into the sensors, their types, classification, etc.</p>
                <p>So, starting with ICs. Any idea where to find them?</p>
                <p>In your phone? Yes!</p>
                <p>In cameras? Sí!</p>
                <p>But can an IC be present in a mouse? Absolutely! There too.</p>
                <p>P.S.- an electronic Mouse</p>
                <div className="my-8 text-center">
                    <Image src={Mouse} />
                </div>

                <p className="mt-8">But, what are ICs? </p>
                <p>For a layman, those little black chips you see in most of the circuit boards are ICs...but let’s dive a little deeper.</p>
                <div className="my-8 text-center">
                    <Image src={Aurdino} />
                </div>
                <div className="my-8 text-center">
                    <Image src={ic1} />
                </div>
                <div className="my-8 text-center">
                    <Image src={ic2} />
                </div>
                <div className="my-8 text-center">
                    <Image src={Atmega} />
                </div>
                <div className="my-8 text-center">
                    <Image src={M8420} />
                </div>
                <p>This is what ICs looks like. </p>
                <p>So, ICs or Integrated Circuits are the building blocks of most electronic devices. They are the basis of modern electronics, hearts, and brains of most of the electronic circuits. Without ICs most of electronic devices are meaningless 🤷‍♂️.</p>
                <p>You have studied circuits <a className="text-blue-600 underline" href="https://docs.google.com/document/d/1KM9s8IOHqSPjekVtNrmfPuPmwZfLFuL4CkbSk_w8uOE/edit">here</a>  Let’s move one step forward and know the types of circuits first in which you’ll understand clearly about ICs:</p>

                <h1>Discrete circuit  </h1>
                <p>It is a circuit built using components such as transistors, resistors, capacitors, etc. that are fabricated separately and are connected using conducting wires on a circuit board or a <a className="text-blue-600 underline" href="https://www.elprocus.com/different-types-printed-circuit-boards/"> printed circuit board</a> , or a <a className="text-blue-600 underline" href="https://docs.google.com/document/d/1l5pxSWxeyuE371x4Ok4W4LLnEHO-bS6YzTHthfKYBME/edit#bookmark=id.3uo9xlnh2ohz">breadboard</a>.</p>
                <div className="my-8 text-center">
                    <Image src={Circuit} />
                </div>
                <p className="my-8 text-center">A simple discrete circuit we created earlier</p>
                <br></br>
                <p>So, we see we have a working circuit from discrete components, right? Then why are integrated circuits needed in the first place? Can you think of some reasons for yourself? If you figured it out, you might want to write it somewhere. We will discuss them after the integrated circuits. So, let us see what an integrated circuit is.</p>
                <h1>Integrated Circuits</h1>
                <p>In simple words, an IC is a collection of several tiny electronic components (resistors, capacitors, etc.), all stuffed on a semiconductor wafer and connected to achieve a common goal (e.g. we have an IC for the regulation of voltage. Several tiny electronic components are fabricated inside the IC to achieve a common goal of regulation of voltage). But the surprising part is that the components in an IC are microscopic and range in millions. What these small things can do is pretty astonishing too. </p>

                <p>They can function as</p>
                <ul className="list-disc list-inside">
                    <li>Logic Gates (74xx series) - an electronic circuit that relates input and output via certain logic.</li>
                    <li>Timer (IC 555) - helps in calculating the time</li>
                    <li>Voltage Regulator (IC 7805) -  helps maintain the voltage of a power source within acceptable limits</li>
                    <div className="my-8 text-center">
                        <Image src={Superhero} />
                    </div>
                    <li>Motors Driver (IC L293D, L298N) - amplifies the input voltage and current to drive motors and much more, we’ll talk in detail later</li>
                    <li>Microcontrollers(ATmega328)*</li>
                    <li>Microprocessors(Intel 8085)*</li>
                </ul>

                <p>*will talk about these later</p>

                <p>We discussed discrete circuits and integrated circuits but why are integrated circuits required if we already have discrete circuits?</p>
                <p>So here is a difference table between discrete and integrated circuits -</p>
                <div className="relative overflow-x-auto">

                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">Discrete Circuits</th>
                        <th scope="col" className="px-6 py-3">Integrated Circuits</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4">Takes more space for a number of components.</td>
                        <td className="px-6 py-4">Takes less space and can fit a number of components inside a single pack.</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">Can handle high power input and output..</td>
                        <td className="px-6 py-4">THigh power input and output might cause damage.</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">Can change components of discrete circuits which in turn helps in repairing and changing parameters of the circuit.</td>
                        <td className="px-6 py-4">Once fabricated, components of ICs cannot be changed or repaired. Whole IC has to be replaced.</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">Assembling and wiring of separate components will take time and it usually occupies space that makes the circuitry bulky. If the circuit is complex, it only introduces more mess.</td>
                        <td className="px-6 py-4">Complex circuits are fabricated within a single chip. Therefore, the designing a complex circuit will be simplified into a single chip which is done in the case of ICs..</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">Uses point contacts or soldering to make connections with wires and components which is unreliable and bad soldering can also introduce external resistance to circuits.</td>
                        <td className="px-6 py-4">Circuits are incorporated on a single chip making it with fewer connections. Thus, the soldering process will be done only on the significant terminals of ICs to introduce it to the circuit thus increasing reliability.</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">Power consumption is increased by factors such as resistance of wires, resistance due to bad solder, the introduction of parasitic capacitance, etc..</td>
                        <td className="px-6 py-4">Low power is consumed due to the use of silicon wafers which decreases the factor of resistance and parasitic capacitances.</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4">Example-
                            <div className="my-8 text-center">
                                <Image src={Circuit1} />
                            </div>
                            A counter that counts up to 10 where 1 is represented by LED on and 0 is represented by LED off and the binary state has to be considered from right to left, rightmost being 20. </td>
                        <td className="px-6 py-4">Example-
                            <div className="my-8 text-center">
                                <Image src={ic} />
                            </div>
                            An IC 74LS90 is used for counters.
                            Here, the convention is the same as in a discrete circuit for the same as shown in the left.
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
                
                <h1>Importance of ICs in Robotics</h1>
                <p>We now know what ICs are but why are ICs important in robotics? Because ICs interact with electric current to achieve different tasks despite their small size that is all we need to handle electronic data in robotics and other electronic devices. Some ICs are used for basic decision-making in robots and some are used in circuits for voltage regulation, amplification, etc. Some of them are used for calculating time (which we’ll study in detail in 555 timer IC later) while some are used for handling heavy processing tasks for robots.</p>
                <p>ICs not only revolutionized the field of robotics but also innovated electronics to great extent.</p>
            </div>
        </div>
    )
}

export default Intro;