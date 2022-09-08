import React from "react";
import CardLayout from "../card/card";
import { Button, Row, Col, Divider } from "antd";
import ProductData from "../products";
import { useNavigate } from "react-router-dom";
import { Padding, ProductBox } from "../styledcomps/styledcomps";

global.count = 0;
function HomePage() {
  let navigate = useNavigate();
  return (
    <Padding>
      <div className="main">
        <ProductBox primary>Products</ProductBox>
        <Divider />

        <Row gutter={[16, 16]}>
          {ProductData.map((it, index) => {
            return (
              <Col span={6} key={index}>
                <CardLayout carddata={it} />
              </Col>
            );
          })}
        </Row>
        <div
          style={{
            float: "right",
            marginLeft: "auto",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            size={"large"}
            type="primary"
            block
            onClick={() => navigate("/checkout")}
            
          >
            Checkout
          </Button>
        </div>

        <Divider />
      </div>
    </Padding>
  );
}

export default HomePage;
