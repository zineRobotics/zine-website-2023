import logo from "../../images/zinelogo.png";
import hamburger from "../../images/hamburger.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import home from "../../images/home.png";
import team from "../../images/team.svg";
import project from "../../images/project.png"
import achievement from "../../images/achievement.png"
import about from "../../images/about.png"
import blog from "../../images/blog.png"

const Navbar = () => {
  const [Hide, setHide] = useState(false);
  const [scroll, setscroll] = useState(false);
  let scrollpos = 0;

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
    return () => {
      window.removeEventListener("scroll", listenScroll);
    };
  }, []);

  const listenScroll = () => {
    const currentScrollPos = document.documentElement.scrollTop;
    const visible = scrollpos < currentScrollPos && scrollpos > 30;
    scrollpos = currentScrollPos;
    setscroll(visible);
  };

  interface nav_detail {
    text: string;
    image: StaticImageData;
    href: string;
  }

  const Navbardata: nav_detail[] = [
    {
      text: "Home",
      image: home,
      href: "/",
    },
    {
      text: "Team",
      image: team,
      href: "/team",
    },
    {
      text: "Projects",
      image: project,
      href: "/projects",
    },
    {
      text: "Achievements",
      image: achievement,
      href: "/achievements",
    },
    {
      text: "About",
      image: about,
      href: "/about",
    },
    {
      text: "Blogs",
      image: blog,
      href: "/blogs",
    },
  ];

  function Nav_Out() {
    return (
      <>
        <div className="z-30 top-0 flex fixed w-full h-full animate-navbar">
          <div
            className="z-20 bg-cover bg-gray-500 opacity-50 w-full h-full transparent"
            onClick={() => {
              setHide(false);
            }}
          ></div>
          <div className="top-0 right-0 w-auto bg-white fixed h-full overflow-auto z-30">
            <div className="pt-6 pb-12 px-20">
            <h1 className="text-3xl text-blue-700 font-bold">Welcome to Zine</h1>
            </div>
            <div>
              {Navbardata.map((item, index) => (
                <div key={index} className="bg-blue-300 hover:bg-blue-500 rounded-xl w-88 mx-4 my-4">
                  <h1 className="text-blue-800 text-3xl px-20 py-6">
                    <Image src={item.image} width="24" height="24"></Image>
                    <a href={item.href}> {item.text}</a>
                  </h1>
                </div>
              ))}
            </div>
            <div className="px-12 pt-20 flex gap-4 items-center">
              <div className="rounded-full overflow-hidden">
                <Image src={logo} width="64" height="64"></Image>
              </div>
              <button className="bg-blue-300 hover:bg-green-500 rounded py-2 px-3 text-3xl font-bold">
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
