import React from "react";
import { NavLink } from "react-router-dom";
import "./AuthNavigation.css";
import AccauntLink from "../AccauntLink/AccauntLink";

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
        <AccauntLink />
      </ul>
    </nav>
  );
}

export default AuthNavigation;
