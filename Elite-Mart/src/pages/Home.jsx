import React from "react";
import { assets } from "../assets/assets";

const Home = () => {
  return (
  <div className="flex flex-col sm:flex-row  border border-gray-400">
    <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 ">
    <div className="text-[#414141]">
        <div class="flex items-center gap-2">
          <p class="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          <p class="font-medium text-sm md:text-base">Our Best Sellers</p>
        </div>
        <h1 class="text-3xl sm:py-3 lg:text-5xl leading-relaxed">
          Latest Arrivals
        </h1>
        <div class="flex items-center gap-2">
          <p class="font-semibold text-sm md:text-base">Shop Now</p>
          <p class="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
        </div>
    </div>
    </div>
     <div className="w-full sm:w-1/2 "> <img src={assets.herobanner} alt="herobanner" className="w-full sm:1/2"/></div>
    
     </div>
  );
};
export default Home;
