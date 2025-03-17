import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row  border border-gray-400">
    <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 ">
    <div className="text-[#414141]">
        <div className="flex items-center gap-2">
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          <p className="font-medium text-sm md:text-lg">Our Best Sellers</p>
        </div>
        <h1 className="text-23xl sm:py-3 lg:text-6xl leading-relaxed">
          Latest Arrivals
        </h1>
        <div className="flex items-center gap-2">
          <p className="font-semibold text-lg md:text-lg">Shop Now</p>
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
        </div>
    </div>
    </div>
     <div className="w-full sm:w-1/2 "> <img src={assets.herobanner} alt="herobanner" className="w-full sm:1/2"/></div>
    
     </div>
  )
}
export default Hero
