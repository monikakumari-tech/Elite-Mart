import React, { useContext } from 'react'
import  { ShopContext } from '../context/ShopContext'
import Title from './Title'

const LatestCollection = () => {
  const {products}= useContext(ShopContext)
  console.log(products)
  return (
    <div>
      {/* <Title text1={"Monika"} text2={"kumari"}/> */}
    </div>
  )
}
export default LatestCollection
