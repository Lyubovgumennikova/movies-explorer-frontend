import React from 'react';
import { Link } from 'react-router-dom';

// import { ReactComponent as LogoImage } from '../../images/Logo/logo.svg';
//src={logo}
const LOGO_SETTINGS = {
  ARIA_LABEL: 'перейти на страницу о проекте',
  PATH: '/',
};

function  LogoLink ({ onSignOut, loggedIn }) {
  return (
    <img className="header__logo"  alt="логотип" />
    // {
    //   loggedIn ? (
    //     <div className="header__link_conteiner">
    //       <p className="header__link header__link_email">{email}</p>
    //       <Link className="header__link" to="/signin" onClick={onSignOut}>
    //         Выйти
    //       </Link>
    //     </div>
    //   ) : (
    //     <><Route path="/signin">
    //         <Link className="header__link" to="/signup">
    //           Регистрация
    //         </Link>
    //       </Route>
    //       <Route path='/signup'>
    //           <Link className="header__link" to="/signin">
    //             Войти
    //           </Link>
    //         </Route></>
    //   )
    // }
  )
};

export default LogoLink;
