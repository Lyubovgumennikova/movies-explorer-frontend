import React from "react";
import { useState } from "react";
import Input from "../Input/Input";
// import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
// import SubmitButton from "../SubmitButton/SubmitButton";
// import { ReactComponent as SearchFormIcon } from "../../images/SearchForm/search-form-icon.svg";
// import useFormWithValidation from "../../hooks/useFormValidation";
import "./SearchForm.css";
import icon from "../../images/icon__movie.svg";

import Button from "../Button/Button";

function SearchForm({
  onSubmit,

  setSearchQuery,
  // handleChange,
  isSubmitted,
  // handleSubmit,
  searchQuery,
}) {
  // const { values, handleChange, resetForm } = useFormWithValidation({});
  const { values, handleChange, resetForm } = useState({});
  // const [search, setSearch] = useState("");
  // const [type, setType] = useState("all");

  const handleSubmit = (e) => {
    console.log("клик");
    // console.log(e.target);
    e.preventDefault();

    onSubmit(values);
    // console.log(values);
    // resetForm();
    // setSearchQuery("");
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

  // const SEARCH_TEXT_INPUT_SETTINGS = {
  //   type: "text",
  //   id: "search-text",
  //   ariaLabel: "поиск фильма",
  //   placeholder: "Фильм",
  //   name: "search",
  //   maxLength: 30,
  //   required: false,
  // };

  // const SHORTFILM_FILTER_CHECKBOX_INPUT_SETTINGS = {
  //   type: "checkbox",
  //   id: "filter-shortfilm",
  //   label: "Короткометражки",
  //   name: "shortfilm",
  //   required: false,
  // };

  // const SUBMIT_BUTTON_SETTINGS = {
  //   className: "",
  //   type: "submit",
  //   title: "Найти",
  // };

  return (
    <form className={FORM_STYLES.form} onSubmit={handleSubmit}>
      <Input
        placeholder="Фильм"
        type="text"
        // value={value}
        styleSettings={FORM_STYLESI}
        // className={FORM_STYLES.textInput}
        // onChange={handleChange}
        // handleChange={handleChange}
        onChange={(e) => handleChange(e.target.value)}
        value={values.search}
        //   name={props.settings.name}
        // required={props.settings.required}
        // onChange={e => setSearch( e.target.value)}
        // onChange={handleChange}
        // value={searchQuery}
      />

      <Input

        // false
        type="checkbox"
        name="Короткометражки"
        styleSettings={FORM_STYLES}
        // maxLength="30"
        // inputClassName={SEARCH_FORM_STYLE_SETTINGS.checkboxInput}
        // labelClassName={SEARCH_FORM_STYLE_SETTINGS.checkboxLabel}
        // sliderClassName={SEARCH_FORM_STYLE_SETTINGS.checkboxSlider}
        // onFocusClassName={SEARCH_FORM_STYLE_SETTINGS.checkboxOnFocus}
        // settings={SHORTFILM_FILTER_CHECKBOX_INPUT_SETTINGS}
        // onChange={handleChange}
        // value={values.shortfilm}
      />
          <Button
        // className={FORM_STYLES.submitButton}
        styleSettings={FORM_STYLESI}
        // type="search"
        type="submit"
        title="Search"
        // onClick={handleSubmit}
        // onClick={handleClick}
        // handleClick={() => console.log("rkfnr")}
        // onClick={onClick}
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
