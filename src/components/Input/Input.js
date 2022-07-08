import React, { useEffect, useState } from "react";
import { useFormWithValidation } from "../FormValidation/FormValidation";
// import Placeholder from "../Preloader/Preloader";
import "./Input.css";

function Input({
  type,
  name,
  label,
  maxLength,
  styleSettings,
  // handleChange,
  // values,
  // onChange,
  required,
  // isValid,
  // error,
  ...props
}) {
  const {values, errors, isValid, handleChange, resetForm } = useFormWithValidation({});

  return (
    // <div className={styleSettings.group}>
      <label className={styleSettings.label}>
        {label}
        <input
        name={name}
          type={type}
          id={name}
          className={styleSettings.input}
          // className={`${
          //   !isValid
          //     ? styleSettings.input
          //     : styleSettings.valid
          // }`}
          minLength="2"
          maxLength={maxLength}
          value={props.value}
          isValid={isValid}
          onChange={props.onChange}
          required={styleSettings.required}
        />
        <span role="status" aria-live="polite" className={styleSettings.error}>
          {props.error}
        </span>
      </label>
    // </div>
  );
}

export default Input;
