import React from "react";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Header from '../Header/Header';
import Navigation from "../Navigation/Navigation";
import Footer from '../Footer/Footer';
import "./Main.css"
import AuthNavigation from "../AuthNavigation/AuthNavigation";

function Main({loggedIn }) {
  const FOPM_STYLES = {
    logo: "header__logo",
  };
  return (
    <main className="main">
      <Header styleSettings={FOPM_STYLES}>
          {loggedIn ? (<AuthNavigation />) : (<Navigation />) }
      </Header>
      <Promo>
        <NavTab />
      </Promo>
      <AboutProject />
      <Techs />
      <AboutMe>
        <Portfolio />
      </AboutMe>
      <Footer />
    </main>
  );
}

export default Main;
