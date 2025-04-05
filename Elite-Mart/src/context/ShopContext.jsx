import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

// creating context API
export const ShopContext=createContext();

const ShopContextProvider=(props)=>{
    const currency='$';
    const delivery_fee=10;
  const [search, setSearch]= useState("")
  const [showSearch, setShowSearch]= useState(false)
  const [cartItem, setCartItem]= useState({})

  const addToCart= async (itemId, size)=>{
     let cartData= structuredClone(cartItem)
     console.log(cartData)
     if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size]+=1
      }else{
        cartData[itemId][size]=1
      }
     }else{
       cartData[itemId]={}
       cartData[itemId][size]=1
     }
     setCartItem(cartData)
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
         addToCart
    }
    return(
        <ShopContext.Provider value={value}>
          {props.children}
        </ShopContext.Provider>

    )
}

export default ShopContextProvider;