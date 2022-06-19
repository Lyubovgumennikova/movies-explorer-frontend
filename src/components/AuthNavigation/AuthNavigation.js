import React from "react";
import { Link, NavLink } from "react-router-dom";

// import AccountLink from '../AccountLink/AccountLink';

function AuthNavigation() {
  // const NAVIGATION_LINKS = [
  //   {
  //     id: 1,
  //     title: "Фильмы",
  //     link: "/movies",
  //     classname: "navigation__link",
  //     activeClassName: "navigation__link_active",
  //     exact: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Сохранённые фильмы",
  //     link: "/saved-movies",
  //     classname: "navigation__link",
  //     activeClassName: "navigation__link_active",
  //     exact: false,
  //   },
  // ];

  // const navigationLinksMarkup = NAVIGATION_LINKS.map((item) => (
  //   <li key={item.id} className="navigation__nav-list-item">
  //     <NavLink
  //       className={item.classname}
  //       activeClassName={item.activeClassName}
  //       to={item.link}
  //       exact={item.exact}
  //     >
  //       {item.title}
  //     </NavLink>
  //   </li>
  // ));

  return (
    <div className="header__link_conteiner">
      <NavLink className="navigation__link" to="/movies">
      Фильмы
      </NavLink>
      <NavLink className="navigation__link" to="/saved-movies">
      Сохранённые фильмы
      </NavLink>
      <NavLink className="navigation__link" to="/profile">
      Аккаунт
      </NavLink>
    </div>
    // <nav
    //   className="navigation"
    // >
    //   <ul
    //     className="navigation__nav-list"
    //   >
    //     <div
    //       className="navigation__nav-links-container"
    //     >
    //       {navigationLinksMarkup}
    //     </div>
    //     <li
    //       className="navigation__nav-list-item"
    //     >
    //       <AccountLink />
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default AuthNavigation;
