import React from "react";
import Image from "next/image";
import DifferentialDrive from "../../../images/blog/bme/drive-systems/image1.gif";
import ICR from "../../../images/blog/bme/drive-systems/image2.png";
import WheelDirection from "../../../images/blog/bme/drive-systems/image3.jpg";
import SkidSteering from "../../../images/blog/bme/drive-systems/image4.png";
import SynchronousDrive1 from "../../../images/blog/bme/drive-systems/image5.png";
import SynchronousDrive2 from "../../../images/blog/bme/drive-systems/image6.png";
import HolonomicDrive1 from "../../../images/blog/bme/drive-systems/image7.png";
import HolonomicDrive2 from "../../../images/blog/bme/drive-systems/image8.png";
import MecanumDrive from "../../../images/blog/bme/drive-systems/image9.gif";
import MecanumDriveAxis from "../../../images/blog/bme/drive-systems/image10.png";
import Link from "next/link";


const DriveSystems = () => {
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
              <div className="pl-32 backdrop-blur-xl">
                <h1 className="text-white text-4xl font-bold">Drive Systems</h1>
              </div>
          </div>

          <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
            <h1 className="text-3xl my-8">DIFFERENTIAL DRIVE</h1>
            <div className="mt-8 text-center">
                <Image src={DifferentialDrive} />
            </div>

            <p>The velocity difference between the two wheels drives the robot in any required path and direction. In this figure: </p>
            <ul>
                <li>- N = no. of rotations per minute.</li>
                <li>- The angular velocity of the left wheel is greater due to which it covers more path as compared to the right wheel resulting in the curved motion of the center of mass of the system.</li>
                <li>- ICR (instantaneous center of rotation) - It is the point such that the velocity vectors are perpendicular to the line joining the point to the wheel.</li>
            </ul>
            <div className="mt-8 text-center">
                <Image src={ICR} />
            </div>
            <div className="mt-8 text-center">
                <Image src={WheelDirection} />
            </div>

            <p>The direction of wheels(blue arrow) is directly proportional to the velocity vector and the red arrow vector shows the resultant direction of the bot.</p>

            <h1 className="text-3xl my-8">SKID STEERING</h1>
            <ul>
                <li>- Unlike differential drive, the castor is replaced with two driving wheels.</li>
                <li>- The wheels on the same side of the chassis have the same velocity.</li>
                <li>- Some of the wheels skid during the course of motion, so given the name skid steering(the reason has been described below).</li>
            </ul>
            <div className="mt-8 text-center">
                <Image src={SkidSteering} />
            </div>

            <h1 className="text-3xl my-8">SYNCHRONOUS DRIVE</h1>
            <div className="mt-8 text-center">
                <Image src={SynchronousDrive1} />
            </div>
            <p>The synchro drive system is a two motor, three/four wheeled drive.</p>
            <p>The working of synchronous drive is explained below :</p>
            <ul>
                <li>- One motor rotates all wheels to produce motion.</li>
                <li>- The other motor turns all wheels to change direction.</li>
                <li>- The wheels are connected with a belt to provide the same motion</li>
            </ul>
            <div className="mt-8 text-center">
                <Image src={SynchronousDrive2} />
            </div>

            <h1 className="text-3xl my-8">HOLONOMIC DRIVE</h1>
            <p>The controllable degrees of freedom is equal to total degrees of freedom. In simple terms, it is not bound to go in any one specified direction and <b>can traverse anywhere in the x-y plane/</b></p>
            <p>An Omni wheel is generally suggested for the holonomic drives but mecanum wheels can also fit the desired conditions of holonomic systems.</p>
            <div className="mt-8 text-center">
                <Image src={HolonomicDrive1} />
            </div>
            <div className="mt-8 text-center">
                <Image src={HolonomicDrive2} />
            </div>

            <h1 className="text-3xl my-8">MECANUM DRIVE</h1>
            <div className="mt-8 text-center">
                <Image src={MecanumDrive} />
            </div>
            <p>Mecanum drive is also a type of holonomic drive i.e., the robot can move in any direction by keeping the x,y axis of the robot constant. Try to notice the constant (only shifts parallel) x-y axis in the gif above. </p>
            <p>You should visit this <a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=VYl4cleQwfk">video</a> and know the importance of friction in the movement of wheels.
            </p>
            <div className="mt-8 text-center">
                <Image src={MecanumDriveAxis} />
            </div>
            <p>All the wheels are rotated towards the front direction and the resultant vector force direction occurs due to the design of the mecanum wheel. If we add all the frictional force vectors, we will get a net forward force resulting in the forward movement of the chassis.</p>
            <p className="mt-8">How will we harness the different energy from different power sources to make our robot do the work we want? Surely the wheels won’t power themselves up. The answer to this lies in actuators!</p>
          
          </div>
        </div>
    )
}

export default DriveSystems;