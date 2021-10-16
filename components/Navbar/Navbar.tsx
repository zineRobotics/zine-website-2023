// Change all these images

import logo from "../../images/zinelogo.png";
import hamburger from "../../images/hamburger.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import home from "../../images/home.png";

// Change this code as much 
const Navbar = () => {
  const [Hide, setHide] = useState(false);
  const [scroll, setscroll] = useState(false);
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

  interface nav_detail {
    text: string;
    image: StaticImageData;
  }

  const Navbardata: nav_detail[] = [
    {
      text: "Home",
      image: home,
    },
    {
      text: "About",
      image: home,
    },
    {
      text: "Projects & Events",
      image: home,
    },
    {
      text: "Core Members",
      image: home,
    },
    {
      text: "Contact Us",
      image: home,
    },
  ];

  function Nav_Out() {
    return (
      <>
        <div className="z-30 top-0 flex fixed w-full h-full animate-navbar">
          <div
            className="z-20 bg-cover bg-gray-300 opacity-50 w-full h-full transparent"
            onClick={() => {
              setHide(false);
            }}
          ></div>
          <div className="top-0 right-0 w-auto bg-blue-900 fixed h-full overflow-auto z-30">
            <div className="pt-6 pb-12 px-20">
              <button className="bg-yellow-500 hover:bg-yellow-500 rounded py-2 px-6 text-3xl font-bold">
                <h1>Welcome to Zine</h1>
              </button>
            </div>
            <div>
              {Navbardata.map((item, index) => (
                <div key={index}>
                  <h1 className="text-white text-3xl px-20 py-10">
                    <Image src={item.image} width="24" height="24"></Image>
                    <a href="#"> {item.text}</a>
                  </h1>
                </div>
              ))}
            </div>
            <div className="px-12 pt-20 flex gap-4 items-center">
              <div className="rounded-full overflow-hidden">
                <Image src={logo} width="64" height="64"></Image>
              </div>
              <button className="bg-yellow-500 hover:bg-green-500 rounded py-2 px-3 text-3xl font-bold">
                <h1> More About Zine</h1>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className={`sticky top-0 bg-blue-700 pt-4 h-24 z-10 overflow-hidden ${
          scroll ? "hiddenNav" : "activeNav" }
        }`}
      >
        <div className="mx-48 flex justify-between">
          <div className="w-16 h-16">
            <Image src={logo} />
          </div>
          <div className="w-12 h-12 pt-2">
            <Image
              src={hamburger}
              onClick={() => {
                setHide(true);
              }}
            />
          </div>
        </div>
      </div>
      {Hide ? <Nav_Out /> : null}
    </>
  );
};

export default Navbar;
