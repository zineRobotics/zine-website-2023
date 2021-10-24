import type { NextPage } from "next";
import {
  AboutZine,
  ZineActivities

} from "../components/Home";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <AboutZine />
      <Footer />
    </>
  );
};

export default Home;
