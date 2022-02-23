import React from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";

interface blogPosted {
  title: string; // date
  cardTitle: string; // heading
}

const Switches = () => {
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
              <div className="pl-32 backdrop-blur-xl">
                <h1 className="text-white text-4xl font-bold">Switch and Relays</h1>
              </div>
          </div>

          <div className="mx-32 mt-8 text-lg">
            <p className="text-red-600 my-8">One big image will come here.</p>

            <p>Yes! Switches! It seems such a normal thing. We use a switch to turn on or off any electrical device. Look at that power board in front of you.</p>

            <p className="text-red-600 my-8">One big image will come here.</p>

            <p>Yes, It is a switch. But is this it?🙄Pffff….No, obviously.</p>

            <p className="text-red-600 my-8">Two big images will come here.</p>

            <p>But, these are switches too.😕</p>

            <p className="text-red-600 my-8">One big image will come here.</p>

            <p>And these are too.</p>

            <p className="my-8">There’s much more to it. Let’s start scratching this simple topic and see what all magic it can do.</p>

            <p className="border-2 border-solid border-black px-4 mb-8">Fun Fact: There used to be no switches back when the bulb was invented...what people used to do then?🤔 People used to take the bulb out from the bulb holder every time to switch it off John Henry Holmes came up with the idea of switches to break circuits.</p>

            <h1 className="text-2xl my-8">What is a Switch?</h1>

            <p>A Switch is a device that breaks(sometimes diverts🙄) the flow of current in a circuit. Simple enough?</p>

            <p className="text-red-600 my-8">One big image will come here.</p>

            <p>This is how we typically represent a switch. But wait. What are these 1P and 1T representing here?🤔 Told you already that switch is an interesting topic too.😀 P represents Pole and T represents Throw. What are these? Let’s see.</p>

            <p className="my-8">Pole- The number of poles on a switch tells how many circuits it controls. For Example- A single-Pole switch controls only one circuit while a Double-Pole switch controls two independent circuits.</p>

            <p>Throw- The number of throws indicates the number of output connections every single pole can connect to or the number of paths every pole provides for current to pass. Single throw means every pole provides only one path.</p>

            <p className="my-8">Now that you know what the switch is, let’s see how they are classified.</p>

            <p>Switches are broadly classified into two types:</p>
            <p>1. Mechanical</p>
            <p>2. Electronic</p>

            <h1 className="text-3xl my-8 font-bold">Mechanical Switches</h1>

            <p>As the name suggests, they involve physical, moving parts for their switching action.</p>

            <p className="my-8">They can be further classified on basis of the number of contacts they make:</p>

            <p>1. SPST(Single Pole Single Throw)</p>
            <p>2. SPDT(Single Pole Double Throw)</p>
            <p>3. DPST(Double Pole Single Throw)</p>
            <p>4. DPDT(Double Pole Double Throw)</p>

            <h1 className="text-2xl my-8 font-bold">Single Pole Single Throw (SPST)</h1>
            <p>These switches contain only one input and one output contact. It performs basic ON or OFF operations. And yes, the switch in your power board is SPST only.</p>

            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <p className="text-red-600 my-8">One big image will come here.</p>
              </div>
              <div className="col-span-1">
                <p className="text-red-600 my-8">One big image will come here.</p>
              </div>
            </div>

            <p className="text-red-600 my-8">One big image will come here.</p>

            <h1 className="text-2xl my-8 font-bold">Single Pole Double Throw (SPDT)</h1>
            <p>It has one input contact and two output contacts. It has two ON states and one OFF state.</p>

            <p className="text-red-600 my-8">One big image will come here.</p>

            <div className="grid grid-cols-4">
              <div className="col-span-1">
                <p className="text-red-600 my-8">One big image will come here.</p>
              </div>
              <div className="col-span-2">
                <p className="text-red-600 my-8">One big image will come here.</p>
              </div>
              <div className="col-span-1">
                <p className="text-red-600 my-8">One big image will come here.</p>
              </div>
            </div>

            <h1 className="text-2xl my-8 font-bold">Double Pole Single Throw (DPST)</h1>
            <p>This switch consists of four terminals, two input contacts, and two output contacts. It behaves like two separate SPST configurations, operating at the same time. It has only one ON position, but it can actuate the two contacts simultaneously, such that each input contact will be connected to its corresponding output contact.</p>
            <p>In the OFF position, both switches are at an open state. This type of switch is used for controlling two different circuits at a time.</p>

            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <p className="text-red-600 my-8">One big image will come here.</p>
              </div>
              <div className="col-span-1">
                <p className="text-red-600 my-8">One big image will come here.</p>
              </div>
            </div>

            <p className="text-red-600 my-8">One big image will come here.</p>

            <div className="border-2 border-solid border-black px-4 mb-8 grid grid-cols-4">
              <div className="col-span-3">
                <p>DPDT can also be used to design controllers for differential drive robots. What are differential drives? Be with us and pay attention to blogs, You’ll study them in the future. Just to give you a hint- It consists of 2 drive wheels mounted on a common axis, and each wheel can independently be driven either forward or backward. Try to implement it on a pen-paper or with hardware if you can arrange it after you study differential drives. Don’t worry if you get stuck. We’ll surely help you out.</p>
              </div>
              <div className="col-span-1">
                <p className="text-red-600 my-8">One big image will come here.</p>
              </div>
            </div>

            <h1 className="text-3xl my-8 font-bold">Some Common Switching Arrangements</h1>

            <h1 className="text-2xl mb-8">Staricase Switching</h1>

            <p>Staircase switching is a very popular and interesting switching arrangement in which one device can be controlled by two different switches generally placed at two different places. But how does this happen?🙄 Here’s how.</p>

            <p className="text-red-600 my-8">One big image will come here.</p>

            <p>We use two SPDT switches to get this arrangement.</p>

            <p className="my-8">The first pole and second pole of the SPDT switch S1 is connected to the corresponding first and the second pole of the SPDT switch S2. That is, similar poles of both two switches are connected. The phase of the supply line is connected to the common pole of a switch. And the phase line to the load is taken from the common pole of the next switch.</p>

            <p>Changing the ON & OFF condition of a single switch can determine whether the circuit is closed or open. Thus in staircase wiring, we can control the load from both positions.</p>

            <p className="my-8">Attention! Here, we have a very interesting assignment for you!😃 Study about logic gates and their truth tables and try to figure out, if we make a truth table for staircase switching arrangement, it will act like which logic gate?</p>
            <p>You can refer to this blog for more info on logic gates.</p>

            <h1 className="text-2xl my-8">H Bridge</h1>

            <p>We have one more switching arrangement which is called H-bridge. The H-bridge circuit is used to drive motors. There are two sets of two switches. One set of switches when closed allows electricity to flow one way. The other set of switches allows electricity to flow in the opposite direction. This is what the switching arrangement for H-Bridge looks like.</p>

            <p className="text-red-600 my-8">One big image will come here.</p>

            <p>Could you figure out how this particular arrangement is able to drive motors? If not, here is the explanation-</p>
            <p>In the second and third images, opposite pairs of switches are closed, because of the arrangement of switches both have an opposite polarity which causes the motor to spin in the opposite directions.</p>

            <h1 className="text-3xl my-8">Relays</h1>

            <p className="text-red-600 my-8">One big image will come here.</p>

            <p>I know! Not these. But these😁</p>

            <p className="text-red-600 my-8">One big image will come here.</p>

            <p>What are relays?</p>

            <p className="my-8">Just like switches, relays can make or break a connection. Are they the same as switches? No.</p>
            <p>Unlike normal switches which are controlled manually, relays are controlled electromechanically. It makes or breaks contact with the help of a signal without any human involvement to switch it ON or OFF.</p>
            <p className="my-8">Wonder how? Let’s see how relays work.</p>

            <p>Construction:</p>

            <p className="my-8">Before moving on to working, let’s know the internal structure of the relay.</p>

            <p>Every electromechanical relay consists of an consists of an:</p>
            <p>Electromagnet</p>
            <p>Mechanically movable contact</p>
            <p>Switching points and</p>
            <p>Spring</p>

            <p className="text-red-600 my-8">One big image will come here.</p>

            <p>On a casing, an electromagnet is constructed by wounding a copper coil on a metal core. The two ends of the coil are connected to two pins of the relay as shown. These two are used as DC supply pins. Generally, two more contacts will be present, called switching points to connect high ampere load. Another contact called common contact is present to connect the switching points. These contacts are named as normally open (NO), normally closed(NC), and common(COM) contacts.</p>

            <h1 className="text-2xl my-8">Working of relays</h1>

            <p className="text-red-600 my-8">One big image will come here.</p>

            <p># Relay works on the principle of electromagnetic induction.</p>
            <p># When the electromagnet is applied with some current it induces a magnetic field around it.</p>
            <p># The above image shows the working of the relay. A switch is used to apply DC to the load.</p>
            <p># In the relay Copper coil and the iron, the core acts as an electromagnet.</p>
            <p># When the coil is applied with DC it starts attracting the contact as shown. This is called the energizing of the relay.</p>
            <p># When the supply is removed it retrieves back to the original position. This is called De energizing of the relay.</p>

            <p className="border-2 border-solid border-black px-4 my-8">But where do we use them?🤔 Try to think about what they do fundamentally. They control a high current circuit with a low current signal. Now try to think about different applications where we can use them. They can be used in Motor Drive Control, Traffic Control, Home Appliances, and much more. Relays are one of the key components for Home automation? But how?🤔
            <br />
            <br />
            Yes, this is your assignment for this blog. Try to figure out by yourself how can you make use of relays to build a smart device that is controlled by your mobile phone. Take your time and mail your answer to this email given below.</p>

            <p>For more info about Switches and relays check out this, this, or this.😄 (Add links here.)</p>

            <p className="border-2 border-solid border-black px-4 my-8">Mail your assignment answers to puneet@zine.co.in and contact us in communication channel with doubts.</p>



          </div>
        </div>
    )
}

export default Switches;