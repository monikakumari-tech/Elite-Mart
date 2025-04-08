import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { getCartTotal, currency,delivery_fee } = useContext(ShopContext);
  return (
    <div className="py-17 flex justify-end">
      <div className="w-full sm:w-120 ">
        {" "}
        <Title text1={"Cart"} text2={"Total"} />
        <div className=" flex justify-between">
          <span className="mb-2">SubTotal</span>
          <div>
            <span>{currency}</span>
            <span>{getCartTotal()}.00</span>
          </div>
        </div>
        <hr />
        <div className=" flex justify-between">
          <span className="mb-2">Shipping fee</span>
          <div>
            <span>{currency}</span>
            <span>{delivery_fee}</span>
          </div>
        </div>
        <hr />
        <div className=" flex justify-between font-bold">
          <span className="mb-2">Total</span>
         
          <div>
            <span>{currency}</span>
            <span>{getCartTotal() === 0 ? 0 : getCartTotal()+delivery_fee}</span>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-black text-white py-4 px-8 mt-2 text-right">
            Proceed To CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartTotal;
