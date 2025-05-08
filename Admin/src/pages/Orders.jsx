import axios from "axios";
import { backend_url } from "../App";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
const Orders = ({ token }) => {
  const [order, setOrder] = useState([]);
 
  console.log(order);
const statusHandler= async (e,orderId)=>{
 try {
   const response = await axios.post(backend_url +"/api/order/status" , {orderId, status:e.target.value}, {headers:{token}})
   if(response.data.success){
    await orderData()

   }
 } catch (error) {
   toast.error(response.data.message)
 }
}
  const orderData = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.get(backend_url + "/api/order/list", {
        headers: { token },
      });
      if (response.data.success) {
        setOrder(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    orderData();
  }, [token]);
  return (
    <div>
      <h3>Orders Page</h3>
      <div>
        {order.map((ord, index) => (
          <div key={index} className="mt-4 border text-gray-600 border-gray-200 bg-gray-100 p-5 grid grid-cols-5">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <div>
                {ord.items.map((item, index) => {
                  if (index === ord.items.length - 1) {
                    return (
                      <p key={index}>
                        {item.name} X {item.quantity}<span>{item.size}</span>
                      </p>
                    );
                  } else {
                    return (
                      <p key={index}>
                        {item.name} X {item.quantity}<span>{item.size}</span>
                      </p>
                    );
                  }
                })}
              </div>
              {/* create p tag */}
              <p className="font-bold mt-2">{ord.address.firstName + " " + ord.address.lastName}</p>
              <div>
                <p>{ord.address.street + " ,"}</p>

                <p>
                  {ord.address.city +
                    " ," +
                    ord.address.state +
                    " ," +
                    ord.address.country +
                    " ," +
                    ord.address.pinCode}
                </p>
              </div>
              <p>{ord.address.phoneNumber}</p>
            </div>
            {/* order detail */}
            <div>
              <p>Items: {ord.items.length}</p>
              <p className="mt-2">Method: {ord.paymentMethod}</p>
              <p>Payment: {ord.payment ? "Done" : "Pending" }</p>
              <p>Date: {new Date(ord.date).toLocaleDateString()}</p>
            </div>
            <p>
              {ord.amount}
            </p>
            <select className="bg-white h-10 border border-gray-300 rounded-sm " value={ord.status} onChange={(e)=>statusHandler(e,ord._id)}>
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>

            </select>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Orders;
