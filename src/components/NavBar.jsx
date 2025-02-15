import React from "react";
import { NavLink } from "react-router-dom";
import Style from "../Css/NavFooter.module.css"

const NavBar = () => {
  return (
    <nav className={Style.nav}>
      <div>
        <NavLink to="">Rohit</NavLink>
      </div>
      <div className={Style.right}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
