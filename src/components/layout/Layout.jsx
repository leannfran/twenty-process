import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../Footer";
import dynamic from "next/dynamic";
const ContactFloatButton = dynamic(() => import("../SpeedDial"), { ssr: false });

export const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main className="bg-white">{children}</main>
      <Footer />
    </div>
  );
};
