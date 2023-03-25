import type { NextPage } from "next";
import Head from "next/head";
import {
  Dashboard,
} from "../../components/Admin";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zine | Blogs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Dashboard />
    </>
  );
};

export default Home;
