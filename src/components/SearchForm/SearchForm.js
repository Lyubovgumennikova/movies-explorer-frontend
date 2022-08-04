import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import "./SearchForm.css";
import icon from "../../images/icon__movie.svg";

import Button from "../Button/Button";
import { useFormWithValidation } from "../../utils/FormValidation";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onSubmit }) {
  const { values, handleChange, resetForm } = useFormWithValidation({});

  // const [searchQueries, setSearchQueries] = useState({
  //   search: "",
  //   shortfilm: false,
  // });

  const checked = localStorage.getItem("checked");
  const input = localStorage.getItem("input");

  const FORM_STYLES = {
    form: "searchForm",
    textInput: "searchForm__text",
    input: "searchForm__text",
    label: "searchForm__group",
    button: "searchForm__submitButton",
    required: false,
  };

  const FORM_STYLES_CHECKBOX = {
    group: "searchForm__checkbox",
    input: "searchForm__checkbox_input",
    slider: "searchForm__checkbox_slider",
    label: "searchForm__checkbox-label",
    focus: "searchForm__checkbox-label_focus",
    required: false,
    labelText: "Короткометражки",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { search, shortfilm } = searchQueries;
    // if (!search || !shortfilm) {
    //   return;
    // }

    // const { input,  checked } = setSearchQueries;
    // localStorage.setItem("input", values.search),
    // localStorage.setItem("searchQueries", JSON.stringify(values));
    // localStorage.setItem("searchQueries:"  (values.search) + checked) ;
    onSubmit(values);
    resetForm();
  };

  // useEffect(() => {
  //   setSearchQueries({
  //     search: input,
  //     shortfilm: localStorage.getItem("checked"),
  //   });

  //   localStorage.setItem("searchQueries", JSON.stringify(searchQueries));
  //   const Queries = JSON.parse(localStorage.getItem("searchQueries"));
  //   if (Queries.search === null) {
  //     return;
  //   }

  //   onSubmit(Queries);

  //   // if (checked) {
  //   // setSearchQueries = {
  //   //       search: input,
  //   //       shortfilm: checked,
  //   //     };
  //   // onSubmit(Queries)
  //   // resetForm(searchQueries);
  //   console.log(searchQueries);
  //   console.log(Queries);
  //   // }
  // }, []);

  return (
    <form className={FORM_STYLES.form} onSubmit={handleSubmit}>
      <Input
        placeholder="Фильм"
        type="text"
        id="search"
        name="search"
        ariaLabel='найти'
        styleSettings={FORM_STYLES}
        onChange={handleChange}
        value={values.search}
      />
      <FilterCheckbox
        inputClassName={FORM_STYLES_CHECKBOX.input}
        labelClassName={FORM_STYLES_CHECKBOX.label}
        sliderClassName={FORM_STYLES_CHECKBOX.slider}
        onFocusClassName={FORM_STYLES_CHECKBOX.focus}
        settings={FORM_STYLES_CHECKBOX}
        type="checkbox"
        id="shortfilm"
        name="shortfilm"
        label="Короткометражки"
        // styleSettings={FORM_STYLES_CHECKBOX}
        onChange={handleChange}
        value={values.shortfilm}
        onclick={localStorage.setItem("checked", values.shortfilm)}
      />
      {/* <Input
        type="checkbox"
        id="shortfilm"
        name="shortfilm"
        label="Короткометражки"
        styleSettings={FORM_STYLES_CHECKBOX}
        onChange={handleChange}
        value={values.shortfilm}
        onclick={localStorage.setItem("checked", values.shortfilm)}
      /> */}
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
