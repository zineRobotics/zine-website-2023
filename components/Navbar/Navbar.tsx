import Link from "next/link";
import logo from "../../images/zinelogo.png";
import hamburger from "../../images/hamburger.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import home from "../../images/home-icon.png";
import about from "../../images/about.png";
import Project from "../../images/project-icon.png";
import Team from "../../images/team-icon.png";
import Blog from "../../images/blog.png";
import Achievements from "../../images/badge-icon.png";

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
    {
      text: "About",
      image: about,
      link: "/about"
    },
    {
      text: "Blogs",
      image: Blog,
      link: "/blogs"
    },
  ];

  function Nav_Out() {
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
        className={`sticky top-0 bg-black pt-4 h-24 z-10 overflow-hidden ${
          scroll ? "hiddenNav" : "activeNav"
        }`}
      >
        <div className="mx-8 flex text-white justify-between text-3xl xl:text-4xl">
          <div className="w-12 h-12 cursor-pointer">
            <Link href="/"><Image src={logo} /></Link>
          </div>
          <Link href="/"><div className="my-2 cursor-pointer hidden lg:inline-block">
            <div className="link link-underline">
            Home
            </div>
            </div></Link>
          <Link href="/team"><div className="my-2 cursor-pointer hidden lg:inline-block">
          <div className="link link-underline">
            Team
            </div></div></Link>
          <Link href="/projects"><div className="my-2 cursor-pointer hidden lg:inline-block">
          <div className="link link-underline">
            Projects
            </div></div></Link>
          <Link href="/achievements"><div className="my-2 cursor-pointer hidden lg:inline-block">
          <div className="link link-underline">
            Achievements
            </div></div></Link>
          <Link href="/about"><div className="my-2 cursor-pointer hidden lg:inline-block">
          <div className="link link-underline">
            About
            </div></div></Link>
          <Link href="/blogs"><div className="my-2 cursor-pointer hidden lg:inline-block">
          <div className="link link-underline">
            Blogs
            </div></div></Link>
          <div className="w-12 h-12 inline-block lg:hidden">
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