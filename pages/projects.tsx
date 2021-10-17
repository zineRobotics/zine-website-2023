import type { NextPage } from "next";
import {
  Projects,

} from "../components/Projects";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
