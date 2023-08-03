import Link from "next/link";
import logo from "../../images/zine1.png";
import hamburger from "../../images/hamburger.svg";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import home from "../../images/home-icon.webp";
import about from "../../images/about.webp";
import Project from "../../images/project-icon.webp";
import Team from "../../images/team-icon.webp";
import Alumni from "../../images/graduation.ico";
import Achievements from "../../images/badge-icon.webp";
import Blogs from "../../images/blogs-icon.png";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      link: "/",
    },
    {
      text: "Team",
      image: Team,
      link: "/team",
    },
    {
      text: "Alumni",
      image: Alumni,
      link: "/alumni",
    },
    {
      text: "Projects",
      image: Project,
      link: "/projects",
    },
    {
      text: "Achievements",
      image: Achievements,
      link: "/achievements",
    },
    // {
    //   text: "Workshops",
    //   image: Workshops,
    //   link: "/workshops/"
    // },
    {
      text: "Blogs",
      image: Blogs,
      link: "/blogs/",
    },
    {
      text: "Gallery",
      image: about,
      link: "/gallery/",
    },
    // {
    //   text: "Login",
    //   image: about,
    //   link: "/login/"
    // }
  ];

  function Nav_Out() {
    document.body.style.overflow = "hidden"
    const LinkClick = (e: React.MouseEvent) => {
      setHide(false);
      document.body.style.overflow = "auto"
      e.preventDefault();
    };



    return (
      <>
        <div className="font-poppins z-30 top-0 flex fixed h-full w-full">
          <div
            className="z-20 bg-cover opacity-50 w-full h-full transparent"
            onClick={() => {
              document.body.style.overflow = "auto"; setHide(false);
            }}
          ></div>
          <div className=" bg-black h-full w-full z-30 shadow-nav_custom absolute">
            <div className="py-6 px-8">
              <button className="text-white px-2 text-xl font-bold" onClick={() => {setHide(false); document.body.style.overflow = "auto"}}>
                {/* <h1>🠐</h1> */}
                <FontAwesomeIcon icon={faLeftLong}></FontAwesomeIcon>
              </button>
            </div>
            <div>
              {data3.map((item, index) => (
                <div key={index}>
                  <Link href={item.link}>
                    <h1 className="text-white w-auto px-24 text-xl py-3 flex items-center">
                        <Image src={item.image} width="24" height="24" />
                        {item.link === location.pathname ? (
                          <a className="ml-3 font-extrabold text-xl"  href={item.link} onClick={LinkClick}>{item.text}</a>
                        ) : (
                          <a className="ml-3" href={item.link}>{item.text}</a>
                        )}
                    </h1>
                  </Link>
                </div>
              ))}

              <Link href="/login" >
                <div className="group flex gap-2 mx-24 mt-16 justify-center items-center bg-black text-white text-sm px-4 py-2 cursor-pointer border border-white hover:bg-white hover:text-black hover:border-black transition-colors">
                  LOGIN
                  <svg className="text-white stroke-white group-hover:text-black group-hover:stroke-black" width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M1.65685 0.656867V2.65091L9.55524 2.65798L0.949747 11.2635L2.36396 12.6777L10.9695 4.07219L10.9765 11.9706H12.9706V0.656867H1.65685Z" fill="currentColor" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  useEffect(() => {
    if (!Hide) document.body.style.overflow = "auto"
  }, [])
  

  return (
    <>
      <div
        className={`sticky top-0 bg-black py-8 h-24 z-10  ${
          scroll ? "hiddenNav" : "activeNav"
        }`}
      >
        <div className="mx-12 lg:mx-16 grid grid-cols-12 text-white">
          <div className="col-span-1">
            <div className="cursor-pointer -mt-8 hidden md:block">
              <Link href="/">
                <Image height={100} width={130} src={logo} />
              </Link>
            </div>
          </div>
          <div className="col-span-4"></div>
          <div className="col-span-7">
            <div className="flex text-xl justify-between">
              <Link href="/">
                <div className="mb-2 cursor-pointer hidden lg:inline-block hover:text-gray-300">
                  <div className="link">HOME</div>
                </div>
              </Link>
              {/* <Link href="/team">
                <div className="mb-2 cursor-pointer hidden lg:inline-block hover:text-gray-300">
                  <div className="link ">
                    Team
                  </div>
                </div>
              </Link>
                <div className="px-1 hidden lg:inline-block">|</div>
              <Link href="/alumni"><div className="mb-2 cursor-pointer hidden lg:inline-block hover:text-gray-300">
                <div className="link ">
                  Alumni
                </div></div></Link>  */}
              <div className="mb-2 hidden lg:inline-block hover:text-gray-300 dropdown h-full">
                <div className="link hover:text-gray-300">TEAM</div>
                <div className="hidden dropdown-content cursor-pointer bg-black z-50 p-3 -ml-3">
                  <Link href="/team">
                    <div className="hover:text-gray-300">TEAM</div>
                  </Link>
                  <Link href="/alumni">
                    <div className="hover:text-gray-300">ALUMNI</div>
                  </Link>
                </div>
              </div>

              <Link href="/projects">
                <div className="mb-2 cursor-pointer hidden lg:inline-block hover:text-gray-300">
                  <div className="link ">PROJECTS</div>
                </div>
              </Link>
              <Link href="/achievements">
                <div className="mb-2 cursor-pointer hidden lg:inline-block hover:text-gray-300">
                  <div className="link ">ACHIEVEMENTS</div>
                </div>
              </Link>
              <Link href="/blogs">
                <div className="mb-2 cursor-pointer hidden lg:inline-block hover:text-gray-300">
                  <div className="link ">BLOGS</div>
                </div>
              </Link>

              {/* <div className="mb-2 hidden lg:inline-block dropdown h-full">
                  <div className="link hover:text-gray-300">Workshops</div>
                  <div className="hidden dropdown-content cursor-pointer z-50 bg-black p-3 -ml-2">
                    <Link href="/workshops"><div className="hover:text-gray-300">Workshops</div></Link>
                    <Link href="/blogs"><div className="hover:text-gray-300">Blogs</div></Link>
                    <Link href="/login"><div className="hover:text-gray-300">Projects</div></Link>
                  </div>
                </div> */}
              {/* <Link href="/blogs"><div className="mb-2 cursor-pointer hidden lg:inline-block">
          <div className="link ">
            Blogs
          </div></div></Link> */}
              <Link href="/gallery">
                <div className="mb-2 cursor-pointer hidden lg:inline-block hover:text-gray-300">
                  <div className="link ">GALLERY</div>
                </div>
              </Link>

              <Link href="/login" >
                <div className="group lg:flex gap-2 ml-8 items-center bg-black text-white text-sm px-4 py-2 -mt-2 cursor-pointer border border-white hover:bg-white hover:text-black hover:border-black transition-colors hidden">
                  LOGIN
                  <svg className="text-white stroke-white group-hover:text-black group-hover:stroke-black" width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector" d="M1.65685 0.656867V2.65091L9.55524 2.65798L0.949747 11.2635L2.36396 12.6777L10.9695 4.07219L10.9765 11.9706H12.9706V0.656867H1.65685Z" fill="currentColor" />
                  </svg>
                </div>
              </Link>
            </div>

            
            <div className="w-9 h-8 inline-block lg:hidden absolute right-8 mb-8">
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
