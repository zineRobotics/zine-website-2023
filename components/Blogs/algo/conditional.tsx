import React from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import FirstImage from "../../../images/blog/algo/conditional/image15.jpg";
import FlowchartCondition from "../../../images/blog/algo/conditional/image9.jpg";
import Code1 from "../../../images/blog/algo/conditional/image2-1.png";
import Code2 from "../../../images/blog/algo/conditional/image2-2.png";
import IfelseCode1 from "../../../images/blog/algo/conditional/image4-1.png";
import IfelseCode2 from "../../../images/blog/algo/conditional/image4-12.png";
import IfelseCode3 from "../../../images/blog/algo/conditional/image4-12.png";
import Hello1 from "../../../images/blog/algo/conditional/image8-1.png";
import Hello2 from "../../../images/blog/algo/conditional/image8-12.png";
import Hello3 from "../../../images/blog/algo/conditional/image8-2.png";
import IfElse1 from "../../../images/blog/algo/conditional/image17-1.png";
import IfElse2 from "../../../images/blog/algo/conditional/image17-2.png";
import QuizTime from "../../../images/blog/algo/conditional/image10.gif";
import QuizCode from "../../../images/blog/algo/conditional/image7.png";
import Printf10 from "../../../images/blog/algo/conditional/image16.png";
import BikeLoop from "../../../images/blog/algo/conditional/image5.gif";
import LoopFlowchart from "../../../images/blog/algo/conditional/image3.png";
import LoopCode from "../../../images/blog/algo/conditional/image14.png";
import NaturalNumbers10 from "../../../images/blog/algo/conditional/image11.png";
import Gif from "../../../images/blog/algo/conditional/image18.gif";
import Candies from "../../../images/blog/algo/conditional/image13.png";

const Conditional = () => {
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-algo-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
              <div className="pl-32 backdrop-blur-xl">
                <h1 className="text-white text-4xl font-bold">Conditional Statements</h1>
              </div>
          </div>

          <div className="mx-32 mt-8 text-lg">

            <p className="my-8">As we discussed in the flowchart (the diamond box), conditional statements are used to define the flow of the program. It is very well explained by this image.</p>
            
            <div className="text-center my-8">
              <Image src={FirstImage} />
            </div>

            <p>Conditional statements are used for decision making. The process is similar to what we do in real life. If a specified condition is true then a particular block of statements is executed and if not then the other one. Notice how we used ‘if’ and ‘if not’ in the previous lines? That’s what actually ‘if-else’ statements are in the world of programming.</p>

            <p className="my-8 font-bold">Now that we are approaching the first real programming construct of this blog, one thing you must understand that even though our general syntaxes will be following the C language, these constructs are common to all programming languages in different forms.</p>

            <div className="text-center my-8">
              <Image src={FlowchartCondition} />
            </div>

            <h1 className="my-8 text-3xl">If statement:</h1>

            <p>An “if statement” is a well known conditional statement in programming. In an, if statement a condition is given inside the parentheses (), and the code tests and evaluates the condition, and if the condition is true then the if block is executed otherwise not.</p>

            <p className="my-8">Syntax:</p>

            <div className="bg-gray-200 rounded-lg text-gray-700 px-16 my-4 py-4 border-2 border-solid border-black">
              <p>if(condition)</p>
              <p>{`{`}</p>
              <p className="ml-12">"Code to be executed if the condition is true."</p>
              <p>{`}`}</p>
            </div>

            <p>Let's take an example:</p>

            <div className="text-center my-8">
              <Image src={Code1} />
            </div>
            <div className="text-center my-8">
              <Image src={Code2} />
            </div>

            <p>If the condition is true the code inside the ‘if block’ will be executed and “Hello World” will be printed. (printf is used to print something to the user in C).</p>

            <p className="my-8">The if statements are usually used in 4 forms if, if-else, if-else ladder, and nested if.</p>

            <p>We have understood the If statement above,</p>

            <h1 className="my-8 text-3xl">If-else statement:</h1>

            <p>In if-else statements, the condition is tested and evaluated and if it is true then the block inside the if statement is executed and if it is false then instead of doing nothing, the block inside the else statement is executed.</p>

            <p className="my-8">Let’s take an example. Say we have to check whether a given person is above 18 or not and print “Person is above 18” if he/she is and “Person is not above 18” if not.</p>

            <p className="italic">Remember: ‘scanf’ is used to take input from users in the C programming language.</p>

            <div className="text-center my-8">
              <Image src={IfelseCode1} />
            </div>
            <div className="text-center my-8">
              <Image src={IfelseCode2} />
            </div>

            <p>In the above example, the age input given by the user is 12 which is less than 18. So the condition (age{">"}=18) is false and its block of code is not executed. So the else condition is true and its block of code is executed.</p>

            <div className="text-center my-8">
              <Image src={IfelseCode1} />
            </div>
            <div className="text-center my-8">
              <Image src={IfelseCode3} />
            </div>

            <p>When age 20{">"}18, if condition is true and its corresponding block of code is executed.</p>

            <h1 className="my-8 text-3xl">Nested if:</h1>

            <p>A “nested if” is an if statement that is the target of another if statement. In other words, nested if statements have an if statement inside another if statement.</p>

            <div className="bg-gray-200 rounded-lg text-gray-700 px-16 my-4 py-4 border-2 border-solid border-black">
              <p>if(condition1)</p>
              <p>{`{`}</p>
              <p className="ml-12">// Executes when condition1 is true</p>
              <p className="ml-12">{`{`}</p>
              <p className="ml-24">// Executes when condition2 is true</p>
              <p className="ml-12">{`}`}</p>
              <p>{`}`}</p>
            </div>

            <p>Try an example:</p>

            <div className="text-center my-8">
              <Image src={Hello1} />
            </div>
            <div className="text-center my-8">
              <Image src={Hello2} />
            </div>

            <p>What will be printed in this case? Will putting num=12 change the output?</p>

            <p className="my-8">Let's check it out.</p>

            <div className="text-center my-8">
              <Image src={Hello1} />
            </div>
            <div className="text-center my-8">
              <Image src={Hello3} />
            </div>

            <h1 className="my-8 text-3xl">If else ladder:</h1>
            <p>We know that the if-else statement allows us to check between two possibilities: when the condition is true and when it is false. But what if there are more than two possibilities. Here’s where the if-else ladder comes into place.</p>

            <div className="bg-gray-200 rounded-lg text-gray-700 px-16 my-4 py-4 border-2 border-solid border-black">
              <p>if(condition1)</p>
              <p>{`{`}</p>
              <p className="ml-12">// Executes when condition1 is true</p>
              <p>{`}`}</p>
              <p>else if(condition2)</p>
              <p>{`{`}</p>
              <p className="ml-12">// Executes when condition2 is true</p>
              <p>{`}`}</p>
              <p>else</p>
              <p>{`{`}</p>
              <p className="ml-12">// Executes when no condition is true</p>
              <p>{`}`}</p>
            </div>

            <p>Let’s have a look at an example. Suppose we want to grade students on the basis of their marks such that marks greater than 90 are given “A”, between 80 - 90 “B” and below 80 “C”. Don’t worry this is just an example, you won’t actually be graded this harshly.</p>

            <div className="text-center my-8">
              <Image src={IfElse1} />
            </div>
            <div className="text-center my-8">
              <Image src={IfElse2} />
            </div>

            <p className="font-bold">Not that if starting from the top, any condition is found to be true, the rest of the blocks won't be executed, even if their conditions come out to be true.</p>

            <p className="my-8">Understand this in the context of our example. Say a student has marks 85. Then first the, ”if condition” will be checked and found to be false and hence “A”, will be not printed. However, “B” will be printed as marks{`>`}80 being true. The code will skip the rest of the conditions, once one is found to be true.</p>

            <p className="font-bold">We have now understood the if construct. It is</p>

            <div className="text-center my-8">
              <Image src={QuizTime} />
            </div>

            <div className="text-center my-8">
              <Image src={QuizCode} />
            </div>

            <p className="font-bold">What should be the output of this code? Note the absence of {}. What difference does that make? (Do use the concepts of operators we learned previously)</p>

            <p className="my-8">Before moving to the next programming construct, consider a situation. Say you have to print your name 10 times. How will you do it? Simple, right? Use a print statement 10 times. What about 100 or 1000? Writing the same statement this many times would be a tedious task and a waste of valuable time. This is where loops come in.</p>

            <div className="text-center my-8">
              <Image src={Printf10} />
            </div>

            <p>Focus on the simplicity and shortness of code on the right side. This will not change much even when we increase the number of required print statements. Don’t worry we will discuss the syntax soon. Hence, loops make our work as a coder easier and are an integral part of any programming language.</p>

            <h1 className="my-8 text-3xl">Loops</h1>
            <div className="text-center my-8">
              <Image src={BikeLoop} />
            </div>

            <p>So, Loops are used to repeat a set of statements until a condition is met. Two kinds of loops are commonly used: the for loop and the while loop.</p>

            <h1 className="my-8 text-2xl">For Loop</h1>
            <p>Syntax of for loop:</p>

            <div className="bg-gray-200 rounded-lg text-gray-700 px-16 my-4 py-4 border-2 border-solid border-black">
              <p>for(initialization statement; condition ; update statement)</p>
              <p>{`{`}</p>
              <p className="ml-12">//statements inside the body of loop</p>
              <p>{`}`}</p>
            </div>

            <h1 className="my-8 text-2xl">How does it work?</h1>

            <div className="text-center my-8">
              <Image src={LoopFlowchart} />
            </div>
            <p>The flowchart given above gives us a basic idea about working for loops. For better understanding let’s see a few examples.</p>

            <div className="text-center my-8">
              <Image src={LoopCode} />
            </div>

            <p>- First, we initialized i=1, this initialization statement is executed only once. Here, we initialize the counter for the loop.</p>
            <p>- Then, the condition is evaluated. If the test expression is evaluated to true, statements inside the body of for loop are executed. Here the block of code: [printf(%d, i)] is executed as i=1 which is less than 10.</p>
            <p>- The next counter is updated. Here we have to increment i by +1.</p>
            <p>- Again, the test expression is evaluated. This process goes on until the test expression is false. When the test expression is false, the loop terminates. So all natural numbers from 1 to 10 are printed and when condition i{`<=`}10 becomes false i.e i=11, the loop terminates.</p>

            <h1 className="my-8 text-xl">Note:</h1>
            <div className="bg-gray-200 rounded-lg text-gray-700 px-16 my-4 py-4 border-2 border-solid border-black">
              <p>{`%d`}</p>
            </div>
            <p className="font-bold"> is a format specifier that is used to output an integer in C. Simply put, this is the syntax to print out an integer.</p>

            <h1 className="my-8 text-2xl">While Loop:</h1>
            <p>Syntax:</p>
            <div className="bg-gray-200 rounded-lg text-gray-700 px-16 my-4 py-4 border-2 border-solid border-black">
              <p> while(condition)</p>
              <p>{`{`}</p>
              <p className="ml-12">//statements</p>
              <p className="ml-12">//also change the value here that will make the condition false at some point.</p>
              <p>{`}`}</p>
            </div>

            <h1 className="my-8 text-2xl">How does it work?</h1>
            <p>Here the counter will be initialized before the while loop. A condition is specified in the parenthesis of the ‘while’ loop that will be checked before each iteration until it becomes false. Make sure to change the value of the counter in the while block otherwise it will become an infinite loop.</p>

            <p className="my-8">Let’s see some basic examples of while loop:</p>

            <div className="text-center my-8">
              <Image src={Gif} />
            </div>

            <p> Let's print the first 10 natural numbers using a while loop for which we earlier used the for loop.</p>

            <div className="text-center my-8">
              <Image src={NaturalNumbers10} />
            </div>

            <p className="font-bold">Note that any problem involving loops can be implemented using any of the two loops.</p>
            <p className="font-bold">Take a look at another illustration of the working of loops.</p>

            <div className="text-center my-8">
              <Image src={Candies} />
            </div>

            <p>The first step is the initialization. Buying candy through coins is the body of the loop and updating of the counter. Finally, when all coins are over, the loop terminates.</p>

            <p className="border-2 border-solid border-black px-4 my-8">Write pseudocode along with the flowchart to store the age of 10 people and count how many of them are above 30 years of age.
            <br />
            Suppose you are driving at a speed of 80km/h. After every 5 min, your speed decreases by 2km/h. Find the maximum distance you can cover at an average speed during the journey.
            <br />
            Write pseudocode for this problem and see how you can apply loops here.</p>

            <p className="border-2 border-solid border-black px-4 my-16">Mail your assignment answers to rahul@zine.co.in and contact us in communication channel with doubts.</p>
            </div>
        </div>
    )
}

export default Conditional;