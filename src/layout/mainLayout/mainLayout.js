import React from "react";
import { Outlet } from "react-router";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
