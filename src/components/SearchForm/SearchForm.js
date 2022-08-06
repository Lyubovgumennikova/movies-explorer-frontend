import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import "./SearchForm.css";
import icon from "../../images/icon__movie.svg";

import Button from "../Button/Button";
import { useFormWithValidation } from "../../utils/FormValidation";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Form from "../Form/Form";

function SearchForm({ onSubmit }) {
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({});

  const [formIsValid, setFormIsValid] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  // const [searchData, setSearchData] = useState({
  //   search: "",
  //   shortfilm: false,
  // });
  // const checked = localStorage.getItem("checked");
  const input = localStorage.getItem("input");

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
    input: `${
      isChecked
        ? "searchForm__checkbox_input"
        : "searchForm__checkbox_input:checked"
    }`,
    error: "searchForm__checkbox_slider",
    label: "searchForm__checkbox-label",
    focus: "searchForm__checkbox-label_focus",
    required: false,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
    // setSearchData(values)
    // console.log(searchData);
    resetForm();
  };

  useEffect(() => {
    const renderedPrevMovies = JSON.parse(
      localStorage.getItem("filtered-movies")
    );

    if (!renderedPrevMovies) return;


    // localStorage.setItem("searchQueri;lkhgf", JSON.stringify(searchData));

    onSubmit(values);
  }, [isValid, values]);

  useEffect(() => {
    // setFormIsValid(isValid);
    // onSubmit(values);
    setIsChecked(true);
  }, [isValid, values]);


  // useEffect(() => {
  //   if (currentUser) {
  //     resetForm(currentUser);
  //   }
  // }, [currentUser, resetForm]);

  // useEffect(() => {
  //   setFormIsValid(isValid);
  //   setIsEdited(true);
  // }, [isValid, values]);

  // useEffect(() => {
  //   if (
  //     currentUser.name === values.name &&
  //     currentUser.email === values.email
  //   ) {
  //     setIsEdited(false);
  //     setFormIsValid(false);
  //   }
  // }, [currentUser, values]);


  return (
    <form
      className={FORM_STYLES.form}
      onSubmit={handleSubmit}
      formIsValid={formIsValid}
    >
      <Input
        placeholder="Фильм"
        type="text"
        id="search"
        name="search"
        ariaLabel="найти"
        styleSettings={FORM_STYLES}
        onChange={handleChange}
        value={values.search}
      />

      <Input
        type="checkbox"
        id="checkbox"
        name="shortfilm"
        label="Короткометражки"
        styleSettings={FORM_STYLES_CHECKBOX}
        onChange={handleChange}
        value={values.shortfilm}

        // checked={values.shortfilm}
        // onclick={handleCheced}
        // onclick={localStorage.setItem("checked", values.shortfilm)}
      />
      <Button
        type="submit"
        title="Найти"
        styleSettings={FORM_STYLES}
        // disabled={isLoadingData}
        disabled={resetForm}
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
