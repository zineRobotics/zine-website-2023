import React from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
// Use mobile responsive navbar animation for projects section.

const Projects = () => {
    return(
      <div className="text-black bg-white w-screen h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="group bg-bg-a1 text-white text-center py-48 text-4xl transition duration-500 ease-in-out overflow-hidden transform hover:-translate-y-1 hover:scale-110 hover:text-yellow-500">
            <p>BCI (Brain Computing Interface)</p>
            <button id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a2 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-yellow-500">
            <p>Intelligent Home Energy Management System</p>
            <button id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a3 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-yellow-500">
            <p>Autonomous Quadcopter</p>
            <button id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a4 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-yellow-500">
            <p>Automotive Wheelchair</p>
            <button id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a5 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-yellow-500">
            <p>Prosthetics Arm</p>
            <button id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a6 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-yellow-500">
            <p>Gait Analysis</p>
            <button id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a7 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-yellow-500">
            <p>Multi Actuator Switch Mode Hydraulic System</p>
            <button id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a8 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-yellow-500">
            <p>Human Computer Interface (HCI)</p>
            <button id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a9 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-yellow-500">
            <p>Robotic Technology for High Voltage Line Inspection and Repair</p>
            <button id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a10 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-yellow-500">
            <p>Sun Tracker</p>
            <button id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a11 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-yellow-500">
            <p>Smart Grid</p>
            <button id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a12 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-yellow-500">
            <p>Exoskeleton</p>
            <button id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a13 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-yellow-500">
            <p>A.G.A.S.T.U.T.I</p>
            <button id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a14 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-yellow-500">
            <p>Hand Gesture Recognition</p>
            <Link href="https://www.google.co.in"><button id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button></Link>
          </div>
        </div>
      </div>
    )
}

export default Projects;