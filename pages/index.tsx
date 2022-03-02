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
import { Footer, SecFooter } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="bg-body-bg">
      <Head>
        {/* Favicon not working in Safari browser as of now. */}
        <title>Zine | Home</title>  
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      {/* <Video /> */}
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
