import React from "react";
import { Row, Col, Button, Divider } from "antd";
import ProductData from "../components/products";
import { useNavigate } from "react-router-dom";

import CardLayout from "../components/card/card";

global.count = 0;
function HomePage() {
  let navigate = useNavigate();

  return (
    <div>
      <Divider />
      <h2 style={{ padding: "10px" }}>Products</h2>
      <Divider />
      <Row gutter={[16, 16]} style={{ padding: "10px" }}>
        {ProductData.map((product, index) => {
          return (
            <Col span={6} xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
              <CardLayout carddata={product} />
            </Col>
          );
        })}
      </Row>

      <Divider />
      <Button type="primary" size="large" onClick={() => navigate("/checkout")}>
        Checkout
      </Button>
      <Divider />
    </div>
  );
}

export default HomePage;
