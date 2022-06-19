import React from 'react';
import "./MainArticle.css"
function MainArticle({article}) {
  return (
  <h2 className="main__article">
    {article}
  </h2>)
}

export default MainArticle;
