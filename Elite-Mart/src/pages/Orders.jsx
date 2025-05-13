import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";

const Orders = () => {
  const { backend_url, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([])

  const loadOrderData = async ()=>{
    try {
      if(!token){
        return null
       }
       const response= await axios.post(backend_url + "/api/order/userorders",{} ,{headers:{token}})
       console.log(response.data.success)
      if(response.data.success){

        let allOrderItem = []
        response.data.orders.map((order)=>{
            order.items.map((item)=>{
                item["status"]= order.status
                item["payment"]= order.payment
                item["paymentMethod"]= order.paymentMethod
                item["date"]= order.date
                allOrderItem.push(item)
            })
        })
        setOrderData(allOrderItem.reverse())
        console.log(allOrderItem)
      }
    } catch (error) {
      console.log(error)
    }
    
  }
 useEffect(()=>{
  loadOrderData()
 },[token])
  

  return (
  
    <div className="text-gray-700 text-lg">
      <hr />
      <div className="mt-18 mb-2">
        <Title text1={"My"} text2={"Orders"} />
      </div>
      <div>
        {orderData.map((item, index) => {
          return (
            <div key={index}>
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
                    <span>Quantity:{item.quantity}</span>
                    <span>Size:{item.size}</span>
                  </div>

                  <div className="text-gray-500">
                    <span>Date: </span>{new Date(item.date).toDateString()}
                  </div>
                  <div className="text-gray-500">
                    <span>Payment: </span>{item.paymentMethod}
                  </div>
               </div>
             </div>

              <div className="  mb-4 md:justify-around items-center"> 
                <div className="flex items-center justify-center gap-2">
                 <div className="w-5 h-5 bg-green-400 rounded-full"></div>
                  {item.status}</div>
                
              </div>
              <div className="border py-2 px-4 rounded-sm" onClick={loadOrderData}>Track Order</div>
            </div>
          <hr/>
            </div>
          );
        })}
               </div>
    </div>
  );
};
export default Orders;
