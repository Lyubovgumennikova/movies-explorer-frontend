import React from "react";
import { Link } from "react-router-dom";

function NewInput({ text, linkPath, linkText, styleSettings, onSignOut }) {
  return (
    <p className="login__input-text">
    {text}
    <Link  to={linkPath} className={styleSettings.link} onSignOut={onSignOut} >
      {linkText}
    </Link>
  </p>
  );
}

export default NewInput;
