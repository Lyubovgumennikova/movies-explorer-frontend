import React from "react";
import MainArticle from "../MainArticle/MainArticle";
import Textcontent from "../Textcontent/Textcontent";
import "./AboutProject.css"

function AboutProject() {
  const TITLE_TEXT = " О проекте";

  const FORM_STYLES = {
    content: "aboutProject__content",
    title: "aboutProject__article",
    text: "aboutProject__text",
  };

  const DATA = [
    {
      id: 1,
      title: "Дипломный проект включал 5 этапов",
      text: "Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки."
    },
    {
      id: 2,
      title: "На выполнение диплома ушло 5 недель",
      text: "У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься."
    }
  ]

  return (
    <section className="aboutProject">
      <MainArticle article={TITLE_TEXT} />
      <div className="aboutProject__container">

        {DATA.map((data) => (
          <Textcontent
            key={data._id}
            card={data}
            styleSettings={FORM_STYLES}
            title={data.title}
            text={data.text}
          />
        ))}
      </div>
      <div className="aboutProject__container-grid">
        <p className="aboutProject__grid-article">1 неделя</p>
        <p className="aboutProject__grid-article_a">
        4 недели
        </p>
        <p className="aboutProject__grid-text">Back-end</p>
        <p className="aboutProject__grid-text">
        Front-end
        </p>
      </div>
    </section>
  );
}

export default AboutProject;
