import React from "react";
import Image from "next/image";
import BmeIntro from "../../../images/blog/bme/intro/image1.gif";

interface blogPosted {
  title: string; // date
  cardTitle: string; // heading
}

const Intro = () => {
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
              <div className="pl-32 backdrop-blur-xl">
                <h1 className="text-white text-4xl font-bold">Introduction</h1>
              </div>
          </div>

          <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
              <div className="mt-8 text-center">
                <Image src={BmeIntro} width={500} height={400}/>
              </div>

              <p className="mt-8">Engineers get to take the credit for designing the robots to do what they are programmed for. As all types of engineers work together, they build a complete robot. Mechanical engineers are responsible for designing the robot’s structure, joint mechanisms, bearings, heat transfer characteristics, etc. </p>
              <p className="mt-8">Mechanical Engg. is an integral part of robotics. It ranges from knowing why triangles are used in cardboard layers to finding a Planet’s surface gravity and terrain characteristics; to designing a Space rover’s drive system. Because the whole world isn’t a simulation, we need a device which can interact with the environment and are called bots.</p>
              <p>Here we give you a basic introduction to Mechanical Engg. for robotics to jumpstart your curiosity.</p>

              <p className="my-8"><b>So how does one design a robot? We begin with a blueprint.</b></p>

              <p>Before getting the tools ready we have to plan on how to solve the problem at hand.</p>
              <p>Analyzing the problem helps generate insights into what possible solutions there can exist. Once the plan is ready, we design the bot, choose parts & materials that we may need for the bot and run simulations to test our theoretical design. Tested results are then validated using a physical prototype.</p>

              <p className="mt-8">There are many different parts and materials available for building bots or anything in general. We will be discussing a few to help you be familiar with the world of robotics. </p>
          </div>
        </div>
    )
}

export default Intro;