import React, { useState, useRef, useEffect, useCallback } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import { useContext } from "react";
import "./MainNavigation.scss";
import { GeneralContext } from "../store/general-context";

const MainNavigation = () => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  const { toggleDarkMode, darkModeValue } = useContext(GeneralContext);

  const headerIsScrolled = () => {
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerIsScrolled);
    return () => {
      window.removeEventListener("scroll", headerIsScrolled);
    };
  }, []);

  // const scrolledClass = darkModeValue ? "scrolled-light" : "scrolled-dark";

  return (
    // <header className={`header ${scroll ? scrolledClass : ""}`}>
    <header className={`header ${scroll ? "scrolled-light" : ""}`}>
      {/* <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div> */}

      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <NavLink to="/">Faraz Chand</NavLink>
        </div>

        {/* Desktop Nav */}
        <div className="nav-container">
          <ul className="navbar-list">
            {["Posts", "About", "Contact"].map((item) => (
              <li className="navbar-item" key={`link-${item}`}>
                <div />

                <NavLink
                  to={`/${item}`}
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Nav */}
        <div className="mobile-menu">
          {!toggle && <HiMenuAlt4 onClick={() => setToggle(true)} />}

          {toggle && (
            <motion.div
              className="motion-div"
              whileInView={{ x: [100, 0] }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {["Posts", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <NavLink to={`/${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="icon-container">
                <MdDarkMode
                  className="mobile-darkmode-icon"
                  onClick={toggleDarkMode}
                  id="toggle-darkMode"
                />
              </div>
            </motion.div>
          )}
        </div>
      </nav>
      {/* <div className="nightmode">nightmode</div>
       */}
      <MdDarkMode
        className="darkmode-icon"
        onClick={toggleDarkMode}
        id="toggle-darkMode"
      />
    </header>
  );
};

export default MainNavigation;
