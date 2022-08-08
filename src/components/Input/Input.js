import React from "react";
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
  errors,
  isValid,
  ...props
}) {
  return (
    <label className={styleSettings.label}>
      {label}
      <input
        name={name}
        type={type}
        id={name}
        aria-label={props.ariaLabel}
        placeholder={placeholder}
        className={styleSettings.input}
        minLength={minLength}
        maxLength={maxLength}
        value={props.value || ''}
        onChange={props.onChange}
        required={styleSettings.required}
        pattern={pattern}
        checked={props.checked}
      />
      <span role="status" aria-live="polite" className={styleSettings.error}>
        {props.error}
        {props.error && props.customErrorMessage}
      </span>
    </label>
  );
}

export default Input;
