import React from 'react';
import  "./NavPromo.css"

function NavPromo() {

  return (
    <nav className="navPromo" >
      <ul className="navPromo__list">
      <li className="navPromo__list-conteiner"><a className="navPromo__list-link" href= "#aboutProject__section">О проекте</a></li>
    <li className="navPromo__list-conteiner"><a className="navPromo__list-link" href="#techs__section">Технологии</a></li>
    <li className="navPromo__list-conteiner"><a className="navPromo__list-link" href="#aboutMi__section">Студент</a></li>
      </ul>

    </nav>
  )
}

export default NavPromo;
