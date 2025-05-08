import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };
    const newOrder = new orderModel(orderData);
    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res.json({
      success: true,
      message: "order placed",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
// place stripte order
const placeOrderStripe = async (req, res) => {};
// place razor order
const placeOrderRazorPay = async (req, res) => {};
// all order for admin
const allOrders = async (req, res) => {
  try {
      const orders= await orderModel.find({})
      res.json({
        success: true,
        orders
      })
  } catch (error) {
    res.json({
      success:false,
      message:error.message
    })
  }
};
// userOrder api
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });

    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    res.json({
      success:false,
      message:error.message
    })
    console.log(error);
  }
};

const updateStatus = async (req, res) => {
  try {
   const {orderId, status}= req.body
   await orderModel.findByIdAndUpdate(orderId, {status})
   res.json({
    success:true,
    message:"status updated"
   })
  } catch (error) {
    res.json({
      success:false,
      message:error.message
    })
  }
};

export {
  placeOrder,
  placeOrderRazorPay,
  placeOrderStripe,
  allOrders,
  userOrders,
  updateStatus,
};
