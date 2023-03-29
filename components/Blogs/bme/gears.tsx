import React from "react";
import Image from "next/image";
import SpurGear from "../../../images/blog/bme/gears/image1.gif";
import WormGear from "../../../images/blog/bme/gears/image2.gif";
import HelicalGear from "../../../images/blog/bme/gears/image3.gif";
import DoubleHelicalGear from "../../../images/blog/bme/gears/image4.jpg";
import BevelGear from "../../../images/blog/bme/gears/image5.jpg";
import CompoundGear from "../../../images/blog/bme/gears/image6.gif";
import RackAndPinionGear from "../../../images/blog/bme/gears/image7.gif";
import GearRatio from "../../../images/blog/bme/gears/image8.png";
import SimpleGearTrain from "../../../images/blog/bme/gears/image9.gif";
import CompoundGearTrain from "../../../images/blog/bme/gears/image10.gif";
import EpicyclicGearTrain from "../../../images/blog/bme/gears/image11.gif";


const Gears = () => {
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
              <div className="pl-32 backdrop-blur-xl">
                <h1 className="text-white text-4xl font-bold">Gears</h1>
              </div>
          </div>

          <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
            <p>Gears are toothed, mechanical transmission elements used to transfer motion and power between machine components.</p>
            <br />
            <p>Gears are generally used for four different purpose</p>
            <ul>
              <li>- Changing speed of motion</li>
              <li>- Changing direction of motion</li>
              <li>- Changing rotation motion axis</li>
              <li>- To keep rotation synchronized</li>
            </ul>

            <h1 className="text-3xl my-8">Types Of Gears</h1>
            <h1 className="text-xl my-8">1. SPUR GEAR</h1>
            <p>Spur gears transmit power through shafts that are parallel. </p>

            <div className="mt-8 text-center">
                <Image src={SpurGear} />
            </div>

            <h1 className="text-xl my-8">2. WORM GEAR</h1>
            <p>The worm is analogous to a screw with a V-type thread, and the gear is analogous to a spur gear. Mainly worm gears are used when there is high torque and low-speed requirement.</p>

            <div className="mt-8 text-center">
                <Image src={WormGear} />
            </div>

            <h1 className="text-xl my-8">3. HELICAL GEAR</h1>
            <p>The teeth of a helical gear are set at an angle (relative to the axis of the gear) and take the shape of a helix. This allows the teeth to mesh gradually, starting as point contact and developing into line contact as the engagement progresses.</p>
            <p>Helical gear produces less noise as well as reduces load on each tooth as multiple teeth are always in mesh at a time.</p>

            <div className="mt-8 text-center">
                <Image src={HelicalGear} />
            </div>

            <h1 className="text-xl my-8">4. DOUBLE HELICAL GEAR</h1>
            <p>The axial thrusts are opposite one another, and the forces are contained in the gear and not transmitted to the bearing. Therefore, high loading capability and steady transmission are advantaged.</p>
            <p>Helical gear produces less noise as well as reduces load on each tooth as multiple teeth are always in mesh at a time.</p>

            <div className="mt-8 text-center">
                <Image src={DoubleHelicalGear} />
            </div>

            <h1 className="text-xl my-8">5. BEVEL GEAR</h1>
            <p>The teeth of a helical gear are set at an angle (relative to the axis of the gear) and take the shape of a helix. This allows the teeth to mesh gradually, starting as point contact and developing into line contact as the engagement progresses.</p>
            <p>Helical gear produces less noise as well as reduces load on each tooth as multiple teeth are always in mesh at a time.</p>

            <div className="mt-8 text-center">
                <Image src={BevelGear} />
            </div>

            <h1 className="text-xl my-8">6. COMPOUND GEAR</h1>
            <p>A compound gear is a number of gears fixed together axially. The gears that make up a compound gear usually differ in size and have a different number of teeth. This is useful if there is a need to speed up or slow down the final output.</p>

            <div className="mt-8 text-center">
                <Image src={CompoundGear} />
            </div>

            <h1 className="text-xl my-8">7. RACK AND PINION GEAR</h1>
            <p>Rack and pinion gears are used to convert rotation into linear motion. The flat, toothed part is the rack and the gear is the pinion.</p>

            <div className="mt-8 text-center">
                <Image src={RackAndPinionGear} />
            </div>

            <h1 className="text-3xl my-8">GEAR RATIO</h1>
            <p>Gear ratios are a core science behind almost every machine in the modern era. They can maximize power and efficiency and are based on simple mathematics. So, how do they work? In order to calculate the gear ratio of the two meshed gears we need to know either:</p>
            <ul>
                <li>- The <b>number of teeth</b> of both input and output gears</li>
                <li>- The <b>base diameter or radius</b> of both input and output gears</li>
            </ul>

            <p className="my-8"><b> GEAR RATIO = teeth in output gear / teeth in input gear</b></p>
            <div className="mt-8 text-center">
                <Image src={GearRatio} />
            </div>

            <h1 className="text-3xl my-8">GEAR TRAINS</h1>
            <p>Gear train is a system of gears which transmits motion from one shaft to another.</p>

            <h1 className="text-xl my-8">Simple Gear Trains</h1>
            <p>Here gear A is driving gear and gear B is driven gear.</p>
            <div className="mt-8 text-center">
                <Image src={SimpleGearTrain} />
            </div>

            <h1 className="text-xl my-8">Compound Gear Trains</h1>
            <p>Simply put when there are more than 2 gears in a gear train it's referred to as a compound gear train.</p>
            <div className="mt-8 text-center">
                <Image src={CompoundGearTrain} />
            </div>

            <h1 className="text-xl my-8">Epicyclic Gear Trains</h1>
            <p>Components of Epicyclic Gear -</p>
            <ul>
              <li><b>Sun Gear</b> - Yellow Color</li>
              <li><b>Planet Gears</b> - Blue Color</li>
              <li><b>Ring Gear</b> - Red Color</li>
              <li><b>Planet Carrier</b> - Green Color</li>
            </ul>

            <p className="mt-8">The Sun gear is where the input shaft power is given and the ring gear output shaft power is produced. The epicyclic gear train is useful for transmitting high-velocity ratio with a gear of moderate size and in less space. It is used in Automatic Gear Transmission Cars, and wind turbines.</p>
            <div className="mt-8 text-center">
                <Image src={EpicyclicGearTrain} />
            </div>
          </div>
        </div>
    )
}

export default Gears;