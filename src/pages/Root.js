import React from "react";
import { Outlet } from "react-router-dom";

import { MainNavigation } from "../components";
import { Footer } from "../components";

const RootPage = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootPage;
