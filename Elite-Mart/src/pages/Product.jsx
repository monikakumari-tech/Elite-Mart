import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const [productdata, setProductdata] = useState(false);
  const { products } = useContext(ShopContext);
  const { productId } = useParams();

  const fetchProductData = async () => {
    products.map((item) => {
      return item._id == productId ? setProductdata(item) : null;
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId]);

  console.log(productdata);
  return productdata ? <div>product</div> : <div></div>;
};
export default Product;
