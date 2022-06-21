import React from "react";

function Button({ title, styleSettings, buttonText, onClick, handleClick }) {
  return (
    <button title={title} className={styleSettings.button} onClick={onClick}>
    {buttonText}
    </button>
  );
}

export default Button;
