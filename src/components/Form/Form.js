import React from "react";
import "./Form.css";

function Form({
  children,
  buttonText,
  isSubmitted,
  onSubmit,
  title,
  formIsValid,
  isUserData,
  styleSettings,
}) {
  return (
    <form className={styleSettings.form} onSubmit={onSubmit} noValidate>
      <h1 className="form__title">{title}</h1>
      {children}
      <button
        type="submit"
        disabled={!formIsValid || isUserData}
        className={styleSettings.button}
      >
        {isSubmitted ? "Выполняется..." : buttonText}
      </button>
    </form>
  );
}

export default Form;
