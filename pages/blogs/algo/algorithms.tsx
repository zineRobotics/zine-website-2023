import type { NextPage } from "next";
import Head from "next/head";
import {
  Algorithms,
} from "../../../components/Blogs/algo";
import { Footer, SecFooter } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zine | Blogs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Algorithms />
      <SecFooter />
    </>
  );
};

export default Home;
