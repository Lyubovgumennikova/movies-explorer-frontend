import React, { useEffect, useState } from "react";
// import Placeholder from "../Preloader/Preloader";
import "./Input.css";

function Input({ type, placeholder, name, maxLength, handleChange, ...props }) {
  const [validationMessage, setValidationMessage] = useState("");

  useEffect(() => {
    // setInputValue(fieldsEnumeration(""));
    // setIsValid(fieldsEnumeration(false));
    setValidationMessage("");
  }, [setValidationMessage]);

  return (
    <div className="input">
      <label className="input__label">{name}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        label={name}
        className={`${
          validationMessage
            ? `text-field__input `
            : `text-field__input text-field__input_valid `
        }`}
        minLength="2"
        maxLength={maxLength}
        onChange={props.onChange}
        // onChange={(e) => handleChange(e.target.value)}
        value={props.value}
        // ref={inputRef}
        required
      />
      <span id="{name}-error" className="text-field__input_error"></span>

      {/* <span
        className={FORM_STYLE_SETTINGS.errorText}
        aria-live="polite"
      >
        {item.regexp && errors[item.name] && item.customErrorMessage}
        {errors[item.name]}
      </span> */}
    </div>
  );
}

export default Input;
