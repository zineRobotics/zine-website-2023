import type { NextPage } from "next";
import Head from "next/head";
import {
  UserRoles,
} from "../../components/Members/Admin";
import { AuthContextProvider } from "../../context/authContext";

const Home: NextPage = () => {
  return (
    <AuthContextProvider>
      <Head>
        <title>Zine | Admin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <UserRoles />
    </AuthContextProvider>
  );
};

export default Home;
