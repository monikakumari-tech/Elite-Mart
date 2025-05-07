import axios from "axios";
import { backend_url } from "../App";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
const Orders = ({ token }) => {
  const [order, setOrder] = useState([]);
  console.log(order);

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
          <div key={index}>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <div>
                {ord.items.map((item, index) => {
                  if (index === ord.items.length - 1) {
                    return (
                      <p>
                        {item.name} X {item.quantity} <span>{item.size}</span>
                      </p>
                    );
                  } else {
                    return (
                      <p>
                        {item.name} X {item.quantity} <span>{item.size}</span>
                      </p>
                    );
                  }
                })}
              </div>
              {/* create p tag */}
              <p>{ord.address.firstName + " " + ord.address.lastName}</p>
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
              <p>Method: {ord.paymentMethod}</p>
              <p>Payment: {ord.payment ? "Done" : "Pending" }</p>
              <p>Date: {ord.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Orders;
