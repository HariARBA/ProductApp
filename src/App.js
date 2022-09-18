import React from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import "react-toastify/dist/ReactToastify.css"


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
  const dispatch = useDispatch();
  const productdata = useSelector((state) => state.product);

  const getProduct = async () => {
    dispatch(productLoading());
    try {
      const product = await axios({ url: "https://fakestoreapi.com/products" });
      dispatch(productSuccess(product.data));
    } catch (error) {
      console.log(error);
      dispatch(productError(error.message));
    }
  };

  React.useEffect(() => {
    getProduct();
  }, []);

  if (productdata.error) {
    return <>error</>;
  } else if (productdata.loading) {
    return <>Loading</>;
  } else {
    return (
      <AppLayout>

        <AppRoute />

      </AppLayout>
    );
  }
}

export default App;
