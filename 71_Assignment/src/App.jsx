import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Products from "./pages/Products.jsx";
import ProdDetails from "./pages/ProdDetailsPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { useCallback, useEffect, useMemo, useState } from "react";
import Login, { EasyLogin } from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Forgot_Pass from "./pages/Forgot_Pass.jsx";

function App() {
   const location = useLocation();
   const isLoginPath = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/forgot-password';

  // const cartItems = JSON.parse(localStorage.getItem("cartItems")) || {};

  // const [cart, setCart] = useState(cartItems);
  // // const [count, setCount] = useState(0);
  // //dont store count in state if it can be derived from cart

  // const handleCartUpdate = useCallback(
  //   (id, qty) => {
  //     const oldQty = cart[id] ? +cart[id] : 0;
  //     setCart({ ...cart, [id]: oldQty + qty });
  //     console.log("cliked on add to cart", id, qty);
  //   },
  //   [cart]
  // );

  // const count = useMemo(() => {
  //   const allKeys = Object.keys(cart);
  //   // let totalCount = 0;
  //   // for(let i=0; i<allKeys.length; i++){
  //   //   totalCount += +cart[allKeys[i]];
  //   // }
  //   return allKeys.reduce((reduced, current) => {
  //     return reduced + +cart[current];
  //   }, 0);
  // }, [cart]);

  // useEffect(() => {
  //   // const allKeys = Object.keys(cart);
  //   // // let totalCount = 0;
  //   // // for(let i=0; i<allKeys.length; i++){
  //   // //   totalCount += +cart[allKeys[i]];
  //   // // }
  //   // allKeys.reduce((reduced, current) => {
  //   //   return reduced + +cart[current];
  //   // }, 0);

  //   localStorage.setItem("cartItems", JSON.stringify(cart));

  //   // setCount(totalCount);
  // }, [cart]);

  return (
    <div className="min-h-screen  bg-gray-200 flex flex-col">
      {!isLoginPath && <Header />}
      {/* <div className="grow"> */}
      <Routes>
        
        <Route index element={<Products />} />
        <Route
          path="/prod-detail/:id"
          element={<ProdDetails  />}
        />
        <Route path="/cart" element={<CartPage />} />

        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/login" element={<EasyLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<Forgot_Pass />} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* </div> */}
      {!isLoginPath && <Footer />}
    </div>
  );
}

export default App;
