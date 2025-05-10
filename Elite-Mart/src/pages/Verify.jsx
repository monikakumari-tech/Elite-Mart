import { useContext, useEffect } from "react"
import { ShopContext } from "../context/ShopContext"
import { useSearchParams } from "react-router-dom"
import axios from "axios"

const Verify = () => {
  const {navigate, token , backend_url, setCartItem}= useContext(ShopContext)
  
  const [searchParam, setSearchParam]= useSearchParams()

  const success= searchParam.get("success")
  const orderId= searchParam.get("orderId")

  const verify= async ()=>{

    try {
      if(!token){
        return null
      }
      const response= await axios.post(backend_url + "/api/order/verify", {success,orderId}, {headers:{token}} )
      if(response.data.success){
        setCartItem({})
        navigate("/orders")
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
   verify()
  },[token])
  console.log(success)
    return (
    <div>

    </div>
  )
}
export default Verify