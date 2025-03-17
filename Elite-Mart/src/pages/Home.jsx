import React from "react";
import { assets } from "../assets/assets";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import Ourpolicy from "../components/OurPolicy";
import Subscribe from "../components/Subscribe";



const Home = () => {
  return (
  <div>
    <Hero/>
    <LatestCollection/>
    <BestSeller/>
    <Ourpolicy/>
    <Subscribe/>
   
  </div>
  );
};
export default Home;
