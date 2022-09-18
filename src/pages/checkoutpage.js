import React from "react";

import { Row, Col, Divider, Button } from "antd";
import CartCardLayout from "../components/card/cartcard";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getTotal } from "../store/features/product/cartSlice";

function CheckoutPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  React.useEffect(() => {dispatch(getTotal());}, [cart]);
  return (
    <div className="main">
      <Divider />
      <h2>My Cart</h2>
      <Divider />
      <div>
        {cart.cartItems.length === 0 ? (
          "Your Cart is Empty"
        ) : (
          <Row gutter={[16, 16]} style={{ padding: "10px" }}>
            {cart.cartItems?.map((product, index) => {
              return (
                <Col
                  span={6}
                  xs={{ span: 24 }}
                  sm={{ span: 12 }}
                  lg={{ span: 6 }}
                >
                  <CartCardLayout data={product} />
                </Col>
              );
            })}
          </Row>
        )}
        <Divider />
      </div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Button onClick={() => dispatch(clearCart())}>Clear Cart</Button>
        </Col>

        <Col span={12}>
          <div style={{ display: "flex", justifyContent: "end",fontWeight: "bold", fontSize: "2em"  }}>
            Total : $ {cart.cartTotalAmount}
          </div>
        </Col>
      </Row>

      <Divider />
    </div>
  );
}
export default CheckoutPage;
