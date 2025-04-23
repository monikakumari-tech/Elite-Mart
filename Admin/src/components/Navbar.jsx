import React from "react"
import { assets } from "../assets/assets"

const Navbar = ({setToken}) => {
  return (
    <>
    <div className="flex justify-between items-center px-[4%] py-2">
     <div className=" rounded-sm overflow-hidden">
        <img src={assets.muj} alt="image" className="w-[100px] h-15" />
     </div>
     
        <button className="text-white bg-gray-600 rounded-4xl px-5 py-2" onClick={()=>setToken("")}>Logout</button>
     
    </div>
    <hr />
    </>
  )
}
export default Navbar