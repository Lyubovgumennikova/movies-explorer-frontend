import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AccountLink from "../AccauntLink/AccauntLink";
import "./Menu.css";
import Modale from "../Modale/Modale";

function Menu({ isOpen, onClose }) {
  return (
    <Modale isOpen={isOpen} onClose={onClose}>
      <div className="menuNavigation__container">
        <h1 className="menuNavigation__link">Главная</h1>
        <NavLink className="menuNavigation__link" to="/movies">
          Фильмы
        </NavLink>
        <NavLink className="menuNavigation__link" to="/saved-movies">
          Сохранённые фильмы
        </NavLink>
      </div>
      <AccountLink />
    </Modale>
  );
}

export default Menu;
