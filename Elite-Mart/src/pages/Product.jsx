import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const [productdata, setProductdata] = useState(false);
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const [image, setImage] =useState("")

  const fetchProductData = async () => {
    products.map((item) => {
      // return item._id == productId ? setProductdata(item) : null;
       if(item._id == productId){
            setProductdata(item)
            setImage(item.image[0])
            return null
       }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId]);

  console.log(productdata);
  return productdata ? (
    <div>
      <hr className="border-1" />
      <div className="my-10 flex">
        {/* left */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productdata.image.map((item, index) => (
              <img src={item} alt="image" className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" onClick={()=>setImage(item)} key={index} />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="image" className="w-full h-auto" />
          </div>
        </div>
        {/* right */}
       <div className="flex-1">
        
       </div>
      </div>
     
     
    </div>
  ) : (
    <div></div>
  );
};
export default Product;
