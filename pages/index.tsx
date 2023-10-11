import type { NextPage } from "next";
import Head from "next/head";
import {
  Video,
  ZineActivities,
  LandingPage,
  ZineText,
  Carousal,
  RegistrationBanner,
  PatentSection
} from "../components/Home";
import { SecFooter } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ChatButton } from "../components/Chat";

const Home: NextPage = () => {
  
  return (
    <div className="bg-body-bg">
      <Head>
        {/* Favicon not working in Safari browser as of now. */}
        <title>Zine | Home</title>  
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Zine is a creative group of engineering undergraduates of Malaviya National Institute of Technology, Jaipur who are together to learn, improve and apply their technical skills to help foster the growth of society and India in the field of technology by utilising their engineering skills to work on real time problems. It is comprised of students from various disciplines working under guidance of Dr. Rajesh Kumar from Electrical Engineering department and various alumni working in reputed firms and doing research in Universities in India and abroad. Zine has been the only active robotics and research group of MNIT for the last 16 years, since its foundation." />
      </Head>
      <Navbar />
      {/* <Video /> */}
      <ChatButton />
      <Carousal />
      <LandingPage />
      <ZineText />
      <PatentSection />
      <ZineActivities />
      <RegistrationBanner />
      <SecFooter />
    </div>
  );
};

export default Home;
