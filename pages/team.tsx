import type { NextPage } from "next";
import {
  Team,

} from "../components/Team";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Team />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
