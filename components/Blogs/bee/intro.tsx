import React from "react";
import Link from "next/link";
import Image from "next/image";
import Thanos from "../../../images/blog/bee/intro/4.jpg";
import { Chrono } from "react-chrono";
import BeepBoop from "../../../images/blog/bee/intro/1.gif";
import Grid1 from "../../../images/blog/bee/intro/2.gif";
import Grid2 from "../../../images/blog/bee/intro/3.gif";
import Confusion from "../../../images/blog/bee/intro/5.gif";
import Tv from "../../../images/blog/bee/intro/6.gif";
import Bulb from "../../../images/blog/bee/intro/7.gif";
import VIR from "../../../images/blog/bee/intro/9.png";
import Animation from "../../../images/blog/bee/intro/8.jpg"
import Sigma from "../../../images/blog/bee/intro/10.jpg";
import Graph from "../../../images/blog/bee/intro/11.png";

interface blogPosted {
  title: string; // date
  cardTitle: string; // heading
}

const Intro = () => {
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
              <div className="pl-32 backdrop-blur-xl">
                <h1 className="text-white text-4xl font-bold">Introduction</h1>
              </div>
          </div>

          <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
              <p>Hola Amigos! (Remove all the breaklines and use some margin or padding instead.)</p>
              <p>Zine welcomes you all to this wonderful world of Robotics.</p>
              <p className="mb-8">Y’all must be fascinated with robots like WALL-E, Optimus Prime, BayMax, and many more. These sci-fi movie robots have not only entertained us but also helped us realize the upcoming future. You know what, we are slowly entering this world of fantasy. Engineers have already amazed us with their creations like ASIMO, PEPPER, NAO, MIRO, AIBO, ATLAS, MEENA, and trust us, it's just a start.</p>
              <p>So, what is Robotics?</p>
              <p>Robotics is the intersection of science, engineering, and technology that produces machines, called robots, that substitute for (or replicate) human actions. Simple isn't it. Earlier, it was meant to be used in the manufacturing sector only. Now, people are using robots at home, in hospitals, airports, and many more. So, let's begin our journey. But before that Beep Beep Boop Boop Beep...</p>

              <div className="mt-8 text-center">
                <Image src={BeepBoop}/>
              </div>

              <p className="my-8">Yeah, those above are robots!😃</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="col-span-1 text-center">
                  <Image src={Grid1} />
                </div>
                <div className="col-span-1 text-center">
                  <Image src={Grid2} />
                </div>
              </div>
              <p>And those too! 😅 The one on left is an obstacle-avoiding bot and the right one is a line follower bot.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-16">
                  <div className="col-span-1 md:col-span-1 lg:col-span-2">
                    <p>Now you all must be curious to know how we build them? How is a robot able to do things automatically? Does it go through the same thought process as a person would in the same situation? Does it even have a thought process of its own?🙄 You will learn all this over your journey on these blogs. Let's understand robots by taking an analogy with humans. Like humans have a brain, heart, and body, robots also have a brain (Integrated Circuits and Microcontrollers), heart ( Basic Electrical and Electronics), and body (Basic Mechanical Engineering).</p>
                    <p className="my-8">Let’s find out our first infinity stone. As we mentioned BEE is the heart of robotics, your robot may look good, complete from the outside, and might have a good structure but without the heart (BEE), the structure of your robot is no more than a corpse.</p>
                    <p>You’ll understand the importance of BEE by resembling it with the heart of a human.</p>
                    <p>If BEE is the heart of a robot then simply wire can be compared with arteries and veins, and as we need the circulation of blood in different parts of the body to keep it functioning, similarly flow of electrons is necessary for working of different parts of the robot, e.g motors, sensors, and other electric and electronic elements all connected using wires.</p>
                  </div>
                  <div className="col-span-1 lg:col-span-2 mx-auto">
                      <Image src={Thanos} width={400} height={700}/>
                  </div>
              </div>
              
              <div className="grid grid-cols-7 gap-12 my-8">
                  <div className="col-span-5">
                    <p>Yes, yes, WiFi and Bluetooth don’t use wires at all but they aren’t exceptions guys, it’s just electronics doing telepathy. 😉</p>
                    <p>Let's start with basics but first, do you know the difference between electrical and electronics? Why do we need two separate fields in which both of them have to deal with electricity? Ever wondered why do we have electrical engineering and electronics engineering as separate branches in college? Think! Try a little harder! Still not getting it? No problemo.</p>
                  </div>
                  <div className="col-span-2">
                    <Image src={Confusion} />
                  </div>
              </div>
              
              <p className="my-8">We’ll work this out with an activity. Consider a bulb and a television screen.</p>
              <div className="grid grid-cols-2 gap-8">
                <div className="col-span-1">
                  <Image src={Tv} height={400}/>
                </div>
                <div className="col-span-1">
                  <Image src={Bulb} height={400}/>
                </div>
              </div>
              <p className="my-8">Both bulbs and television do similar tasks of emitting light. But still, they are different. Right? You can’t address a bulb as television.</p>
              <p>Now try to think which one can be an electrical device and which one can be an electronic device. The answer is something very obvious...and we are sure you have figured it out. A bulb is an electrical device and a television is an electronic device but do you know why? Isn’t it something you know it is but you don’t know why? 😬</p>
              <p>Let’s try to figure out the key difference between a bulb and a television. A bulb does emit light, but it just emits … light, no change in intensity, no change in colors, can’t even switch itself off if wanted and we are talking about a simple bulb connected to a power source, not those smart ones connected to smart devices. On the other hand, television doesn't just emit light. It controls the light, color, intensity, where to emit on screen, and when to emit, can shut itself off too. (if the television has a timer function). So, Is it getting less cloudy now?</p>
              <p className="mb-8">From the above difference we obtained, we can conclude that both of them work with electricity but electric devices are just the devices that convert electrical energy to other forms of energy, meanwhile electronic devices hold control over the flow of electrons. Electronic devices can make their own decisions but an electric device lacks this feature.</p>
              <p>In a more formal language, The main difference between electrical and electronic circuits is that electrical circuits have no decision making (processing) capability, whilst electronic circuits do. An electric circuit simply powers machines with electricity. However, an electronic circuit can interpret a signal or an instruction, and perform a task to suit the circumstance.</p>
              <p>But there are many similarities too. Like both branches deal with electric current mainly. They work hand in hand most of the time. There are many circuits where a small signal current is used to operate a much larger electrical equipment. Let’s see this with another example. Consider an Electric geyser. Here, the heating element is an electric device but it also has an auto-cutoff feature, yes, the temperature sensor and automatic switching action are part of the electronic circuit.</p>
              <p>Can you think of a similar example to an electric geyser...yes electric iron often cuts-off power when it reaches a certain temperature.</p>
              <p className="my-8">So, the basics of electrical devices and electronic devices seem clear now. But why do we need to study electrical and electronic devices? Because most robots do need a power source, electricity. So it is quite a must to have good knowledge about the heart and brain in your mind before making a Frankenstein.</p>
              <p>But before diving deep, do you know about the backbone of electrical and electronics, the fundamental principle on which most electrical and electronic devices work? Yes! We are talking about ohm’s law.</p>

              <h1 className="font-bold text-2xl my-8">Ohm's Law</h1>
              <div className="grid grid-cols-5 gap-8">
                  <div className="col-span-3">
                    <p>Ohm’s Law provides a mathematical relationship between Voltage, Current, and Resistance in a circuit.</p>
                    <Image src={VIR} width={200} height={80}/>
                    <p>But we hope you know about another form of Ohm’s law too. It tells the relation between Current Density, Electric Field, and Conductivity of the material. We call that microscopic Ohm’s Law.</p>
                  </div>
                  <div className="col-span-2">
                    <Image src={Animation} height={350}/>
                  </div>
              </div>

              <h1 className="font-bold text-2xl">Microscopic Ohm's Law-</h1>
              <div className="text-center">
                <Image src={Sigma} className=""/>
              </div>
              <p className="my-8">But do you know that Ohm’s Law is not always valid? 🤔 Yes, there are non-Ohmic devices too, and they are pretty important in robotics too. How? You’ll find about them during your journey into robotics.</p>
              <div className="grid grid-cols-6 gap-16">
                  <div className="col-span-2">
                    <p className="mt-8">Now that you know about the importance of electrical and electronics, it's time to find more about “The Power Stone of Robotics” and get it in our hands. So let’s go.</p>
                  </div>
                  <div className="col-span-4">
                  <Image src={Graph} />
                  </div>
              </div>
          </div>
        </div>
    )
}

export default Intro;