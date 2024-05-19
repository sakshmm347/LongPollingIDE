import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";
const Header = () => {
  return (
    <header className="flex bg-slate-300 items-center ">
      {/* <NavLink to="/">
        <img src="./images/logo.png" alt="logo" />
      </NavLink> */}
      <NavBar />
    </header>
  );
};

export default Header;
