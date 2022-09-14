import { Button, Card } from "antd";
import React from "react";

import { Tooltip, Typography } from "antd";
import "../globalvariables";

const { Paragraph } = Typography;
function CartCardLayout({ carddata, handleChange, handleRemove }) {
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
          src={carddata.image}
        />
      </Card>
      <Card>
        <div
          title={carddata.title}
          style={{
            display: "flex",
            borderRadius: "4px",

            marginTop: "-50px",
            backgroundColor: "white",
          }}
        >
          <Tooltip title={carddata.description}>
            <Paragraph ellipsis={{ rows: 5 }}>
              <p style={{ fontWeight: "bold", fontSize: 16 }}>
                {carddata.title}
              </p>
              {carddata.description}
            </Paragraph>
          </Tooltip>
        </div>
        <Button type="primary" block onClick={() => handleChange(carddata, 1)}>
          +
        </Button>
        <Button type="primary"block>{carddata.amount}</Button>
        <Button type="primary"block onClick={() => handleChange(carddata, -1)}>
          -
        </Button>
        <Button type="primary" block onClick={() => handleRemove(carddata.id)}>
          Remove from Cart
        </Button>
      </Card>
    </div>
  );
}
export default CartCardLayout;
