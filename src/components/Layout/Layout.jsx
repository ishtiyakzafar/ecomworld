import React, { useState } from "react";
import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LoginModal from "../LoginModal/LoginModal";
import { useSelector } from "react-redux";

const Layout = () => {
  const { showLoginPopup } = useSelector((state) => state.app);

  return (
    <div style={{ overflow: "hidden" }}>
      {showLoginPopup && <LoginModal />}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
