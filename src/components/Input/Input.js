import React, { useEffect, useState } from "react";
import { useFormWithValidation } from "../../utils/FormValidation";
// import Placeholder from "../Preloader/Preloader";
import "./Input.css";

function Input({
  type,
  name,
  label,
  maxLength,
  minLength,
  styleSettings,
  placeholder,
  pattern,
  regexp,
  required,
  errorfff,
  isValid,
  // error,
  ...props
}) {
  // const {values, errors, isValid, handleChange, resetForm } = useFormWithValidation({});
  // const INPUTS_DATA = {
  //   regexp: "[a-zA-Z -]{2,30}",
  //   customErrorMessage:
  //     "Поле name может содержать только латиницу, пробел или дефис: a-zA-Z -",
  // };

  return (
    // <div className={styleSettings.group}>
      <label className={styleSettings.label}>
        {label}
        <input
        name={name}
          type={type}
          id={name}
          placeholder={placeholder}
          className={styleSettings.input}
          minLength={minLength}
          maxLength={maxLength}
          value={props.value}
          onChange={props.onChange}
          required={styleSettings.required}
          // inputsData={INPUTS_DATA}
          pattern={pattern}
          // pattern={props.regexp}
        />
        <span role="status" aria-live="polite" className={styleSettings.error}>
          {props.error}
        </span>
      </label>
    // </div>
  );
}

export default Input;
