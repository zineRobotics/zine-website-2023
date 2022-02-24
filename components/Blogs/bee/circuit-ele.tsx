import React from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";;
import Requirements from "../../../images/blog/bee/circuit-ele/image12.png";
import Bulb from "../../../images/blog/bee/circuit-ele/image16.png";
import BulbConnected from "../../../images/blog/bee/circuit-ele/image11.png";
import BulbBattery from "../../../images/blog/bee/circuit-ele/image3.png";
import TwoBulbs from "../../../images/blog/bee/circuit-ele/image25.png";
import ActivePassive from "../../../images/blog/bee/circuit-ele/image21.jpg";
import Symbols from "../../../images/blog/bee/circuit-ele/image9.png";
import JoinTheResistance from "../../../images/blog/bee/circuit-ele/image26.jpg";
import R1R2 from "../../../images/blog/bee/circuit-ele/image10.png";
import Different from "../../../images/blog/bee/circuit-ele/image17.jpg";
import FunFact from "../../../images/blog/bee/circuit-ele/image24.png";
import CarbonFilm from "../../../images/blog/bee/circuit-ele/image19.jpg";
import MetalFilm from "../../../images/blog/bee/circuit-ele/image6.png";
import WireWound from "../../../images/blog/bee/circuit-ele/image2.png";
import SurfaceMount from "../../../images/blog/bee/circuit-ele/image22.jpg";
import Structure from "../../../images/blog/bee/circuit-ele/image5.png";
import FunFactResistor from "../../../images/blog/bee/circuit-ele/image28.gif";
import CapacitorBlast from "../../../images/blog/bee/circuit-ele/image14.gif";
import CapacitorStructure from "../../../images/blog/bee/circuit-ele/image7.png";
import FilmCapacitor from "../../../images/blog/bee/circuit-ele/image1.png";
import YellowFilmCapacitor from "../../../images/blog/bee/circuit-ele/image13.png";
import AxialCapacitor from "../../../images/blog/bee/circuit-ele/image15.gif";
import BigYellowCapacitor from "../../../images/blog/bee/circuit-ele/image4.jpg";
import CeramicCapacitor from "../../../images/blog/bee/circuit-ele/image27.png";
import Mlcc from "../../../images/blog/bee/circuit-ele/image20.png";
import ElectrolyticCapacitor from "../../../images/blog/bee/circuit-ele/image18.jpg";


const CircuitEle = () => {
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
              <div className="pl-32 backdrop-blur-xl">
                <h1 className="text-white text-4xl font-bold">Circuit Elements</h1>
              </div>
          </div>

          <div className="mx-8 md:mx-16 lg:mx-32 mt-8 text-lg">
            <p>And the journey starts😀. Let’s start with some conceptual things. So in this blog, we will study circuit elements. What are these and where do we see them in daily life and robotics?🤔 (Remove all the breaklines and use some margin or padding instead.)</p>
            <p className="my-8">But before starting with circuit elements, do you know what a circuit is? A circuit is an arrangement of individual electronic components, such as resistors, transistors, capacitors, inductors, and diodes, connected by conductive wires or traces through which electric current can flow. Now let’s understand this with a hypothetical activity.</p>

            <p>1. Required elements:</p>
            <div className="text-center">
              <Image src={Requirements}/>
            </div>

            <p>In case you have your real-world LED, switch, battery, and wires, they will work better, but if you don’t have them, you can take these hypothetical ones. Assume them to be similar to the real-world ones.</p>
            <div className="grid grid-cols-12 mt-8">
              <div className="col-span-10">
                <p>2. Now, you need to connect a piece of wire to each terminal of LED and analyze whether it is a circuit according to the definition.
                Is it a circuit? No, it’s not because it does not make a closed path. (The one in red is the positive terminal and the one in black is negative)</p>
              </div>
              <div className="col-span-2">
                <Image src={Bulb} />
              </div>
            </div>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-3">
                <Image src={BulbConnected} />
              </div>
              <div className="col-span-7">
                <p>Now, connect the end terminals of wire extending from the terminals of LED and connect them.
                Is it a circuit now? Even though you have closed the loop, it cannot be called an electric circuit because of the absence of the flow of electric current since the power source is absent. So, you need to add a power source.</p><br />
                <p>4. Disconnect the wire ends from each other and connect them to the battery in a way that the wire from the longer terminal of the LED connects to the positive terminal of the battery and that from the shorter terminal of the LED must connect to the negative terminal of the battery.</p>
                <br />
                <p>You’ll notice that your LED will start to glow, and voila! You’ve created your very first circuit. Now you must be wondering why we needed the switch to demonstrate about circuits, we don’t really. Our elementary electric circuit is now complete. But we need a switch to illustrate some more concepts.</p>
              </div>
              <div className="col-span-2 mt-24">
                <Image src={BulbBattery} />
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-10">
                <p className="mb-8">Suppose you connect a switch in series with your circuit, but the simple on/off switch can only have two states, on or off, and takes only one of them at once.</p>
                <div className="text-center">
                  <Image src={TwoBulbs} />
                </div>
              </div>
            </div>
            <p className="border-2 border-solid border-black px-4 mt-8">A quick question - would the arrangement still be called a circuit if I set the switch in the OFF state? There is no flow of electric current, so it defies the definition of a circuit. Try and think by yourself! If it is, why? Consider this as an assignment to yourself. Contact us with your doubts.</p>

            <p className="my-8">Now that you know what exactly is a circuit, let’s study the types of circuit elements.</p>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="col-span-1">
                <Image src={ActivePassive} />
              </div>
              <div className="col-span-1">
                <h1 className="text-3xl">Active Circuit Elements</h1>
                <p>The elements that supply energy to the circuit are called active elements.
                </p>
                <h1 className="text-3xl mt-8">Passive Circuit Elements</h1>
                <p>A passive component is an electronic component that cannot introduce net energy to the circuit. The definition is really simple. In the above circuit, Battery is an Active element and Bulbs are Passive. What are some other passive circuit elements that we use? Yeah! Resistors, Capacitors, Inductors, Transformers, Diodes🙄 all are passive components.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 mt-12 gap-16">
              <div className="col-span-1">
                <p>Now try to think of some active components.🤔 Battery…uh...um...battery.🤫 I’m not playing this. Wait, you're here to learn, so, let us tell you. Other than batteries we have...ah… it’s hard really...😒...yes...generators? Yes, they supply energy to the circuit...or we say generally, all voltage and current sources are active circuit elements.</p>
                <p className="mt-16">Let’s now study these elements one by one</p>
              </div>
              <div className="col-span-1">
                <Image src={Symbols} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-16">
              <div className="col-span-1">
                <h1 className="text-4xl my-8">Resistors</h1>
                <p>Resistors are electronic components that have specific, never-changing (given physical conditions are constant) electrical resistance. They play a significant role in Ohm’s law. That’s why the resistance's SI unit is Ohmmmmm😀…</p>
                <p className="my-8">Symbols- Two common resistor schematic symbols. R1 is an American-style 1kΩ resistor, and R2 is an international-style 47kΩ resistor.</p>

                <p className="border-2 border-solid border-black px-4">There is one more reason for why there are two different symbols of resistor. Try to figure out! Think as a manufacturer of circuits.</p>
              </div>
              <div className="col-span-1">
                <Image src={JoinTheResistance} />
              </div>
            </div>

            <div className="text-center my-8">
              <Image src={R1R2} />
            </div>

            <p className="my-8">These are resistors-</p>
            <div className="text-center my-8">
              <Image src={Different} />
            </div>
            <p className="mt-16">You see the different colored stripes on them. Many of you might know why they are for it. Yes! They are for determining their resistances.</p>
            <p className="my-8">Fun Fact: But do you know that resistors may contain 3 to 6 colored strips. The table given below might come in handy.</p>
            <div className="text-center my-16">
              <Image src={FunFact} />
            </div>
            <p>Let’s discuss different types of resistors.</p>

            <h1 className="text-3xl mt-16 mb-8">Carbon Film Resistors</h1>
            <div className="text-center my-8">
              <Image src={CarbonFilm} />
            </div>
            <p>They are constructed out of a ceramic carrier with a thin pure carbon film around it, that functions as resistive material. These resistors provide the basic need of adding resistance to circuits but they generate thermal noise which interferes with high-frequency signals in circuits. To overcome this, Metal Film Resistors were invented.</p>

            <h1 className="text-3xl my-8">Metal Film Resistors</h1>
            <div className="text-center my-8">
              <Image src={MetalFilm} />
            </div>
            <p>Construction and working are similar to that of carbon film resistors except they use the metal strips to give the desired resistance. Generate less thermal noise but expensive than carbon film resistors. These resistors are pretty much accurate but some circuits require highly accurate resistors with low noise so Wire Wound resistors come to the rescue!</p>

            <h1 className="text-3xl my-8">Wire Wound Resistors</h1>
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-1">
                <p>A Wirewound Resistor is made by winding a thin metal alloy wire (generally Nichrome or Manganin) or similar wire onto an insulating ceramic former in the form of a spiral helix similar to the film resistors above. These types of the resistor are generally only available in very low ohmic high precision values (from 0.01Ω to 100kΩ) due to the gauge of the wire and number of turns possible. But they can’t handle low-frequency signals well enough than metal film resistors. Wherever high precision resistors are required with high-frequency signal circuits, Wire Wound resistors are used.</p>
              </div>
              <div className="col-span-1">
                <div className="text-center">
                  <Image src={WireWound} />
                </div>
              </div>
            </div>
            
            <p>The above-described resistors are used on a through-hole circuit as they all have long end metal terminals but circuits with a through-hole mounting scheme are large. We use the surface mounting scheme to overcome that but these through-hole resistors make life miserable to be used on a surface mounting scheme circuit so a surface mount resistor saves the day.</p>

            <h1 className="text-3xl my-8">Surface Mount Resistors</h1>
            <div className="grid grid-cols-6">
              <div className="col-span-4">
                <div className="text-center my-8">
                  <Image src={SurfaceMount} />
                </div>
              </div>
              <div className="col-span-2">
                <p>A surface mount resistor is a tiny rectangular ceramic body with silver conductive edges on either end. It offers advantages in saving space on printed circuit boards (PCBs). You notice a number written on the resistor. Yes, this code is used to calculate the resistance value for the resistors.

                The first three numbers(if it’s a 3 digit code the first two digits) will indicate the significant digits, and the third will be the multiplier, telling you the power of ten to which the two significant digits must be multiplied (or how many zeros to add). You can refer to this for more info on the resistor code.</p>
              </div>
            </div>

            <div className="text-center my-16">
              <Image src={Structure} />
            </div>
            <p>Now as it’s the end of resistors, but these are not all types. There are LDRs, Photodiodes, and Thermistors also but you will study them in sensors.</p>

            <p className="border-2 border-solid border-black px-4 my-8">And, we have an assignment for you, try to figure out what is the use of zero ohm resistors in circuits</p>

            <p>Fun Fact- This is what happens when you pass a large amount of current through a resistor.</p>
            <div className="text-center my-16">
              <Image src={FunFactResistor} />
            </div>

            <h1 className="text-4xl mt-8 my-16">Capacitors</h1>
            <div className="text-center">
              <Image src={CapacitorBlast} />
            </div>
            <div className="text-center my-8">
              <Image src={CapacitorStructure} />
            </div>
            <p>The capacitor is a device that stores charge for a short period of time, that consists of two metallic plates separated by a dielectric.</p>
            <p>Let’s now discuss the types of capacitors.</p>

            <h1 className="text-3xl my-8">Film Capacitors</h1>
            <div className="grid grid-cols-5">
              <div className="col-span-3">
                <p>Film capacitors are made of a thin dielectric film that may or may not be metalized on one side. The film is extremely thin, with the thickness being under 1 µm.</p>
              </div>
              <div className="col-span-2 text-center">
                <Image src={FilmCapacitor} />
              </div>
            </div>
            <div className="grid grid-cols-5 mt-16">
              <div className="col-span-2 text-center">
                <Image src={YellowFilmCapacitor} />
              </div>
              <div className="col-span-3">
                <p>After the film is drawn to the desired thickness, the film is cut into ribbons. The width of the ribbons depends on the capacity of the capacitor being produced.</p>
              </div>
            </div>

            <h1 className="text-3xl mt-8 mb-16">Axial Lead Type Capacitors</h1>
            <div className="grid grid-cols-5">
              <div className="col-span-2 text-center">
                <Image src={AxialCapacitor} />
              </div>
              <div className="col-span-3">
                <p>As the above figure shows they are made from long thin strips of thin metal foil with the dielectric material sandwiched together which are wound into a tight roll and then sealed in paper or metal tubes.</p>
              </div>
            </div>
            <div className="text-center mx-32">
              <Image src={BigYellowCapacitor} />
            </div>
            <p>These film types require a much thicker dielectric film to reduce the risk of tears or punctures in the film and are, therefore, more suited to lower capacitance values and larger case sizes.</p>

            <h1 className="text-3xl my-16">Ceramic Capacitors</h1>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <p>A ceramic capacitor uses a ceramic material as the dielectric.</p>
                <p>Ceramic dielectrics do not give as high a level of capacitance per unit volume as some types of capacitors and as a result ceramic capacitors typically range in value from a few picofarads up to values around 0.1 µF. So if we want a high level of capacitance per unit volume we use electrolytic capacitors.</p>
              </div>
              <div className="col-span-1 text-center">
                <Image src={CeramicCapacitor} />
              </div>
            </div>

            <h1 className="text-3xl my-8">MLCC - Multi-Layer Ceramic Capacitors</h1>
            <div className="text-center my-16">
              <Image src={Mlcc}/>
            </div>
            <p>MLCCs consist of 500 layers and more, with a minimum layer thickness of approximately 0.5 microns. As technology progresses, the layer thickness decreases, and higher capacitances are achievable for the same volume.</p>

            <h1 className="text-3xl my-8">Electrolytic Capacitors</h1>
            <div className="grid grid-cols-2">
              <div className="col-span-1 text-center">
                <Image src={ElectrolyticCapacitor} />
              </div>
              <div className="col-span-1">
                <p>Electrolytic capacitors are made of two aluminum foils and a paper spacer soaked in electrolyte. One of the two aluminum foils is covered with an oxide layer, and that foil acts as the anode, while the uncoated one acts as a cathode.</p>

                <p className="my-8">These capacitors have the highest level of capacitance per unit volume. Electrolytic capacitors are polarised, i.e. they can only be placed one way round in the circuit. You studied many types of capacitors. But, how do we identify the capacitance of the capacitor just by seeing it? You can refer to this for information about it.</p>

                <p>Huh!🤕 A lot of components for one blog. Ok...ok...let’s end this blog here and see you in the next blog with some more parts of “heart”.</p>
              </div>
            </div>

            <p className="border-2 border-solid border-black px-4 my-8">Mail your assignment answers to puneet@zine.co.in and contact us in communication channel with doubts.</p>

          </div>
        </div>
    )
}

export default CircuitEle;