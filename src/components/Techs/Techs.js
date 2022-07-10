import React from "react";
import MainArticle from "../MainArticle/MainArticle";
import "./Techs.css"

function Techs() {
  const TITLE_TEXT = "Технологии";

  return (
    <section className="techs">
      <MainArticle article={TITLE_TEXT} />
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className="techs__container">
        <p className="techs__container-text">HTML</p>
        <p className="techs__container-text">CSS</p>
        <p className="techs__container-text">JS</p>
        <p className="techs__container-text">React</p>
        <p className="techs__container-text">Git</p>
        <p className="techs__container-text">Express.js</p>
        <p className="techs__container-text">mongoDB</p>
        {/* {props.children} */}
      </div>
    </section>
  );
}

export default Techs;
