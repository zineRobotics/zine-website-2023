import React from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import FlowChart from "../../../images/blog/algo/pseudo/image2.png";
import CanYouRead from "../../../images/blog/algo/pseudo/image1.jpg";

const Pseudo = () => {
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-algo-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
              <div className="pl-32 backdrop-blur-xl">
                <h1 className="text-white text-4xl font-bold">Flowchart and Pseudocode</h1>
              </div>
          </div>

          <div className="mx-32 mt-8 text-lg">
              <h1 className="text-4xl my-8">Flowchart</h1>
              <p>As we said, during writing code, coders often can get confused due to the complexity of various algorithms. As a result, it becomes difficult to shape the flow of the program. Flowcharts are interesting tools to help us out and to get a broad idea of our code. Let us understand them by making a flowchart of the GCD algorithm we discussed earlier.</p>
              <div className="text-center my-8">
                <Image src={FlowChart} />
              </div>

            <p>Try and understand the flowchart</p>
            <p>- After starting the program, we take two numbers as input from the user.</p>
            <p>- The blue diamond-shaped box is what is called a decision box or a conditional(more on conditionals later). Here we find whether the first number is the greater one or not. If not, we exchange the numbers and compare them again.</p>
            <p>- The yellow rectangle-shaped boxes are processing boxes. We find the remainder here and then again compare the remainder obtained with zero in the blue decision box.</p>
            <p>- If the remainder does not come out to be zero, we repeat the process by changing the value of A and B as in the algorithm.</p>
            <p>- After a certain number of repeated processes, the remainder becomes zero and the smaller number at that moment of time is our G.C.D.</p>

            <p className="text-center my-8">Try tracing the flowchart for our example of 6 and 8. Now,</p>

            <div className="text-center my-8">
              <Image src={CanYouRead} />
            </div>

            <h1 className="text-4xl my-8">Pseudocode</h1>
            <p>Pseudocode is the third and the last step after writing an algorithm and drawing the flowchart which is suggested before we start actual coding. Pseudocode is an informal way of programming that does not require any strict programming language syntax or underlying technological considerations. It is used for creating an outline or a rough draft of the actual program. We will use the same G.C.D. example to maintain a flow.</p>
            <p className="mt-8">Input a and b</p>

            <div className="bg-gray-200 rounded-lg text-gray-700 px-16 my-4 py-4 border-2 border-solid border-black">
              <p>if(a is greater than b)</p>
              <p className="ml-12">c = Remainder of a/b</p>
              <p>else</p>
              <p className="ml-12">a=b and b=c</p>
            </div>
            <div className="bg-gray-200 rounded-lg text-gray-700 px-16 my-4 py-4 border-2 border-solid border-black">
              <p>if(c is 0)</p>
              <p className="ml-12">Print b is the g.c.d.</p>
              <p>else</p>
              <p className="ml-12">Go to step 1</p>
            </div>

            <p>You are advised to dry run(complete this link) this pseudo code and try to visualize it. The pseudo-code will become more clear once we move further in the blog.</p>

            <p className="border-2 border-solid border-black px-4 my-8">Mail your assignment answers to rahul@zine.co.in and contact us in communication channel with doubts.</p>

            </div>
        </div>
    )
}

export default Pseudo;