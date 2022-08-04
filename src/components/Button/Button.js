import React from "react";

function Button({ type, title, styleSettings, buttonText, onClick, disabled }) {
  return (
    <button
      type={type}
      title={title}
      className={styleSettings.button}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
}

export default Button;
