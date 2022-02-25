import React from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import BasicFunction from "../../../images/blog/algo/array/image26.gif";
import CopyPasteMeme from "../../../images/blog/algo/array/image26.gif";
import FunctionMachineMeme from "../../../images/blog/algo/array/image24.gif";
import SimpleFunctionCode from "../../../images/blog/algo/array/image2.png";
import Sum1015 from "../../../images/blog/algo/array/image17.png";
import Output25 from "../../../images/blog/algo/array/image19.png";
import CalcFunction from "../../../images/blog/algo/array/image20.png";
import FunctionWithArguments from "../../../images/blog/algo/array/image7.png";
import ArrayFirst from "../../../images/blog/algo/array/image25.png";
import ArraySecond from "../../../images/blog/algo/array/image18.gif";
import Indexing from "../../../images/blog/algo/array/image19.png";
import TooManyPrintf from "../../../images/blog/algo/array/image11.png";
import ArrayWithLoop from "../../../images/blog/algo/array/image8.png";
import LinearSearch from "../../../images/blog/algo/array/image23.gif";
import GeeksForGeeks from "../../../images/blog/algo/array/image21.jpg";
import Bubble1 from "../../../images/blog/algo/array/image10.jpg";
import Bubble2 from "../../../images/blog/algo/array/image5.jpg";
import Bubble3 from "../../../images/blog/algo/array/image14.jpg";
import Bubble4 from "../../../images/blog/algo/array/image16.jpg";
import Bubble5 from "../../../images/blog/algo/array/image15.jpg";
import Bubble6 from "../../../images/blog/algo/array/image6.jpg";
import Bubble7 from "../../../images/blog/algo/array/image13.jpg";
import Bubble8 from "../../../images/blog/algo/array/image1.jpg";
import Bubble9 from "../../../images/blog/algo/array/image22.jpg";
import Bubble10 from "../../../images/blog/algo/array/image12.jpg";
import Bubble11 from "../../../images/blog/algo/array/image4.jpg";
import Bubble12 from "../../../images/blog/algo/array/image3.jpg";

const Arrays = () => {
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-algo-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
              <div className="pl-32 backdrop-blur-xl">
                <h1 className="text-white text-4xl font-bold">Functions and Arrays</h1>
              </div>
          </div>

          <div className="mx-32 mt-8 text-lg">
            <h1 className="my-8 text-3xl">Functions</h1>

            <p>Remember scanf and printf discussed in the input and output section of this blog? We gave a hint that these were functions and briefly discussed what functions are. Let’s elaborate on that in this section. So, we know that when we write printf(“zine”), the computer gets a command to print “zine” on the screen. Behind the scenes, a separate code was written while designing the C language according to which the special task of printing is assigned whenever we write or call a print function in our code i.e. to display something on the screen. “Calling” a function is the technical term to use a function.</p>

            <div className="text-center my-8">
              <Image src={BasicFunction} />
            </div>

            <p>Similar to printf() we can also define our own functions that do some specific tasks and can be used simply by calling them as we call print. This is an integral part of programming. Let us start with a definition.</p>

            <p className="my-8">A function is a block of statements that performs a specific task. Let’s say you are writing a program and you need to perform the same task in that program more than once. In such a case you have two options:</p>

            <p>a) Use the same set of statements every time you want to perform the task.A lot of Ctrl + C - Ctrl + V !</p>

            <div className="text-center my-8">
              <Image src={CopyPasteMeme} />
            </div>

            <p>b) Or, create a function to perform that task and just call it every time you need to perform that task.</p>

            <p className="my-8">Using option (b) is easier and concise, and a good programmer always uses functions while writing code. In other words,</p>

            <p>Functions are used because of the following reasons –</p>
            <p>a) To improve the readability of code.</p>
            <p>b) Improves the reusability of the code, the same function can be used in any program rather than writing the same code from scratch.</p>
            <p>Now let us try to understand how they actually work. In essence, functions accept some input (called arguments), do some processing on this input, through the block of statements present, and give an output.</p>

            <div className="text-center my-8">
              <Image src={FunctionMachineMeme} />
            </div>

            <p>Let's see an example of a simple function that takes two numbers and prints their sum.</p>

            <div className="text-center my-8">
              <Image src={SimpleFunctionCode} />
            </div>
            
            <p>We know a,b are the arguments to the function. But what is this “void”? This denotes the return type of the function. We can return values in a function. Essentially, it means that if we try to assign the function value to a variable as</p>

            <p className="my-8">variable = sum(a,b);</p>

            <p>This is the type of variable required. “Void” in this case denotes no value is returned and hence the function cannot be assigned to a variable. The return type can be int, char, float, or any other data type.</p>

            <p className="mt-8">So when we call or sum function as</p>
            <div className="text-center my-8">
              <Image src={Sum1015} />
              <Image src={Output25} />
            </div>

            <p>We totally understand that the concepts of functions can be confusing sometimes, so we suggest you visit this video.(complete the link)</p>
            <p>Try to find out the output of the following codes.</p>

            <div className="text-center my-8">
              <Image src={CalcFunction} />
            </div>

            <p>A function calc() is made outside the main function. The value returned from the function calc() is printed again in the main.</p>

            <p className="my-8">Try doing a similar problem using the concept of arguments.</p>

            <div className="text-center my-8">
              <Image src={FunctionWithArguments} />
            </div>

            <p>Try sketching the flow(not flowchart) of this program showing the function calls.</p>

            <h1 className="my-8 text-3xl">Concept of Arrays</h1>

            <p>We have already learned about variables and how we use them to store various data during the course of programming. Now think of a problem where we need to store many variables(of same data type) for ex:- adding 10 natural numbers. Here we need to store them in a new data type called an array.</p>

            <p className="my-8">Taking the reference from the variables part of the blog, recall that different variables are randomly distributed in the RAM. Arrays have special features where all the variables of the same array are stored in a sequence as shown in the figure below. We will discuss further the use and importance of this property.</p>

            <div className="text-center my-8">
              <Image src={ArrayFirst} />
              <Image src={ArraySecond} />
            </div>

            <p className="font-bold">An array is a contiguous memory location that contains a group of elements, such as an integer or string. Arrays are commonly used in computer programs to organize data so that a related set of values can be easily sorted or searched.</p>

            <p className="my-8">Instead of declaring individual variables, such as number0, number1, ..., and number99, you declare one array variable such as numbers and use numbers[0], numbers[1], and ..., numbers[99] to represent individual variables. A specific element in an array is accessed by an index.</p>

            <p className="mb-8">All arrays consist of contiguous memory locations. The first box corresponds to the first element and the last block to the last element.</p>

            <div className="text-center my-8">
              <Image src={Indexing} />
            </div>

            <h1 className="my-8 text-2xl">Declaring Arrays</h1>

            <p>To declare an array in C, a programmer specifies the type of the elements and the number of elements required by an array as follows −</p>

            <div className="bg-gray-200 rounded-lg text-gray-700 px-16 my-4 py-4 border-2 border-solid border-black">
              <p>type arrayName [array size];</p>
            </div>

            <p>This is called a single-dimensional array. The array size must be an integer constant greater than zero and the type can be any valid C data type. For example, to declare a 10-element array called the balance of type double, use this statement −</p>

            <div className="bg-gray-200 rounded-lg text-gray-700 px-16 my-4 py-4 border-2 border-solid border-black">
              <p>int balance [10];</p>
            </div>

            <p>To explore more about arrays click on the topics below:-</p>

            <p className="text-red my-8">Add links here.</p>

            <p>Can we find out the address for a certain specified block in a 2-D array if we are given the address of its first data(first-row first column) and its data type? Think of a generalized formula.</p>
            <p>Can we find out the address for a certain specified block in a 2-D array if we are given the address of its first data(first-row first column) and its data type? Think of a generalized formula.</p>

            <div className="text-center my-8">
              <Image src={TooManyPrintf} />
            </div>

            <p>Above is a simple example of printing the first 10 natural numbers. Now it’s your task to print the first 1000 natural numbers. Can you? Of course, you can! But will you do it with the same method? Oh common guys TIME IS MONEY!!</p>

            <p className="my-8">Arrays save us from the tedious task of declaring too many variables and using multiple statements. Wanna know how?</p>

            <div className="text-center my-8">
              <Image src={ArrayWithLoop} />
            </div>
            <p>See how we can solve the same problem in 3-4 lines which took 10-12 lines without arrays. In arrays, we just need to define the array variable name. Its value is directly accessed by its index. Using loops with arrays can do wonders! We can store thousands of elements in arrays and access them with just one simple loop directly by its index.</p>

            <h1 className="text-2xl my-8">Limitation of the array over variables</h1>

            <p>All the elements in an array should have the same data type whereas when we define a number of variables, we can have a variety of elements having different data types. Let us see this by an example:</p>

            <p>int a[10]; Here we can store 10 different variables in a but the constraint being they all must be of the same data type i.e. int.</p>

            <p className="font-bold text-xl">int a; float b; char c;</p>

            <p>Here we have reserved three blocks of memory but are free of the constraint we had in our array example. We can store 3 variables of different data types.</p>

            <p className="my-8">We have learned the basic and necessary tools used to develop and think of an algorithm to get a solution. Now let's implement that knowledge.</p>

            <p>How are contacts in our mobile phones sorted according to names? How come we just type the names in the search bar and it pops up from the long list? All these tasks are accomplished using the most widely used algorithms - Searching and Sorting algorithms. These algorithms are quite interesting and can handle simple tasks of sorting and searching files in your pc to complex computing problems. In this era of the digital economy, data is the new mineral oil. And anything that helps in managing data is highly valuable, so are searching and sorting algorithms. Let’s learn some of the basic searching and sorting algorithms:</p>

            <h1 className="text-3xl my-8">Searching</h1>

            <p>Suppose we are given a data set of integers in an array and we need to find out whether a certain integer is present in it or not. One simple way would be to compare each and every data with our integer that you all must have thought till now. Let us now look at various algorithms and your task would be to find out which one is the most effective and time-efficient.</p>

            <p className="my-8">We will start with the simplest one which is a linear search.</p>

            <p>Linear search is a very simple search algorithm. In this type of search, a sequential search is made over all items one by one. Every item is checked and if a match is found then that particular item is returned, otherwise the search continues till the end of the data collection.</p>

            <div className="text-center my-8">
              <Image src={LinearSearch} />
            </div>

            <h1 className="text-2xl my-8">Algorithm:</h1>

            <p>1. Compare the first element with the data.</p>
            <p>2. If the first element is equal to the data i.e. A[0], type data found and exit.</p>
            <p>3. If the first element is not equal to the data, go to the next element i.e. A[1].</p>
            <p>4. Repeat the process until data does not match with any of the elements.</p>
            <p>5. If we reach the end element during this process and A[last element] is not equal to data, then print “data not found”.</p>
            <p>6. Exit. There is a more time-efficient algorithm for searching known as binary search.</p>

            <h1 className="text-3xl my-8">Sorting</h1>

            <p>A Sorting Algorithm is used to rearrange a given array or list elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of elements in the respective data structure.</p>

            <p className="my-8">For example, The below list of characters is sorted in increasing order of their ASCII values. That is, the character with lesser ASCII value will be placed first than the character with higher ASCII value.</p>

            <div className="text-center my-8">
              <Image src={GeeksForGeeks} />
            </div>

            <p>There are many sorting algorithms. Some commonly used have been mentioned here:</p>

            <h1 className="text-2xl my-8">Bubble Sort</h1>

            <p>Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. Let us look at it with the help of an example. Let the array to be sorted is</p>

            <div className="text-center my-8">
              <Image src={Bubble1} />
            </div>

            <p>Bubble sort starts with the very first two elements, comparing them to check which one is greater.</p>

            <div className="text-center my-8">
              <Image src={Bubble2} />
            </div>

            <p>In this case, value 33 is greater than 14, so it is already in sorted locations. Next, we compare 33 with 27.</p>

            <p className="mt-8">We find that 27 is smaller than 33 and these two values must be swapped.</p>

            <div className="grid grid-cols-2 my-8">
              <div className="col-span-1 text-center">
                <Image src={Bubble3} />
              </div>
              <div className="col-span-1 text-center">
                <Image src={Bubble4} />
              </div>
            </div>
            <p>The new array should look like this-</p>
            <div className="text-center my-8">
              <Image src={Bubble5} />
            </div>

            <p>Next, we compare 33 and 35. We find that both are already sorted positions.</p>

            <div className="text-center my-8">
              <Image src={Bubble6} />
            </div>

            <p>Then we move to the next two values, 35 and 10.</p>

            <div className="text-center my-8">
              <Image src={Bubble7} />
            </div>

            <p>We know then that 10 is smaller than 35. Hence they are not sorted.</p>

            <div className="text-center my-8">
              <Image src={Bubble8} />
            </div>

            <p>We swap these values. We find that we have reached the end of the array. After one iteration, the array should look like this −</p>

            <div className="text-center my-8">
              <Image src={Bubble9} />
            </div>

            <p>To be precise, we are now showing how an array should look like after each iteration. After the second iteration, it should look like this −</p>

            <div className="text-center my-8">
              <Image src={Bubble10} />
            </div>

            <p>Notice that after each iteration, at least one value moves at the end.</p>

            <div className="text-center my-8">
              <Image src={Bubble11} />
            </div>

            <p>And when there's no swap required, bubble sorts learns that an array is completely sorted.</p>
            
            <div className="text-center my-8">
              <Image src={Bubble12} />
            </div>

            <p>Another example for better understanding is given below, try to visualize it without explanation.</p>

            <p className="my-8">Eg: We have a simple array [5, 3, 8, 2, 1, 4]</p>

            <p>We have some more algorithms for sorting such as selection sort and insertion sort.(complete the links)</p>

            <p className="border-2 border-solid border-black px-4 my-8">Mail your assignment answers to rahul@zine.co.in and contact us in communication channel with doubts.</p>
          </div>
        </div>
    )
}

export default Arrays;