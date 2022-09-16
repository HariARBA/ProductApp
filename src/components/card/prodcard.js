import { Button, Card } from "antd";
import React from "react";

import { Tooltip, Typography } from "antd";
const { Paragraph } = Typography;

function CardLayout({ data }) {
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
        <Button type="primary" block onClick={() => {}}>
          Add to Cart
        </Button>
      </Card>
    </div>
  );
}
export default CardLayout;
