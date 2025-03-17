import React from 'react'

const Card = ({image, text1,text2}) => {
 
  return (
    <div className="text-center" >
   
        <img className='w-14 m-auto mb-5' src={image} alt="image" />
    
        <p className=" font-semibold">{text1}</p>
        <p className='text-gray-400'>{text2}</p>
        
    </div>
  )
}
export default Card