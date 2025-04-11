import React, { useContext } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  const product = products.slice(0, 3);

  return (
  
    <div className="text-gray-700 text-lg">
      <hr />
      <div className="mt-18 mb-2">
        <Title text1={"My"} text2={"Orders"} />
      </div>
      <div>
        {product.map((item, index) => {
          return (
            <>
            <div key={index} className="flex  flex-col sm:justify-between items-center md:flex-row">

              <div className="flex gap-5 my-4 ">
                <div className="">
                  <img src={item.image[0]} alt="image" className="w-20"/>
                </div>

                <div className="flex flex-col gap-3">
                  <p>{item.name}</p>
                
                  <div className="flex gap-4">
                    <span>
                      {currency} {item.price}
                    </span>
                    <span>Quantity:1</span>
                    <span>Size:M</span>
                  </div>

                  <div className="text-gray-500">
                    <span>Date:</span> 25,May,2025
                  </div>
               </div>
             </div>

              <div className="  mb-4 md:justify-around items-center"> 
                <div className="flex items-center justify-center gap-2">
                 <div className="w-5 h-5 bg-green-400 rounded-full"></div>
                  Ready to ship</div>
                
              </div>
              <div className="border py-2 px-4 rounded-sm">Track Order</div>
            </div>
          <hr/>
            </>
          );
        })}
         
      </div>
    </div>
  );
};
export default Orders;
