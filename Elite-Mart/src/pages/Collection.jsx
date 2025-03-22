import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [filterPrice, setFilterPrice] = useState("relevant")
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products);
  }, []);

  const toggleCategory=(e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item=> item != e.target.value))
    }
    else{
      setCategory(prev=>[...prev, e.target.value])
    }

  }
  const toggleSubCategory=(e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item=> item != e.target.value))
    }
    else{
      setSubCategory(prev=>[...prev, e.target.value])
    }

  }
  const toggleFilterPrice=(e)=>{
    setFilterPrice( e.target.value)
  }
  const applyFilter=()=>{
    let productCopy=products.slice()
   
    if(category.length > 0){
      productCopy=productCopy.filter((item)=>category.includes(item.category))
    }
    if(subCategory.length > 0){
      productCopy=productCopy.filter((item)=>subCategory.includes(item.subCategory))
    }
    if(filterPrice=="lowToHigh"){
      productCopy.sort((a,b)=>a.price-b.price)
    }else if(filterPrice=="highToLow"){
      productCopy.sort((a,b)=>b.price-a.price)
    }else{
      productCopy=productCopy
    }
  

    console.log(productCopy)
    setLatestProducts(productCopy)
    
  
  }
  
  useEffect(()=>{
  
    applyFilter()
    
  },[category,subCategory,filterPrice])
  


  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60 ">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className={`flex items-center cursor-pointer gap-1 text-xl sm:text-2xl`}
        >
          FILTERS
          <img
            className={`h-4 sm:hidden ${showFilter ? "rotate-90 " : ""}`}
            src={assets.dropdown_icon}
            alt="dropdown"
          />
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Category</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" value={"Men"} onChange={toggleCategory} />
              Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={"Women"} onChange={toggleCategory}/>
              Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={"Kids"} onChange={toggleCategory}/>
              Kids
            </p>
          </div>
        </div>
        {/* Subcategory */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" value={"Topwear"} onChange={toggleSubCategory}  />
              Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={"Bottomwear"} onChange={toggleSubCategory} />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={"Winterwear"} onChange={toggleSubCategory} />
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* All collections */}
      <div>
        <div className="flex justify-between mb-4">
          <div>
            <Title text1={"All"} text2={"Collections"} />
          </div>
          <div className="mx-2">
            <select
              className="border-1 border-gray-400 p-3"
              name="Sort by"
              id="selectPrice"
              onChange={toggleFilterPrice}
              
            >
              <option value="relevent" >Sort by: Relevent</option>
              <option value="lowToHigh">Sort by: Low to High</option>
              <option value="highToLow">Sort by: High to Low</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {latestProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Collection;
