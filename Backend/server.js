import express from "express"
import cors from "cors"
import "dotenv/config"
import { connect } from "mongoose"
import connectDB from "./config/mongodb.js"

// application configuration
const app = express()

const port = process.env.port || 4000
connectDB()
// middleware
app.use(express.json())
app.use(cors())

// api endpoint
app.get("/", (req,res)=>{
    res.send("api working")
})

app.listen(port,()=>console.log(`server started on port number ${port}`))