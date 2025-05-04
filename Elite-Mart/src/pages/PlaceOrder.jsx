import React, { useContext, useState } from "react";
import CartTotal from "../components/CartTotal";

import { assets } from "../assets/assets";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backend_url,
    token,
    cartItem,
    setCartItem,
    getCartCount,
    delivery_fee,
    products,
  } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
    phoneNumber: "",
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    // console.log(name)
    const value = e.target.value;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItem = [];
      for (const items in cartItem) {
        for (const item in cartItem[items]) {
          if (cartItem[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find(product => product._id === items)
            );
            console.log(itemInfo)
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItem[items][item];
              orderItem.push(itemInfo);
            }
          }
        }
      }
      console.log("line number 58", orderItem);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex  gap-4 pt-5 sm:pt-14 min-h-[80vh] flex-col sm:flex-row justify-between border-t"
    >
      {/* letf side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"Delivery"} text2={"Information"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            required
            className="border border-gray-400 px-3 py-2 rounded w-full"
            value={formData.firstName}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            required
            className="border border-gray-400 px-3 py-2 rounded-sm w-full"
            value={formData.lastName}
            onChange={onChangeHandler}
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          required
          className="border border-gray-400 px-3 py-2 rounded-sm"
          value={formData.email}
          onChange={onChangeHandler}
        />
        <input
          type="text"
          placeholder="Street"
          name="street"
          required
          className="border border-gray-400 px-3 py-2 rounded-sm"
          value={formData.street}
          onChange={onChangeHandler}
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            name="city"
            required
            className="border border-gray-400 px-3 py-2 rounded-sm w-full"
            value={formData.city}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="State"
            name="state"
            required
            className="border border-gray-400 px-3 py-2 rounded-sm w-full"
            value={formData.state}
            onChange={onChangeHandler}
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Enter Pin Code"
            name="pinCode"
            required
            className="border border-gray-400 px-3 py-2 rounded-sm w-full"
            value={formData.pinCode}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Country"
            name="country"
            required
            className="border border-gray-400 px-3 py-2 rounded-sm w-full"
            value={formData.country}
            onChange={onChangeHandler}
          />
        </div>
        <input
          type="number"
          placeholder="Phone Number"
          name="phoneNumber"
          required
          className="border border-gray-400 px-3 py-2 rounded-sm"
          value={formData.phoneNumber}
          onChange={onChangeHandler}
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
            <div
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              onClick={() => setMethod("stripe")}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method == "stripe" ? "bg-green-500" : ""
                }`}
              ></p>
              <img src={assets.stripe_logo} alt="stripe" className="h-5 mx-4" />
            </div>
            <div
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              onClick={() => setMethod("razorpay")}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method == "razorpay" ? "bg-green-500" : ""
                }`}
              ></p>
              <img
                src={assets.razorpay_logo}
                alt="stripe"
                className="h-5 mx-4"
              />
            </div>
            <div
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              onClick={() => setMethod("cod")}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full  ${
                  method == "cod" ? "bg-green-500" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                Cash On Delivery
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            {/* <Link to={"/orders"}> */}
              <button type="submit" className="bg-black text-white py-4 px-8 mt-2 text-right">
                Place Order
              </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </form>
  );
};
export default PlaceOrder;
