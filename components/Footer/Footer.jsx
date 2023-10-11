import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import ZineBW from "../../images/zineBW.png";

const Footer_Main = () => {
  return (
    <div className="font-poppins bg-black text-white flex flex-col md:px-10 lg:px-20">
      <div className="flex justify-between pb-4 pt-10 mt-6 px-6 md:px-16">
        <div className="flex ">
          <Image src={ZineBW} height={59} width={117} />
          <p
            className="font-bold ml-4"
            style={{ fontSize: "17px", lineHeight: "19px" }}
          >
            Robotics & <br />
            Research <br />
            Group
          </p>
        </div>

        <div className="col-start-2 hidden md:block">
          <Link href="/login">
            <a className="cursor-pointer bg-black text-white font-semibold border border-white py-3 px-16 hover:bg-white hover:text-black hover:border-black transition-colors">
              LOGIN
            </a>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 justify-between px-12 md:px-24 mt-12 mb-18">
        <div className="font-medium text-normal md:text-lg">
          <p className="font-bold text-xl mb-2">GROUP</p>
          <Link href="/">
            <p className="cursor-pointer hover:text-gray-300">Home</p>
          </Link>
          <Link href="/team">
            <p className="cursor-pointer hover:text-gray-300">Team</p>
          </Link>
          <Link href="/alumni">
            <p className="cursor-pointer hover:text-gray-300">Alumni</p>
          </Link>
        </div>

        <div className="font-medium text-normal md:text-lg place-self-center">
          <p className="font-bold text-xl mb-2">PROJECTS</p>
          <Link href="/achievements">
            <p className="cursor-pointer hover:text-gray-300">Achievements</p>
          </Link>
          <Link href="/projects">
            <p className="cursor-pointer hover:text-gray-300">Projects</p>
          </Link>
          <Link href="https://github.com/zine-robotics">
            <p className="cursor-pointer hover:text-gray-300">Contribute</p>
          </Link>
        </div>

        <div className="font-medium text-normal md:text-lg mt-16 md:mt-0 md:place-self-end">
          <p className="font-bold text-xl mb-2">ACTIVITIES</p>
          <Link href="/workshops">
            <p className="cursor-pointer hover:text-gray-300">Workshops</p>
          </Link>
          <Link href="/blogs">
            <p className="cursor-pointer hover:text-gray-300">Blogs</p>
          </Link>
          <Link href="/gallery">
            <p className="cursor-pointer hover:text-gray-300">Gallery</p>
          </Link>
        </div>
      </div>

      <div className="mx-12 md:px-0">
        <hr />
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-3 mx-8 md:mx-24 md:mb-40">
        <p className="my-16 text-center md:text-left md:my-0">
          COPYRIGHT 2023, ZINE <br /> <a className="underline" href="mailto:zine.nitj@gmail.com">zine.nitj@gmail.com</a>
        </p>
        <div className="flex flex-col-reverse md:flex-row items-center mt-10 md:mt-0">
          <a href="https://play.google.com/store/apps/details?id=in.co.zine.zineapp2023&pli=1&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
            <img
              alt="Get it on Google Play"
              className="w-52 mt-6 md:mt-0"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            />
          </a>
          <div className="flex gap-4">
            <div className="w-8 md:w-8 col-span-2 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <Link href="https://www.instagram.com/zine.robotics/">
                <a>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-white mr-4"
                    size="2x"
                  />
                </a>
              </Link>
            </div>
            <div className="w-8 md:w-8 col-span-2 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <Link href="https://github.com/zine-robotics">
                <a><FontAwesomeIcon
                  icon={faGithub}
                  className="text-white mr-4"
                  size="2x"
                /></a>
              </Link>
            </div>
            <div className="w-8 md:w-8 col-span-2 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <Link href="https://www.facebook.com/ROBOTICS.ZINE/">
                <a><FontAwesomeIcon
                  icon={faFacebook}
                  className="text-white mr-4"
                  size="2x"
                /></a>
              </Link>
            </div>
            <div className="w-8 md:w-8 col-span-2 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <Link href="https://www.linkedin.com/company/de-zine-limited/mycompany/">
                <a><FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-white mr-4"
                  size="2x"
                /></a>
              </Link>
            </div>
            <div className="w-8 md:w-8 col-span-2 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <Link href="https://www.youtube.com/channel/UC92-Bhcl13KcI0UUU2ZrN1Q">
                <a><FontAwesomeIcon
                  icon={faYoutube}
                  className="text-white mr-4"
                  size="2x"
                /></a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="sticky custom:bg-black z-30 flex flex-wrap gap-4 justify-center items-center pb-4 pt-10 mt-6">

          </div> */}
    </div>
  );
};

export default Footer_Main;
