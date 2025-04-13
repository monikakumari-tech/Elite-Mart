import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Subscribe from '../components/Subscribe'

 const About = () => {
  return (
    <div>
      <hr />
      <div className=' my-10 text-gray-500'>
        <div className='text-center'><Title text1={"About"} text2={"Us"}/></div>
      
      <div className='flex flex-col lg:flex-row mt-8 items-center text-lg gap-20'>
        <img src={assets.about_img} alt="image" className='lg:w-120 w-full' />
        <div className='flex flex-col gap-5'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quibusdam quod omnis voluptas provident nobis magni tempora ad aliquid ab?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quibusdam quod omnis voluptas provident nobis magni tempora ad aliquid ab?</p>
          <p className='font-extrabold text-black'>Our Mission</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quibusdam quod omnis voluptas provident nobis magni tempora ad aliquid ab?</p>
        </div>
      </div>
      </div>
      {/* why choose us */}
      <div className='text-2xl my-20'>
        <div className='flex  items-center mb-10'><p><span className='text-gray-500'>Why</span> Choose Us</p>
        <hr className='w-10 mx-2' /></div>
        <div className='text-[15px] text-gray-500 flex flex-col sm:flex-row'>
          <div className='border py-10 px-10 sm:py-25 sm:px-20'>
            <p className='text-black font-extrabold mb-5'>Quality Assurance:</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quibusdam quod omnis voluptas provident nobis magni tempora ad aliquid ab?</p>
          </div>
          <div className='border py-10 px-10 sm:py-25 sm:px-20'>
            <p className='text-black font-extrabold mb-5 '>Convenience:</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quibusdam quod omnis voluptas provident nobis magni tempora ad aliquid ab?</p>
          </div>
          <div className='border py-10 px-10 sm:py-25 sm:px-20'>
            <p className='text-black font-extrabold mb-5'>Exceptional:</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quibusdam quod omnis voluptas provident nobis magni tempora ad aliquid ab?</p>
          </div>
        </div>
        
      </div>
      {/* subscrinbe */}
     <Subscribe/>
    </div>
  )
}
export default About

