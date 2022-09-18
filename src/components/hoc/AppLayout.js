import React from "react";
import { Layout } from "antd";
import AppHeader from "../common/header";
import { ToastContainer } from "react-toastify";

const AppLayout = ({ children }) => {
  const { Header, Content } = Layout;
  return (
    <Layout className="mainLayout" style={{ padding: "10px 20px" }}>
      <ToastContainer
        style={{ position: "-100px" }}
        position="bottom-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <Header>
        <AppHeader />
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
};
export default AppLayout;
