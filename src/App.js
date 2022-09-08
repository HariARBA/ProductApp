import React from "react";
import "./App.css";
import "antd/dist/antd.min.css";

import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/hoc/AppLayout";
import HomePage from "./components/pages/homepage";
import CheckoutPage from "./components/pages/checkoutpage";


function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/homepage" />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
