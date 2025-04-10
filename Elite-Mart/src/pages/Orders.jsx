import React, { useContext } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  const product = products.slice(0, 3);

  return (
    <div>
      <hr />
      <div>
        <Title text1={"My"} text2={"Orders"} />
      </div>
      <div>
        {product.map((item, index) => {
          return (
            <div key={index}>
              <div>
                <div>
                  <img src={item.image[0]} alt="image" className="w-15"/>
                </div>

                <div>
                  <p>{item.description}</p>
                  <div>
                    <span>
                      {currency} {item.price}
                    </span>
                    <span>Quantity:1</span>
                    <span>Size:M</span>
                  </div>
                  <div>
                    <span>Date:</span> 25,May,2025
                  </div>
                </div>
              </div>
              <div> 
                <div>Ready to ship</div>
                <div>Track Order</div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Orders;
