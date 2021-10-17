import React from "react";
import Link from "next/link";

const AboutZine = () => {
    return(
        <div className="bg-white min-h-screen flex items-center justify-center px-16">
  <div className="fixed w-full max-w-lg">
    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute top-20 left-80 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-20 left-140 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    <div className="absolute bottom-20 right-120 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute -bottom-120 left-150 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-40 left-160 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    <div className="absolute bottom-40 right-160 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute -bottom-120 right-160 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-40 right-140 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    <div className="absolute bottom-20 left-80 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute bottom-60 left-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-120 right-120 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    <div className="absolute -bottom-40 left-130 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
  </div>
  <div className="relative grid grid-cols-3 gap m-8 gap-8 text-2xl font-nunito text-black">
      <button className="transition duration-500 ease-in-out bg-purple-200 px-20 py-8 hover:bg-red-600 hover:text-white transform hover:-translate-y-1 hover:scale-110 ...">
      <Link href="/about"><h1>About Zine</h1></Link>
      </button>
      <button className="transition duration-500 ease-in-out bg-yellow-200 px-20 py-8 hover:bg-red-600 hover:text-white transform hover:-translate-y-1 hover:scale-110 ...">
      <Link href="/team"><h1>Team</h1></Link>
      </button>
      <button className="transition duration-500 ease-in-out bg-green-200 px-20 py-8 hover:bg-red-600 hover:text-white transform hover:-translate-y-1 hover:scale-110 ...">
      <Link href="/projects"><h1>Projects</h1></Link>
      </button>
      <button className="transition duration-500 ease-in-out bg-blue-200 px-20 py-8 hover:bg-red-600 hover:text-white transform hover:-translate-y-1 hover:scale-110 ...">
      <Link href="/achievements"><h1>Achievements</h1></Link>
      </button>
      <button className="transition duration-500 ease-in-out bg-pink-200 px-20 py-8 hover:bg-red-600 hover:text-white transform hover:-translate-y-1 hover:scale-110 ...">
      <Link href="/"><h1>Your Profile</h1></Link>
      </button>
      <button className="transition duration-500 ease-in-out bg-purple-200 px-20 py-8 hover:bg-red-600 hover:text-white transform hover:-translate-y-1 hover:scale-110 ...">
      <Link href="/blogs"><h1>Blogs</h1></Link>
      </button>
      <button className="transition duration-500 ease-in-out bg-purple-200 px-20 py-8 hover:bg-red-600 hover:text-white transform hover:-translate-y-1 hover:scale-110 ...">
      <Link href=""><h1>This is the home page.</h1></Link>
      </button>
    </div>
</div>
    )
}

export default AboutZine;