import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// creating context API
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("please select size");
      return;
    }
    let cartData = structuredClone(cartItem); //structured clone make deep copy of cartItem
    console.log(cartData);
    if (cartData[itemId]) {
      //  if cartData[id] this key exist then
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {}; // here it making nested object
      cartData[itemId][size] = 1; // e.g.- { aa:{S:1} }
    }
    setCartItem(cartData);
    if (token) {
      try {
        await axios.post(
          backend_url + "/api/cart/add",
          { itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        res.error.message;
      }
    }
  };
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalCount += cartItem[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCount;
  };
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItem);
    cartData[itemId][size] = quantity;
    setCartItem(cartData);

    if (token) {
      try {
        await axios.post(
          backend_url + "/api/cart/update",
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        res.error.message;
      }
    }
  };

  const getCartTotal = () => {
    let totalAmount = 0;
    for (const items in cartItem) {
      let itemInfo = products.find((product) => product._id == items);
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalAmount += itemInfo.price * cartItem[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);
  const getProductData = async () => {
    try {
      const response = await axios.get(backend_url + "/api/product/list");
      console.log(response.data);
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        backend_url + "/api/cart/get",
        {},
        { headers: { token } }
      );
      console.log(response.data, "line 125");
      if (response.data.success) {
        setCartItem(response.data.cartData);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }
  }, []);
  const value = {
    backend_url,
    token,
    setToken,
    navigate,
    currency,
    delivery_fee,
    products,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    setCartItem,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartTotal,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
