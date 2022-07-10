import React from "react";
import { useState } from "react";
import Input from "../Input/Input";
import "./SearchForm.css";
import icon from "../../images/icon__movie.svg";

import Button from "../Button/Button";
import { useFormWithValidation } from "../../utils/FormValidation";

function SearchForm({ onSubmit }) {
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
    resetForm();
  };

  const FORM_STYLESI = {
    input: "searchForm__text",
    label: "searchForm__group",
    button: "searchForm__submitButton",
    required: true,
  };

  const FORM_STYLES = {
    form: "searchForm",
    textInput: "searchForm__text",
    group: "searchForm__checkbox",
    input: "searchForm__checkbox_input",
    error: "searchForm__checkbox_slider",
    label: "searchForm__checkbox_label",
    required: false,
  };

  return (
    <form className={FORM_STYLES.form} onSubmit={handleSubmit}>
      <Input
        placeholder="Фильм"
        type="text"
        id="search"
        name="search"
        styleSettings={FORM_STYLESI}
        onChange={handleChange}
        value={values.search}
        required
        // error={errors.search}
      />

      <Input
        type="checkbox"
        id="checkbox"
        name="shortfilm"
        label="Короткометражки"
        styleSettings={FORM_STYLES}
        onChange={handleChange}
        value={values.shortfilm}
      />
      <Button
        type="submit"
        title="search"
        styleSettings={FORM_STYLESI}
        buttonText={
          <img
            src={icon}
            className="searchForm__submitButton_icon"
            alt="Найти"
          />
        }
      />
    </form>
  );
}

export default SearchForm;
