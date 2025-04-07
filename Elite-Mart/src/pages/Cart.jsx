import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Cart = () => {
  const {cartItem,products,currency}=useContext(ShopContext);
  console.log(cartItem);
  const [cartData, setCartData]= useState([])
  useEffect(()=>{
   const tempData=[]
   for(const items in cartItem){
     for(const item in cartItem[items]){
      if(cartItem[items][item]>0){
         tempData.push({
          _id:items,
          size:item,
          quantity:cartItem[items][item]
         })
      }
     }
   }
   setCartData(tempData)
  },[cartItem])
 
  return (
    <>
   <Title text1={"Your"} text2={"Cart"}/>
   <hr/>
       {cartData.map((item, index)=>{
        const productData= products.find((product)=>product._id==item._id)
        return (
          <>
          <div key={index}>
            <img src={productData.image[0]} alt="image" className=''/>
            <div>
            <p>{productData.name}</p>
            <p><span>{currency}</span>{productData.price}</p>
            <p>{item.size}</p>
            </div>
          </div>
          <div>
            {item.quantity}
          </div>
          <div>
            <img src={assets.bin_icon} alt="delete" />
          </div>
          </>
        )
       })}
   </>
  )
}
export default Cart
