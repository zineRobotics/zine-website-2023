import type { NextPage } from "next";
import {
  RobotAnimation,
  Video,
  ZineActivities,
  LandingPage

} from "../components/Home";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="bg-body-bg">
      <Navbar />
      <Video />
      <LandingPage />
      <RobotAnimation />   { /* Hover effect on this animation. About Zine. */}
      <ZineActivities />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
