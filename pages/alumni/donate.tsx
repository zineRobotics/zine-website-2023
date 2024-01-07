import Head from "next/head";
import 
  Donate
from "../../components/Members/Alumni/donate";
import { AuthContextProvider } from "../../context/authContext";


const Home = () => {
  return (
    <AuthContextProvider>
      <Head>
        <title>Zine | Alumni</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Donate />
    </AuthContextProvider>
  );
};

export default Home;
