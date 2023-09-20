import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div
      style={{
        background: "rgb(97,96,220)",
        background:
          "linear-gradient(45deg, rgba(97,96,220,1) 0%, rgba(144,182,244,1) 100%)",
      }}
    >
      <Outlet />
    </div>
  );
};

export default AuthLayout;
