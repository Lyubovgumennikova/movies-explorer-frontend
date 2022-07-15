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
  isUserData,
  styleSettings,
  validationMessage,
  isValid,
  values,

  ...props
}) {


  return (
    <form className= {styleSettings.form}   onSubmit={onSubmit}  >
      <h1 className="form__title">{title}</h1>
      {children}
      <button
        type="submit"
        disabled={!formIsValid || isUserData}
        // className={`${
        //   formIsValid
        //     ? styleSettings.button
        //     : styleSettings.button  `form__submit-button_disabled`
        // }`}
        className= {styleSettings.button}
      >
        {isSubmitted ? "Выполняется..." : buttonText}
      </button>
    </form>
  );
}

export default Form;
//noValidate
