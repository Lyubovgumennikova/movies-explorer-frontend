import React from "react";
import { Link } from "react-router-dom";
import  "./NewInput.css";

function NewInput({ text, linkPath, linkText, styleSettings }) {
  return (
    <p className="login__input-text">
    {text}
    <Link  to={linkPath} className={styleSettings.link}>
      {linkText}
    </Link>
  </p>
  );
}

export default NewInput;
