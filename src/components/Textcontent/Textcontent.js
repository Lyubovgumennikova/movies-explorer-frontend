import React from "react";

function Textcontent({ title, text, styleSettings }) {
  return (
    <div className={styleSettings.content}>
      <h2 className={styleSettings.title}>{title}</h2>
      <p className={styleSettings.text}>{text}</p>
    </div>
  );
}

export default Textcontent;
