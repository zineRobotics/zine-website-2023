import React from "react";
import Image from "next/image";
import image1 from "../../../images/blog/ic-mcu/more/image1.gif";
import image2 from "../../../images/blog/ic-mcu/more/image2.gif";
import image3 from "../../../images/blog/ic-mcu/more/image3.png";
import image4 from "../../../images/blog/ic-mcu/more/image4.png";
import image5 from "../../../images/blog/ic-mcu/more/image5.png";
import image6 from "../../../images/blog/ic-mcu/more/image6.png";
import image7 from "../../../images/blog/ic-mcu/more/image7.png";
import image8 from "../../../images/blog/ic-mcu/more/image8.png";
import image9 from "../../../images/blog/ic-mcu/more/image9.jpg";
import image10 from "../../../images/blog/ic-mcu/more/image10.jpg";
import image11 from "../../../images/blog/ic-mcu/more/image11.png";
import image12 from "../../../images/blog/ic-mcu/more/image12.png";
import image13 from "../../../images/blog/ic-mcu/more/image13.jpg";
import image14 from "../../../images/blog/ic-mcu/more/image14.jpg";
import image15 from "../../../images/blog/ic-mcu/more/image15.png";
import image16 from "../../../images/blog/ic-mcu/more/image16.png";
import image17 from "../../../images/blog/ic-mcu/more/image17.png";
import image18 from "../../../images/blog/ic-mcu/more/image18.jpg";
import image19 from "../../../images/blog/ic-mcu/more/image19.gif";
import image20 from "../../../images/blog/ic-mcu/more/image20.gif";
import image21 from "../../../images/blog/ic-mcu/more/image21.jpg";
import image22 from "../../../images/blog/ic-mcu/more/image22.png";
import image23 from "../../../images/blog/ic-mcu/more/image23.png";
import image24 from "../../../images/blog/ic-mcu/more/image24.png";
import image25 from "../../../images/blog/ic-mcu/more/image25.png";
import image26 from "../../../images/blog/ic-mcu/more/image26.png";
import image27 from "../../../images/blog/ic-mcu/more/image27.jpg";
import image28 from "../../../images/blog/ic-mcu/more/image28.png";
import image29 from "../../../images/blog/ic-mcu/more/image29.png";
import image30 from "../../../images/blog/ic-mcu/more/image30.png";
import image31 from "../../../images/blog/ic-mcu/more/image31.png";
import image32 from "../../../images/blog/ic-mcu/more/image32.png";
import image33 from "../../../images/blog/ic-mcu/more/image33.png";
import image34 from "../../../images/blog/ic-mcu/more/image34.png";
import image35 from "../../../images/blog/ic-mcu/more/image35.png";
import image36 from "../../../images/blog/ic-mcu/more/image36.png";
import image37 from "../../../images/blog/ic-mcu/more/image37.png";
import image38 from "../../../images/blog/ic-mcu/more/image38.gif";
import image39 from "../../../images/blog/ic-mcu/more/image39.png";
import image40 from "../../../images/blog/ic-mcu/more/image40.jpg";
import image41 from "../../../images/blog/ic-mcu/more/image41.jpg";
import image42 from "../../../images/blog/ic-mcu/more/image42.jpg";
import image43 from "../../../images/blog/ic-mcu/more/image43.jpg";
import image44 from "../../../images/blog/ic-mcu/more/image44.gif";
import image45 from "../../../images/blog/ic-mcu/more/image45.gif";
import image46 from "../../../images/blog/ic-mcu/more/image46.png";
import image47 from "../../../images/blog/ic-mcu/more/image47.png";



const More = () => {
    return (
        <div className="text-black bg-white w-screen">
            <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
                <div className="pl-32 backdrop-blur-xl">
                    <h1 className="text-white text-4xl font-bold">More about ICs (Integrated Circuits)</h1>
                </div>
            </div>

            <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
                <div className="my-8 text-center">
                    <Image src={image1} />
                </div>
                <p>When you work with ICs, you need to know the difference between various ICs to ensure that you choose the correct IC you need for your work. When you take a look at these tiny black chips, you might find it back-breaking to differentiate them from the ICs lying around, or you might even wonder about what would happen if you put them in any orientation. What is the possible worst outcome that can happen? </p>

                <p>Well, as difficult as it might sound, you have to know the basic knowledge of ICs because placing ICs in their incorrect configuration can wreck your hardware!</p>
                <div className="my-8 text-center">
                    <Image src={image2} />
                </div>

                <p className="mt-8">Before proceeding further, we suggest you take a brief look at this <a className="text-blue-600 underline" href="https://components101.com/sites/default/files/component_datasheet/L293D%20Datasheet.pdf">page</a></p>
                <p>This is called a datasheet, and this is a datasheet of L293D Motor Driver IC (yep, ICs are generally named like that, but once you start using them, they are as easy to remember as your friend’s name!)</p>
                <div className="my-8 text-center">
                    <Image src={image3} />
                </div>
                <p>This diagram is called a pinout diagram and is arguably the most important diagram while using ICs. How this IC works is not something of our concern at the moment since you will be learning about it later, but our goal is to make you understand the significance of a datasheet. Take a datasheet as a reference tool for your IC. A datasheet contains all the schematics, the safe voltage ranges, where the internal components are kept, etc. </p>
                <p>And how do we read a datasheet? Refer to <a className="text-blue-600 underline" href="https://components101.com/sites/default/files/component_datasheet/L293D%20Datasheet.pdf">this </a>tutorial.</p>
                <p>Coming back to our topic of concern, let’s understand a bit more about ICs. Amongst many ICs lying around, how would you know which IC are you holding? The IC number is stamped on the IC itself. Check the naming and numbering below. </p>

                <div className="my-8 text-center">
                    <Image src={image4} />
                </div>
                <div className="my-8 text-center">
                    <Image src={image5} />
                </div>
                <p>You’ve got your components and your datasheet, and you’re ready to start hacking.</p>
                <div className="my-8 text-center">
                    <Image src={image6} />
                </div>
                <p>But which way does the chip go? Where is Pin 23? If you’re lucky, the orientation is already marked, or perhaps diagrammed in the datasheet. But if it isn’t, or if you’re just new at this, it’s helpful to know what to look for. Notice the U shape notch at the top? Yes, with the help of this notch we can identify the correct position.</p>
                <p>The first pin is to the left of the notch, and the remaining PINs increase sequentially as you move counterclockwise around the chip. </p>
                <p>Now we know how to use IC’s in correct configuration in our circuits.</p>
                <p>Before we move to the next section, have a look here. You all must have seen these processors in your laptops and computers or heard of them.</p>
                <div className="my-8 text-center">
                    <Image src={image7} />
                </div>
                <p>Have you ever wondered how many transistors is it made up of?</p>
                <p>Can you count them? Well this question is as ridiculous as it sounds!</p>
                <p>These small compact chips control your whole system. No wonder they are made up of billions of transistors.</p>
                <p>And this number doesn't stop here. As the technology keeps developing, this number keeps increasing dramatically. That’s the glory of technology, every few years these ICs become more and more compact while the number of transistors keeps increasing. This brings us to the classification of these ICs based on the number of transistors.</p>

                <h3>Classification based on level of Integration</h3>
                <div className="my-8 text-center">
                    <Image src={image8} />
                </div>
                <div className="my-8 text-center">
                    <Image src={image9} />
                </div>
                <div className="my-8 text-center">
                    <Image src={image10} />
                </div>
                <p># The development of VLSI chips paved the way to the manufacturing of the first microprocessor, by the fabrication of a CPU on a single microchip.</p>
                <p>What do you think will be the number of transistors in your intel processor after 10 years? Can you guess? Well a very calculated guess was made to answer this question which we know as Moore’s law.</p>
                <h3>Moore’s Law:</h3>
                <p>“As the technology keeps developing, this number keeps increasing dramatically.”, quoting lines given above in classification, did any of your inquisitive minds think of what rate these transistors increase? Well, there is an empirical relationship regarding this fact, called Moore's law(which is more like an observation),  put forth by the scientist Gordon Moore, stating that the number of components in a circuit roughly doubles every two years. </p>
            <div className="my-8 text-center">
                <Image src={image11} />
            </div>
            <p>So, what should be the effect of moore’s law on the price of the semiconductor chip we use today? How much smaller can the chips go? And how long is Moore's law gonna be valid?</p>
            <p>Check out this  <a className="text-blue-600 underline" href="https://components101.com/sites/default/files/component_datasheet/L293D%20Datasheet.pdf">debate</a>. </p>
            <h3>Let’s see classification of ICs on the basis of manufacturing:</h3>
            <p>For manufacturing ICs, all the components, like transistors and wiring, are all built into a semiconductor wafer. How these ICs are formed determines the type.</p>
            <div>
              <ol>
                    <li>Monolithic ICs: A monolithic circuit is built into a single stone or single-crystal, i.e. in monolithic ICs, all circuit components are integrated on a single layer. </li>
                    <li>Hybrid or multichip ICs: As the name implies, the circuit is fabricated by interconnecting several individual chips. Hybrid ICs are widely used for high-power audio-amplifier applications from 5W to more than 50W.</li>

                    <div className="my-8 text-center">
                      <Image src={image12} />
                    </div>
                    <h3>But this in not the only basis for classification of ICs, for reference ICs can also be classified based the arrangement of pins :</h3>
              </ol>
            </div>
            <div>
              <ol>
                <li><h3>Single-in-line package:</h3> A single row of pins protruding from the bottom of the body of the IC, numbering is done by holding the IC upwards and reading from left to right.</li>
                <li><h3>Dual-in-line package:</h3> Two rows of pins protruding from the bottom of the IC’s body. Their numbering is done just like we saw earlier, it starts anticlockwise from notch. There is an exclusive space in the breadboard for DIL Packaging:
                <div className="my-8 text-center">
                    <Image src={image13} />
                </div>
                <div className="my-8 text-center">
                        <Image src={image14} />
                </div>
                </li>
                <li><h3>Quad-flat package</h3> (mounted on the surface): The pins splay on from all four directions. QFP ICs might have anywhere from eight pins per side (32 total) to upwards of seventy (300+ total). How is their naming done? They do have a notch too, and thus, we pick the first pin and move anticlockwise.
                <div className="my-8 text-center">
                    <Image src={image15} />
                </div>
                </li>
                </ol>
            </div>
            <div className="my-8 text-center">
                <Image src={image16} />
            </div>
            </div >
            </div>
    )
}

export default More;