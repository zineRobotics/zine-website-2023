import React from "react";
import Link from "next/link";

const togglePageFlip = async (el:any) => {
  await setAllPagesBack();
  await setClickedPageForward(el);
  if (el.classList) {
    el.classList.toggle('turn');
  }
}

const setAllPagesBack = async () => {
  var pages = await document.querySelectorAll<HTMLElement>("page");
  for(var i=0; i<pages.length; i++){
    if(pages[i].classList) {
      pages[i].classList.remove('z-50');
    }
  }
}


const setClickedPageForward = async (el:any) => {
  if (el.classList) {
    await el.classList.add('z-50');
  }
}

const Projects = () => {
    return(
      <div className="perspective text-white bg-black w-screen h-screen flex justify-end">

    <div className="page absolute duration-1000 flex items-end origin-left w-1/2 transition h-screen transform" data-page="2" onClick={() => togglePageFlip(this)}>
        <div className="front text-xl sm:text-3xl md:text-5xl flex items-center justify-start px-2 sm:px-5 md:px-20 font-bold bg-gray-900 h-screen absolute right-0 w-full h-full">
            Page 3
        </div>
        <div className="back text-xl sm:text-3xl md:text-5xl font-bold flex items-center justify-start px-2 sm:px-5 md:px-20 bg-gray-800 h-screen absolute w-full h-full">
            Page 4
        </div>
    </div>

    <div className="page absolute duration-1000 flex items-end origin-left w-1/2 transition h-screen transform" data-page="1" onClick={() => togglePageFlip(this)}>
        <div className="front text-xl sm:text-3xl md:text-5xl flex flex-col items-start justify-center px-2 sm:px-5 md:px-20 font-bold bg-gray-900 h-screen absolute right-0 w-full h-full">
            Welcome to this Page
            <p className="text-sm text-gray-500">Click me to open</p>
        </div>
        <div className="back text-xl sm:text-3xl md:text-5xl font-bold flex items-center justify-start px-2 sm:px-5 md:px-20 bg-gray-800 h-screen absolute w-full h-full">
            This is Page 2
        </div>
    </div>
</div>
    )
}

export default Projects;