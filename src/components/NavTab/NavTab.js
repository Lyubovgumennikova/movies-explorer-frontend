import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <nav className="navTab">
      <ul className="navTab__list">
        <li className="navTab__list-conteiner">
          <a className="navTab__list-link" href="#aboutProject__section">
            О проекте
          </a>
        </li>
        <li className="navTab__list-conteiner">
          <a className="navTab__list-link" href="#techs__section">
            Технологии
          </a>
        </li>
        <li className="navTab__list-conteiner">
          <a className="navTab__list-link" href="#aboutMi__section">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
