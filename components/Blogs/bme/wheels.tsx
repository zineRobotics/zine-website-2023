import React from "react";
import Image from "next/image";
import SimpleWheel from "../../../images/blog/bme/wheels/image1.png";
import CastorWheel from "../../../images/blog/bme/wheels/image2.png";
import OmniWheel1 from "../../../images/blog/bme/wheels/image3.png";
import OmniWheel2 from "../../../images/blog/bme/wheels/image4.png";
import MecanumWheel from "../../../images/blog/bme/wheels/image5.jpg";
import RobotTracks from "../../../images/blog/bme/wheels/image6.png";


const Wheels = () => {
    return (
        <div className="text-black bg-white w-screen">
          <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
              <div className="pl-32 backdrop-blur-xl">
                <h1 className="text-white text-4xl font-bold">Wheels</h1>
              </div>
          </div>

          <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
            <h1 className="text-3xl my-8">Simple / Fixed wheel</h1>
            <p>This wheel has one degree of freedom and can traverse Front or Reverse. The center of the wheel is fixed to the robot chassis. The angle between the robot chassis and wheel plane is constant.</p>
            <div className="mt-8 text-center">
                <Image src={SimpleWheel} />
            </div>

            <h1 className="text-3xl my-8">Castor Wheel</h1>
            <p>These castor wheels contain a spherical metal or nylon ball (or any hard spherical material these days) positioned within a holder. The ball has 360° of freedom and is normally used to balance a robot. The disadvantage is that these castors usually have high traction and require more power to push and support the driving wheels.</p>
            <p>They are also not suitable for uneven, dusty, and greasy surfaces.</p>
            <div className="mt-8 text-center">
                <Image src={CastorWheel} />
            </div>

            <h1 className="text-3xl my-8">Omni Wheel</h1>
            <p>These are used for a robot that requires multi-directional movement. These wheels are normal wheels with passive wheels (rollers) attached around the circumference of the center wheel. The small wheels are attached in such a way that the axis of the small wheels is perpendicular to the axis of the bigger center wheel which makes the wheel rotate even parallel to its own axis.</p>
            <div className="mt-8 text-center grid grid-cols-2 gap-4">
                <Image src={OmniWheel1} />
                <Image src={OmniWheel2} />
            </div>

            <h1 className="text-3xl my-8">Mecanum Wheel</h1>
            <p>Mecanum wheel is also a type of Omni wheel with the exception that rollers are attached at a 45° angle around the circumference of another bigger wheel.</p>
            <div className="mt-8 text-center">
                <Image src={MecanumWheel} />
            </div>

            <h1 className="text-3xl my-8">Robot Tracks</h1>
            <p>They are an excellent alternative to wheels for a robot that needs to navigate rough uneven terrain. Robot tracks also work well on soft surfaces like sand or snow since they evenly distribute the weight of a robot.</p>
            <div className="mt-8 text-center">
                <Image src={RobotTracks} />
            </div>
          </div>
        </div>
    )
}

export default Wheels;