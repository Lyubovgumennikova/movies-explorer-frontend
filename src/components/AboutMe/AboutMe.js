import React from "react";
import MainArticle from "../MainArticle/MainArticle";
import NavReview from "../NavReview/NavReview";
import "./AboutMe.css";
// import foto from "../../images/avatar.jpg "

function AboutMe(props) {
  const TITLE_TEXT = "Студент";

  const ABOUT_ME_ARTICLE_STYLES = {
    container: "aboutMi__container-navLink",
    link: "aboutMi__navLink",
  };

  return (
    <section className="aboutMi__section">
      <MainArticle article={TITLE_TEXT} />
      <div className="aboutMi__container">
        <h3 className="aboutMi__title">Любовь</h3>
        <h4 className="aboutMi__article">Фронтенд-разработчик, 47 лет</h4>
        <p className="aboutMi__text">
          Я живу и работаю в МО, закончила факультет менеджмента ГУУ. Люблю
          творить и создавать новое, наводить красоту и порядок&#10099; Самоучкой создавала сайты для знакомых.
          После того, как закончу курс по веб-разработке, обязательно займусь
          освоением новой и увлекательной для меня сферы.
        </p>
        <NavReview styleSettings={ABOUT_ME_ARTICLE_STYLES} />
        <img
          className="aboutMi__avatar"
          src="../../images/avatar.jpg "
          alt="AVATAR"
        />
      </div>
      {props.children}
    </section>
  );
}

export default AboutMe;
