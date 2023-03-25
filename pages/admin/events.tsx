import type { NextPage } from "next";
import Head from "next/head";
import {
  Events,
} from "../../components/Admin";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zine | Blogs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Events />
    </>
  );
};

export default Home;
