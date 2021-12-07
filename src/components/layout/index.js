import React from "react";
import Navbar from "../navbar";

let container = {
  backgroundColor: "transparent",
  minWidth: "100%",
  minHeight: "100%",
};

let childrenWrapper = {
  minHeight: "50vh",
  paddingTop: "1rem",
};

const Layout = ({ children }) => {
  return (
    <div style={container}>
      <Navbar />
      <div style={childrenWrapper}>{children}</div>
    </div>
  );
};

export default Layout;
