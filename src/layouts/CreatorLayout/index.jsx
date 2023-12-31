import React from "react";
import { Outlet } from "react-router-dom";
import TemporaryDrawer from "../../components/SideBar";
import SideBar from "../../components/SideBar";

import "./creatorLayout.scss";

const CreatorLayout = () => {
  return (
    <div className="creator-layout">
      <SideBar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default CreatorLayout;
