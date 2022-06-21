import React, { useEffect, useState } from "react";
// import Placeholder from "../Preloader/Preloader";
import "./Input.css";

function Input({
  type,
  name,
  maxLength,
  styleSettings,
}) {
  const [isValid, setIsValid] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function handleChange(e) {
    const input = e.target;
    // const name = input.name;
    // const value = input.type === 'checkbox' ? input.checked : input.value;


    setValue(input.value);
    setIsValid(input.validity.valid);
    if (!isValid) {
      setError(input.validationMessage);
    } else {
      setError("");
    }

    // setNewEntry((old) => ({
    //   ...old,
    //   [name]: value,
    // }));
    // setIsValid(input.closest('form').checkValidity());
  }

  return (
    <div className={styleSettings.group}>
      <label className={styleSettings.label}>{name}
      <input
        type={type}
        id={name}
        className= {styleSettings.input}

        // className={`${
        //   isValid
        //     ? styleSettings.input
        //     : styleSettings.valid
        // }`}
        minLength="2"
        maxLength={maxLength}
        onChange={handleChange}
        value={value}
        isValid={isValid}
        required
      />
      <span role="status" aria-live="polite" className={styleSettings.error}>
        {error}
      </span>
      </label>
    </div>
  );
}

export default Input;
