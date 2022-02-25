import React from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import JackyChan from "../../../images/blog/algo/home/image1.jpg";
import ComputerUnderstands from "../../../images/blog/algo/home/image3.png";
import BigImage from "../../../images/blog/algo/home/image2.png";

interface blogPosted {
  title: string; // date
  cardTitle: string; // heading
}

const Intro = () => {
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-algo-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
              <div className="pl-32 backdrop-blur-xl">
                <h1 className="text-white text-4xl font-bold">Introduction</h1>
              </div>
          </div>

          <div className="mx-8 md:mx-16 lg:mx-32 mt-8 text-lg">
            <div className="text-center my-8">
              <Image src={ComputerUnderstands} />
            </div>

            <p>Are you one of those who feel programming languages and algorithms are extremely hard to understand and you have no clue where to even start? Or you have a bit of an idea about them and want to expand your knowledge? Then you are in the right place. Grab a hot cup of coffee and enjoy an introduction to programming and algorithms and a peek behind the curtain on how they actually fall in place in our daily lives and in robotics. We will learn a lot about bits and bytes, flowcharts and pseudocode, programming and it’s various core constructs, and finally algorithms.</p>

            <div className="text-center my-8">
              <Image src={JackyChan} />
            </div>

            <p>Before all that, let us first understand why we should learn all this? What is the motivation behind all this?</p>

            <p className="my-8">Programming and algorithms are essential for everyone, across all fields. This will only be reemphasized as we move further. Some domains where they play a crucial part are Computational Statistics, Artificial Intelligence, Cloud Computing, Game Development, E-Commerce and Computer Vision.</p>

            <p>This is only a very small part of their applications. They are essential to so many other fields and hence it is necessary that everyone must know at least the basics of algorithm and programming. On that note, let’s dive right in.</p>

            <div className="text-center my-8">
              <Image src={BigImage} />
            </div>

            <p className="mb-8">Have you ever wondered how computers understand what we command them to do?</p>
          </div>
        </div>
    )
}

export default Intro;