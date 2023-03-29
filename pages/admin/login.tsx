import type { NextPage } from "next";
import Head from "next/head";
import {
  AdminLogin,
} from "../../components/Admin";
import { Footer, SecFooter } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { AuthContextProvider } from "../../context/authContext";

const Home: NextPage = () => {
  return (
    <AuthContextProvider>
      <Head>
        <title>Zine | Blogs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <AdminLogin />
      <SecFooter />
    </AuthContextProvider>
  );
};

export default Home;
