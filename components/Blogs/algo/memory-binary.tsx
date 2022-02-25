import React from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import OnOff from "../../../images/blog/algo/memory-binary/image3.gif";
import OneBit from "../../../images/blog/algo/memory-binary/image6.png";
import OneByte from "../../../images/blog/algo/memory-binary/image8.png";
import Combination from "../../../images/blog/algo/memory-binary/image2.png";
import Table from "../../../images/blog/algo/memory-binary/image1.png";
import Example from "../../../images/blog/algo/memory-binary/image7.png";
import Assignment from "../../../images/blog/algo/memory-binary/image4.gif";
import ColorfulImage from "../../../images/blog/algo/memory-binary/image5.png";

interface blogPosted {
  title: string; // date
  cardTitle: string; // heading
}

const MemoryBinary = () => {
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-algo-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
              <div className="pl-32 backdrop-blur-xl">
                <h1 className="text-white text-4xl font-bold">Concept of Memory and Binary</h1>
              </div>
          </div>

          <div className="mx-8 md:mx-16 lg:mx-32 mt-8 text-lg">
            
            <p className="my-8">Imagine yourself in a dark room having only one light bulb off. You will just have two options then, either to remain in the dark or turn on the lights. These “on” and “off” conditions can be treated as a signal for a person outside the window of the room. Now if you have two lights in the room, four such signals can be made. “Off and off”, “off and on”, “on and off”, “on and on”.Imagine yourself in a dark room having only one light bulb off. You will just have two options then, either to remain in the dark or turn on the lights. These “on” and “off” conditions can be treated as a signal for a person outside the window of the room. Now if you have two lights in the room, four such signals can be made. “Off and off”, “off and on”, “on and off”, “on and on”.</p>

            <div className="text-center my-8">
              <Image src={OnOff} />
            </div>

            <p>Computers use the same concept to use store data. The smallest unit of its memory is bit which can be related with the single light bulb in the room. We store “1” in it relating to the “on” condition of the light and “0” for ”off” condition. As explained earlier, four signals can be made then with two bits of memory.</p>

            <p className="my-8">With one light bulb, we can store 1 bit of information. With 8 light bulbs, we could do 8 bits. 8 bits means we could have 2⁸ possible options (Simple P & C right?)</p>

            <div className="text-center my-8">
              <Image src={OneBit} />
            </div>

            <p>So, if we had enough light bulbs, we could store any amount of data we wanted in a digital form.</p>

            <div className="text-center my-8">
              <Image src={OneBit} />
            </div>

            <p>Here, one cell represents one bit.</p>
            <p>Now, not many light bulbs would fit inside our computer! So computers store bits of data by holding electrons in capacitors, for example. This technology is used in the RAM memory. However, we shall continue using this metaphor of light bulbs as it is simpler to visualize.</p>
            <p>So, how many such light bulbs fit into your RAM exactly?</p>
            <p>Let’s assume your computer has 4GB RAM, for example. If you convert 4 GB according to the above chart, it will be approximately equal to 32000000000 bits.</p>
            <p>That means your 4GB of RAM holds 32 billion bits. That’s 32 billion light bulbs!</p>

            <p className="mt-8 italic">But, what does it actually mean to have 32 billion bits to store and represent information?</p>
            <p className="font-bold">To understand what these bits can do for us, let’s take a closer look at the binary number system. It only uses 0’s and 1’s to represent any further numeral values – and other types of data, too.</p>
            <p>Have a look at how the number 216 is stored in the memory.</p>

            <div className="text-center my-8">
              <Image src={Combination} />
            </div>

            <p>The blue boxes represent a single bit of memory in the RAM. Computers store 216 input by the user in its memory in the following way. This decoded form is obtained by a decimal to binary conversion. To learn about more conversions click here.(complete the link)</p>

            <p className="my-8">We have learned about how numbers are stored in memory, but what about characters?</p>

            <p>At this point of time,we are capable of representing any number in binary form. We will use this to store alphabets. We will assign every character with a number. Let us understand this by looking at how “A” is stored in memory.</p>

            <div className="text-center my-8">
              <Image src={Table} />
            </div>

            <p>This image gives a clear view of how different alphabets are stored in the binary form.</p>
            <p>Take a look at “A”. Its ASCII code is 65 and when we convert 65 to binary form, we get “01000001”. So, the computer stores “A” as “01000001” in its memory. But how does it differentiate between integer 65 and “A” then? This is done with the int and char data types. We will discuss them in-depth later. Click on the link to view the ASCII codes of other characters.</p>

            <p className="my-8">Now, let us look at how computers store images in memory. We will understand this with an example.</p>

            <div className="text-center my-8">
              <Image src={Example} />
            </div>

            <p>Assume the rows and columns of this excel sheet to be the pixels of the image. Now the computer will give every pixel a special bit in its ram and then specify their value as 0 or 1 according to the black or white color we want in our image. 0 for white and 1 for black. This is how simple it is to store a black and white image in memory.</p>

            <p className="my-8">Now,</p>

            <div className="text-center my-8">
              <Image src={Assignment} />
            </div>
            <p className="text-center">Don't worry, it isn't your typical boring one!</p>

            <div className="border-2 border-solid border-black px-4 mt-8">
                <p>You want to save the below image on your computer. Suggest a suitable way for the computer to store such an image in its memory.</p>

                <p className="mt-8">Hint: Try applying the concepts of storing a black and white image discussed above.</p>
                <div className="text-center my-8">
                  <Image src={ColorfulImage} />
                </div>
            </div>

            <p className="border-2 border-solid border-black px-4 my-8">Mail your assignment answers to rahul@zine.co.in and contact us in communication channel with doubts.</p>
          </div>
        </div>
    )
}

export default MemoryBinary;