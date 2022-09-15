import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import wfgLogoLight from "../../../images/wfg-logo-light.svg";

const AppHeaderSidebar = ({ displayName }) => {
  const [navList] = useState([
    {
      name: "Dashboard",
      link: "/app/dashboard",
    },
    {
      name: "Products",
      link: "/app/order",
    },
    {
      name: "My Profile",
      link: "/app/inventory",
    },
    {
      name: "Notifications",
      link: "/app/store",
    },
    {
      name: "Change Password",
      link: "/app/changePassword",
    },

  ]);

  return (
    <div className="col-lg-2 col-md-4 sidebar fixed-top">
      <a
        href="/"
        className="navbar-brand text-white d-block mx-auto 
                                text-center py-3 mb-4 bottom-border app-sidebar-logo bottom-border"
      >
        <img src={wfgLogoLight} alt="Wefungo" />
        <span className="side-bar-font-brand">Leo Projects</span>
      </a>

     
      <ul className="navbar-nav flex-column mt-3">
        {navList &&
          navList.map(nav => (
            <li className="nav-item" key={nav.name}>
              <NavLink
                to={nav.link}
                className="nav-link text-white p-3 mb-2 sidebar-link"
                activeClassName="current"
              >
                
                {nav.name}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AppHeaderSidebar;
