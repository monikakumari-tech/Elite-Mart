import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import { useLocation } from "react-router-dom";
const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible]= useState(false)
  useEffect(() => {
    console.log(location.pathname);
    if(location.pathname.includes("collection")){
        setVisible(true)
    }else{
        setVisible(false)
    }
  }, [location]);
  return showSearch && visible ? (
    <div class="flex items-center py-4 bg-gray-50 justify-center border-t border-b">
      <div class=" bg-white  border border-gray-400 rounded-3xl px-5 flex justify-between w-3/4 sm:w-1/2">
        <input type="text" placeholder="Search" class="outline-none" />
        <img src={assets.search_icon} alt="search" class="p-2 w-10 " />
      </div>
      <img
        src={assets.cross_icon}
        alt="cross"
        class=" h-5 px-2 "
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
};
export default SearchBar;
