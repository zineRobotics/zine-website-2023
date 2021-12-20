import type { NextPage } from "next";
import Head from "next/head";
import {
  Achievements,

} from "../components/Achievements";
import { Footer, SecFooter } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zine | Achievements</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Achievements />
      <SecFooter />
    </>
  );
};

export default Home;
