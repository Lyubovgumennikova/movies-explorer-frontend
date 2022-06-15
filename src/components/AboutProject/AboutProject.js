import React from "react";
import MainArticle from "../MainArticle/MainArticle";
import "./AboutProject.css"

function AboutProject() {
  const TITLE_TEXT = " О проекте";

  return (
    <section className="aboutProject__section">
      <MainArticle article={TITLE_TEXT} />
      <div className="aboutProject__container">
        <h2 className="aboutProject__article">Дипломный проект включал 5 этапов</h2>
        <h2 className="aboutProject__article">На выполнение диплома ушло 5 недель</h2>
        <p className="aboutProject__text">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className="aboutProject__text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
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
