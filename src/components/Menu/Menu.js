import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AccountLink from "../AccauntLink/AccauntLink";
import Button from "../Button/Button";
import "./Menu.css";
import Modale from "../Modale/Modale";
// import MobileNavigation from '../MobileNavigation/MobileNavigation';
// import MobileAccountNavList from '../MobileAccountNavList/MobileAccountNavList';

function Menu({ isOpen, onClose, name, children }) {
  const STYLE_SETTINGS = {
    overlay: "menu-modal",
    container: "menu-modal__container",
    content: "menu-modal__content",
    header: "menu-modal__header",
    closeButton: "menu-modal__close-button",
    main: "menu-modal__main",
    footer: "menu-modal__footer",
  };

  // useEffect(() => {
  //   if (!isOpen) return;

  //   const handleEscClose = (evt) => {
  //     if (evt.key === "Escape") {
  //       onClose();
  //     }
  //   };

  //   document.addEventListener("keyup", handleEscClose);

  //   return () => {
  //     document.removeEventListener("keyup", handleEscClose);
  //   };
  // }, [isOpen, onClose]);

  // const handleOverlayClose = (evt) => {
  //   if (evt.target === evt.currentTarget) {
  //     onClose();
  //   }
  // };

  return (
    <Modale  isOpen={isOpen} onClose={onClose}
    // className={`menu ${isOpen ? "menu-modal" : ""}`}
    // onClick={handleOverlayClose}
    >

      <div className="menuNavigation__container">
      <h1 className="">Главная</h1>
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
