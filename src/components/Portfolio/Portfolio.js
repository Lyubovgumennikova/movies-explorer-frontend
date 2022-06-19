import React from "react";
import "./Portfolio.css";
import icon from "../../images/icon.svg";

function Portfolio() {

  return (
    <div className="portfolio">
      <h2 className="portfolio__article">Портфолио</h2>
      <nav className="portfolio__link-dox">
        <h2 className="portfolio__title">Статичный сайт</h2>
        <a
          className="portfolio__link"
          href="https://github.com/Lyubovgumennikova/how-to-learn"
          target="_blank"
          rel="noreferrer"
        >
          <img className="portfolio__link" src={icon} alt="Кликни" />
        </a>
      </nav>
      <hr class="portfolio__line" />
      <nav className="portfolio__link-dox">
        <h2 className="portfolio__title">Адаптивный сайт</h2>
        <a
          className="portfolio__link"
          href="https://github.com/Lyubovgumennikova/russian-travel"
          target="_blank"
          rel="noreferrer"
        >
          <img className="portfolio__link" src={icon} alt="Кликни" />
        </a>
      </nav>
      <hr class="portfolio__line" />
      <nav className="portfolio__link-dox">
        <h2 className="portfolio__title">Одностраничное приложение</h2>
        <a
          className="portfolio__link"
          href="https://github.com/Lyubovgumennikova/express-mesto-gha"
          target="_blank"
          rel="noreferrer"
        >
          <img className="portfolio__link" src={icon} alt="Кликни" />
        </a>
      </nav>
    </div>
  );
}

export default Portfolio;
