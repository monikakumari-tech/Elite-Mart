import { assets } from "../assets/assets"

const Add = () => {
  return (
    <div className="font-serif">
       <p>Upload Image</p>
       <div className="flex my-2">
        <img src={assets.upload_area} alt="image" className="w-20 mr-2"/>
        <img src={assets.upload_area} alt="image" className="w-20 mr-2"/>
        <img src={assets.upload_area} alt="image" className="w-20 mr-2"/>
        <img src={assets.upload_area} alt="image" className="w-20"/>
       </div>
       <div  className=" mt-5">
       <p>Product Name</p>
       <input type="text" className="border border-gray-300 px-5 h-10 rounded-sm md:w-1/2 w-full" placeholder="Type here" />
       </div>
       <div  className=" mt-5">
       <p>Product Description</p>
       <input type="text-area" className="border border-gray-300 px-5 h-20 rounded-sm md:w-1/2 w-full" placeholder="Write comment here" />
       </div>
       <div className="flex flex-col gap:5 md:gap-15 mt-5 md:flex-row ">
        <div>
          <p>Product Category</p>
          <select name="category" id="" className="border border-gray-400 rounded p-2 mt-2 w-full">
            <option value="men">Men</option>
            <option value="Women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div>
          <p>Sub Category</p>
          <select name="category" id="" className="border border-gray-400 rounded p-2 mt-2 w-full">
            <option value="men">Topwear</option>
            <option value="Women">Bottomwear</option>
            <option value="kids">Kidswear</option>
          </select>
          </div>
        <div>
          <p>Product Price</p>
          <input type="number" className="border border-gray-400 rounded p-2 mt-2 md:w-3/4 w-full" />
          </div>
       </div>
       <div className="mt-5">
        <p>Product Sizes</p>
        <div className="flex gap-4 mt-2">
          <div className="bg-gray-200 w-fit px-4 py-2">S</div>
          <div className="bg-gray-200 w-fit px-4 py-2">M</div>
          <div className="bg-gray-200 w-fit px-4 py-2">L</div>
          <div className="bg-gray-200 w-fit px-4 py-2">XL</div>
          <div className="bg-gray-200 w-fit px-4 py-2">XXL</div>
        </div>
       </div>
       <div className="flex gap-2 mt-4">
        <input type="checkbox" />
       <p>Add to bestseller</p>
       </div>
      
       <button className="bg-black text-white mt-5 px-8 py-2">Add</button>
      
    </div>
  )
}
export default Add