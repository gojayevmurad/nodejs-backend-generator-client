import React from "react";

import "./button.scss";

const Button = ({ label, loading, customClass }) => {
  return (
    <button
      disabled={loading}
      className={customClass ? customClass + " default_btn" : " "}
    >
      {loading ? <div className="loading_circle"></div> : label}
    </button>
  );
};

export default Button;
