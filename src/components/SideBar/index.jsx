import * as React from "react";
import Logo from "../../assets/logo.png";

import AddIcon from "@mui/icons-material/Add"; // generate route
import LockPersonIcon from "@mui/icons-material/LockPerson"; // authentication
import PreviewIcon from "@mui/icons-material/Preview"; // overview
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined"; // new project
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined"; // My projects
import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined"; // Templates
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"; // My profile
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"; // Settings
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined"; //pricing
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined"; // chat

import "./sideBar.scss";
import { useState } from "react";

export default function SideBar() {
  const [currentProjectName, setCurrentProjectName] = useState("Commerce");

  return (
    <div className="creator_sidebar">
      <div className="creator_sidebar--content">
        <h3 className="logo">
          Backend <span className="changable">Generator</span>
        </h3>
        <div className="creator_sidebar--content--list">
          <ul className="menu">
            <li className="submenu">
              <h4 className="submenu__header">
                Creator - {currentProjectName}
              </h4>
              <ul className="submenu--list">
                <li className="submenu--list__item">
                  <a href="">
                    <AddIcon />
                    <p> Generate Route</p>
                  </a>
                </li>
                <li className="submenu--list__item">
                  <a href="">
                    <LockPersonIcon />
                    <p>Authentication</p>
                  </a>
                </li>
                <li className="submenu--list__item">
                  <a href="">
                    <PreviewIcon />
                    <p>Overview</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <h4 className="submenu__header">Projects</h4>
              <ul className="submenu--list">
                <li className="submenu--list__item">
                  <a href="">
                    <CreateNewFolderOutlinedIcon />
                    <p>New project</p>
                  </a>
                </li>
                <li className="submenu--list__item">
                  <a href="">
                    <FormatListBulletedOutlinedIcon />
                    <p>My Projects</p>
                  </a>
                </li>
                <li className="submenu--list__item">
                  <a href="">
                    <DataSaverOffOutlinedIcon />
                    <p> Templates</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <h4 className="submenu__header">Account</h4>
              <ul className="submenu--list">
                <li className="submenu--list__item">
                  <a href="">
                    <AccountCircleOutlinedIcon />
                    <p>My profile</p>
                  </a>
                </li>
                <li className="submenu--list__item">
                  <a href="">
                    <SettingsOutlinedIcon />
                    <p>Settings</p>
                  </a>
                </li>
                <li className="submenu--list__item">
                  <a href="">
                    <LocalAtmOutlinedIcon />
                    <p>Pricing</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <h4 className="submenu__header">Support</h4>
              <ul className="submenu--list">
                <li className="submenu--list__item">
                  <a href="">
                    <LocalAtmOutlinedIcon />
                    <p>Contact</p>
                  </a>
                </li>
                <li className="submenu--list__item">
                  <a href="">
                    <ChatBubbleOutlineOutlinedIcon />
                    <p>Chat</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}