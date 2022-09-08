import React from "react";
import { Divider } from "antd";
// import CardLayout from "../Card/card";
// import { Row, Col,  Button } from "antd";
// import ProductData from "../products";

function CheckoutPage() {
  return (
    <div className="main">
      <h2>My Cart</h2>
      <Divider />
      <h2>Checkout page</h2>
      {/* <Row gutter={[16, 16]}>
        {ProductData.map((it, index) => {
          return (
            <Col span={6} key={index}>
              <CardLayout carddata={it} />
            </Col>
          );
        })}
      </Row> */}
      <Divider />
    </div>
  );
}
export default CheckoutPage;
