import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Subscribe from '../components/Subscribe'

 const Contact = () => {
  return (
    <div>
      <hr />
      <div className='text-center py-10'>
        <Title text1={"Contact"} text2={"Us"}/>
      </div>
      <div className='flex flex-col md:flex-row md:justify-center mb-20 gap-10'>
        <img src={assets.contact_img} alt="image" className='w-full md:w-130'/>
        <div className='flex flex-col gap-8 text-lg text-gray-600'>
          <p className='text-gray-600 text-2xl font-extrabold'>Our Store</p>
          <p>80a, Mumbai CST East
          234A , Maharastra, India</p>
          <p>Tel: +91- 999999999</p>
          <p>Email:muj@gmail.com</p>
          <p>Careers at MUJ</p>
          <p>Learn about more our teams and at forever</p>
          <div className='border px-10 py-5 w-fit '>Explore jobs</div>
        </div>
      </div>
      <div>
        <Subscribe/>
      </div>
    </div>
  )
}
export default Contact