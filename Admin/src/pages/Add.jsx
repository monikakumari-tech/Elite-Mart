import { useState } from "react"
import { assets } from "../assets/assets"
import {backend_url} from "../App"
import axios from "axios"
import { toast } from "react-toastify"

const Add = ({token}) => {
  const [image1, setImage1]=useState(false)
  const [image2, setImage2]=useState(false)
  const [image3, setImage3]=useState(false)
  const [image4, setImage4]=useState(false)
  const [name, setName]=useState("")
  const [description, setDescription]=useState("")
  const [price, setPrice]=useState("")
  const [category, setCategory]=useState("Women")
  const [subCategory, setSubCategory]=useState("Topwear")
  const [bestseller, setBestseller]=useState(false)
  const [sizes, setSizes]=useState([])

  const onSubmitHandler = async(e)=>{
        e.preventDefault()
        try{
            const formData = new FormData()
            formData.append("name",name)
            formData.append("description",description)
            formData.append("price",price)
            formData.append("category",category)
            formData.append("bestSeller",bestseller)
            formData.append("sizes",JSON.stringify(sizes))
            formData.append("subCategory",subCategory)
            image1 && formData.append("image1",image1)
            image2 && formData.append("image2",image2)
            image3 && formData.append("image3",image3)
            image4 && formData.append("image4",image4)

            // formData.forEach((value, key) => {
            //   console.log(key, value);
            // });
            const response = await axios.post(backend_url + "/api/product/add", formData, {headers:{token}});
            if(response.data.success){
              toast.success(response.data.message)
              setName("")
              setDescription("")
              setImage1(false)
              setImage2(false)
              setImage3(false)
              setImage4(false)
              setPrice("")
            }else{
              toast.error(response.data.message)
            }
            console.log("line 38", response.data)
        }catch(error){
          toast.error(error.message)
          console.log(error)
        }
  }

  console.log(sizes)
  return (
    <form onSubmit={onSubmitHandler}>
    <div className="font-serif">
       <p>Upload Image</p>
       <div className="flex my-2">
        <label htmlFor="image1"> <img src={ !image1 ? assets.upload_area :URL.createObjectURL(image1)} alt="image" className="w-20 mr-2"/><input id="image1" type="file" hidden onChange={(e)=>setImage1(e.target.files[0])}/></label>
        <label htmlFor="image2"> <img src={!image2 ? assets.upload_area :URL.createObjectURL(image2)} alt="image" className="w-20 mr-2"/><input id="image2"  type="file" hidden onChange={(e)=>setImage2(e.target.files[0])}/></label>
        <label htmlFor="image3"> <img src={!image3 ? assets.upload_area :URL.createObjectURL(image3)} alt="image" className="w-20 mr-2"/><input id="image3"  type="file" hidden onChange={(e)=>setImage3(e.target.files[0])}/></label>
        <label htmlFor="image4"> <img src={!image4 ? assets.upload_area :URL.createObjectURL(image4)} alt="image" className="w-20 "/><input id="image4"  type="file" hidden onChange={(e)=>setImage4(e.target.files[0])}/></label>
       
     
       </div>
       <div  className=" mt-5">
       <p>Product Name</p>
       <input type="text" className="border border-gray-300 px-5 h-10 rounded-sm md:w-1/2 w-full" placeholder="Type here" onChange={(e)=>setName(e.target.value)} value={name}/>
       </div>
       <div  className=" mt-5">
       <p>Product Description</p>
       <input type="text-area" className="border border-gray-300 px-5 h-20 rounded-sm md:w-1/2 w-full" placeholder="Write comment here" onChange={(e)=>setDescription(e.target.value)} value={description}/>
       </div>
       <div className="flex flex-col gap:5 md:gap-15 mt-5 md:flex-row ">
        <div>
          <p>Product Category</p>
          <select name="category"  className="border border-gray-400 rounded p-2 mt-2 w-full" onChange={(e)=>setCategory(e.target.value)} >
            <option value="men">Men</option>
            <option value="Women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div>
          <p>Sub Category</p>
          <select name="subCategory" className="border border-gray-400 rounded p-2 mt-2 w-full" onChange={(e)=>setSubCategory(e.target.value)} >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="kidwear">Kidswear</option>
          </select>
          </div>
        <div>
          <p>Product Price</p>
          <input type="number" className="border border-gray-400 rounded p-2 mt-2 md:w-3/4 w-full" placeholder="23" min={0} onChange={(e)=>setPrice(e.target.value)} value={price}/>
          </div>
       </div>
       <div className="mt-5">
        <p>Product Sizes</p>
        <div className="flex gap-4 mt-2">
          <div className={`${sizes.includes("S") ? "bg-pink-100" : "bg-gray-200"} w-fit px-4 py-2`} onClick={()=>setSizes((pre)=>pre.includes("S") ? pre.filter((item)=>item!=="S") : [...pre,"S"])}>S</div>
          <div className={`${sizes.includes("M") ? "bg-pink-100" : "bg-gray-200"} w-fit px-4 py-2`} onClick={()=>setSizes((pre)=>pre.includes("M") ? pre.filter((item)=>item!=="M") : [...pre,"M"])}>M</div>
          <div className={`${sizes.includes("L") ? "bg-pink-100" : "bg-gray-200"} w-fit px-4 py-2`} onClick={()=>setSizes((pre)=>pre.includes("L") ? pre.filter((item)=>item!=="L") : [...pre,"L"])}>L</div>
          <div className={`${sizes.includes("XL") ? "bg-pink-100" : "bg-gray-200"} w-fit px-4 py-2`} onClick={()=>setSizes((pre)=>pre.includes("XL") ? pre.filter((item)=>item!=="XL") : [...pre,"XL"])}>XL</div>
          <div className={`${sizes.includes("XXL") ? "bg-pink-100" : "bg-gray-200"} w-fit px-4 py-2`} onClick={()=>setSizes((pre)=>pre.includes("XXL") ? pre.filter((item)=>item!=="XXL") : [...pre,"XXL"])}>XXL</div>
        </div>
       </div>
       <div className="flex gap-2 mt-4">
        <input type="checkbox" onClick={()=>setBestseller(pre=>!pre)} checked={bestseller} id="bestseller"/>
       <label htmlFor="bestseller">Add to bestseller</label>
       </div>
      
       <button className="bg-black text-white mt-5 px-8 py-2">Add</button>
      
    </div>
    </form>
  )
}
export default Add