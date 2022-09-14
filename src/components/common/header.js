import React from "react";
import { Menu, Badge } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "../globalvariables";
import { HeaderStyle, LogoBox } from "../styledcomps/styledcomps";

var countitem = global.count;
function AppHeader() {
  let navigate = useNavigate();

  return (
    <HeaderStyle>
      <LogoBox onClick={() => navigate("/homepage")}>Logo</LogoBox>

      <Menu mode="horizontal">
        <Menu.Item>
          <Badge count={countitem} onClick={() => navigate("/checkout")}>
            <ShoppingCartOutlined />
          </Badge>
        </Menu.Item>

        <Menu.Item>
          <Avatar />
        </Menu.Item>
      </Menu>
    </HeaderStyle>
  );
}
export default AppHeader;
