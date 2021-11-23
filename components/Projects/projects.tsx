import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
// Use mobile responsive navbar animation for projects section.

const Projects = () => {
  const [Hide, setHide] = useState(false);
  const [scroll, setscroll] = useState(false);
  const [content, setContent] = useState("");
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


  interface project_detail {
    title: string;
    text: string;
    members: string;
  }

  const damta: project_detail[] = [
    {
      title: "jee haan",
      text: "jatt da muqabla",
      members: "hmmm"
    },
    
  ];

  function ProjectOut() {
    return (
      <>
        <div className="z-30 top-0 flex fixed w-full h-full animate-navbar">
          <div
            className="z-20 bg-cover bg-gray-800 opacity-50 w-full h-full transparent"
            onClick={() => {
              setHide(false);
            }}
          ></div>
          <div className="top-0 right-0 w-auto bg-gray-800 fixed h-full overflow-auto z-30 shadow-nav_custom">
            <div className="py-6 px-20">
              <button className="bg-gray-200 hover:bg-gray-100 rounded py-2 px-6 font-nunito text-xl font-bold">
                <h1>Zine</h1>
              </button>
            </div>
            <div id="specialz">
              {content}
            </div>
          </div>
        </div>
        <hr className="mt-6" />
      </>
    );
  }

    return(
      <div className="text-black bg-white w-screen h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="group bg-bg-a1 text-white text-center py-48 text-4xl transition duration-500 ease-in-out overflow-hidden transform hover:text-yellow-500">
            <p>BCI (Brain Computing Interface)</p>
            <button onClick={() => {setHide(true); setContent("BCI"); }} id="a1" className="hidden group-hover:inline-block transition duration-500 ease-in-out mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          {Hide ? <ProjectOut /> : null}
          <div className="group overflow-hidden bg-bg-a2 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform  hover:text-yellow-500">
            <p>Intelligent Home Energy Management System</p>
            <button onClick={() => {setHide(true); setContent("IHEMS"); }} id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a3 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform  hover:text-yellow-500">
            <p>Autonomous Quadcopter</p>
            <button onClick={() => {setHide(true); setContent("BCI"); }} id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a4 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform  hover:text-yellow-500">
            <p>Automotive Wheelchair</p>
            <button onClick={() => {setHide(true); setContent("BCI"); }} id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a5 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform  hover:text-yellow-500">
            <p>Prosthetics Arm</p>
            <button onClick={() => {setHide(true); setContent("BCI"); }} id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a6 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform hover:text-yellow-500">
            <p>Gait Analysis</p>
            <button onClick={() => {setHide(true); setContent("BCI"); }} id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a7 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform  hover:text-yellow-500">
            <p>Multi Actuator Switch Mode Hydraulic System</p>
            <button onClick={() => {setHide(true); setContent("BCI"); }} id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a8 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform  hover:text-yellow-500">
            <p>Human Computer Interface (HCI)</p>
            <button onClick={() => {setHide(true); setContent("BCI"); }} id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a9 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform hover:text-yellow-500">
            <p>Robotic Technology for High Voltage Line Inspection and Repair</p>
            <button onClick={() => {setHide(true); setContent("BCI"); }} id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a10 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform  hover:text-yellow-500">
            <p>Sun Tracker</p>
            <button onClick={() => {setHide(true); setContent("BCI"); }} id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a11 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform hover:text-yellow-500">
            <p>Smart Grid</p>
            <button onClick={() => {setHide(true); setContent("BCI"); }} id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a12 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform hover:text-yellow-500">
            <p>Exoskeleton</p>
            <button onClick={() => {setHide(true); setContent("BCI"); }} id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a13 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform  hover:text-yellow-500">
            <p>A.G.A.S.T.U.T.I</p>
            <button onClick={() => {setHide(true); setContent("BCI"); }} id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button>
          </div>
          <div className="group overflow-hidden bg-bg-a14 text-white text-center py-48 text-4xl transition duration-500 ease-in-out transform hover:text-yellow-500">
            <p>Hand Gesture Recognition</p>
            <Link href="https://www.google.co.in"><button onClick={() => {setHide(true); setContent("BCI"); }} id="a1" className="hidden group-hover:inline-block mt-4 bg-transparent text-2xl hover:border-yellow-500 hover:text-white text-white py-2 px-4 border border-white hover:border-transparent rounded">
              VIEW MORE
            </button></Link>
          </div>
        </div>
      </div>
    )
}

export default Projects;