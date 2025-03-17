import { assets } from "../assets/assets"
import Card from "./Card"
import React from 'react'

const Ourpolicy = () => {

  return (
    
 <div className="flex flex-col justify-around gap-12 text-xs py-20 sm:flex-row sm:gap-2 sm:text-xl">
    <div><Card image={assets.exchange_icon} text1={"Easy Eschange Policy"} text2={"We offers hassel free exchange policy"}/></div>
    <div><Card image={assets.quality_icon} text1={"7 days Return Policy"} text2={"We provide 7 days free exchange policy"}/></div>
    <div><Card image={assets.support_img} text1={"Best Customer Support"} text2={"We provide 24/7 customer support"}/></div>
  </div>
  
   
  )
}
export default Ourpolicy