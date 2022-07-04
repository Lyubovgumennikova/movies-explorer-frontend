import React from "react";
import { useState } from "react";
import Input from "../Input/Input";
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
  const { values, handleChange} = useState({});
  // const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    console.log("клик");
    // console.log(e.target);
    e.preventDefault();

    onSubmit(values);
    // console.log(values);
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
