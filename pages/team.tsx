import type { NextPage } from "next";
import {
  Team,

} from "../components/Team";
import { Footer, SecFooter } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Team />
      <SecFooter />
    </>
  );
};

export default Home;
