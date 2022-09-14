import React,{useState} from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../pages/homepage";
import CheckoutPage from "../pages/checkoutpage";

function AppRoute(){
    const [cart, setCart] = useState([]);
    const handleClick = (product) => {
      
      // if(cart.indexOf(product!==0) )return;
      setCart([...cart, product]);
  
    };
  
    const handleChange=(product,d) =>{
      const ind=cart.indexOf(product);
      const arr=cart;
      arr[ind].amount +=d;
  
      if(arr[ind].amount===0) arr[ind].amount=1;
      setCart([...arr])
    }
    return(
        <Routes>
        <Route path="/" element={<Navigate replace to="/homepage" />} />
        <Route path="/homepage" element={<HomePage handleClick={handleClick}/>} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} setCart={setCart} handleChange={handleChange} />} />
      </Routes>
    );
}
export default AppRoute;