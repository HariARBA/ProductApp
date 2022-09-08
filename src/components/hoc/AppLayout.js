import React from "react";
import { Layout } from "antd";
import AppHeader from "../common/header";

const AppLayout = ({ children }) => {
  const { Header, Content } = Layout;
  return (
    <Layout className="mainLayout" style={{ padding: "10px 20px" }}>
      <Header>
        <AppHeader />
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
};
export default AppLayout;
