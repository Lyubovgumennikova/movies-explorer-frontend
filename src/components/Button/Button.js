import React from "react";

function Button({ type, title, styleSettings, buttonText, onClick, disabled, ...props }) {
  return (
    <button
      type={type}
      title={title}
      className={styleSettings.button}
      onClick={onClick}
      disabled={props.disabled}
    >
      {buttonText}
    </button>
  );
}

export default Button;
