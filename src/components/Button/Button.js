import React from "react";

function Button({ type, title, styleSettings, buttonText, onClick }) {
  return (
    <button
      type={type}
      title={title}
      className={styleSettings.button}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

export default Button;
