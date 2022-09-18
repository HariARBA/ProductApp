import { Button, Card } from "antd";
import React from "react";

import { Tooltip, Typography } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/features/product/cartSlice";
const { Paragraph } = Typography;

function CardLayout({ data }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Card hoverable>
        <img
          style={{
            width: "240px",
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
              <p style={{ fontWeight: "bold", fontSize: 14 }}>{data.title}</p>
              {data.description}
            </Paragraph>
          </Tooltip>
        </div>

        <Button
          type="primary"
          block
          onClick={() => {
            dispatch(addToCart(data));
          }}
        >
          Add to Cart
        </Button>
      </Card>
    </div>
  );
}
export default CardLayout;
