import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Add from "./pages/Add"
import List from "./pages/List"
import Orders from "./pages/Orders"
import Login from "./components/Login"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const backend_url = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [token, setToken]= useState("")
  console.log(backend_url)
  console.log(token)
  return (

    <div className="bg-gray-50 min-h-screen">
      <ToastContainer/>
      {
        token==""?<Login setToken={setToken}/>: <>
        <Navbar/>
        <div className="w-full flex">
         
         <Sidebar/>
        
         
         <div className=" w-[70%] mx-auto ml-[max(5vw,25px)] my-8">
           <Routes>
             <Route path="/add" element={<Add/>}/>
             <Route path="/list" element={<List/>}/>
             <Route path="/orders" element={<Orders/>}/>
           </Routes>
          
         </div>
        </div>
        </>
      }
      
    </div>
  
  )
}
export default App