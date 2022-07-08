import React, { useEffect, useState } from "react";
import { useFormWithValidation } from "../FormValidation/FormValidation";
// import Placeholder from "../Preloader/Preloader";
import "./Input.css";

function Input({
  type,
  name,
  maxLength,
  styleSettings,
  // handleChange,
  // values,
  // onChange,
  required,
  isValid,
  ...props
}) {
  // const {values, errors, isValid, handleChange, resetForm } = useFormWithValidation({});

  return (
    // <div className={styleSettings.group}>
      <label className={styleSettings.label}>
        {name}
        <input
          type={type}
          id={name}
          // className={styleSettings.input}
          className={`${
            !isValid
              ? styleSettings.input
              : styleSettings.valid
          }`}
          minLength="2"
          maxLength={maxLength}
          // onChange={(e) => handleChange(e.target.value)}
          // onChange={e => handleChange(e.target.value)}
          value={props.values}
          // isValid={isValid}
          // onChange={onChange}
          onChange={props.onChange}
          // value={props.value}
          required={styleSettings.required}
        />
        <span role="status" aria-live="polite" className={styleSettings.error}>
          {props.errors}
        </span>
      </label>
    // </div>
  );
}

export default Input;
