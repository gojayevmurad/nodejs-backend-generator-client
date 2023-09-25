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
import { NavLink } from "react-router-dom";

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
              <h4 className="submenu__header">Projects</h4>
              <ul className="submenu--list">
                <li className="submenu--list__item">
                  <NavLink to="/creator/project/my-projects">
                    <FormatListBulletedOutlinedIcon />
                    <p>My Projects</p>
                  </NavLink>
                </li>
                <li className="submenu--list__item">
                  <NavLink to="/creator/project/new-project">
                    <CreateNewFolderOutlinedIcon />
                    <p>New project</p>
                  </NavLink>
                </li>
                <li className="submenu--list__item">
                  <NavLink to="/creator/project/templates">
                    <DataSaverOffOutlinedIcon />
                    <p> Templates</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <h4 className="submenu__header">
                Creator - {currentProjectName}
              </h4>
              <ul className="submenu--list">
                <li className="submenu--list__item">
                  <NavLink to="/creator/generate-route">
                    <AddIcon />
                    <p> Generate Route</p>
                  </NavLink>
                </li>
                <li className="submenu--list__item">
                  <NavLink to="/creator/authentication-route">
                    <LockPersonIcon />
                    <p>Authentication</p>
                  </NavLink>
                </li>
                <li className="submenu--list__item">
                  <NavLink to="/creator/overview-project">
                    <PreviewIcon />
                    <p>Overview</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <h4 className="submenu__header">Account</h4>
              <ul className="submenu--list">
                <li className="submenu--list__item">
                  <NavLink to="/creator/account/my-profile">
                    <AccountCircleOutlinedIcon />
                    <p>My profile</p>
                  </NavLink>
                </li>
                <li className="submenu--list__item">
                  <NavLink to="/creator/account/settings">
                    <SettingsOutlinedIcon />
                    <p>Settings</p>
                  </NavLink>
                </li>
                <li className="submenu--list__item">
                  <NavLink to="/creator/account/pricing">
                    <LocalAtmOutlinedIcon />
                    <p>Pricing</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <h4 className="submenu__header">Support</h4>
              <ul className="submenu--list">
                <li className="submenu--list__item">
                  <NavLink to="/creator/support/contact">
                    <LocalAtmOutlinedIcon />
                    <p>Contact</p>
                  </NavLink>
                </li>
                <li className="submenu--list__item">
                  <NavLink to="/creator/support/chat">
                    <ChatBubbleOutlineOutlinedIcon />
                    <p>Chat</p>
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
