import React from "react";
import "./App.css";
import "antd/dist/antd.min.css";

import AppLayout from "./components/hoc/AppLayout";
import AppRoute from "./routes/approute";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  productError,
  productLoading,
  productSuccess,
} from "./store/features/product/productSlice";

function App() {
  const products = useSelector((state) => state.product);
  const getProduct = async () => {
    dispatch(productLoading());
    try {
      const product = await axios({ url: "https://fakestoreapi.com/products" });
      console.log("product:", product);
      dispatch(productSuccess( product.data));
    } catch (error) {
      console.log(error);
      dispatch(productError( error.message));
    }
  };
  const dispatch = useDispatch();
  React.useEffect(() => {
    getProduct();
  }, []);

  return (
    <AppLayout>
      <AppRoute />
    </AppLayout>
  );
}

export default App;
