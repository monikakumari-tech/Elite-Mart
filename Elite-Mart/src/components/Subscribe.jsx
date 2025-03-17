import React from "react";
const Subscribe = () => {
  return (
    <div className="mt-5 mb-30 text-center">
      <p className="text-3xl pb-3">Subscribe now & get 20% off</p>
      <p className="text-lg pb-8 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <div className=" flex justify-around sm:mx-20 lg:mx-60 xl:mx-80">
        <input className="border-1 p-4 w-full " type="email" placeholder="Enter Your email" />
        <button className="px-10 py-4 border-1 border-black text-white bg-black">Subcribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
