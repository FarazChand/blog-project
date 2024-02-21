import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

// import "./MainNavigation.css";
import "./MainNavigation.scss";

const MainNavigation = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      {/* <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div> */}

      <div>logo</div>

      <ul className="app__navbar-links list">
        {["Home", "About", "Contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />

            <li>
              <NavLink
                to={`/${item}`}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {item}
              </NavLink>
            </li>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        {!toggle && <HiMenuAlt4 onClick={() => setToggle(true)} />}

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["Home", "About", "Contact"].map((item) => (
                <li key={item}>
                  <NavLink to={`/${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default MainNavigation;
