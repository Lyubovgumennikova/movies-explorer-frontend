import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation() {
  return (
    <div className="header__link_conteiner">
      <Link className="navigation__link" to="/signup">
        Регистрация
      </Link>
      <Link className="navigation__booton" to="/signin">
        Войти
      </Link>
    </div>
  );
}

export default Navigation;
