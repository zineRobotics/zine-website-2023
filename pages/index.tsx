import type { NextPage } from "next";
import Head from "next/head";
import {
  Video,
  ZineActivities,
  LandingPage,
  ZineText

} from "../components/Home";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="bg-body-bg">
      <Head>
        <title>Zine | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Video />
      <LandingPage />
      <ZineText />
      <ZineActivities />
      <Footer />
    </div>
  );
};

export default Home;
