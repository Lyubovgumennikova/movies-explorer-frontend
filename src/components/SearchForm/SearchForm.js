import React from "react";
import { useState } from "react";
import Input from "../Input/Input";
import "./SearchForm.css";
import icon from "../../images/icon__movie.svg";

import Button from "../Button/Button";
import { useFormWithValidation } from "../../utils/FormValidation";

function SearchForm({ onSubmit, props }) {
  const [onFocus, setOnFocus] = useState(false);
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({});

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
    console.log("seachfirm");
    onSubmit(values);
    // resetForm();
  };

  const myFunction = () => {
    onFocus = true
    console.log("CHECBOX");
  }



  return (
    <form className={FORM_STYLES.form} onSubmit={handleSubmit}>
      {/* onSubmit={callSearchFunction} */}
      <Input
        placeholder="Фильм"
        type="text"
        id="search"
        name="search"
        styleSettings={FORM_STYLES}
        onChange={handleChange}
        value={values.search}
        required
        // error={errors.search}
      />

      <Input
        type="checkbox"
        id="shortfilm"
        name="shortfilm"
        label="Короткометражки"
        styleSettings={FORM_STYLES_CHECKBOX}
        onChange={handleChange}
        value={values.shortfilm}
        checked={console.log("CHECBOX")}
        onclick={myFunction}
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
