import React from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import Titanic from "../../../images/blog/bee/transformers/image2.gif";
import Transformer from "../../../images/blog/bee/transformers/image5.gif";
import Robot from "../../../images/blog/bee/transformers/image13.gif";
import ParkTransformer from "../../../images/blog/bee/transformers/image15.jpg";
import Pole from "../../../images/blog/bee/transformers/image9.jpg";
import Boring from "../../../images/blog/bee/transformers/image7.gif";
import SeveralQuestions from "../../../images/blog/bee/transformers/image11.gif";
import VeryBigImage from "../../../images/blog/bee/transformers/image10.png";
import CoilTransformer from "../../../images/blog/bee/transformers/image6.jpg";
import OuterDiagram from "../../../images/blog/bee/transformers/image16.png";
import PowerSupply from "../../../images/blog/bee/transformers/image12.gif";
import TransformerWorking from "../../../images/blog/bee/transformers/image3.gif";
import TurnRatio from "../../../images/blog/bee/transformers/image1.png";
import AutoTransformer from "../../../images/blog/bee/transformers/image8.jpg";


const Transformers = () => {
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
              <div className="pl-32 backdrop-blur-xl">
                <h1 className="text-white text-4xl font-bold">Transformers</h1>
              </div>
          </div>

          <div className="mx-32 mt-8 text-lg">
            <div className="text-center my-8">
              <Image src={Titanic} />
            </div>

            <p>Before starting off with our topic, congratulations on reaching so far and successfully completing basic electrical and electronic components. We know it’s been a long road so far, but this is just the beginning. We have tried our best to make this flow of knowledge as fluid and as interesting as possible. So stay with us! Now for the topic at hand,</p>

            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <div className="text-center my-8">
                  <Image src={Transformer} />
                </div>
              </div>
              <div className="col-span-1">
                <p>Transformers were a group of extraterrestrial autonomous robotic organisms living on the faraway planet of Cybertron. Cybertron’s peaceful existence was rocked by the betrayal of Megatron, the leader of the faction Decepticons. The faction opposite is the Autobots led by the epitome of righteousness, Optimus Prime who…. Hey!! Wait a minute these weren’t the transformers we had to discuss.</p>
              </div>
            </div>

            <div className="text-center my-8">
              <Image src={Robot} />
            </div>

            <div className="grid grid-cols-7">
              <div className="col-span-2 text-center my-8">
                <Image src={ParkTransformer} />
              </div>
              <div className="col-span-5 my-8">
                <p>Instead, we are going to have a look at an electrical device equally captivating. Remember those huge brown boxes with lots of wiring, that you were always warned not to go near. That was a transformer! These transformers form a crucial part of most circuits from the smallest ones to even power grids. They range in size from transformers used in mobiles being less than a cubic centimetre in volume, to units weighing hundreds of tons. They are even found in mobile chargers!</p>
              </div>
            </div>

            <div className="text-center my-8">
              <Image src={Pole} />
            </div>

            <h1 className="text-3xl my-8">Introduction</h1>

            <p>Transformers are devices used to transfer electrical energy in the form of magnetic energy, between two or more coils of wire. During this transfer, we can regulate the levels of current and voltage, according to our needs. Put more formally,</p>

            <p className="my-8 italic">A transformer is a very simple static electro-magnetic passive electrical device that works on the principle of Faraday’s Law of Electromagnetic Induction by converting electrical energy from one form to another.</p>

            <p>Whoa! Too many terms at once. Let us try to understand this definition step by step. It is “static” i.e stationary or immovable. The principle is based on the conversion of electrical to magnetic energy, hence “electromagnetic”. Recall, we talked about what is a “passive” element earlier.</p>

            <div className="grid grid-cols-4 gap-8">
              <div className="col-span-3 my-8">
                <p>Lastly, Faraday’s Law of Electromagnetic Induction. It is not something new and you must have gone through the law during your preparation. Don’t worry we won’t go into the long theory again. Visit link for a quick refresher. The law forms the basis of the transformer. We’ll see how soon. But first, let’s try and understand the construction of a transformer.</p>
              </div>
              <div className="col-span-1 text-center my-8">
              <Image src={Boring} />
              </div>
            </div>

            <h1 className="text-2xl my-8">Construction</h1>

            <div className="text-center my-8">
              <Image src={Transformer} />
            </div>

            <p>The construction of transformers is done in two different ways. There is the shell-type transformer and the core-type transformer.</p>

            <p className="my-8">We’ll discuss them one by one. But before that let’s go through some points common to both. A basic transformer has three parts - a primary coil, a secondary coil, and a laminated steel core. The core is formed by stacking multiple sheets of steel on top of one another. All parts are electrically insulated from each other.</p>

            <div className="text-center my-8">
              <Image src={SeveralQuestions} />
            </div>
            <p>Why is steel used, can’t we use other materials? What is the need for stacking the sheets of steel, wouldn’t making a solid core be much easier?</p>

            <p>A lot of questions may have popped up in your mind. Let’s find some answers. The reason behind all of these has something to do with losses. In a transformer, there are mainly two kinds of losses - hysteresis loss and eddy current loss. Hysteresis loss is caused by the cyclic reversal of magnetic fields that occurs in our circuit. And eddy current loss occurs due to heat dissipation caused by the currents induced in the core due to the same fields. These will get more apparent once we get into the actual working of a transformer. For now, understand that hysteresis loss depends on the material and hence steel is used. As for eddy currents, the magnitude of the current induced is proportional to the length of the conductor perpendicular to the magnetic field. Therefore, using thin laminated sheets reduces the current induced, and consequently the heat loss.</p>

            <p>Now we can move to the two types of transformers.</p>

            <div className="text-center my-8">
              <Image src={VeryBigImage} />
            </div>

            <p>The horizontal pillars of the core are called yokes, whereas the vertical ones are called limbs.</p>

            <h1 className="text-2xl my-8">Core Types</h1>
            <p>In a core type transformer, the primary and secondary coils are wound outside and surrounding the core ring. For better transfer of energy, sometimes the windings are divided into parts with one part of both wrapped on one limb of the core and other parts on the other. Core type transformers are generally used for high voltage applications.</p>

            <div className="text-center my-8">
              <Image src={CoilTransformer} />
            </div>

            <h1 className="text-2xl my-8">Shell Types</h1>
            <p>On the other hand, in a shell type transformer the primary and secondary coils are wound in the interior of the core and it forms a shell-like structure around them. These are generally used for low voltage applications.</p>

            <div className="text-center my-8">
              <Image src={OuterDiagram} />
            </div>

            <p>We can now finally move to the working principle of a transformer.</p>

            <h1 className="text-2xl my-8">Working Principle</h1>

            <div className="text-center my-8">
              <Image src={PowerSupply} />
            </div>

            <p>The working of a transformer is pretty easy to understand. It starts when an AC voltage is introduced across the primary coil. The current produces a magnetic field that links with the entire steel core. This magnetic field varies with time as our voltage. Now recall Faradays’ law. This varying magnetic field will induce a current in the secondary coil. This is the functioning of the transformer. To summarize, there is the transfer of electrical energy between two coils in the form of magnetic energy.</p>

            <p className="my-8">Now, we mentioned that a transformer can “regulate the levels of voltage and current”. How does that happen? This is done by varying the number of turns in the primary and secondary windings. The magnetic flux created in the core is linked to both coils, hence if one coil has a different number of turns than the other, its voltage and current will also be different. The coil with greater number of turns will have higher voltage and lesser current. With this we can introduce the concept of step up and step down transformers.</p>

            <div className="text-center my-8">
              <Image src={TransformerWorking} />
            </div>

            <p>So, if the primary coil has more turns than the secondary coil then the primary voltage will be greater than the secondary voltage. This type of transformer is called a Step-Down transformer. And if the primary coil has fewer turns the transformer is called a Step-Up transformer.</p>

            <div className="text-center my-8">
              <Image src={TurnRatio} />
            </div>

            <p>where Np, Ns is the number of turns of the primary and secondary coils respectively and Vp, Vs their voltages. Visit link for a visual recap of what we’ve learnt so far.</p>

            <p className="my-8">Let’s finish this part with two simple questions.</p>

            <p className="border-2 border-solid border-black px-4">Could we make a transformer with both windings having equal number of turns? What could be the use of such a transformer?</p>

            <p className="border-2 border-solid border-black px-4 my-8">How will a transformer react to DC current ? What could be the use of this mode of operation?</p>

            <h1 className="text-3xl my-8">Autotransfomer</h1>

            <div className="grid grid-cols-3">
              <div className="col-span-1 text-center my-8">
              <Image src={AutoTransformer} />
              </div>
              <div className="col-span-2">
                <p className="my-8">No discussion about transformers can call itself complete without the autotransformer. An autotransformer is a special type of transformer with only a single winding.</p>
                <p>How could a transformer work with just a single winding !? Let's find out.</p>
                <p className="my-8">In an autotransformer, the winding is tapped at various points along its length to provide a portion of the primary voltage to the secondary circuit. The main advantage of this design is that it is more economical with the same rating as the conventional transformer.</p>
              </div>
            </div>

            <h1 className="text-3xl my-8">Uses</h1>
            <p>Equipped with all this knowledge we can now fully understand and appreciate the vital role played by a transformer in electrical circuits.</p>
            <p>1. Their primary task is to raise or lower voltages according to need. In transmission higher voltages are required as they incur fewer losses(from P=I2*R) and hence have an economic benefit. So, before transmission from power grids, voltages are stepped up using transformers. However, for domestic use, lower voltages are required. Hence, voltages are stepped down using a transformer before supplying for domestic use. The generality of this use may help you understand the scale at which transformers are used.</p>
            <p>2. We talked about how the components of a transformer are electrically insulated. This is put to use for electrically isolating two circuits.</p>
            <p>3. We have one last application of transformers. Transformers are also sometimes used to prevent DC current from passing from one circuit to another.</p>

            <p>With this we have reached the end of this section. See you in the next one!</p>

            <p className="border-2 border-solid border-black px-4 my-8">Mail your assignment answers to puneet@zine.co.in and contact us in communication channel with doubts.</p>

          </div>
        </div>
    )
}

export default Transformers;