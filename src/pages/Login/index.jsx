import React, { useState } from "react";
import "./login.scss";
import Button from "../../components/Button";

const Login = () => {
  const [errors, setErrors] = useState([]);

  return (
    <div className="login_page">
      <form>
        <h3>Login</h3>
        <input type="text" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
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

export default Login;
