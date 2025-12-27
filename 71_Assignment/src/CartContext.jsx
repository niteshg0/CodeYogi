import { useEffect } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
  const storedCart = JSON.parse(localStorage.getItem("cartItems")) || {};
  const [cart, setCart] = useState(storedCart);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  const handleCartUpdate = useCallback(
    (id, qty) => {
      const oldQty = cart[id] ? +cart[id] : 0;
      setCart({ ...cart, [id]: oldQty + qty });
      // console.log("clicked on add to cart", id, qty);
    },
    [cart]
  );

  const handleRemoveFromCart = useCallback((id) => {
    const newCart = { ...cart };
    delete newCart[id];
    setCart(newCart);
  }, []);

  const count = useMemo(() => {
    const allKeys = Object.keys(cart);
    // let totalCount = 0;
    // for(let i=0; i<allKeys.length; i++){
    //   totalCount += +cart[allKeys[i]];
    // }
    return allKeys.reduce((reduced, current) => {
      return reduced + +cart[current];
    }, 0);
  }, [cart]);

  const data = { cart, setCart, handleCartUpdate, count, handleRemoveFromCart, loading, setLoading };

  return (
  <CartContext.Provider value={data}>
    {children}
  </CartContext.Provider>);
};

export default CartProvider;
