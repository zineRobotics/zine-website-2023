import React from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import ThreeTransistors from "../../../images/blog/bee/transistors/image4.jpg";
import NPNPNP from "../../../images/blog/bee/transistors/image6.png";
import TransistorDiagram from "../../../images/blog/bee/transistors/image7.jpg";
import Meme from "../../../images/blog/bee/transistors/image5.png";
import Meme2 from "../../../images/blog/bee/transistors/image2.jpg";
import ManCrying from "../../../images/blog/bee/transistors/image1.gif";
import LowValue from "../../../images/blog/bee/transistors/image3.jpg";

const Transistors = () => {
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
              <div className="pl-32 backdrop-blur-xl">
                <h1 className="text-white text-4xl font-bold">Transistors</h1>
              </div>
          </div>

          <div className="mx-32 mt-8 text-lg">
            <p className="my-8">Imagine a machine that is as big as MNIT’s VLTC and all you could use it for is to send a text message to your friend , sounds absurd, right?</p>

            <p>Well, that would be the case if transistors weren’t invented, so before you proceed further reading this blog on your phone/laptop don’t forget to thank the noble scientists at Bell Labs who invented it. Well, what exactly is a transistor? I know y’all know what a transistor is, it’s construction, it’s working, it’s characteristic diagrams and this knowledge might as well have fetched you a few</p>

            <div className="text-center my-8">
              <Image src={ThreeTransistors} />
            </div>

            <p>marks in JEE Mains. But that’s all, in theory, we at Zine love electronics and we have a sweet spot for transistors. So let’s get into the practical aspect of transistors. Let’s have a look at how transistors actually look like:</p>

            <p>Here are a few types of transistors just for reference, we’ll know more about them soon.</p>
            <p className="my-8">For a quick recap, here’s the schematic of transistors which you might have studied about earlier:</p>

            <div className="text-center my-8">
              <Image src={NPNPNP} />
            </div>

            <p>C stands for Collector, B stands for Base and E stands for Emitter.</p>
            <p className="my-8">Wondering how do these terminals “actually” look? Well here is a diagram for reference (Note: Different types of transistors have different pin configurations so it’s better to go through their pinout schematic which is just a google search away before using them )</p>

            <div className="text-center my-8">
              <Image src={TransistorDiagram} />
            </div>

            <p>Did you notice the small protrusion from the transistor situated in the middle? Interestingly, this is called “ heat sink” and it helps dissipate excess heat off the transistor. Find out the purpose of the small circular hole in the middle and why it is circular?</p>

            <p className="my-8">Transistors are usually used for two purposes: As a switch and as an amplifier.</p>

            <h1 className="text-3xl my-8">Transistor Switch</h1>

            <p>Let's look at the most fundamental transistor-switch circuit: an NPN switch. Here we use an NPN to control a high-power LED: If you want to take a deeper dive into the working of transistors as a switch, refer to this link.</p>
            <p className="mb-8">Apart from these examples, NPN transistors are indeed the most commonly used transistors, think about this and let us know your reasoning…</p>

            <p className="my-8">While a normal switch would require an actuator(you’ll read more about actuators in later blogs) to be physically flipped, this switch is controlled by the voltage at the base pin. A microcontroller Input/Output pin, like those on an Arduino Development Board (The first crush of any robotics enthusiast🥰), can be programmed to go high or low to turn the LED on or off.</p>

            <p>Well, so now you got the idea of how transistors can be configured to act as a switch. So, it’s time for you to realize that this property transistor which allowed us to use it as a switch using electricity is the fundamental building block of any computer ever built. Earlier this switching mechanism was carried out by huge vacuum tubes and those were quite bulky so it was near impossible to design machines with high computing power. It seems like that when Howard Stark said “ I'm limited by the technology of my time” he was speaking about these bulky vacuum tubes. (If you didn’t get the reference, go watch Iron Man, nerds !).</p>

            <div className="text-center my-8">
              <Image src={Meme} />
            </div>

            <div className="text-center my-8">
              <Image src={Meme2} />
            </div>

            <p>Speaking of huge sizes, do you know how many transistors are there in an intel i7 microprocessor? Well, there are *drumroll* 2.16 Billion transistors on an intel i7 -7700K processor.</p>

            <p className="my-8">Yes, that’s how tiny transistors have become, imagine you’d require 2.16 billion vacuum tubes just to play Cyberpunk 2077 without any frame drops.</p>

            <p>Apart from acting as a switch, transistors are also used for amplification. Stop right here and introspect. Don’t you think transistors act like an overall controlling unit of the BEE 🐝 we talked about earlier? Imagine transistors analogous to neurons such that many neurons club together and make up the controlling unit (microprocessors) and transistors amplify too….umm just like the</p>

            <div className="text-center my-8">
              <Image src={ManCrying} />
            </div>

            <p>brain...umm...amplifies the pain. C’mon folks, stay strong. You’ll surely find someone better in MNIT. Let’s focus on the amplification applications of transistors for now.</p>

            <h1 className="text-3xl my-8">Amplifiers</h1>

            <p>Some of the most powerful transistor applications involve amplification: turning a low power signal into one of a higher power. Amplifiers can increase the voltage of a signal, taking something from the µV range and converting it to a more useful mV or V level. Or they can amplify current,</p>

            <div className="text-center my-8 mx-32">
              <Image src={LowValue} />
            </div>

            <p>useful for turning the µA of current produced by a photodiode into a current of much higher magnitude.</p>

            <p className="my-8">If you’re interested in taking a deeper look at the working of transistors as amplifiers, take a look here. (add the link here)</p>
          </div>
        </div>
    )
}

export default Transistors;