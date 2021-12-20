import type { NextPage } from "next";
import Head from "next/head";
import {
  Projects,

} from "../components/Projects";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zine | Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Projects />
    </>
  );
};

export default Home;
