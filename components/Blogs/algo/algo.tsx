import React from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import JackyChan from "../../../images/blog/algo/home/jackychan.jpg";
import MemoryBinary from "../../../images/blog/algo/home/memory-binary.png";
import AlgoAlgo from "../../../images/blog/algo/home/algo-algo-everywhere.jpg";
import Pseudo from "../../../images/blog/algo/home/pseudo.jpg";
import NotToday from "../../../images/blog/algo/home/not-today.jpg";
import Conditional from "../../../images/blog/algo/home/conditional.jpg";
import Array from "../../../images/blog/algo/home/array.png";
import Arduino from "../../../images/blog/algo/home/arduino.jpg";

const Algo = () => {
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-blog-bg bg-no-repeat bg-center bg-cover bg-fixed py-96">
          </div>

          {/* Links to blogs */}
          <div className="mx-auto text-center text-2xl lg:text-3xl xl:text-4xl mt-8">
            BLOGS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8 mt-12 lg:mx-16 xl:mx-32">
            <div className="col-span-1 mb-8">
              <Image src={JackyChan} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Introduction</h1>
              <p className="h-52 md:h-52 lg:h-60 xl:h-48">Are you one of those who feel programming languages and algorithms are extremely hard to understand and you have no clue where to even start? Or you have a bit of an idea about them and want to expand your knowledge? Then you are in the right place.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/algo/intro">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1 mb-8">
              <Image src={MemoryBinary} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Concept of Memory and Binary</h1>
              <p className="h-52 md:h-52 lg:h-60 xl:h-48">Imagine yourself in a dark room having only one light bulb off. You will just have two options then, either to remain in the dark or turn on the lights. These “on” and “off” conditions can be treated as a signal for a person outside the window of the room.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/algo/memory-binary">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1 mb-8">
              <Image src={AlgoAlgo} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Algorithms</h1>
              <p className="h-52 md:h-52 lg:h-60 xl:h-48">Algorithms are everywhere! They are so incorporated and embedded in our daily lives that they completely escape our notice. How does your mom prepare her mouth-wateringly delicious dishes? She has a secret recipe. This recipe is an algorithm.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/algo/algorithms">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1 mb-8">
              <Image src={Pseudo} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Flowchart and Pseudocode</h1>
              <p className="h-40 md:h-56 lg:h-64 xl:h-56">As we said, during writing code, coders often can get confused due to the complexity of various algorithms. As a result, it becomes difficult to shape the flow of the program. Flowcharts are interesting tools to help us out and to get a broad idea of our code.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/algo/pseudo">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1 mb-8">
              <Image src={NotToday} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Variables, Datatypes and Operators</h1>
              <p className="h-40 md:h-56 lg:h-64 xl:h-56">Remember those questions in maths whose solutions started with the famous “Let’s assume the answer to be x ”. You used to dutifully solve tedious equations to find the value of x and this value came out different for different questions.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/algo/variables">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1 mb-8">
              <Image src={Conditional} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Conditional Statements</h1>
              <p className="h-40 md:h-56 lg:h-64 xl:h-56">Conditional statements are used for decision making. The process is similar to what we do in real life. If a specified condition is true then a particular block of statements is executed and if not then the other one. Notice how we used ‘if’ and ‘if not’ in the previous lines?</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/algo/conditional">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1 mb-8">
              <Image src={Array} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Functions and Arrays</h1>
              <p className="h-32 md:h-44 lg:h-56 xl:h-48">Remember scanf and printf discussed in the input and output section of this blog? We gave a hint that these were functions and briefly discussed what functions are. Let’s elaborate on that in this section. So, we know that when we write printf(“zine”), the computer gets a command to print “zine” on the screen.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/algo/array">Go to Blog</Link>
              </div>
            </div>
            <div className="col-span-1 mb-8">
              <Image src={Arduino} className="" width={2000} height={1200} />
              <h1 className="text-xl mb-4">Arduino and PS</h1>
              <p className="h-32 md:h-44 lg:h-56 xl:h-48">Throughout this journey, you learned a lot about bits and bytes, flowcharts and pseudocode, programming and it’s various core constructs, and finally algorithms. Well, we hope you did. Before wrapping up, there’s one very important thing that remains.</p>
              <div className="text-right text-red-600 underline">
                <Link href="/blogs/algo/arduino">Go to Blog</Link>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Algo;