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
    <div className="bg-body-bg">
      <Navbar />
      <Video />
      <RobotAnimation />
      <ZineActivities />
      <Footer />
    </div>
  );
};

export default Home;
