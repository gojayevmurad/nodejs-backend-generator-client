import React from "react";
import { useNavigate } from "react-router-dom";

import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import "./landing.scss";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing_page">
      <div className="landing_page--waves">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="wave wave-1"
        >
          <path
            fill="#a2d9ff"
            fill-opacity="0.4"
            d="M0,160L34.3,170.7C68.6,181,137,203,206,229.3C274.3,256,343,288,411,304C480,320,549,320,617,288C685.7,256,754,192,823,165.3C891.4,139,960,149,1029,144C1097.1,139,1166,117,1234,112C1302.9,107,1371,117,1406,122.7L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="wave wave-2"
        >
          <path
            fill="#a2d9ff"
            fill-opacity="0.3"
            d="M0,0L34.3,42.7C68.6,85,137,171,206,197.3C274.3,224,343,192,411,197.3C480,203,549,245,617,229.3C685.7,213,754,139,823,106.7C891.4,75,960,85,1029,80C1097.1,75,1166,53,1234,90.7C1302.9,128,1371,224,1406,272L1440,320L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="wave"
        >
          <path
            fill="#a2d9ff"
            fill-opacity="0.3"
            d="M0,224L34.3,213.3C68.6,203,137,181,206,192C274.3,203,343,245,411,240C480,235,549,181,617,165.3C685.7,149,754,171,823,186.7C891.4,203,960,213,1029,213.3C1097.1,213,1166,203,1234,202.7C1302.9,203,1371,213,1406,218.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="landing_page--patterns">
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="pattern"
        >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop
                id="stop1"
                stop-color="rgba(97, 96, 220, 1)"
                offset="0%"
              ></stop>
              <stop
                id="stop2"
                stop-color="rgba(194.736, 216.366, 251.656, 1)"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient)"
            d="M17.8,-22.4C22.7,-17.1,26.2,-11.1,29.5,-3.5C32.9,4.1,36.2,13.4,33.3,19.9C30.4,26.4,21.3,30,12.9,31.1C4.6,32.3,-3.1,30.9,-11.5,29C-20,27.1,-29.2,24.6,-35.2,18.3C-41.2,12,-44,1.9,-40.7,-5.6C-37.5,-13.1,-28.3,-17.9,-20.5,-22.7C-12.7,-27.6,-6.4,-32.5,0,-32.5C6.4,-32.5,12.8,-27.8,17.8,-22.4Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            stroke-width="0"
            style={{ transition: "all 0.3s ease 0s" }}
            stroke="url(#sw-gradient)"
          ></path>
        </svg>
      </div>
      <div className="landing_page--introducing">
        <h1>BackGen</h1>
        <p>Build small Node.jS backend in minutes</p>
        <img
          src="https://i.pinimg.com/originals/4e/59/04/4e59044ccb55075ddc095efdcacd205c.png"
          alt=""
          className="dasboard_photo"
        />
      </div>
      <div className="landing_page--actions">
        <div className="auth_actions">
          <button onClick={() => navigate("auth")} className="action">
            <LoginIcon style={{ color: "#fff" }} />
            <p>Login</p>
          </button>
          <button onClick={() => navigate("auth/register")} className="action">
            <PersonAddIcon style={{ color: "#fff" }} />
            <p>Register</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
