import React,{useState} from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'


const Collection = () => {
  const [showFilter, setShowFilter]=useState(false)
  
  return (
    
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60 '>
         <p onClick={()=>setShowFilter(!showFilter)} className={`flex items-center cursor-pointer gap-1 `}>FILTERS
          <img className={`h-4 sm:hidden ${showFilter ? "rotate-90 " : ""}`} src={assets.dropdown_icon} alt="dropdown" />
         </p>
         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
           <p className='mb-3 text-sm font-medium'>Category</p>
           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'> 
             <p className='flex gap-2'>
              <input type="checkbox" value={"Men"} />
              Men
             </p>
             <p className='flex gap-2'>
              <input type="checkbox" value={"Women"} />
              Women
             </p>
             <p className='flex gap-2'>
              <input type="checkbox" value={"Kids"} />
              Kids
             </p>
           </div>
         </div>
         {/* Subcategory */}
         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
           <p className='mb-3 text-sm font-medium'>TYPES</p>
           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'> 
             <p className='flex gap-2'>
              <input type="checkbox" value={"Topwear"} />
              Topwear
             </p>
             <p className='flex gap-2'>
              <input type="checkbox" value={"Bottomwear"} />
              Bottomwear
             </p>
             <p className='flex gap-2'>
              <input type="checkbox" value={"Winterwear"} />
              Winterwear
             </p>
           </div>
         </div>
      </div>
     
    </div>
  )
}
export default Collection
