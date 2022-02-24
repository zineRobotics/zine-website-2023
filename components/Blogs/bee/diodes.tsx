import React from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import House from "../../../images/blog/bee/diodes/image1.png";
import Computer from "../../../images/blog/bee/diodes/comp.jpeg";
import Laptop from "../../../images/blog/bee/diodes/laptop.jpg";
import Diode from "../../../images/blog/bee/diodes/image14.png";
import SideAnode from "../../../images/blog/bee/diodes/image21.png";
import DiagramAnode from "../../../images/blog/bee/diodes/image27.png";
import Silicon from "../../../images/blog/bee/diodes/image18.jpg";
import Valence from "../../../images/blog/bee/diodes/image3.jpg";
import Unbiased from "../../../images/blog/bee/diodes/image6.png";
import DynamicGif from "../../../images/blog/bee/diodes/image2.gif";
import ForwardReversed from "../../../images/blog/bee/diodes/image25.png";
import ColorfulLeds from "../../../images/blog/bee/diodes/image5.png";
import Bulb from "../../../images/blog/bee/diodes/image15.png";
import QuestionLed from "../../../images/blog/bee/diodes/image22.jpg";
import FlatSpot from "../../../images/blog/bee/diodes/image4.png";
import MemeDiode from "../../../images/blog/bee/diodes/image42.png";
import PhotoDiode from "../../../images/blog/bee/diodes/image29.png";
import Yellow from "../../../images/blog/bee/diodes/image9.png";
import Blue from "../../../images/blog/bee/diodes/image8.png";
import Fat from "../../../images/blog/bee/diodes/image32.png";
import Thin from "../../../images/blog/bee/diodes/image31.png";
import Symbol from "../../../images/blog/bee/diodes/image33.png";
import CathodeAnode from "../../../images/blog/bee/diodes/image12.png";
import Graph from "../../../images/blog/bee/diodes/image20.png";
import Stabiliser from "../../../images/blog/bee/diodes/image26.png";
import ZenerDiagram from "../../../images/blog/bee/diodes/image11.png";
import HalfWave from "../../../images/blog/bee/diodes/image10.gif";
import FullWave from "../../../images/blog/bee/diodes/image36.png";
import ForwardBiased from "../../../images/blog/bee/diodes/image24.gif";
import ReverseBiased from "../../../images/blog/bee/diodes/image43.gif";
import FullWaveBridge from "../../../images/blog/bee/diodes/image30.gif";
import SolarCell from "../../../images/blog/bee/diodes/image28.png";
import VLTC from "../../../images/blog/bee/diodes/image7.png";
import SmallSolarCell from "../../../images/blog/bee/diodes/image37.png";
import SolarSystem from "../../../images/blog/bee/diodes/image39.png";
import OGSolarSystem from "../../../images/blog/bee/diodes/image38.gif";
import SolarDiagram from "../../../images/blog/bee/diodes/image16.gif";
import Crystalline from "../../../images/blog/bee/diodes/image40.png";
import Cylindrical from "../../../images/blog/bee/diodes/image35.png";
import LastImage from "../../../images/blog/bee/diodes/image13.png";

const Diodes = () => {
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
              <div className="pl-32 backdrop-blur-xl">
                <h1 className="text-white text-4xl font-bold">Diodes</h1>
              </div>
          </div>

          <div className="mx-8 md:mx-16 lg:mx-32 mt-8 text-lg">
            <p>Look at the picture of a house and try to decode the basic structural unit of it.</p>

            <div className="text-center">
              <Image src={House} width={500} height={250}/>
            </div>

            <p className="my-8">Yeah, guys! we know all of you know it's a brick. But what about these? Can you tell their smallest electronic component?</p>

            <div className="grid grid-cols-2 gap-16 mx-32">
              <div className="col-span-1 text-center">
                <Image src={Computer} height={400} width={700}/>
              </div>
              <div className="col-span-1 text-center">
                <Image src={Laptop} height={400} width={700}/>
              </div>
            </div>

            <p className="mt-8">Or we may reframe our question as to what is the building block of all major electronic devices?</p>

            <p>Yeah, it's nothing but a small diode. So now let's get to its super simple definition.😃</p>

            <div className="text-center my-8">
              <Image src={Diode} />
            </div>
            
            <p>In simple words, diode or di-ode or di-electrode is an electronic component that conducts current primarily in one direction; it has low (ideally zero) resistance in one direction, and high (ideally infinite) resistance in the other.</p>
            <p className="mt-8">A semiconductor diode, the most commonly used type today, is a crystalline piece of semiconductor material with a PN-junction connected to two electrical terminals.</p>
            <p>You might want to know which side of the diode is anode and cathode. Think once using its picture.</p>

            <div className="text-center my-8">
              <Image src={SideAnode} />
            </div>

            <p>You’ll get a better understanding with a diagram,</p>

            <div className="text-center my-8">
              <Image src={DiagramAnode} />
            </div>

            <p>Now, you might be curious to know how it works.</p>

            <h1 className="text-4xl my-8">P type semiconductor</h1>
            <p>In this semiconductor, the majority charge carriers are holes whereas minority charge carriers are electrons.</p>

            <div className="text-center my-8">
              <Image src={Silicon} />
            </div>

            <h1 className="text-4xl my-8">N type semiconductor</h1>
            <p>In this semiconductor, the majority charge carriers are electrons whereas minority charge carriers are holes.</p>
            <p>The more abundant charge carriers are called majority carriers, which are primarily responsible for current transport in a piece of semiconductor. The less abundant charge carriers are called minority carriers.</p>

            <div className="text-center my-8">
              <Image src={Valence} />
            </div>

            <h1 className="text-4xl my-8">P-N junction</h1>
            <p>In practice, the P-N junction is formed from a single mono crystalline structure by adding carefully controlled amounts of donor(p type) and acceptor(n type) impurities.</p>

            <h1 className="text-4xl my-8">Diode-Biasing</h1>
            <p>The term biasing refers to the application of DC voltage to set up certain operating conditions.</p>

            <h1 className="text-4xl my-8">Unbiased pn junction</h1>

            <div className="text-center my-8">
              <Image src={Unbiased} />
            </div>

            <p>When a diode is connected in a Zero Bias condition, no external potential energy is applied to the PN junction.</p>

            <p className="mt-8">The transfer of electrons and holes back and forth across the PN junction is known as diffusion.</p>
            <p>An Equilibrium or balance will be established when the majority carriers in p and n side are equal and both moving in opposite directions so that the net result is zero current flowing in the circuit. When this occurs the junction is said to be in a state of Dynamic Equilibrium.</p>

            <div className="text-center my-8">
              <Image src={DynamicGif} />
            </div>

            <h1 className="text-4xl my-8">Forward-Biased pn junction</h1>

            <p className="mb-8">When a diode is connected in a Forward Bias condition, a negative voltage is applied to the N-type material and a positive voltage is applied to the P-type material.</p>

            <h1 className="text-4xl my-8">Reverse-Biased pn junction</h1>
            <p>This condition represents a high resistance value to the PN junction and practically zero current(very small reverse current in μA) flows through the junction diode with an increase in bias voltage.</p>

            <div className="text-center my-8 mx-32">
              <Image src={ForwardReversed} />
            </div>

            <h1 className="text-4xl my-8">LED</h1>
            <p>Such a common name that all of you have heard and many of you even use led tube lights or led screens in tv or computers.</p>

            <p className="mt-8">Fun Fact- Nobel Prize for Physics in 2014 was awarded to Shuji Nakamura for the invention of energy-efficient LEDs.</p>

            <div className="grid grid-cols-7">
              <div className="col-span-5">
                <div className="text-center my-8">
                  <Image src={Computer} />
                </div>
                <p>A light-emitting diode (LED) is a semiconductor light source that emits light when a current flows through it. Electrons in the semiconductor recombine with electron holes, releasing energy in the form of photons.</p>
                <p className="mt-8">See the image below. This is also an led. We have an assignment for you:</p>
                <p>Find out the name of this led and its working principle.</p>
                <div className="text-center my-8">
                  <Image src={QuestionLed} />
                </div>
              </div>
              <div className="col-span-2 text-center mt-12">
                <p>So what is a led? It's also a type of PN junction diode.</p>
                <Image src={ColorfulLeds} />
                <Image src={Bulb} />
              </div>
            </div>

            <p className="font-bold">What is the flat spot in the led diagram below?</p>

            <div className="text-center my-8">
                  <Image src={FlatSpot} />
                </div>

            <p>You may be knowing that a longer leg of led represents anode and a shorter leg cathode.</p>

            <div className="text-center my-8">
              <Image src={MemeDiode} />
            </div>

            <p>What if legs get damaged and become the equal size or you don’t know which one was originally longer?</p>

            <p className="my-8">Then this flat spot comes into the picture. A flat spot determines the cathode of the led.</p>

            <h1 className="text-4xl my-8">Photodiode</h1>
            <p>A special type of PN junction device that generates current when exposed to light is known as Photodiode. It is also known as a photodetector or photosensor. It operates in reverse biased mode and converts light energy into electrical energy.</p>

            <div className="text-center my-8">
              <Image src={PhotoDiode} />
            </div>

            <h1 className="text-3xl my-8">Principle of Photodiode</h1>
            <p>It works on the principle of the Photoelectric effect.</p>
            <p>The operating principle of the photodiode is such that when the junction of this two-terminal semiconductor device is illuminated then the electric current starts flowing through it.</p>
            <p>Only minority current flows through the device when a certain reverse potential is applied to it.</p>

            <div className="text-center my-8">
              <Image src={Yellow} />
            </div>

            <p>Why does photodiode have a greater depletion region than other diodes? Think about it.</p>

            <p>This photodiode is used to make ir sensors which are used in many line following bots.</p>

            <p>The ir sensors are made of an ir led and a photodiode. The ir led emits signal which is received by the photodiode.</p>

            <div className="text-center my-8">
              <Image src={Blue} />
            </div>

            <p>Furthermore ir sensors will be discussed in sensors part of ic mcu blogs.</p>

            <h1 className="text-4xl my-8">Zener Diode</h1>
            <p className="mb-8">Now we are going to talk about a special type of PN junction diode called the Zener diode. A Zener diode is a type of PN junction diode but the main notable point is that it is heavily doped.</p>

            <p>A normal pn junction diode:</p>
            <div className="text-center my-8">
              <Image src={Thin} />
            </div>

            <p>Zener diode heavily doped:</p>
            <div className="text-center my-8">
              <Image src={Fat} />
            </div>

            <p>Think how the symbol of Zener diode is made</p>
            <div className="text-center my-8">
              <Image src={Symbol} />
            </div>

            <p>See its real image and tell me which side is the anode and which one cathode. Confused 🤔</p>
            <p>Let me tell you. The black side is the cathode. See here. In general, the narrow band represents the cathode.</p>
            <div className="text-center my-8">
              <Image src={CathodeAnode} />
            </div>

            <h1 className="text-3xl my-8">Why is Zener diode heavily doped?</h1>
            <p>What is the requirement of heavily doping Zener diodes? Can you guess 🤔?</p>

            <p className="my-8">The Zener diode is made up of heavily doped semiconductor material so its depletion region is very thin and there’s a high intensity of electric field in the depletion region.</p>

            <p>Friends you don’t have to understand both forward and reverse biasing here as the Zener diode works as a normal diode in forwarding bias.</p>

            <p className="my-8">So let’s start reverse one. Here’s the V-I characteristic diagram of the Zener diode</p>

            <div className="text-center my-8">
              <Image src={Graph} />
            </div>

            <p>Below a certain voltage, the current remains constant on the reverse bias. This voltage is known as breakdown voltage or Zener voltage.</p>

            <p>When the reverse bias applies across the diode and the supply voltage is equal to the Zener voltage then it starts conducting in the reverse bias direction. In this situation, the depletion region completely vanishes and high current flows through the circuit which explains the Zener region shown in the diagram.</p>

            <p>But where are these diodes used in real life? Let's explore. What's this object shown below?</p>

            <div className="text-center my-8">
              <Image src={Stabiliser} />
            </div>

            <p>Most of you might have read from the image that it is a voltage regulator. But how is Zener diode applied in this? Don’t worry we will explain everything to you with the help of this diagram.</p>

            <div className="text-center my-8">
              <Image src={ZenerDiagram} />
            </div>

            <p>Here the Zener diode is connected across the load. We want the voltage across the load to be regulated and not cross the value of Vz. Depending on our requirement, we choose the suitable Zener diode with a Zener breakdown voltage near to the voltage we require across the load. We connect the Zener diode in reverse bias condition. When the voltage across the diode exceeds the Zener breakdown voltage, a significant amount of current starts flowing through the diode. As the load is in parallel to the diode, the voltage drop across the load is also equal to the Zener breakdown voltage. The Zener diode provides a path for the current to flow and hence the load gets protected from excessive currents. Thus the Zener diode serves two purposes here: Zener diode as a voltage regulator as well as it protects the load from excessive current.</p>

            <p className="my-8">So simple, isn’t it.</p>

            <p>Where else do we find the usage of these diodes? Yes, rectifiers!!!</p>

            <h1 className="text-4xl my-8">RECTIFIERS</h1>
            <p>An electrical device that converts an alternating current into a direct one.</p>

            <p className="my-8">These are of 2 types: half-wave rectifier and full-wave rectifier.</p>

            <h1 className="text-3xl my-8">Half Wave Rectifier</h1>
            <p>A half-wave rectifier consists of the below components:</p>

            <p>1. Alternating current source</p>
            <p>2. The resistor at the load section</p>
            <p>3. A diode</p>
            <p>4. A step-down transformer which will be discussed in detail in further blogs.</p>

            <div className="text-center my-8">
              <Image src={HalfWave} />
            </div>

            <p>On the positive cycle, the diode is forward biased and on the negative cycle, it is reverse biased. So positive signal only goes to output and hence we have converted ac source to dc supply.</p>

            <p className="my-8">But what if we want a full-wave in output. No worries, we are here buddy. We use a full-wave rectifier for that.</p>

            <h1 className="text-3xl my-8">Full Wave Rectifier</h1>

            <div className="text-center my-8">
              <Image src={FullWave} />
            </div>

            <p>Sorry, it’s not the correct diagram😂.</p>

            <div className="text-center my-8">
              <Image src={ReverseBiased} />
            </div>

            <div className="text-center my-8">
              <Image src={ForwardBiased} />
            </div>

            <p>To rectify both half cycles of a sine wave, the full-wave rectifier uses two diodes, one for each half of the cycle. It also uses a transformer with a centre-tapped secondary winding.</p>

            <p className="my-8">The full-wave rectifier is like two back-to-back half-wave rectifiers</p>

            <h1 className="text-3xl my-8">Full Wave Bridge Rectifier</h1>

            <p>This gif clearly explains the current flow through forward-biased diodes in the bridge</p>

            <div className="text-center my-8">
              <Image src={FullWaveBridge} />
            </div>

            <h1 className="text-3xl my-8">Solar Cell</h1>

            <div className="text-center my-8">
              <Image src={SolarCell} />
            </div>

            <p>Have you seen such things before?</p>

            <p className="my-8">Where? Try to recall.</p>

            <div className="text-center my-8">
              <Image src={VLTC} />
            </div>

            <p>When you might go to the top floor of VLTC in our college MNIT, you will find a lot of such solar panels. These solar panels make VLTC self efficient for lighting at night.</p>

            <p className="my-8">But do you know what a solar is made up of? If you don’t, no problem we will show you.</p>

            <div className="text-center my-8">
              <Image src={SmallSolarCell} />
            </div>

            <p>A solar panel is made of a large number of solar cells. A collection of such solar panels is known as solar system.</p>

            <div className="text-center my-8">
              <Image src={SolarSystem} />
            </div>

            <p>No not this one 😂.</p>

            <p className="my-8">But this one.</p>

            <div className="text-center my-8">
              <Image src={OGSolarSystem} />
            </div>

            <p>This image shows a collection of solar panels called the photovoltaic solar system.</p>

            <p className="my-8">So let’s discuss the basic unit of a solar panel i.e. a solar cell.</p>

            <p>In simple words, a solar cell is an electronic device that directly converts sunlight into electricity. Light shining on the solar cell produces both a current and a voltage to generate electric power. Solar cells are generally manufactured from crystalline silicon.</p>

            <div className="text-center my-8">
              <Image src={SolarDiagram} />
            </div>

            <p>The basic steps in the operation of a solar cell are:</p>

            <p>1. Generation of light-generated carriers: The light energy, in the form of photons, supplies sufficient energy to the junction to create a number of electron-hole pairs.</p>
            <p>2. The free electrons in the depletion region can quickly come to the n-type side of the junction. Similarly, the holes in the depletion can quickly come to the p-type side of the junction. This happens due to the electric field in the depletion region.</p>
            <p>3. As the concentration of electrons becomes higher in one side, i.e. n-type side of the junction, and the concentration of holes becomes more in another side, i.e. the p-type side of the junction, you will be able to observe a potential difference which is called photovoltage.</p>

            <p className="my-8">See the figure and guess why the n side is thinner than the p side of a solar cell?</p>

            <p>It is because the light photons can easily pass through n side to reach the depletion region where the electric field will separate electrons and holes to the respective sides for the generation of voltage.</p>

            <p className="my-8">Fun fact: Silver is used for connect the solar cells in a solar panel as its best conductor of electricity.</p>

            <p>Here’s an interesting question for you</p>

            <h1 className="text-3xl my-8">Why is the shape of the solar cell octagonal?</h1>

            <p>Its shape is octagonal in order to save the material at the time of manufacture. But to explain it we will have to take you to the manufacturing of solar cell.</p>

            <p className="my-8">High purity silicon crystals are grown in electric furnaces in a cylindrical log shape which is then shaped to wafers and then to solar cells.</p>

            <div className="text-center my-8">
              <Image src={Crystalline} />
            </div>

            <div className="text-center my-8">
              <Image src={Cylindrical} />
            </div>

            <div className="text-center my-8">
              <Image src={LastImage} />
            </div>

            <p>The concept is to find the perfect balance between making most area of silicon available thereby reducing the cost of manufacturing and octagonal shape serves this purpose. So, to reduce material wastage octagonal wafers are cut which gives octagonal shape to solar cells.</p>

            <p className="my-8 font-bold">Now you will say why a solar cell is not cut out circular. Think yourself and tell us.</p>

            <p className="border-2 border-solid border-black px-4 mb-8">Mail your assignment answers to puneet@zine.co.in and contact us in communication channel with doubts.</p>

          </div>
        </div>
    )
}

export default Diodes;