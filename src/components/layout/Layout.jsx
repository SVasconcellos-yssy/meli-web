import React from "react";
import Header from "../Header/Header";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Breadcrumb/>
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
