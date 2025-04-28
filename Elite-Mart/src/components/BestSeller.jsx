import { useContext, useEffect, useState } from "react"
import Title from "./Title"
import { ShopContext } from "../context/ShopContext"
import ProductItem from "./ProductItem"

const BestSeller = () => {
    const {products}= useContext(ShopContext)
    const [bestSeller, setBestSeller]= useState([])
    useEffect(()=>{
        const bestProduct= products.filter((product)=>product.bestSeller).slice(0,5)
        setBestSeller(bestProduct)
    },[products])
  return (
    <div className="my-10">
        <div className=" text-center py-8">
        <Title text1={"Best"} text2={"Seller"}/>
        <p className="w-3/4 text-gray-600 m-auto text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores accusamus libero dolore dignissimos, repellendus ab nulla, veniam doloribus repudiandae illum vitae voluptatibus?</p>
        </div>
        <div className="grid pt-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          bestSeller.map((item, index)=>(
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            
          ))
        }
        </div> 
    </div>
  )
}
export default BestSeller