import type { NextPage } from "next";
import Head from "next/head";
import {
  Projects,
  Carousal

} from "../components/Projects";
import { SecFooter } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zine | Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Carousal />
      <Projects />
      <SecFooter />
    </>
  );
};

export default Home;
