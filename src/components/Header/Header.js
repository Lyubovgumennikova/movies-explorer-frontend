import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import MenuButton from "../MenuButton/MenuButton";

function Header(props) {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="Лого" />
      </Link>
      { props.isLoggedIn? (
      <MenuButton
      onOpenMenu={props.onOpenMenu}
    />
      ) : null

      }

      {props.children}
    </header>
  );
}

export default Header;
// eslint-disable-next-line no-lone-blocks
{/* <Link to="/" className="header__logo">
<img src={logo} alt="Лого" />
</Link>
{loggedIn ? (
<AuthNavigation />
) : (
<h1 className="form__title">{props.title}</h1>
)} */}
