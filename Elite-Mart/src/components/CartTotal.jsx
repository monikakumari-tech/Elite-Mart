import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { Link } from "react-router-dom";

const CartTotal = () => {
  const { getCartTotal, currency,delivery_fee } = useContext(ShopContext);
  return (
    // <div className="py- flex justify-end"></div>
    //   <div className="w-full ">
    //     {" "}
    //     <Title text1={"Cart"} text2={"Total"} />
    //     <div className=" flex justify-between">
    //       <span className="mb-2">SubTotal</span>
    //       <div>
    //         <span>{currency}</span>
    //         <span>{getCartTotal()}.00</span>
    //       </div>
    //     </div>
    //     <hr />
    //     <div className=" flex justify-between">
    //       <span className="mb-2">Shipping fee</span>
    //       <div>
    //         <span>{currency}</span>
    //         <span>{delivery_fee}</span>
    //       </div>
    //     </div>
    //     <hr />
    //     <div className=" flex justify-between font-bold">
    //       <span className="mb-2">Total</span>
         
    //       <div>
    //         <span>{currency}</span>
    //         <span>{getCartTotal() === 0 ? 0 : getCartTotal()+delivery_fee}</span>
    //       </div>
    //     </div>
        
    //   </div>
    // </div>

    <div className="w-full">
      <div className="text-2xl">
          <Title text1={"Cart"} text2={"Totals"}/>
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
         <div className="flex justify-between">
          <p>SubTotal</p>
          <p>{currency} {getCartTotal()}.00</p>
         </div>
         <hr />

         <div className="flex justify-between">
          <p>Shopping Fee</p>
          <p>{currency} {delivery_fee}.00</p>
         </div>
         <hr />

         <div className="flex justify-between">
          <p>Total</p>
          <b>{currency} {getCartTotal()===0 ? 0: getCartTotal() + delivery_fee}.00</b>
         </div>
      </div>
    </div>
  );
};
export default CartTotal;
