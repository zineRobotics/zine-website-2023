import type { NextPage } from "next";
import Head from "next/head";
import {
  About,

} from "../components/About";
import { Footer, SecFooter } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zine | About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <About />
      <SecFooter />
    </>
  );
};

export default Home;
