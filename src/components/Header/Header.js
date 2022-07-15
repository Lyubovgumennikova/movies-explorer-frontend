import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import MenuButton from "../MenuButton/MenuButton";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  return (
    <header className="header" >
      <Link to="/" className={props.styleSettings.logo}>
      {/* <Link to="/" className="header__logo"> */}
        <img src={logo} alt="Лого" />
      </Link>
      {/* {props.loggedIn ? <AuthNavigation /> : <Navigation />}
      {props.loggedIn ? <MenuButton onOpenMenu={props.onOpenMenu} /> : null} */}
      {props.children}
    </header>
  );
}

export default Header;
