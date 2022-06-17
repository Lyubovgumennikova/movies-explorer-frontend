import React from "react";
import MainArticle from "../MainArticle/MainArticle";
// import ArticleAboutMe from '../ArticleAboutMe/ArticleAboutMe';
// import Title from '../Title/Title';
import NavLink from "../NavLink/NavLink";
import "./AboutMe.css";
// import foto from "../../images/avatar.jpg "
// import AboutMePortrait from '../../images/AboutMe/about-me-portrait.jpg';

function AboutMe(props) {
  const TITLE_TEXT = "Студент";

  const ABOUT_ME_ARTICLES_DATA = [
    {
      id: 1,
      title: "Алексей",
      subTitle: "Фронтенд-разработчик, 27 лет",
      text: "Я работаю и живу в Москве. Люблю кино, документальную фотографию, путешествия и кулинарию. Во время своей учебы я реализовал 15 проектных работ на Reactjs, Nodejs (Expressjs), JavaScript, CSS, HTML. По каждой работе было проведено код-ревью командой Практикума. В работе для меня важно учиться новому и помогать в этом своим коллегам.",
      linksTitle: "Портфолио",
      links: [
        {
          id: 1,
          title: "Facebook",
          link: "https://www.facebook.com/meln.aleksei",
        },
        {
          id: 2,
          title: "Github",
          link: "https://github.com/MelnikovAleksei",
        },
      ],
      // images: [
      //   {
      //     id: 1,
      //     src: AboutMePortrait,
      //     alt: 'портрет студента Алексея',
      //   },
      // ],
    },
  ];

  const ABOUT_ME_ARTICLE_STYLES = {
    // article: "about-me-article",
    // articleHeader: "about-me-article__header",
    container: "aboutMi__container-navLink",
    link: "aboutMi__navLink",
  };

  const ABOUT_ME_ARTICLE_ID = "student";

  // const articlesMeMarkup = ABOUT_ME_ARTICLES_DATA.map((item) => (
  //   <ArticleAboutMe
  //     key={item.id}
  //     title={item.title}
  //     subTitle={item.subTitle}
  //     text={item.text}
  //     linksTitle={item.linksTitle}
  //     links={item.links}
  //     images={item.images}
  //   />
  // ));
  //src="../images/close-button.png"
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
        <NavLink styleSettings={ABOUT_ME_ARTICLE_STYLES} />
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
