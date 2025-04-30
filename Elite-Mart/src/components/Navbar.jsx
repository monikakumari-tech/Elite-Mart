import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItem,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItem({});
  };
  return (
    <div className="flex justify-between items-center py-5 font-medium">
      <NavLink to="/">
        <img src={assets.mujlogo} alt="logo" className="w-40 h-18 rounded" />
      </NavLink>
      <ul className="hidden sm:flex gap-5 text-[16px] text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1 ">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] hidden bg-gray-700" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] hidden bg-gray-700" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] hidden bg-gray-700" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] hidden bg-gray-700" />
        </NavLink>
      </ul>

      <div className="flex item-center gap-6">
        <img
          src={assets.search_icon}
          alt="search"
          className="w-6"
          onClick={() => {
            setShowSearch(true);
          }}
        />
        <div className="group relative">
          <Link to="/login">
            <img src={assets.profile_icon} alt="profile" className="w-5" />
          </Link>

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-1 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-sm">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <hr className="text-gray-300"/>
              <p className="cursor-pointer hover:text-black" onClick={()=>navigate("/orders")}>Orders</p>
              {token && (
                <div>
                 <hr className="text-gray-300"/>
                <p className="cursor-pointer hover:text-black" onClick={logout}>
                  Logout
                </p>
                </div>
                
              )}
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu"
          className=" w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* Mobile view  */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointers"
          >
            <img
              src={assets.dropdown_icon}
              alt="menu"
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>
          {/* add NavLink */}

          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className="py-2 pl-6 border "
          >
            Home
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            to="/collection"
            className="py-2 pl-6 border"
          >
            Collection
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className="py-2 pl-6 border"
          >
            About
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            to="/contact"
            className="py-2 pl-6 border"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
