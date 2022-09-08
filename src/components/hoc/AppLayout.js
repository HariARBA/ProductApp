import React from "react";
import { Layout } from "antd";
import AppHeader from "../common/header";


const AppLayout = ({ children }) => {
  const { Header, Content } = Layout;
  return (
    <div>
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>
        <Content>{children}</Content>
      </Layout>
    </div>
  );
};
export default AppLayout;
