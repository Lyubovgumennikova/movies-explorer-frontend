import React, { useEffect } from "react";
import Input from "../Input/Input";
import "./SearchForm.css";
import icon from "../../images/icon__movie.svg";

import Button from "../Button/Button";
import { useFormWithValidation } from "../../utils/FormValidation";

function SearchForm({ onSubmit }) {
  const { values, handleChange} = useFormWithValidation({});
  const checked = localStorage.getItem("checked");

  const FORM_STYLES = {
    form: "searchForm",
    textInput: "searchForm__text",
    input: "searchForm__text",
    label: "searchForm__group",
    button: "searchForm__submitButton",
    required: true,
  };

  const FORM_STYLES_CHECKBOX = {
    group: "searchForm__checkbox",
    input: "searchForm__checkbox_input",
    error: "searchForm__checkbox_slider",
    label: "searchForm__checkbox_label",
    required: false,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  useEffect(() => {
    if (checked) {
      onSubmit(values);
    }
  }, [checked]);

  return (
    <form className={FORM_STYLES.form} onSubmit={handleSubmit}>
      <Input
        placeholder="Фильм"
        type="text"
        id="search"
        name="search"
        styleSettings={FORM_STYLES}
        onChange={handleChange}
        value={values.search}
        required
      />
      <Input
        type="checkbox"
        id="shortfilm"
        name="shortfilm"
        label="Короткометражки"
        styleSettings={FORM_STYLES_CHECKBOX}
        onChange={handleChange}
        onclick={localStorage.setItem("checked", values.shortfilm)}
      />
      <Button
        type="submit"
        title="Найти"
        styleSettings={FORM_STYLES}
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
