import { useEffect, useState } from "react"
import { backend_url } from "../App"
import axios from "axios"
import { toast } from "react-toastify"

const List = ({token}) => {
  const [data, setData]= useState([])
    const fetchList = async ()=>{
      try{
        const response = await axios.get(backend_url + "/api/product/list")
       
        console.log(response.data.products)
        setData(response.data.products)
      }catch(error){
        toast.error(error.message)
        console.log(error)
      }
    
    }
    const removeItem = async (id)=>{
      console.log(id)
      try{
        const remove = await axios.post(backend_url + "/api/product/remove", {id},{headers:{token}})
        if(remove.data.success){
          toast.success(remove.data.message)
          await fetchList()
        }else{
          toast.error(remove.data.message)
        }
      }catch(error){
          toast.error(error.message)
          console.log(error)
      }
    }
    useEffect(()=>{
      fetchList()
    }, [])
    
  return ( 
    <div className="font-serif">
      <div className="text-gray-600 mb-2">All Products List</div>
      <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Prize</b>
        <b>Action</b>
      </div>
      {
        data.map((item)=>{
            return (
              <div className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm my-2">
                <img src={item.image[0]} alt="image" className="w-12"/>
               
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>$ {item.price}</p>
                <p className=" cursor-pointer text-lg" onClick={()=>removeItem(item._id)}>X</p>
              </div>
            )
        })
      }
    </div>
  )
}
export default List