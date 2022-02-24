import React from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import FirstImage from "../../../images/blog/bee/batteries/image4.gif";
import GreenLight from "../../../images/blog/bee/batteries/image3.gif";
import Drone from "../../../images/blog/bee/batteries/image10.gif";
import Electrons from "../../../images/blog/bee/batteries/image1.gif";
import Primary from "../../../images/blog/bee/batteries/image9.png";
import NickelCadmium from "../../../images/blog/bee/batteries/image2.png";
import NickelMetal from "../../../images/blog/bee/batteries/image7.png";
import LithiumIon from "../../../images/blog/bee/batteries/image8.png";
import Lipo from "../../../images/blog/bee/batteries/image5.jpg";
import LipoSpecs from "../../../images/blog/bee/batteries/image6.png";

const Batteries = () => {
    return(
        <div className="text-black bg-white w-screen">
          <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
              <div className="pl-32 backdrop-blur-xl">
                <h1 className="text-white text-4xl font-bold">Batteries</h1>
              </div>
          </div>

          <div className="mx-32 mt-8 text-lg">
            <div className="text-center my-8">
              <Image src={FirstImage} />
            </div>
            <div className="grid grid-cols-3">
              <div className="col-span-2">
                <p>If you are getting interested in robotics, you are going to need a lot of different types of batteries for different uses, you'll need to know how to use them and understand the various ratings and specs. There are primary, secondary batteries, there are Li-ion and Li-Po batteries and much more. Why do we need batteries? Answer is simple: imagine a world without batteries. All those portable devices we’re so dependent on would be so limited! We’d only be able to take our laptops and phones as far as the reach of their cables, making that new running app you just downloaded onto your phone fairly useless.</p>
              </div>
              <div className="col-span-1 text-center">
              <Image src={GreenLight} />
              </div>
            </div>

            <div className="grid grid-cols-9 gap-8 mt-8">
              <div className="col-span-2 text-center">
              <Image src={Drone} />
              </div>
              <div className="col-span-7">
                <p>And why so different types of batteries?</p>
                <p>Imagine you want to make a simple circuit, say just a simple led on and off or you want to build a drone for a drone racing competition. How does it all get powered up? Yes, we need batteries for that. For different applications, you may need different properties of a power source say for turning led on and off you just need a 2V or 3V battery with low current rates but drones motors require high current rates with a larger voltage supply. So different types of battery chemistry affect their application. Let us first study how batteries work.</p>
              </div>
            </div>

            <h1 className="text-3xl my-8">Working</h1>
            <div className="grid grid-cols-7">
              <div className="col-span-5">
              <p>We know that you have studied it all during your jee. Let's quickly revise it. A battery is a device that stores chemical energy, and converts it to electricity. All this is termed as electrochemistry and the system that underpins a battery is called an electrochemical cell. Each electrochemical cell consists of two electrodes separated by an electrolyte.</p>
              <p className="mt-8">So where does an electrochemical cell get its electricity from? To answer this question, we need to know what electricity is. Most simply, electricity is a type of energy produced by the flow of electrons. In an electrochemical cell, electrons are produced by a chemical reaction that happens at one electrode and then they flow over to the other electrode where they are used</p>
              </div>
              <div className="col-span-2 text-center">
              <Image src={Electrons} />
              </div>
            </div>

            <p>Let's now study some types of batteries.</p>

            <h1 className="text-3xl my-8">Types of batteries</h1>

            <h1 className="text-2xl my-8">Primary batteries</h1>

            <p>Primary cells are the ones that cannot be recharged and have to be discarded after the expiration of the lifetime. There are no fluids in the cells hence it is also called dry cells. Alkaline batteries and dry cells are examples of primary cells.</p>

            <div className="text-center my-8">
              <Image src={Primary} />
            </div>

            <p>Do you remember the redox reaction for this cell? It is a Zinc-Carbon dry cell.</p>

            <h1 className="text-2xl my-8">Secondary batteries</h1>

            <p>These are rechargeable batteries that can be used again and again. Think of some examples of secondary batteries.</p>
            <p>Yes, Lead Storage batteries that are commonly used in automobiles and Nickel Cadmium batteries.</p>

            <p className="my-8">Let’s know about some secondary batteries. But before that let’s study glossary about batteries.</p>

            <p>Specific Energy: The specific energy of a battery is a measure of how much energy a battery contains in comparison to its weight, and is typically expressed in Watt-hours/kilogram (W-hr/kg). Energy Density: The energy density of a battery is a measure of how much energy a battery contains in comparison to its volume, and is typically expressed in Watt-hours/liter (W-hr/l).</p>

            <p className="my-8"></p>

            <p className="mb-8">Specific Power: Specific power means how much power a battery can deliver in comparison to its weight.</p>

            <p>Charge/Discharge efficiency: The Charge/Discharge efficiency is the ratio of the energy you can take out of a battery divided by the energy you put in.</p>

            <p className="my-8">Self-discharge rate: Batteries generate electricity due to a chemical reaction inside the cell. Ideally, this happens when it is connected to a device that needs power. However, the reaction could also happen at a smaller scale, when the battery’s electrodes are not connected. That means that the battery’s charge gradually reduces over time. This phenomenon is called self-discharge and the rate at which it happens is called Self-discharge Rate.</p>

            <p>Nominal Cell Voltage: The average voltage a cell outputs when charged.</p>

            <p className="my-8">Cycle Life: The cycle life is the number of complete charge/discharge cycles that the battery is able to support before its capacity falls under 80% of its original capacity.</p>

            <p>Capacity: Capacity of a battery is defined as the number of hours for which a battery can provide a current equal to the discharge rate at the nominal voltage of the battery.</p>

            <p className="my-8">Some commonly used batteries in robotics are:</p>

            <h1 className="text-2xl my-8">Nickel Cadmium batteries</h1>

            <div className="grid grid-cols-4">
              <div className="col-span-3">
                <p>-Specific energy: 40-60 W-h/kg -Energy density: 50-150 W-h/L</p>
                <p>-Specific power: 150 W/kg</p>
                <p>-Charge/discharge efficiency: 70-90%</p>
                <p>-Self-discharge rate: 10 %/month</p>
                <p>-Cycle durability life: 2000</p>
                <p className="my-16">Uses: Ni–Cd batteries are used in cordless and wireless telephones, emergency lighting, and Toys, etc.</p>

                <p>Do you know how long these batteries last?</p>
                <p>In comparison to normal batteries they have a significantly larger life of 15-20 years.</p>
              </div>
              <div className="col-span-1 text-center">
                <Image src={NickelCadmium} />
              </div>
            </div>

            <h1 className="text-2xl my-8">Nickel Metal Hydride batteries</h1>
            <div className="grid grid-cols-4">
              <div className="col-span-1 text-center">
              <Image src={NickelMetal} />
              </div>
              <div className="col-span-3">
                <p>-Specific energy: 60-120 W-h/kg</p>
                <p>-Energy density: 140-300 W-h/L</p>
                <p>-Specific power: 250-1000 W/kg</p>
                <p>-Charge/discharge efficiency: 66-92%</p>
                <p>-Self-discharge rate: 1.3-2.9 %/month</p>
                <p>-Cycle durability life: 180-2000</p>
                <p className="my-16">Uses: NiMH cells are often used in digital cameras and other high-drain devices, where over the duration of single-charge use they outperform primary (such as alkaline) batteries.</p>
              </div>
            </div>

            <h1 className="text-2xl my-8">Lithium Ion Batteries</h1>
            <div className="grid grid-cols-4">
              <div className="col-span-3">
                <p>-Specific energy: 100-265 W-h/kg -Energy density: 250-693 W-h/L</p>
                <p>-Specific power: 250-340 W/kg</p>
                <p>-Charge/discharge efficiency: 80-90 %</p>
                <p>-Self-discharge rate: 1-2 %/month</p>
                <p>-Cycle durability life: 400-1200</p>
                <p>-Nominal Cell Voltage: 3.6/3.85 V</p>
                <p className="my-16">Uses: Mobile phones and smartphones, laptops and tablets, digital cameras and camcorders, electronic cigarettes, handheld game consoles and electric vehicles too.</p>
              </div>
              <div className="col-span-1 text-center">
                <Image src={LithiumIon} />
              </div>
            </div>

            <h1 className="text-2xl my-8">Lipo Batteries</h1>
            <div className="text-center my-8">
              <Image src={Lipo} />
            </div>

            <p>They are lightweight and have improved safety. However, their cost is high (30% average) as compared to lithium ions. Also, the energy density of Li-Polymer batteries compared to Li-Ion Batteries is quite less. They have an extremely low profile and have a lower chance of suffering from leaking electrolyte. But they are significantly more costly to manufacture, and they do not have the same energy density nor lifespan as a lithium-ion.</p>

            <p className="my-8">In Li-Po batteries, it isn’t a liquid. Instead, Li-Po technology uses one of three forms: a dry solid, which was largely phased out during the prototype years of lithium polymer batteries; a porous chemical compound; or, a gel-like electrolyte. This allows the battery to have more flexible shapes. Its uses include mobile devices, power banks, very thin laptop computers, portable media players, wireless controllers for video game consoles, wireless PC peripherals, electronic cigarettes.</p>

            <h1 className="text-xl my-8">General precaution</h1>
            <p>The safest charge rate is 1 x capacity of battery in Amperes.</p>
            <p>It should never get discharged below 3.0V.</p>
            <p>Proper Li-Po storage voltage is 3.7V per cell.</p>
            <p>Never ever leave a battery charging unattended.</p>

            <h1 className="text-2xl my-8">How to read lipo battery specifications?</h1>
            <div className="text-center my-8">
              <Image src={LipoSpecs} />
            </div>

            <p>- 3S=3 cells in series 1P= 1cell in parallel. So a 3s1p has a total of 3 cells in it. 3s2p would be 3 cells in series but each of those cells in series is made up of 2 cells connected in parallel. So a 3s2p pack would actually have 6 cells in it if you tore it apart.</p>

            <p>- 11.1 v is the nominal voltage for this battery. It has 3 cells in series and the nominal voltage of 1 cell is 3.7 V. So, 3*3.7 = 11.1V</p>

            <p className="mb-8">- A C-rate is a measure of the rate at which a battery is discharged relative to its maximum capacity. A 1C rate means that the discharge current will discharge the entire battery in 1 hour. For a battery with a capacity of 100 Amp-hrs, this equates to a discharge current of 100 Amps. It is a 25C battery with a capacity of 2200mAh .</p>

          </div>
        </div>
    )
}

export default Batteries;