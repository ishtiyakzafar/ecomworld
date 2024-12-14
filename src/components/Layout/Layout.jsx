import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Layout.scss";
import { Outlet, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";


const Layout = () => {
  const [loginPopup, showLoginPopup] = useState(false);

  return (
    <div style={{ overflow: "hidden" }}>
      {loginPopup && <Login showLoginPopup={showLoginPopup} />}
      <Header showLoginPopup={showLoginPopup} />
      <Outlet />
      <Footer />


      {/* <ScrollToTopButton /> */}
      {/* <div className="service_chat_bot">
          <ServiceChatBot />
        </div> */}

      {/* <AcceptCookie /> */}

    </div>
  );
};

export default Layout;
