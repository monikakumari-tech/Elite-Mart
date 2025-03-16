import React from "react";
import { assets } from "../assets/assets";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";

const Home = () => {
  return (
  <div>
    <Hero/>
    <LatestCollection/>
    <BestSeller/>
  </div>
  );
};
export default Home;
