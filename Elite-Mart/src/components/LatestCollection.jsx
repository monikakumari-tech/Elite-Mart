import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProduct]= useState([])
  useEffect(()=>{
    setLatestProduct(products.slice(0,10))
  },[products])
  
    return (
    <div>
      <div className="my-10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 ">
            <Title text1={"Latest"} text2={"Collection"} />
          </div>

          <p className="text-lg px-20 py-5 text-gray-600">
            Welcome to MUJ, where fashion meets elegance. We bring you a
            carefully curated collection of trendy, comfortable, and
            high-quality clothing designed to make you look and feel your best.
            Whether you are searching for everyday essentials, stylish casual
            wear, or statement pieces for special occasions, our collection has
            something for everyone. With a commitment to quality, affordability,
            and the latest fashion trends. ✨👗👕
          </p>
        </div>
        <div className="grid pt-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          latestProducts.map((item, index)=>(
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
          ))
        }
        </div>
        
        
      </div>
    </div>
  );
};
export default LatestCollection;
