import type { NextPage } from "next";
import Head from "next/head";
import {
  ForgotPassword,
} from "../components/Members";
import { Footer, SecFooter } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { AuthContextProvider } from "../context/authContext";

const Home: NextPage = () => {
  return (
    <AuthContextProvider>
      <Head>
        <title>Zine | Forgot Password</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <ForgotPassword />
      <SecFooter />
    </AuthContextProvider>
  );
};

export default Home;
