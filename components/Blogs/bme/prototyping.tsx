import React from "react";
import Image from "next/image";
import Printing from "../../../images/blog/bme/prototyping/image1.gif";


const Prototyping = () => {
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
              <div className="pl-32 backdrop-blur-xl">
                <h1 className="text-white text-4xl font-bold">Prototyping</h1>
              </div>
          </div>

          <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
            <p>The first physical build of putting those parts together to be able to complete the task is your prototype. A prototype helps you find out the factors you may have missed while working on paper and pushes development ahead as you can learn more about the project while in testing.</p>
            <p>Let’s understand the process, by making a bot which is capable of traversing through a horizontal plane surface.</p>

            <h1 className="text-3xl my-8">IDEATION</h1>
            <p>Wood is the perfect for both as it's cheap & easy to work with [easily machinable]. So we can design the main body from wood using different tools [like a drill machine, hack saw, wood cutter, metal cutter, grinder, filing tool and workbench to hold wood piece] and then simply add 2 wheels with DC motors (Differential drive) and a castor (support wheel).</p>
            
            <h1 className="text-3xl my-8">FABRICATION & MACHINING</h1>
            <p>Fabrication is building the bot from scratch rather than using specifically designed parts, i.e. I could have proper premade parts for the bot and make one, but there are cons to this approach. Any changes needed we would not be able to make. We can still cut chop and drill, but that’s the final bot you are talking about. It would make the body structurally weak and not reliable, which is not what we want. </p>
            <p className="mt-8">When testing and building the bot, a sandbox approach helped us build the ‘perfect bot’ for our requirements. This means we now have the final dimensions and design requirements for the bot. We can now go for something permanent, like a unibody design, or design our parts on CAD, can help save weight and material while maintaining required strength. The designed parts can now be made using tools like 3D printing or milling. </p>

            <h1 className="text-3xl my-8">3D PRINTING</h1>
            <div className="mt-8 text-center">
                <Image src={Printing} />
            </div>

            <p>What 3D-printing allows us to do is a bottom-up approach, in which the part is made exactly to specification using specialized automated machines. It uses less material and requires minimal to no post processing or finishing. </p>
            <p className="mt-8">When we build bots (for example) we don’t always find the parts which are needed in our build. So, a 3D-printer allows us to customize/minimize the number of parts used by designing our CAD models and printing them.</p>
          </div>
        </div>
    )
}

export default Prototyping;