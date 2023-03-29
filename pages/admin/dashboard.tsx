import type { NextPage } from "next";
import Head from "next/head";
import {
  Dashboard,
} from "../../components/Admin";
import { AuthContextProvider } from "../../context/authContext";


const Home: NextPage = () => {
  return (
    <AuthContextProvider>
      <Head>
        <title>Zine | Blogs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Dashboard />
    </AuthContextProvider>
  );
};

export default Home;
