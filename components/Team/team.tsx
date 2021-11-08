import React from "react";
import Link from "next/link";

const Team = () => {
    return(
      // first div mein h-screen ki problem hai. Change it everwhere.
      <div className="perspective w-screen bg-black">
        <div className="font-righteous text-center text-white text-8xl py-8">OUR TEAM</div>
        <div className="mx-40 grid grid-cols-4 gap-16 h-64 my-8 mb-32 text-white">
          <div className="col-span-1 rounded-full bg-blue-500">Hello there</div>
          <div className="col-span-1 rounded-full bg-purple-500">Hello there</div>
          <div className="col-span-1 rounded-full bg-green-500">Hello there</div>
          <div className="col-span-1 rounded-full bg-yellow-500">Hello there</div>
        </div>
        <div className="mx-40 grid grid-cols-4 gap-16 h-64 my-8 mb-32 text-white">
          <div className="col-span-1 rounded-full bg-blue-500">Hello there</div>
          <div className="col-span-1 rounded-full bg-purple-500">Hello there</div>
          <div className="col-span-1 rounded-full bg-green-500">Hello there</div>
          <div className="col-span-1 rounded-full bg-yellow-500">Hello there</div>
        </div>
        <div className="mx-40 grid grid-cols-4 gap-16 h-64 my-8 mb-32 text-white">
          <div className="col-span-1 rounded-full bg-blue-500">Hello there</div>
          <div className="col-span-1 rounded-full bg-purple-500">Hello there</div>
          <div className="col-span-1 rounded-full bg-green-500">Hello there</div>
          <div className="col-span-1 rounded-full bg-yellow-500">Hello there</div>
        </div>
      </div>
    )
}

export default Team;