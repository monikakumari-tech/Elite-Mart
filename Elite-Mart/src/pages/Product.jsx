import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";

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
      {/* top */}
      <div className="my-10 flex sm:flex-row flex-col">
        {/* left */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full m-2">
            {productdata.image.map((item, index) => (
              <img src={item} alt="image" className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" onClick={()=>setImage(item)} key={index} />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="image" className="w-full h-auto" />
          </div>
        </div>
        {/* right */}
       <div className="flex-1 flex flex-col gap-5 py-2 px-4">
         <p className="text-2xl">{productdata.name}</p>
         <div className="flex gap-2">
         <img src={assets.star_icon} alt="star" className="w-5 h-5"/>
         <img src={assets.star_icon} alt="star" className="w-5 h-5"/>
         <img src={assets.star_icon} alt="star" className="w-5 h-5"/>
         <img src={assets.star_icon} alt="star" className="w-5 h-5"/>
         <img src={assets.star_icon} alt="star" className="w-5 h-5"/>
         <span>(122)</span>
         </div>
        
         <p className="text-3xl">$ {productdata.price}</p>
         <p className="text-gray-500">{productdata.description}</p>
         <p>Select Size</p>
         <div className="my-2">{productdata.sizes.map((el)=><span className="bg-gray-200 p-4 mr-3">{el}</span>)}</div>
         
        <button className="bg-gray-800 text-blue-50 py-3 w-fit px-8">Add To Cart</button>
        <hr className="text-gray-400"/>
        <div className="text-gray-600">
          <p>100% Original product</p>
         <p>Cash on delivery is available on this product.</p>
          <p>Easy return and exchange policy within 7 days.</p>
        </div>
       </div>
      </div>
     {/* middle */}
     <div>
      <div className="flex"> <b className="border-1 px-5 py-3 ">Description</b>
      <span className="border-1  px-5 py-3">Review(130)</span></div>
      <div className="border-1  px-5 py-6 flex flex-col gap-3">
      <p>An ecommerce website is an online plateform that facilitates the buying and sealing products online.</p>
      <p>An ecommerce website is an online plateform that facilitates the buying and sealing products online.</p>
      </div>
     </div>
     
     {/* bottom */}
     <div>
      <Title text1={"Related"} text2={"Products"}/>
     </div>
     
    </div>
  ) : (
    <div></div>
  );
};
export default Product;
