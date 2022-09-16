import React from "react";
import { Row, Col, Button, Divider } from "antd";
<<<<<<< HEAD
// import ProductData from "../components/products";
=======
>>>>>>> 04f0af0052d4f8e238d4bbec44d338959a98698a
import { useNavigate } from "react-router-dom";

import CardLayout from "../components/card/prodcard";
import { useSelector } from "react-redux";

function HomePage({ handleClick }) {
  let navigate = useNavigate();
  const productdata = useSelector((state) => state.product);

  return (
    <div>
      <Divider />
      <h2 style={{ padding: "10px" }}>Products</h2>
      <Divider />
      <Row gutter={[16, 16]} style={{ padding: "10px" }}>
<<<<<<< HEAD
        {productdata.map((product, index) => {
=======
        {productdata.data.map((product, index) => {
>>>>>>> 04f0af0052d4f8e238d4bbec44d338959a98698a
          return (
            <Col span={6} xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
              <CardLayout data={product} />
            </Col>
          );
        })}
      </Row>

      <Divider />
      <Button
        type="primary"
        block
        size="large"
        onClick={() => navigate("/checkout")}
      >
        Checkout
      </Button>
      <Divider />
    </div>
  );
}

export default HomePage;
