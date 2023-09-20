import React from "react";
import { Outlet } from "react-router-dom";
import TemporaryDrawer from "../../components/SideBar";
import SideBar from "../../components/SideBar";

const CreatorLayout = () => {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default CreatorLayout;
