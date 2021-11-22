import type { NextPage } from "next";
import {
  Achievements,

} from "../components/Achievements";
import { Footer, SecFooter } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Achievements />
      <SecFooter />
    </>
  );
};

export default Home;
