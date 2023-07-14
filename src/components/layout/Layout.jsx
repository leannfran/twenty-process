import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../Footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main className="bg-white">{children}</main>
      <Footer />
    </div>
  );
};
