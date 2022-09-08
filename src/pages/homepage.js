import React from "react";
import { Row, Col } from "antd";
import ProductData from "../components/products";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd";
import { Tooltip } from "antd";
import { Card } from "antd";

global.count = 0;
function HomePage() {
  let navigate = useNavigate();
  const { Paragraph } = Typography;
  return (
    <Row gutter={[16, 16]} style={{ padding: "10px", backgroundColor: "red" }}>
      {ProductData.map((product, index) => {
        return (
          <Col span={6} xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
            <Card hoverable key={index}>
              <img
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "fit",
                  zIndex: "-10",
                }}
                alt="example"
                src={product.image}
              />
              <Card>
                <div
                  title={product.title}
                  style={{
                    marginTop: "-50px",
                    backgroundColor: "white",
                  }}
                >
                  <Tooltip title={product.description}>
                    <Paragraph ellipsis={{ rows: 2 }}>
                      {product.description}
                    </Paragraph>
                  </Tooltip>
                </div>
              </Card>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default HomePage;
