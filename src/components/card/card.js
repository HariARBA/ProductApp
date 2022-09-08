import { Button, Card } from "antd";
import React from "react";
import { useState } from "react";
import "../globalvariables";

const { Meta } = Card;

function CardLayout({ carddata }) {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((global.count = count + 1));
  };

  console.log(global.count);
  return (
    <div>
      <Card
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
      </Card>
    </div>
  );
}
export default CardLayout;
