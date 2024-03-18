import React from "react";
import { Outlet } from "react-router-dom";

import { MainNavigation } from "../components";
import { Footer } from "../components";
import { ScrollRestoration } from "react-router-dom";

const RootPage = () => {
  return (
    <>
      <ScrollRestoration />
      <MainNavigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootPage;
