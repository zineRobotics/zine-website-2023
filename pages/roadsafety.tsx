import type { NextPage } from "next";
import Head from "next/head";
import Sahayta from "../components/Chat/roadsafety"
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zine | Sahayta</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Navbar /> */}
      <Sahayta />
    </>
  );
};

export default Home;