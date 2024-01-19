import Head from "next/head";
import { NextPage } from "next";
import {
  Footer,
  SecFooter,
} from "../components/Footer";
import { Navbar } from "../components/Navbar";
import AptitudeForm from "../components/Members/aptitudeForm";

const Home = () => {
  return (
    <>
      <Head>
        <title>Zine | Form</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <Navbar />
      <AptitudeForm />
    </>
  );
};

export default Home;
