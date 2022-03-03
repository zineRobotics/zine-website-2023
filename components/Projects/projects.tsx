import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import img1 from "../../images/blog/algo/algo/image1.jpg"

import smartgrid from "../../images/project/new/abcd.jpg"
import astuti from "../../images/project/new/agstuti.jpg";
import bci from "../../images/project/new/bci.jpg";
import exoskeleton from "../../images/project/new/exoskeleton.jpg";
import gait from "../../images/project/new/gait.jpg";
import handgesture from "../../images/project/new/hand-gesture.jpg";
import hci from "../../images/project/new/hci.jpg";
import highvoltage from "../../images/project/new/highvoltage.jpg";
import home from "../../images/project/new/home.jpg";
import xyz from "../../images/project/new/IMG_2641.webp";
import pros from "../../images/project/new/prosthetics.jpeg";
import quadcopter from "../../images/project/new/quadcopter.jpg";
import wheelchair from "../../images/project/new/wheelchair.jpg";
import Multi from "../../images/project/new/multi.jpeg";
// Use mobile responsive navbar animation for projects section.

const Projects = () => {
  const [Hide, setHide] = useState(false);
  const [scroll, setscroll] = useState(false);
  const [content, setContent] = useState("");
  const [heading, setHeading] = useState("");
  const [para, setPara] = useState("");
  const [tm, setTm] = useState("");
  const [extracontent, setExtracontent] = useState("");
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);
  const [showMore5, setShowMore5] = useState(false);
  const [showMore6, setShowMore6] = useState(false);
  const [showMore7, setShowMore7] = useState(false);
  const [showMore8, setShowMore8] = useState(false);
  const [showMore9, setShowMore9] = useState(false);
  const [showMore10, setShowMore10] = useState(false);
  const [showMore11, setShowMore11] = useState(false);
  const [showMore12, setShowMore12] = useState(false);
  const [showMore13, setShowMore13] = useState(false);
  const [showMore14, setShowMore14] = useState(false);
  let scrollpos = 0;

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  const listenToScroll = () => {
    const currentScrollPos = document.documentElement.scrollTop;
    const visible = scrollpos < currentScrollPos && scrollpos > 30;
    scrollpos = currentScrollPos;
    setscroll(visible);
  };

  const linebreak = '\n';
  const bcitext = "Analyzing the signals from patients' brain, mapping and using the data for effective treatment, Pattern Establishment for benign and malignant neurological disease patient in different frequency ranges. Research was in collaboration with State Health care Hospital (SMS), Jaipur";
  const intelligenttext = "Our system records and analyzes the electrical parameters and provides an option for optimized scheduling for electrical appliances. The system provides a real time access to the load parameters and there is a centralized data monitoring system which generates a report and alerts the user to reduce the load consumption on exceeding the proposed usage limit as determined by the predicted load. A smart control feature is integrated which enables control of all the appliances using a handheld device.The system also logs the power consumption so that the discrepancy in billing can be cut down.";
  const intelligentprogress = "Progress: The following tasks have been done and integrated: Retrieval of data from homes. Optimization on Cloud. Scheduling. Remote Access to devices at homes. Penalty factor. Things to be done: Integration of Game Theory";
  const wheelchairtext = "It is an emerging field in Engineering due to the depth of its untapped potential. Brain Signals are detected by sensitive electrodes and filtered to obtain useful information. BCI is used for prognosis of terminal diseases, an aid for people who have been disabled and can be used as an ancillary part for paralyzed people. We have achieved the objective of categorizing patients (neurologic disease) using brain signals with a medical team at SMS Hospital, Jaipur. Results have been submitted in IEEE xplore. We have also developed an algorithm for ANN to get enhanced classification of terminal medical disease. Results have been submitted in Springer Journal. Most of software part has been simulated by us. Now to extend our project towards hardware we are going to construct a fully autonomous wheel chair for completely paralyzed people using BCI with the following features:";
  const wheel1 = "1. User controlled movement of wheelchair using brain signals.";
  const wheel2 = "2. Detection and classification of following general and medical phenomena on the basis of Brain Signals predominantly:- a. General Phenomena i. Sleep patterns ii. Stress iii. Emotion Classification b. Medical Phenomena i. Detecting simple illness (such as cough/cold) ii. Detecting onset of health complications(such as seizures) iii. Blood Pressure(using ECG) ";
  const wheel3 = "3. A complete health report based on the above (and more) factors will be added to a central server at frequent time intervals.";
  const wheel4 = "4. Controlling home appliances such as television, lights and doors with BCI.";
  const wheel5 = "5. Prompts for activities such as sleep, TV show, medicine dosage, etc according to time and user requirements.";
  const wheel6 = "6. Inclusion of a warning mechanism in case of emergency situations.";
  const wheel7 = "7. Customized wheelchair to enhance movement and user comfort.";
  const quadcoptertext = "Quad copters are really interesting topic for engineering students as it can perform versatile day to day functions. Also the military use of these type of unmanned aerial vehicles (UAVs) has grown because of their ability to operate in dangerous locations while keeping their human operators at a safe distance. A quadcopter, also called quadrotor helicopter is multi-rotor copter with four arms, each of which have a motor and a propeller at their ends. Quadcopters are similar to helicopters in some ways, though their lift and thrust comes from four propellers, rather than just one.";
  const quad1 = "1. Our idea is to design the quadcopter that when left in unknown terrains can give us live video stream on our laptops and also store it according to the need."
  const quad2 = "2. Automate it so that it can act by judging its surroundings, perform various actions/maneuverers by determining its position and environment. "
  const quad3 = "3. These quad copters can be sent in evacuated buildings and in bio-chemical factories to act as first respondents, and call for cajole by manoeuvring either autonomously or controlling it through Brain. "
  const quad4 = "4. It can also be used to autonomously model unknown environments using distance measuring sensors and decide its path accordingly."

  const gaittext = "This research project aims to develop a comprehensive biomechanical integrated software tool for measurement and analysis of postural defects in walking gait. It involves applying Image Processing and Machine Learning techniques. The project has been funded by DST (Department of Science and Technology), which comes within the Ministry of Science and Technology, India.";
  const gait1 = "Awards and Recognition: Two papers published, one of which received Best Paper Award.";

  const prostheticstext = "Making an artificial arm for the amputed and maimed persons controlled by muscle signals to grab and lift objects."
  const pros1 = "Recent Development:     Extremely useful project for physically disabled. Developed a working model successfully. Currently working on the signal extraction from muscles."

  const hcitext = "These devices can range from simple touch screen modules to more advanced systems like finger and head tracking systems which can find use in a variety of fields like game development, gesture controlled smart televisions, etc. Our field of research revolves around creating an interactive platform between a Human and a Computer. Looking at the present scenario in India, we believe that cheap alternatives to the usually expensive equipment like interactive whiteboards could come in handy to a large number of Schools and Colleges who cannot afford to invest much."
  const hci1 = "The scope of our project and the applications in the real world are huge. To list a few, the following are few of the things which are aiming to achieve: 1. Turning the projection of a laptop into an interactive environment, with multi touch features. 2. Turning the LCD screen of a laptop into a touchscreen with the help of a custom stylus, again supporting multi touch features (upto 4 distinct points simultaneously). 3. Finger Tracking for achieving Gesture Recognition for incorporating it with various applications. It would be a giant leap towards augmented reality and controlling computers simply by the wave of our hands. 4. Head Tracking which can find use in Game Development or creating other Simulation Environments. Finger Tracking and Gesture Recognition alone can find use in various other fields. As far as the future scope of our project is concerned, we would be extending our project to achieve the following: 1. Security Systems which make use of gestures 2. Controlling Robots via hand and facial gestures 3. Transcribing Sign Language into Text 4. Smart TVs"

  const multitext = "Current hydraulic systems involving multiple actuators and a single hydraulic power supply generally have poor efficiency. Using throttling valves to control multiple actuators requires meeting the highest pressure requirement and the total flow of all of actuators. When there is a large difference in the pressure requirement of the actuators, fluid throttling results in significant energy losses. The purpose of this project is to implement switch-mode control in a multi-actuator circuit and demonstrate the improvement in efficiency over a traditional hydraulic system with throttling valve control. This will reduce energy losses and result in improved efficiency for usage of multiple actuators with a single hydraulic power source. This idea utilises the input from both the tank and the pump. Using varying amounts of fluid coming from both sources, we can create various pressure and flow values for different actuators and in the process increase the efficiency of the system by operating the actuators at their rated pressures and flows. The usages of this project vary from heavy duty hydraulic cranes to hydraulic lifts. This new technology, once implemented on a larger scale in realistic applications, will reduce losses in hydraulic systems that depend on multiple actuators to function."

  const suntext = "Energy Efficiency-Microcontroller based Android App controlled Solar Tracking System enables the solar panels to track the sun for maximum energy and the power generated is available to the user android based application for manual modifications and control. Using Self Orienting Solar Panels lead to an enhancement of up to 40% in the generated solar power. Dual axis tracking is an additional feature which makes the design work for any season throughout the year thus accounting for the sun’s deviation during winters."

  const robotictext = "The project is aimed at developing a robotic technology for carrying out the inspection and repair work of any faults that may occur in the transmission/distribution lines. The robot will achieve this task whilst the line being under live condition. Present methods of inspection include Helicopter surveillance and Human inspection. Helicopter surveillance is done by a lineman using helicopter and it is highly risky. The second method includes human inspection. In this lineman climbs on the transmission line and checks out all the faults and repairs them and this method is also highly risky and time consuming."
  const robotic1 = "The robotic system consists of a robot equipped with: 1. A high definition video camera providing live feeds of transmission line 2. Infrared (Thermal) camera providing the locations of hotspots. 3. Wire clamper and bolt lightener. 4. Wireless assembly providing control upto 2km. The robotic system is manually controlled through a wireless remote. The video and infrared cameras provide live feeds which are transmitted wirelessly. The receiver kept near operator receives the live feeds and then they are displayed on the screen. The operator can then control the robotic system to repair the broken strands and can also analyze the hotspots. Loose bolts can be tightened by using the assembly mounted for tightening the bolts. This way the system will minimize the human work, increase efficiency and reduce dangers in maintaining and repairing the transmission lines."

  const exotext = "The main aim of our project is to design a human exoskeleton which can be applied to various uses. For people suffering from muscular motor loss in limbs to some suffering with paraplegia this can be used in their quick rehabilitation. It is also aimed at creating the suit that provides extra external power . It provides enhanced performance as well as assistance to human actions using Functional Electrical Simulation (FES) & can be used as an affordable substitute to the Physiotherapists treating stroke patients."
  const exo1 = "The methodlogy involves: 1. Development of the tentative model on 3D modelling software. 2. Static and dynamic analysis using Hyperworks. 3. Development of the first prototype based on input and output systems. 4. Integration of input and output systems. 5. Integrating with Feedback control."

  const smartgridtext = "Today, the technology has reached an advanced level. In contrast to this, our Power Transmission and Distribution system is the same that has been installed 100 years ago and which has become obsolete and needs to be developed or replanted. Here comes the need for Smart Grid. It is an advanced Power Grid that uses advanced communication networks to achieve following features: • sensing and metering technology for incoming and outgoing power, • identifies regions where there is larger need of power and implements considerable decrease in other regions, • enables consumers to become suppliers by decentralising sources of power as there are {`<`} 1000 Power stations for over millions of consumers, • Roof top solar energy generation, energy storage and excess energy selling with optimization of demand. • identifies peaks of consumption in a day and optimizes the use of Power, • Automated control and monitoring to detect faults through sensors so that they can be repaired quickly. • Prevents electricity thefts"
  const handtext = "Some special people are usually deprived of normal communication with other people in the society. It has been observed that they find it really difficult at times to interact with normal people with their gestures , as only a very few of those are recognized by most people. Since people with hearing impairment cannot talk like normal people so they have to depend on some sort of visual communication in most of the time. Visual-gestural language is their primary means of expression which involves various hand gestures , facial expressions like eyebrow movement and lip-mouth movement. What we aim to achieve ? The idea is to make computers to understand human language and develop a user friendly human computer interfaces (HCI). Making a computer understand speech, facial expressions and human gestures are some steps towards it thereby making a translation system that can successfully convert this visual gestural language into digital English text or speech."

  const agtext = "AGASTUTI as the name suggests is an autonomous system which can replace human beings from the unproductive job of transporting objects from one place to another. Thus effectively saving human resources which can be used in other comparatively more productive jobs. The system consists of a CPU as any customized PC. The main aim is to achieve an autonomous navigation. The robot will further be used in hospitals where in case of an emergency the nearest ICU for the patient will be automatically be fetched from a UNIFIED database and will save the precious moments. The robot will feature various robotic sciences like Image Processing,etc. The interface with the robot will be via a touch screen An insight in the future a multiple number of these robots will be in sync with each other to make navigation very simple and efficient saving a lot of resources and man power."


    return(
      <div className="text-black bg-black w-full h-full">
        
        <div className="py-20">

          <div className="shadower grid grid-cols-1 md:grid-cols-3 gap-8 mx-8 lg:mx-32 bg-gray-100 rounded-xl py-8 px-8 lg:px-16 hover:bg-gray-300 transition duration-500 ease-in-out">
            <div className="col-span-1 my-auto">
              <h1 className="inline-block md:hidden text-2xl font-bold mb-4">BCI (Brain Computing Interface)</h1>
              <Image src={bci} className="rounded-lg"/>
            </div>
            <div className="col-span-2">
              <h1 className="text-2xl font-bold pb-4 hidden md:inline-block">BCI (Brain Computing Interface)</h1>
              <p className="inline-block md:hidden">{showMore1 ? bcitext : bcitext.substring(0, 200)+`...`}</p>
              <p className="hidden md:inline-block">{bcitext}</p>
              <button className="btn inline-block md:hidden" onClick={() => setShowMore1(!showMore1)}>{showMore1 ? `Show Less` : `Show More`}</button>
              <h1 className="pt-8">Team Members: Saurab Aggarwal Bhanu Pratap Singh Rawat</h1>
            </div>
          </div>

          <div className="shadower mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 mx-8 lg:mx-32 bg-gray-100 shadow-xl rounded-xl py-8 px-8 lg:px-16 hover:bg-gray-300 transition duration-500 ease-in-out">
            <div className="col-span-1 inline-block md:hidden my-auto">
              <h1 className="inline-block md:hidden text-2xl font-bold mb-4">Intelligent Home Energy Management System</h1>
              <Image src={home} className="rounded-lg"/>
            </div>
            <div className="col-span-2">
              <h1 className="text-2xl font-bold pb-4 hidden md:inline-block">Intelligent Home Energy Management System</h1>
              <p className="inline-block md:hidden">{showMore2 ? intelligenttext : intelligenttext.substring(0, 150)+`...`}</p>
              <p className="hidden md:inline-block">{intelligenttext}</p>
              <p>{showMore2 ? intelligentprogress : ``}</p>
              <p className="hidden md:inline-block mt-8">{intelligentprogress}</p>
              <button className="btn inline-block md:hidden" onClick={() => setShowMore2(!showMore2)}>{showMore2 ? `Show Less` : `Show More`}</button>
              <h1 className="pt-8">Team Members: Akash Shah, Anirudha Kumar, Rajat Arya</h1>
            </div>
            <div className="col-span-1 my-auto hidden md:inline-block">
              <Image src={home} className="rounded-lg"/>
            </div>
          </div>

          <div className="shadower grid mt-8 grid-cols-1 md:grid-cols-3 gap-8 mx-8 lg:mx-32 bg-gray-100 shadow-xl rounded-xl py-8 px-8 lg:px-16 hover:bg-gray-300 transition duration-500 ease-in-out">
            <div className="col-span-1 my-auto">
              <h1 className="inline-block md:hidden text-2xl font-bold mb-4">Automotive Wheelchair</h1>
              <Image src={wheelchair} className="rounded-lg"/>
            </div>
            <div className="col-span-2">
              <h1 className="text-2xl font-bold pb-4 hidden md:inline-block">Automotive Wheelchair</h1>
              <p className="inline-block md:hidden">{showMore3 ? wheelchairtext : wheelchairtext.substring(0, 150)+`...`}</p>
              <p className="hidden md:inline-block">{wheelchairtext}</p>
              <p>{showMore3 ? wheel1 : ``}</p>
              <p className="hidden md:inline-block mt-8">{wheel1}</p>
              <p>{showMore3 ? wheel2 : ``}</p>
              <p className="hidden md:inline-block">{wheel2}</p>
              <p>{showMore3 ? wheel3 : ``}</p>
              <p className="hidden md:inline-block">{wheel3}</p>
              <p>{showMore3 ? wheel4 : ``}</p>
              <p className="hidden md:inline-block">{wheel4}</p>
              <p>{showMore3 ? wheel5 : ``}</p>
              <p className="hidden md:inline-block">{wheel5}</p>
              <p>{showMore3 ? wheel6 : ``}</p>
              <p className="hidden md:inline-block">{wheel6}</p>
              <p>{showMore3 ? wheel7 : ``}</p>
              <p className="hidden md:inline-block">{wheel7}</p>
              <button className="btn inline-block md:hidden" onClick={() => setShowMore3(!showMore3)}>{showMore3 ? `Show Less` : `Show More`}</button>
              

 
              <h1 className="pt-8">Team Members: Akash Singh, Anirudha Kumar, Rajat Arya</h1>
            </div>
          </div>

          <div className="shadower mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 mx-8 lg:mx-32 bg-gray-100 shadow-xl rounded-xl py-8 px-8 lg:px-16 hover:bg-gray-300 transition duration-500 ease-in-out">
            <div className="col-span-1 inline-block md:hidden my-auto">
              <h1 className="inline-block md:hidden text-2xl font-bold mb-4">Autonomous Quadcopter</h1>
              <Image src={quadcopter} className="rounded-lg"/>
            </div>
            <div className="col-span-2">
              <h1 className="text-2xl font-bold pb-4 hidden md:inline-block">Autonomous Quadcopter</h1>
              <p className="inline-block md:hidden">{showMore4 ? quadcoptertext : quadcoptertext.substring(0, 150)+`...`}</p>
              <p className="hidden md:inline-block">{quadcoptertext}</p>
              <p>{showMore4 ? quad1 : ``}</p>
              <p className="hidden md:inline-block mt-8">{quad1}</p>
              <p>{showMore4 ? quad2 : ``}</p>
              <p className="hidden md:inline-block mt-8">{quad2}</p>
              <p>{showMore4 ? quad3 : ``}</p>
              <p className="hidden md:inline-block mt-8">{quad3}</p>
              <p>{showMore4 ? quad4 : ``}</p>
              <p className="hidden md:inline-block mt-8">{quad4}</p>
              <button className="btn inline-block md:hidden" onClick={() => setShowMore4(!showMore4)}>{showMore4 ? `Show Less` : `Show More`}</button>
              <h1 className="pt-8">Team Members: Akash Shah, Anirudha Kumar, Rajat Arya</h1>
            </div>
            <div className="col-span-1 my-auto hidden md:inline-block">
              <Image src={quadcopter} className="rounded-lg"/>
            </div>
          </div>

          <div className="shadower grid mt-8 grid-cols-1 md:grid-cols-3 gap-8 mx-8 lg:mx-32 bg-gray-100 shadow-xl rounded-xl py-8 px-8 lg:px-16 hover:bg-gray-300 transition duration-500 ease-in-out">
            <div className="col-span-1 my-auto">
              <h1 className="inline-block md:hidden text-2xl font-bold mb-4">Gait Analysis</h1>
              <Image src={gait} className="rounded-lg"/>
            </div>
            <div className="col-span-2">
              <h1 className="text-2xl font-bold pb-4 hidden md:inline-block">Gait Analysis</h1>
              <p className="inline-block md:hidden">{showMore5 ? gaittext : gaittext.substring(0, 150)+`...`}</p>
              <p className="hidden md:inline-block">{quadcoptertext}</p>
              <p>{showMore5 ? gait1 : ``}</p>
              <p className="hidden md:inline-block mt-8">{gait1}</p>
           
              <button className="btn inline-block md:hidden" onClick={() => setShowMore5(!showMore5)}>{showMore5 ? `Show Less` : `Show More`}</button>
              <h1 className="pt-8">Team Members: Anshul Mittal, Kanika Gupta</h1>
            </div>
          </div>

          <div className="shadower mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 mx-8 lg:mx-32 bg-gray-100 shadow-xl rounded-xl py-8 px-8 lg:px-16 hover:bg-gray-300 transition duration-500 ease-in-out">
            <div className="col-span-1 inline-block md:hidden my-auto">
              <h1 className="inline-block md:hidden text-2xl font-bold mb-4">Prosthetics Arm</h1>
              <Image src={pros} className="rounded-lg"/>
            </div>
            <div className="col-span-2">
              <h1 className="text-2xl font-bold pb-4 hidden md:inline-block">Prosthetics Arm</h1>
              <p className="inline-block md:hidden">{showMore6 ? prostheticstext : prostheticstext.substring(0, 150)+`...`}</p>
              <p className="hidden md:inline-block">{prostheticstext}</p>
              <p>{showMore6 ? pros1 : ``}</p>
              <p className="hidden md:inline-block mt-8">{pros1}</p>
           
              <button className="btn inline-block md:hidden" onClick={() => setShowMore6(!showMore6)}>{showMore6 ? `Show Less` : `Show More`}</button>
            </div>
            <div className="col-span-1 my-auto hidden md:inline-block">
              <Image src={pros} className="rounded-lg"/>
            </div>
          </div>

          <div className="shadower grid mt-8 grid-cols-1 md:grid-cols-3 gap-8 mx-8 lg:mx-32 bg-gray-100 shadow-xl rounded-xl py-8 px-8 lg:px-16 hover:bg-gray-300 transition duration-500 ease-in-out">
            <div className="col-span-1 my-auto">
              <h1 className="inline-block md:hidden text-2xl font-bold mb-4">Human Computer Interface</h1>
              <Image src={hci} className="rounded-lg"/>
            </div>
            <div className="col-span-2">
              <h1 className="text-2xl font-bold pb-4 hidden md:inline-block">Human Computer Interface</h1>
              <p className="inline-block md:hidden">{showMore7 ? hcitext : hcitext.substring(0, 150)+`...`}</p>
              <p className="hidden md:inline-block">{hcitext}</p>
              <p>{showMore7 ? hci1 : ``}</p>
              <p className="hidden md:inline-block mt-8">{hci1}</p>
           
              <button className="btn inline-block md:hidden" onClick={() => setShowMore7(!showMore7)}>{showMore7 ? `Show Less` : `Show More`}</button>
              <h1 className="pt-8">Team Members: Anshul Mittal, Maitreyee Mehta, Mihika Gupta, Sharad Garg</h1>
            </div>
          </div>

          <div className="shadower mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 mx-8 lg:mx-32 bg-gray-100 shadow-xl rounded-xl py-8 px-8 lg:px-16 hover:bg-gray-300 transition duration-500 ease-in-out">
            <div className="col-span-1 inline-block md:hidden my-auto">
              <h1 className="inline-block md:hidden text-2xl font-bold mb-4">Multi Actuator Switch Mode Hydraulic System</h1>
              <Image src={Multi} className="rounded-lg"/>
            </div>
            <div className="col-span-2">
              <h1 className="text-2xl font-bold pb-4 hidden md:inline-block">Multi Actuator Switch Mode Hydraulic System</h1>
              <p className="inline-block md:hidden">{showMore8 ? multitext : multitext.substring(0, 150)+`...`}</p>
              <p className="hidden md:inline-block mt-8">{multitext}</p>
           
              <button className="btn inline-block md:hidden" onClick={() => setShowMore8(!showMore8)}>{showMore8 ? `Show Less` : `Show More`}</button>
              <p className="pt-8">Team Members: Paresh Anand, Piyush Chauhan, Sharad Garg</p>
            </div>
            <div className="col-span-1 my-auto hidden md:inline-block">
              <Image src={Multi} className="rounded-lg"/>
            </div>
          </div>

          <div className="shadower grid mt-8 grid-cols-1 md:grid-cols-3 gap-8 mx-8 lg:mx-32 bg-gray-100 shadow-xl rounded-xl py-8 px-8 lg:px-16 hover:bg-gray-300 transition duration-500 ease-in-out">
            <div className="col-span-1 my-auto">
              <h1 className="inline-block md:hidden text-2xl font-bold mb-4">Sun Tracker</h1>
              <Image src={xyz} className="rounded-lg"/>
            </div>
            <div className="col-span-2">
              <h1 className="text-2xl font-bold pb-4 hidden md:inline-block">Sun Tracker</h1>
              <p className="inline-block md:hidden">{showMore9 ? suntext : suntext.substring(0, 150)+`...`}</p>
              <p className="hidden md:inline-block mt-8">{suntext}</p>
           
              <button className="btn inline-block md:hidden" onClick={() => setShowMore9(!showMore9)}>{showMore9 ? `Show Less` : `Show More`}</button>
              <h1 className="pt-8">Team Members: Sharad Garg, Anshul Mittal</h1>
            </div>
          </div>

          <div className="shadower mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 mx-8 lg:mx-32 bg-gray-100 shadow-xl rounded-xl py-8 px-8 lg:px-16 hover:bg-gray-300 transition duration-500 ease-in-out">
            <div className="col-span-1 inline-block md:hidden my-auto">
              <h1 className="inline-block md:hidden text-2xl font-bold mb-4">Robotic Technology for High Voltage Line Inspection and Repair</h1>
              <Image src={highvoltage} className="rounded-lg"/>
            </div>
            <div className="col-span-2">
              <h1 className="text-2xl font-bold pb-4 hidden md:inline-block">Robotic Technology for High Voltage Line Inspection and Repair</h1>
              <p className="inline-block md:hidden">{showMore10 ? robotictext : robotictext.substring(0, 150)+`...`}</p>
              <p className="hidden md:inline-block mt-8">{robotictext}</p>
              <p>{showMore10 ? robotic1 : ``}</p>
              <p className="hidden md:inline-block mt-8">{robotic1}</p>
           
              <button className="btn inline-block md:hidden" onClick={() => setShowMore10(!showMore10)}>{showMore10 ? `Show Less` : `Show More`}</button>
              <p className="pt-8">Team Members: Akash Shah, Akshay Kumar, Anirudha Kumar, Anshul Mittal, Rajat Arya, Sharad Garg</p>
            </div>
            <div className="col-span-1 my-auto hidden md:inline-block">
              <Image src={highvoltage} className="rounded-lg"/>
            </div>
          </div>

          <div className="shadower grid mt-8 grid-cols-1 md:grid-cols-3 gap-8 mx-8 lg:mx-32 bg-gray-100 shadow-xl rounded-xl py-8 px-8 lg:px-16 hover:bg-gray-300 transition duration-500 ease-in-out">
            <div className="col-span-1 my-auto">
              <h1 className="inline-block md:hidden text-2xl font-bold mb-4">Exoskeleton</h1>
              <Image src={exoskeleton} className="rounded-lg"/>
            </div>
            <div className="col-span-2">
              <h1 className="text-2xl font-bold pb-4 hidden md:inline-block">Exoskeleton</h1>
              <p className="inline-block md:hidden">{showMore11 ? exotext : exotext.substring(0, 150)+`...`}</p>
              <p className="hidden md:inline-block mt-8">{exotext}</p>
              <p>{showMore11 ? exo1 : ``}</p>
              <p className="hidden md:inline-block mt-8">{exo1}</p>
           
              <button className="btn inline-block md:hidden" onClick={() => setShowMore11(!showMore11)}>{showMore11 ? `Show Less` : `Show More`}</button>
              <h1 className="pt-8">Team Members: Devang Darode, Sarthak Jain, Ayush Jhalani, Akshay Kumar</h1>
            </div>
          </div>

          <div className="shadower mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 mx-8 lg:mx-32 bg-gray-100 shadow-xl rounded-xl py-8 px-8 lg:px-16 hover:bg-gray-300 transition duration-500 ease-in-out">
            <div className="col-span-1 inline-block md:hidden my-auto">
              <h1 className="inline-block md:hidden text-2xl font-bold mb-4">Smart Grid</h1>
              <Image src={smartgrid} className="rounded-lg"/>
            </div>
            <div className="col-span-2">
              <h1 className="text-2xl font-bold pb-4 hidden md:inline-block">Smart Grid</h1>
              <p className="inline-block md:hidden">{showMore12 ? smartgridtext : smartgridtext.substring(0, 150)+`...`}</p>
              <p className="hidden md:inline-block mt-8">{smartgridtext}</p>
           
              <button className="btn inline-block md:hidden" onClick={() => setShowMore12(!showMore12)}>{showMore12 ? `Show Less` : `Show More`}</button>
              <p className="pt-8">Team Members: Jatin Verma, Akshay Kumar</p>
            </div>
            <div className="col-span-1 my-auto hidden md:inline-block">
              <Image src={smartgrid} className="rounded-lg"/>
            </div>
          </div>

          <div className="shadower grid mt-8 grid-cols-1 md:grid-cols-3 gap-8 mx-8 lg:mx-32 bg-gray-100 shadow-xl rounded-xl py-8 px-8 lg:px-16 hover:bg-gray-300 transition duration-500 ease-in-out">
            <div className="col-span-1 my-auto">
              <h1 className="inline-block md:hidden text-2xl font-bold mb-4">Hand Gesture Recognition</h1>
              <Image src={handgesture} className="rounded-lg"/>
            </div>
            <div className="col-span-2">
              <h1 className="text-2xl font-bold pb-4 hidden md:inline-block">Hand Gesture Recognition</h1>
              <p className="inline-block md:hidden">{showMore13 ? handtext : handtext.substring(0, 150)+`...`}</p>
              <p className="hidden md:inline-block mt-8">{handtext}</p>
           
              <button className="btn inline-block md:hidden" onClick={() => setShowMore13(!showMore13)}>{showMore13 ? `Show Less` : `Show More`}</button>
              <h1 className="pt-8">Team Members: Karsh Tharyani, Vishakha Tyagi, Jatin Verma</h1>
            </div>
          </div>

          <div className="shadower mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 mx-8 lg:mx-32 bg-gray-100 shadow-xl rounded-xl py-8 px-8 lg:px-16 hover:bg-gray-300 transition duration-500 ease-in-out">
            <div className="col-span-1 inline-block md:hidden my-auto">
              <h1 className="inline-block md:hidden text-2xl font-bold mb-4">A.G.A.S.T.U.T.I</h1>
              <Image src={astuti} className="rounded-lg"/>
            </div>
            <div className="col-span-2">
              <h1 className="text-2xl font-bold pb-4 hidden md:inline-block">A.G.A.S.T.U.T.I</h1>
              <p className="inline-block md:hidden">{showMore14 ? agtext : agtext.substring(0, 150)+`...`}</p>
              <p className="hidden md:inline-block mt-8">{agtext}</p>
           
              <button className="btn inline-block md:hidden" onClick={() => setShowMore14(!showMore14)}>{showMore14 ? `Show Less` : `Show More`}</button>
              <p className="pt-8">Team Members: Devang Darode, Karsh Tharyani, Ayush Jhalani</p>
            </div>
            <div className="col-span-1 my-auto hidden md:inline-block">
              <Image src={astuti} className="rounded-lg"/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Projects;