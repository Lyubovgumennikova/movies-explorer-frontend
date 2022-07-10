import React from "react";
import NavReview from "../NavReview/NavReview";
import "./Footer.css"

function Footer() {
  const year = new Date().getFullYear();
  const FOOTER_STYLES = {
    container: "footer__container-navLink",
    link: "footer__navLink",
  };
  return (
    <footer className="footer">
      <h2 className="footer__title ">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__container ">
        <p className="footer__navLink_data">&#169;{year}</p>
        <nav className="footer__link-dox">
        <a
          className="footer__navLink"
          href="https://praktikum.yandex.ru/"
          target="_blank"
          rel="noreferrer"
        >
          Яндекс.Практикум
        </a>
        <NavReview styleSettings={FOOTER_STYLES}/>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
