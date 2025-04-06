import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
// creating context API
export const ShopContext=createContext();

const ShopContextProvider=(props)=>{
    const currency='$';
    const delivery_fee=10;
  const [search, setSearch]= useState("")
  const [showSearch, setShowSearch]= useState(false)
  const [cartItem, setCartItem]= useState({})

  const addToCart= async (itemId, size)=>{
    if(!size){
      toast.error("please select size")
      return 
    }
     let cartData= structuredClone(cartItem)   //structured clone make deep copy of cartItem
     console.log(cartData)
     if(cartData[itemId]){                  //  if cartData[id] this key exist then
      if(cartData[itemId][size]){
        cartData[itemId][size]+=1
      }else{
        cartData[itemId][size]=1
      }
     }else{
       cartData[itemId]={}           // here it making nested object
       cartData[itemId][size]=1     // e.g.- { aa:{S:1} }
       
     }
     setCartItem(cartData)
  }
  const getCartCount=()=>{
    let totalCount= 0;
    for(const items in cartItem){
      for(const item in cartItem[items]){
        try {
          if(cartItem[items][item]>0){
            totalCount+=cartItem[items][item]
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
    return totalCount
  }
  useEffect(()=>{
    console.log(cartItem)
  },[cartItem])

    const value={
         currency,
         delivery_fee,
         products,
         search,
         setSearch, 
         showSearch,
         setShowSearch,
         cartItem,
         addToCart, 
         getCartCount
    }
    return(
        <ShopContext.Provider value={value}>
          {props.children}
        </ShopContext.Provider>

    )
}

export default ShopContextProvider;