import Link from "next/link";
import logo from "../../images/zinelogo_11zon.webp";
import hamburger from "../../images/hamburger.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import home from "../../images/home-icon.webp";
import about from "../../images/about.webp";
import Project from "../../images/project-icon.webp";
import Team from "../../images/team-icon.webp";
import Achievements from "../../images/badge-icon.webp";
import { Blogs } from "../Blogs";

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
    link: string;
  }

  const data3: nav_detail[] = [
    {
      text: "Home",
      image: home,
      link: "/"
    },
    {
      text: "Team",
      image: Team,
      link: "/team"
    },
    {
      text: "Projects",
      image: Project,
      link: "/projects"
    },
    {
      text: "Achievements",
      image: Achievements,
      link: "/achievements"
    },
    // {
    //   text: "Blogs",
    //   image: about,
    //   link: "/blogs"
    // },
    {
      text: "Gallery",
      image: Project,
      link: "/gallery"
    },
    {
      text: "About",
      image: about,
      link: "/about"
    },
  ];

  function Nav_Out() {
    return (
      <>
        <div className="z-30 top-0 flex fixed w-full h-full animate-navbar">
          <div className="top-0 right-0 w-auto bg-gray-800 fixed h-full overflow-auto z-30 shadow-nav_custom">
            <div className="py-6 px-20" onClick={() => {
              setHide(false);
            }}>
              <button className="text-white rounded py-2 px-6 font-nunito text-xl font-bold">
                <h1>&times;</h1>
              </button>
            </div>
            <div>
              {data3.map((item, index) => (
                <div key={index}>
                  <Link href={item.link}>
                  <h1 className="text-white text-xl px-20 py-2 font-nunito">
                    <Image src={item.image} width="16" height="16"></Image>
                    <a href="#"> {item.text}</a>
                  </h1>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="mt-6" />
      </>
    );
  }

  return (
    <>
      <div
        className={`sticky top-0 bg-black pt-4 h-16 z-10 overflow-hidden ${
          scroll ? "hiddenNav" : "activeNav"
        }`}
      >
        <div className="mx-12 lg:mx-24 grid grid-cols-12 text-white text-xl xl:text-2xl">
          <div className="col-span-1">
          <div className="w-12 h-12 lg:w-12 lg:h-12 cursor-pointer -mt-2">
            <Link href="/"><Image src={logo} /></Link>
          </div>
          </div>
          <div className="col-span-5"></div>
          <div className="col-span-6">
            <div className="flex text-xl justify-between">
          <Link href="/"><div className="mb-2 cursor-pointer hidden lg:inline-block">
            <div className="link ">
            Home
            </div>
            </div></Link>
          <Link href="/team"><div className="mb-2 cursor-pointer hidden lg:inline-block">
          <div className="link ">
            Team
            </div></div></Link>
          <Link href="/projects"><div className="mb-2 cursor-pointer hidden lg:inline-block">
          <div className="link ">
            Projects
            </div></div></Link>
          <Link href="/achievements"><div className="mb-2 cursor-pointer hidden lg:inline-block">
          <div className="link ">
            Achievements
          </div></div></Link>
          {/* <Link href="/blogs"><div className="mb-2 cursor-pointer hidden lg:inline-block">
          <div className="link ">
            Blogs
          </div></div></Link> */}
          <Link href="/gallery"><div className="mb-2 cursor-pointer hidden lg:inline-block">
          <div className="link ">
            Gallery
            </div></div></Link>
          <Link href="/about"><div className="mb-2 cursor-pointer hidden lg:inline-block">
          <div className="link ">
            About
            </div></div></Link>
          </div>
          <div className="w-12 h-12 inline-block lg:hidden absolute right-8 mb-8">
            <Image
              src={hamburger}
              onClick={() => {
                setHide(true);
              }}
            />
          </div>
          </div>
        </div>
      </div>
      {Hide ? <Nav_Out /> : null}
    </>
  );
};

export default Navbar;