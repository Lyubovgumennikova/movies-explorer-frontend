import React from "react";
import { Link } from "react-router-dom";
// import { Route } from "react-router-dom";
// import LogoLink from "../LogoLink/LogoLink"

import logo from "../../images/logo.svg";

function Header(props) {
  return (
    <header className="header">
    {/* < LogoLink /> */}
    <a class="header__logo" href="http://www.github.com" target="_blank"><img src={logo} alt="Лого"/></a>
    {/* <img className="header__logo"  alt="логотип" /> */}
        {/* <div className="header__link_conteiner">
          <Link className="header__link" to="/signup">Регистрация</Link>
          <bootom className="header__booton" to="/signin" > Войти</bootom>
        </div> */}
{props.children}
    </header>
  );
}

export default Header;

// {/* <header
// className="header"
// >
// <LogoLink />
//   {props.loggedIn ? (
//       <Navigation />
//   )
//   : (
//       <AuthNavigation />
//   )}
// {props.loggedIn && (
//     <MenuButton
//       onOpenMenu={props.onOpenMenu}
//     />
// )}
// </header> */}
