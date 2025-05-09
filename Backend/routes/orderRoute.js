import express from "express"
import { allOrders, placeOrder, placeOrderRazorPay, placeOrderStripe, updateStatus, userOrders, verifyStripe } from "../controllers/orderController.js"
import adminAuth from "../middleware/adminAuth.js"
import authUser from "../middleware/auth.js"

const orderRouter= express.Router()

orderRouter.post("/place", authUser, placeOrder)
orderRouter.post("/stripe", authUser, placeOrderStripe)
orderRouter.post("/verify",authUser, verifyStripe)
orderRouter.post("/razorpay", authUser, placeOrderRazorPay)
orderRouter.get("/list", adminAuth, allOrders)
orderRouter.post("/userorders", authUser, userOrders)
orderRouter.post("/status", adminAuth, updateStatus)

export default orderRouter