import React, { useState, useEffect } from "react";

import { Row,Col, Divider} from "antd";
import CartCardLayout from "../components/card/cartcard";

function CheckoutPage({ cart, setCart, handleChange }) {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((product) => product.id !== id);
    setCart(arr);
    handlePrice();
  };
  const handlePrice = () => {
    let ans = 0;
    cart.map((product) => (ans += product.amount * product.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="main">
      <h2>My Cart</h2>
      <Divider />
      <Row gutter={[16, 16]} style={{ padding: "10px" }}>
        {cart.map((product, index) => {
          return (
            <Col span={6} xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
              <CartCardLayout carddata={product} handleChange={handleChange} handleRemove={handleRemove}/>
            </Col>
          );
        })}
      </Row>
      <div>
        Total : $
        {price}
      </div>

      <Divider />
    </div>
  );
}
export default CheckoutPage;
