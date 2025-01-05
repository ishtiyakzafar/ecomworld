import React from "react";
import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
