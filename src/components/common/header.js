import React from "react";
import { Menu, Badge } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { HeaderStyle, LogoBox } from "../styledcomps/styledcomps";
import { useSelector } from "react-redux";


function AppHeader() {
  let navigate = useNavigate();
const {cartTotalQuantity}=useSelector((state)=>state.cart)
  return (
    <HeaderStyle >
      <LogoBox onClick={() => navigate("/homepage")}>Logo</LogoBox>

      <Menu mode="horizontal">
        <Menu.Item>
          <Badge  count={cartTotalQuantity} onClick={() => navigate("/checkout")}>
            <ShoppingCartOutlined style={{fontSize:"200%"}}/>
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
