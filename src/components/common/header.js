import React from "react";
import { Menu, Badge } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "../globalvariables";
import { LogoBox } from "../styledcomps/styledcomps";

var countitem = global.count;
function AppHeader() {
  let navigate = useNavigate();
  console.log(global.count);
  return (
    <div className="header">
      <LogoBox primary>Logo</LogoBox>
      <Menu  mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="home">
          <Badge count={countitem} onClick={() => navigate("/checkout")}>
            <ShoppingCartOutlined />
          </Badge>
        </Menu.Item>

        <Menu.Item key="order">
          <Avatar />
        </Menu.Item>
      </Menu>
    </div>
  );
}
export default AppHeader;
