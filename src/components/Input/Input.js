import React, { useEffect, useState } from "react";
// import Placeholder from "../Preloader/Preloader";
import "./Input.css";

function Input({
  type,
  name,
  // value,
  maxLength,
  // handleChange,
  errorText,
  onChange,

}) {
  const [validationMessage, setValidationMessage] = useState("");
  const [isValid, setIsValidity] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    const input = e.target;
    setValue(input.value);
    setIsValidity(input.validity.valid);
    if (!isValid) {
      setError(input.validationMessage);
    } else {
      setError('');
    }
  }

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
        // placeholder={placeholder}
        id={name}
        label={name}
        className={`${
          validationMessage
            ? `text-field__input `
            : `text-field__input text-field__input_valid `
        }`}
        minLength="2"
        maxLength={maxLength}
        onChange={handleSubmit}
        // onChange={(e) => handleChange(e.target.value)}
        value={value}
        // ref={inputRef}
        required
      />
      <span role="status" aria-live="polite" className="message__error">
        {error}
      </span>

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
