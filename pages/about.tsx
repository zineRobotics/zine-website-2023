import type { NextPage } from "next";
import {
  About,

} from "../components/About";
import { Footer, SecFooter } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <About />
      <SecFooter />
    </>
  );
};

export default Home;
