import React, { useState } from "react";
import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LoginModal from "../LoginModal/LoginModal";

const Layout = () => {
  const [loginPopup, showLoginPopup] = useState(false);

  return (
    <div style={{ overflow: "hidden" }}>
      {loginPopup && <LoginModal showLoginPopup={showLoginPopup} />}
      <Header showLoginPopup={showLoginPopup} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
