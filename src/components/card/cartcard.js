import { Button, Card, Row, Col } from "antd";
import React from "react";

import { Tooltip, Typography } from "antd";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  removeFromCart,
  increaseQuantity
} from "../../store/features/product/cartSlice";

const { Paragraph, Text } = Typography;

function CartCardLayout({ data }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Card hoverable>
        <img
          style={{
            width: "100%",
            height: "300px",
            objectFit: "fit",
            zIndex: "-10",
          }}
          alt="example"
          src={data.image}
        />
      </Card>
      <Card>
        <div
          title={data.title}
          style={{
            display: "flex",
            borderRadius: "4px",

            marginTop: "-50px",
            backgroundColor: "white",
          }}
        >
          <Tooltip title={data.description}>
            <Paragraph ellipsis={{ rows: 5 }}>
              <p style={{ fontWeight: "bold", fontSize: 16 }}>{data.title}</p>
              {data.description}
            </Paragraph>
          </Tooltip>
        </div>
        <div style={{ fontWeight: "bold", fontSize: "1.5em" }}>
          Price: $ {data.price}
        </div>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Button block onClick={() => dispatch(increaseQuantity(data))}>
              +
            </Button>
          </Col>
          <Col span={8}>
            <Text strong style={{ display: "flex", justifyContent: "center" }}>
              {data.cartQuantity}
            </Text>
          </Col>
          <Col span={8}>
            <Button block onClick={() => dispatch(decreaseQuantity(data))}>
              -
            </Button>
          </Col>
        </Row>

        <Button
          type="primary"
          block
          onClick={() => dispatch(removeFromCart(data))}
        >
          Remove from Cart
        </Button>
      </Card>
    </div>
  );
}
export default CartCardLayout;
