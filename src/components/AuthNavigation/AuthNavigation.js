import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./AuthNavigation.css";
import accaunt from "../../images/icon-account.svg";

function AuthNavigation() {
  return (
    <nav className="authNavigation">
      <ul className="authNavigation__navList">
        <div className="authNavigation__navLinks-container">
          <NavLink className="authNavigation__link" to="/movies">
            Фильмы
          </NavLink>
          <NavLink className="authNavigation__link" to="/saved-movies">
            Сохранённые фильмы
          </NavLink>
        </div>
        <Link className="authNavigation__accauntLink" to="/profile">
          <img
            className="authNavigation__accauntLink_icon"
            src={accaunt}
            alt="accaunt"
          />
          Аккаунт
        </Link>
      </ul>
    </nav>
  );
}

export default AuthNavigation;
