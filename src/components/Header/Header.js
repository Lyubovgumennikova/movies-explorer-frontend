import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="Лого" />
      </Link>
      {props.children}
    </header>
  );
}

export default Header;
