import Head from "next/head";
import { Footer, SecFooter } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Alumni } from "../components/Alumni";

const Home = () => {
  return (
    <>
      <Head>
        <title>Zine | Alumni</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Alumni />
      <SecFooter />
    </>
  );
};

export default Home;
