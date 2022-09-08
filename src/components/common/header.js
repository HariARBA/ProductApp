import React from "react";
import { Menu, Badge, Row } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "../globalvariables";
import { LogoBox } from "../styledcomps/styledcomps";

var countitem = global.count;
function AppHeader() {
  let navigate = useNavigate();

  return (
    <Row style={{ display: "flex", justifyContent: "space-between" }}>
      <h2 style={{ backgroundColor: "cyan", width: "50px", height: "40px" }}>
        Logo
      </h2>
      <Menu mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="home">
          <Badge count={countitem} onClick={() => navigate("/checkout")}>
            <ShoppingCartOutlined />
          </Badge>
        </Menu.Item>

        <Menu.Item key="order">
          <Avatar />
        </Menu.Item>
      </Menu>
    </Row>
  );
}
export default AppHeader;
