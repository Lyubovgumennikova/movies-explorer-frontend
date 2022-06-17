import React from "react";
import { Link } from "react-router-dom";
import  "./NewInput.css";

function NewInput({ text, link }) {
  return (
    <p className="login__input-text">
    {text}
    <Link to="/signup" className="login__input-text_link">
      {link}
    </Link>
  </p>
  );
}

export default NewInput;
