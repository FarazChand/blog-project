import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import "./MainNavigation.css";

const MainNavigation = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      {/* <nav>
        <ul className="list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav> */}

      <nav className="app__navbar">
        <ul className="app__navbar-links list">
          {["Home", "About", "Contact"].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              {/* <a href={`#${item}`}>{item}</a> */}
              <li>
                <NavLink
                  to={`/${item}`}
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  {item}
                </NavLink>
              </li>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
