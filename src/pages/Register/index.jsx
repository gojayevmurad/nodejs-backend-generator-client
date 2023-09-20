import React, { useState } from "react";

import "./register.scss";


import Button from "../../components/Button";

const Register = () => {
  const [errors, setErrors] = useState([]);

  return (
    <div className="login_page">
      <form>
        <h3>Registration</h3>
        <input type="text" placeholder="Enter your name" />
        <input type="text" placeholder="Enter your surname" />
        <input type="text" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <input type="password" placeholder="Confirm your password" />
        <div className="errors-area">
          {errors.map((item) => {
            return <p className="clr-red">● {item}</p>;
          })}
        </div>
        <Button loading={false} label="Submit" customClass="submit_btn" />
      </form>
    </div>
  );
};

export default Register;
