import React from "react";
import { Row, Col, Button, Divider } from "antd";
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
        {productdata.data.map((product, index) => {
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
