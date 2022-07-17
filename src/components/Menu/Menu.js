import React from "react";
import { NavLink } from "react-router-dom";
import AccountLink from "../AccauntLink/AccauntLink";
import Modale from "../Modale/Modale";
import "./Menu.css";

function Menu({ isOpen, onClose }) {
  const FOPM_STYLES = {
    container: "modale__container",
  };

  return (
    <Modale isOpen={isOpen} onClose={onClose} >
      <div className="menuNavigation__container">
        <NavLink className="menuNavigation__link" to="/">
          Главная
        </NavLink>
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
