import type { NextPage } from "next";
import {
  RobotAnimation,
  Video,
  ZineActivities

} from "../components/Home";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Video />
      <RobotAnimation />
      <ZineActivities />
      <Footer />
    </>
  );
};

export default Home;
