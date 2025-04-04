import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import ProductItem from "./ProductItem"

const RelatedProduct = ({category, subCategory}) => {
    const {products}= useContext(ShopContext)
    const [related, setRelated]= useState([])
   useEffect(()=>{
     if(products.length>0){
        let productCopy= products.slice()
        // console.log(productCopy)
        productCopy= productCopy.filter((item)=>item.category==category)
        productCopy= productCopy.filter((item)=>item.subCategory==subCategory)
       console.log(productCopy.slice(0,5))
       setRelated(productCopy.slice(0,5))
     }
   },[])

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
       {
         related.map((item,index)=><ProductItem id={item._id}  name={item.name} image={item.image} price={item.price} />)
       }
    </div>
  )
}
export default RelatedProduct