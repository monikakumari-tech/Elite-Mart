import express from "express"
import cors from "cors"
import "dotenv/config"
import { connect } from "mongoose"
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js"
 import cartRouter from "./routes/cartRoute.js"

// application configuration
const app = express()

const port = process.env.port || 4000
connectDB()
connectCloudinary()
// middleware
app.use(express.json())
app.use(cors())

// api endpoint
app.get("/", (req,res)=>{
    res.send("api working")
})

app.use("/api/user", userRouter)
app.use("/api/product", productRouter)
 app.use("/api/cart", cartRouter)
app.listen(port,()=>console.log(`server started on port number ${port}`))