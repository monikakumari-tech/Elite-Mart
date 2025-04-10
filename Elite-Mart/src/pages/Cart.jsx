import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {cartItem,products,currency,updateQuantity}=useContext(ShopContext);
  const [totalPrice, setTotalPrice]= useState([])
  
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
      setCartData(tempData)
    
     }
   }
   
  },[cartItem ])
 
  return (
    <>
    <hr />
    <div className='pt-17 pb-3'>
    <Title text1={"Your"} text2={"Cart"}/>
    </div>
  
   <hr/>
       {cartData.map((item, index)=>{
        const productData= products.find((product)=>product._id==item._id)
        
        
        return (
          <>
          <div key={index} className='flex py-5 justify-between items-center'>
          <div className='flex gap-4'>
            <img src={productData.image[0]} alt="image" className='w-25 sm:w-30'/>
            <div className='flex flex-col text-xl text-gray-700  py-7'>
            <p>{productData.name}</p>
            <div className='flex gap-4 items-center'>
            <p><span>{currency}</span>{productData.price}</p>
            <p className='border py-1 px-3'>{item.size}</p>
            </div>
            
            </div>
          </div>
           
              <input type="number" defaultValue={item.quantity} min={1} className=' border py-3 px-2 ' onChange={(e)=>e.target.value==="" || e.target.value==="0"? null:updateQuantity(item._id, item.size,Number(e.target.value))}/>
            
         
            <div>
            <img src={assets.bin_icon} alt="delete" className='w-6' onClick={()=>updateQuantity(item._id, item.size, 0)} />
          </div>
          </div>
          
          
          <hr/>
          
          
          </>
        )
       })}
       <div className='flex justify-end 
       my-20'>
        <div className='w-full sm:w-[450px]'>
       <CartTotal/>

        </div>
       </div>

<div className="flex justify-end">
        <Link to='/place-order' >
          <button className="bg-black text-white py-4 px-8 mt-2 text-right" >
            Proceed To CheckOut
          </button>
          </Link>
        </div>
         
        

   </>
  )
}
export default Cart
