import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";

function Header(props) {
  return (
    <header className="header">
      <a class="header__logo" href="http://www.github.com" target="_blank" rel="noreferrer">
        <img src={logo} alt="Лого" />
      </a>
      {props.children}
    </header>
  );
}

export default Header;
