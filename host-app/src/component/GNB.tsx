import Layout from "antd/es/layout";
import Menu from "antd/es/menu";
import React from "react";

const { Header } = Layout;

const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `Main ${index + 1}`,
}));

export default function GNB() {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        display: "flex",
        alignItems: "center",
      }}
    >
      <h3 style={{ color: "white", marginRight: 20 }}>Global Navigation Bar</h3>
      <Menu theme="dark" mode="horizontal" items={items} style={{ flex: 1 }} />
    </Header>
  );
}
