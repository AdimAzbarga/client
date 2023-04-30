import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ThreeDRotationIcon from "@material-ui/icons/ThreeDRotation";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

function Header() {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <ThreeDRotationIcon fontSize="large" />
      </h1>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
}

export default Header;
