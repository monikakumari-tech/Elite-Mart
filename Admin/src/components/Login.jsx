import React, { useState } from "react"
import axios from "axios"
import { backend_url } from "../App"
import { toast } from "react-toastify"
// import {backend_url} from "../App"
const Login = ({setToken}) =>{
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  
  const onSubmitHandler= async (e)=>{
      try{
        e.preventDefault()
        // console.log(email, password)

        const response= await axios.post(backend_url + "/api/user/admin",{email,password})
       if(response.data.success){
         setToken(response.data.token)
       }else{
        toast.error(response.data.message)
       }
        console.log(response)
      }catch(error){
         console.log(error)
      }
  }
  return (
    <form onSubmit={onSubmitHandler}>
    <div className="bg-gray-100 flex justify-center items-center min-h-screen w-full">
      <div className="bg-white shadow rounded px-10 py-10 flex flex-col font-serif gap-5 m max-w-md">
        <p className="text-2xl font-extrabold mb-4">Admin Panel</p>
         <div>
         <div className="mb-3 min-w-72">
        <p>Email Address</p>
        <input type="email" className="border border-gray-400 w-full rounded-sm h-12 mt-2 px-2" placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
        </div>
        <div className="mb-3 min-w-72">
        <p>Password</p>
        <input type="password" className="border border-gray-400 w-full rounded-sm h-12 mt-2 px-2" placeholder="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
        </div>
        <button className="bg-black min-w-72 mt-3 text-white py-3 rounded-sm">Login</button>
         </div>
       
        
      </div>

    </div>
    </form>
  )
}
export default Login