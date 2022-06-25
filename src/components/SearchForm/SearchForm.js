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
  // values,
  searchQuery,
}) {
  // const { values, handleChange, resetForm } = useFormWithValidation({});
  const { values, handleChange, resetForm } = useState({});

  const handleSubmit = (evt) => {
    console.log("searc")
    console.log(setSearchQuery)
    console.log(searchQuery)
    evt.preventDefault();
    onSubmit(values);
    setSearchQuery("");
  };

  const FORM_STYLES = {
    form: "searchForm",
    textInput: "searchForm__text",
    button: "searchForm__submitButton",
    group: "searchForm__checkbox",
    input: "searchForm__checkbox_input",
    error: "searchForm__checkbox_slider",
    label: "searchForm__checkbox_label",
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
  // const handleClick = () => console.log("rkfnr")

  return (
    <form className={FORM_STYLES.form} onSubmit={handleSubmit} >
      <div className="searchForm__group">
        <input
          placeholder="Фильм"
          type="text"
          // value={value}
          className={FORM_STYLES.textInput}
          // handleChange={handleChange}
          // onChange={e => handleChange(e.target.value)}
          value={values.search}
          //   name={props.settings.name}
          // required={props.settings.required}
          onChange={handleChange}
          // value={props.value}
          // checked={props.value || ''}
          // required: false
        />
        <Button
          // className={FORM_STYLES.submitButton}
          styleSettings={FORM_STYLES}
          // type="search"
          type="submut"
          title="Найти"
          // onClick={handleClick}
          // onClick={handleClick}
          // handleClick={() => console.log("rkfnr")}
          // onClick={onClick}
          buttonText={
            <img src={icon} className="searchForm__submitButton_icon" alt="Найти" />
          }
        />
      </div>

      <Input
        required
        false
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
    </form>
  );
}

export default SearchForm;
