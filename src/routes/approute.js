import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../pages/homepage";
import CheckoutPage from "../pages/checkoutpage";



function AppRoute() {

  return (
      <Routes>
      
      <Route path="/" element={<Navigate replace to="/homepage" />} />
      <Route
        path="/homepage"
        element={<HomePage/>}
      />
      <Route
        path="/checkout"
        element={
          <CheckoutPage

          />
        }
      />
      <Route>404 Not Found!</Route>
    </Routes>
  );
}
export default AppRoute;
