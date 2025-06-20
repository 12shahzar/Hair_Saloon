import React from "react";
import { Background } from "../assest";

const Layout = ({ children }) => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      {children}
    </div>
  );
};

export default Layout;
