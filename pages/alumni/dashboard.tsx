import type { NextPage } from "next";
import Head from "next/head";
import 
  Commands
from "../../components/Members/Alumni/donate";
import { AuthContextProvider } from "../../context/authContext";


const Home: NextPage = () => {
  return (
    <AuthContextProvider>
      <Head>
        <title>Zine | Alumni</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Commands />
    </AuthContextProvider>
  );
};

export default Home;
