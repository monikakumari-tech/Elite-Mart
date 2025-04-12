import React, { useState } from "react";
import Title from "../components/Title";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const onSubmitHandler= (e)=>{
          e.preventDefault()
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
            />
          )}
          
          <input
            type="email"
            className="border border-gray-400 px-2 py-2 rounded-sm w-full outline-none"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="border border-gray-400 px-2 py-2 rounded-sm w-full outline-none"
            placeholder="Password"
            required
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
