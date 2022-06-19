import React from "react";
import Promo from "../Promo/Promo";
import NavPromo from "../NavPromo/NavPromo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Header from '../Header/Header';
import Navigation from "../Navigation/Navigation";
import Footer from '../Footer/Footer';

function Main() {
  return (
    <main className="main">
      <Header>
      <Navigation />
      </Header>
      <Promo>
        <NavPromo />
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
