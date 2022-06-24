import React, { useState } from "react";
import "./Form.css"

function Form({
  name,
  children,
  buttonText,
  isSubmitted,
  onSubmit,
  title,
  formIsValid,
  isLoadingData,
  styleSettings,
  validationMessage,
  isValid,
  // value,

  ...props
}) {


  return (
    <form className= {styleSettings.form}   onSubmit={onSubmit} noValidate>
      <h1 className="form__title">{title}</h1>
      {children}
      <button
        type="submit"
        // disabled
        // className={`${
        //   !isValid
        //     ? `form__submit-button`
        //     : `form__submit-button form__submit-button_disabled`
        // }`}
        className= {styleSettings.button}
      >
        {isSubmitted ? "Выполняется..." : buttonText}
      </button>
    </form>
  );
}

export default Form;
