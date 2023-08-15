import type { NextPage } from "next";
import Head from "next/head";
import { Chat } from "../components/Chat"
import { SecFooter } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zine | Chat</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Chat />
      {/* <SecFooter /> */}
    </>
  );
};

export default Home;