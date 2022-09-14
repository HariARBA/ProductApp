import { Button, Card } from "antd";
import React from "react";

import { Tooltip, Typography } from "antd";
import "../globalvariables";

const { Paragraph } = Typography;
function CardLayout({ carddata, handleClick }) {

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
              <p style={{ fontWeight: "bold", fontSize: 14 }}>
                {carddata.title}
              </p>
              {carddata.description}
            </Paragraph>
          </Tooltip>
        </div>
        <Button type="primary" block onClick={() => handleClick(carddata)}>
          Add to Cart
        </Button>
      </Card>

    </div>
  );
}
export default CardLayout;
