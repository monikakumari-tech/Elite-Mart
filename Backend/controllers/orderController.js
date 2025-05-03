import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"


const placeOrder= async (req,res)=>{
   try{
       const {userId, items, amount, address}= req.body
       const orderData= {
        userId,
        items,
        amount,
        address,
        paymentMethod:"COD",
        payment:false,
        date:Date.now()
       }
       const newOrder= new orderModel(orderData)
       await newOrder.save()
       await userModel.findByIdAndUpdate(userId,{cartData:{}})
       res.json({
        success:true,
        message:"order placed"
       })
   }catch(error){
      res.json({
        success:false,
        message:error.message
      })
   }
}
const placeOrderStripe= async (req,res)=>{

}
const placeOrderRazorPay= async (req,res)=>{

}
const allOrders= async (req,res)=>{

}
const userOrders= async (req,res)=>{

}
const updateStatus= async (req,res)=>{

}

export {placeOrder, placeOrderRazorPay,placeOrderStripe,allOrders,userOrders,updateStatus};