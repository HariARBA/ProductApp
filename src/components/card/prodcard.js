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
        <Button type="primary" onClick={() => handleClick(carddata)}>
          Add to Cart
        </Button>
      </Card>
      {/* <Card
        hoverable
        size="small"
        cover={
          
            <img alt="example" style={{ height: "90%" }} src={carddata.image} />
          
        }
      ></Card>
      <Card hoverable>
        <Meta title={carddata.title} />
        <div style={{ overflow: "hidden"}}>
          <p>{carddata.description}</p>
        </div>
        <h3>${carddata.price}</h3>
        <Button type="primary" block onClick={increase} style={{}}>
          Add To Cart
        </Button>
      </Card> */}
    </div>
  );
}
export default CardLayout;
