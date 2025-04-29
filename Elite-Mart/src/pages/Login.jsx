import React, { useContext, useState } from "react";
import axios from "axios"
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const {backend_url,token, setToken, navigate}=useContext(ShopContext)
  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")

  const onSubmitHandler= async (e)=>{
          e.preventDefault()
          try{
            if(currentState == "Sign Up"){
              const response= await axios.post(backend_url+"/api/user/register",{name,email,password})
              console.log(response)
              if(response.data.success){
                 setToken(response.data.token)

                 localStorage.setItem("token",response.data.token)
                
                       console.log("registration done")
                     }else{
                      toast.error(response.data.message)
                     }
            }else{
              const response= await axios.post(backend_url+"/api/user/login",{email,password})
              console.log(response)
              // if(response.data.success){
              //    setToken(response.data.token)

              //    localStorage.setItem("token",response.data.token)
                
              //          console.log("registration done")
              //        }else{
              //         toast.error(response.data.message)
              //        }
            }
           
          }catch(error){
           console.log(error)
          }
        

  }
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="  mt-16 ">
        <div className="flex flex-col bg-blue-100 w-1/2 mx-auto gap-3 items-center p-6 rounded-sm">
          <div className="text-black flex items-center text-4xl pt-8 mb-2">
            <p>{currentState}</p>
            <hr className="w-8 h-2 mx-2" />
          </div>
          {currentState === "Login" ? (
            ""
          ) : (
            <input
              type="text"
              className="border border-gray-400 px-2 py-2 rounded-sm w-full outline-none"
              placeholder="Name"
              required
              onChange={(e)=>{setName(e.target.value)}}
              value={name}
            />
          )}
          
          <input
            type="email"
            className="border border-gray-400 px-2 py-2 rounded-sm w-full outline-none"
            placeholder="Email"
            required
            onChange={(e)=>{setEmail(e.target.value)}}
              value={email}
          />
          <input
            type="password"
            className="border border-gray-400 px-2 py-2 rounded-sm w-full outline-none"
            placeholder="Password"
            required
            onChange={(e)=>{setPassword(e.target.value)}}
              value={password}
          />
         
          {
            currentState == "Login"?<div className="flex justify-between w-full"> <p className="text-red-600 text-left w-full">Forget Password</p>
            <p className="w-full flex justify-end" onClick={()=>setCurrentState("Sign Up")}>Create Account</p></div>:<p className="text-right  w-full" onClick={()=>setCurrentState("Login")}>Login here</p>
          }
          
          <button className="bg-black text-white py-4 px-8 mt-2 w-full rounded-sm">
            {
              currentState == "Login"? "Sign In": "Sign Up"
            }
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
