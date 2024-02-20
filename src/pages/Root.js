import React from "react";
import { Outlet } from "react-router-dom";

import { MainNavigation } from "../components";

const RootPage = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootPage;
