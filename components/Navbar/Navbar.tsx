import logo from "../../images/zinelogo.png";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import home from "../../images/home-icon.png";
import team from "../../images/team-icon.png";
import project from "../../images/project-icon.png"
import achievement from "../../images/badge-icon.png"
import about from "../../images/about.png"
import blog from "../../images/blog.png"

const Navbar = () => {
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
    image: StaticImageData;
    href: string;
  }

  const Navbardata: nav_detail[] = [
    {
      image: home,
      href: "/",
    },
    {
      image: team,
      href: "/team",
    },
    {
      image: project,
      href: "/projects",
    },
    {
      image: achievement,
      href: "/achievements",
    },
    {
      image: about,
      href: "/about",
    },
    {
      image: blog,
      href: "/blogs",
    },
  ];

  return (
    <>
      <div
        className={`sticky top-0 bg-blue-500 opacity-70 blur-lg pt-2 xl:pt-4 h-14 md:h-18 xl:h-22 z-10 overflow-hidden ${
          scroll ? "hiddenNav" : "activeNav" }
        }`}
      >
        <div className="mx-16 flex gap-16 justify-between">
          <div className="w-8 h-8 md:w-12 md:h-12 xl:w-16 xl:h-16 mb-4">
            <Image src={logo} />
          </div>
          <div className="grid grid-cols-6 gap-4">
              {Navbardata.map((item, index) => (
                <div key={index} className="col-span-1 rounded-xl mx-4 w-8 h-8 md:w-12 md:h-12 xl:w-16 xl:h-16 cursor-pointer">
                  <Link href={item.href}><Image src={item.image} ></Image></Link>
                </div>
              ))}
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
