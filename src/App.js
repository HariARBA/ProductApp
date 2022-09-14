import React from "react";
import "./App.css";
import "antd/dist/antd.min.css";

import AppLayout from "./components/hoc/AppLayout";
import AppRoute from "./routes/approute";

function App() {

  return (
    <AppLayout>
      <AppRoute/>
    </AppLayout>
  );
}

export default App;
