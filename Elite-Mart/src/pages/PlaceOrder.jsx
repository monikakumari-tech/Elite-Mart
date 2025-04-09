import React, { useState } from "react";
import CartTotal from "../components/CartTotal";

import { assets } from "../assets/assets";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const [method, setMethod]= useState("cod")

  return (
    <div className="flex  gap-4 pt-5 sm:pt-14 min-h-[80vh] flex-col sm:flex-row justify-between border-t">
      {/* letf side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
      
        <div className="text-xl sm:text-2xl my-3">
        <Title text1={"Delivery"} text2={"Information"} />
      </div>
      <div className="flex gap-3">
          
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-400 px-3 py-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-400 px-3 py-2 rounded-sm w-full"
            />
            </div>
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-400 px-3 py-2 rounded-sm"
          />
          <input
            type="text"
            placeholder="Street"
            className="border border-gray-400 px-3 py-2 rounded-sm"
          />
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="City"
              className="border border-gray-400 px-3 py-2 rounded-sm w-full"
            />
            <input
              type="text"
              placeholder="State"
              className="border border-gray-400 px-3 py-2 rounded-sm w-full"
            />
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter Pin Code"
              className="border border-gray-400 px-3 py-2 rounded-sm w-full"
            />
            <input
              type="text"
              placeholder="Country"
              className="border border-gray-400 px-3 py-2 rounded-sm w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Phone Number"
            className="border border-gray-400 px-3 py-2 rounded-sm"
          />
        </div>
     
      
   {/* Right side */}
      <div className="mt-8">
        <div className="min-w-80 mt-8 ">
          <CartTotal />
          </div>
          {/* payment */}
          <div className=" mt-12">
           
              <Title text1={"Payment"} text2={"Method"} />
              <div className="flex flex-col  lg:flex-row  gap-3">
                <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer" onClick={()=>setMethod("stripe")}>
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method=="stripe"?"bg-green-500":""}`}></p>
                  <img
                    src={assets.stripe_logo}
                    alt="stripe"
                    className="h-5 mx-4"
                  />
                </div>
                <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer" onClick={()=>setMethod("razorpay")}>
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method=="razorpay"?"bg-green-500":""}`}></p>
                  <img
                    src={assets.razorpay_logo}
                    alt="stripe"
                    className="h-5 mx-4"
                  />
                </div>
                <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer" onClick={()=>setMethod("cod")}>
                  <p className={`min-w-3.5 h-3.5 border rounded-full  ${method=="cod"?"bg-green-500":""}`}></p>
                   <p className="text-gray-500 text-sm font-medium mx-4">Cash On Delivery</p>
                </div>

           
               
              </div>
              <div className="w-full text-end mt-8">
                <Link to={"/orders"}>
                <button className="bg-black text-white py-4 px-8 mt-2 text-right" >
            Place Order
          </button></Link>
             
              </div>
              
            </div>
          </div>
        </div>

  );
};
export default PlaceOrder;
