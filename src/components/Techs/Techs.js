import React from 'react';
import MainArticle from '../MainArticle/MainArticle';
// import ArticleTech from '../ArticleTech/ArticleTech';
// import Title from '../Title/Title';
// import TechsList from '../TechsList/TechsList';

function Techs() {

  const TITLE_TEXT = 'Технологии';

  // const articlesMarkup = [{ HTML CSS 'JS', 'React', 'Git' 'Express.js', 'mongoDB' }]
  // const articlesMarkup = TECHS_ARTICLES_DATA.map((item) => (
  //   <ArticleTech
  //     key={item.id}
  //     title={item.title}
  //     text={item.text}
  //   />
  // ));

  const TECHS_ARTICLE_STYLES = {
    article: 'techs-article',
    articleHeader: 'techs-article__header',
    articleItemsSection: 'techs-article__items-section',
    articleSection: 'techs-article__section',
  };

  const TECHS_ARTICLE_ID = 'technologies';

  return (
    <section className="techs__section">
      <MainArticle article = {TITLE_TEXT}/>
      <h3 className="techs__title">
          7 технологий
        </h3>
        <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
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
  )
}

export default Techs;
