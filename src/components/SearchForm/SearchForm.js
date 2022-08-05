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

  const [searchData, setSearchData] = useState({
    search: "",
    shortfilm: false,
  });

  const [searchD, setSearchD] = useState({
    search: "",
    shortfilm: false,
  });

  const checked = localStorage.getItem("checked");
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
    input: "searchForm__checkbox_input",
    error: "searchForm__checkbox_slider", //slider
    label: "searchForm__checkbox-label",
    focus: "searchForm__checkbox-label_focus",
    required: false,
    // labelText: "Короткометражки",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
    console.log(searchData);
    resetForm(searchData);
  };

  useEffect(() => {
    const searchDjjhg = localStorage.getItem("searchQueries");
    console.log(searchDjjhg);
    if (searchDjjhg) {
      try {
        setSearchData(JSON.parse(searchDjjhg));
      } catch (err) {
        localStorage.removeItem("searchQueries");
      }
    } else {
    }
    const checked = values.shortfilm || false;
    const search = values.search || "";
    setSearchData({
      search: search,
      shortfilm: checked,
    });

    localStorage.setItem("searchQueries", JSON.stringify(searchData));
    // setSearchData({
    //   // search: input,
    //   search: localStorage.getItem("input"),
    //   shortfilm: localStorage.getItem("checked"),
    //   // shortfilm: checked,
    // });

    // localStorage.setItem("searchQueries", JSON.stringify(searchData));
    // const Queries = JSON.parse(localStorage.getItem("searchQueries"));
    const Queries = JSON.parse(localStorage.getItem("searchQueries"));
    // if (Queries.search === null) {
    //   return;
    // }
    console.log(Queries);
      onSubmit(Queries);

    // if (values)
    // setSearchD({
    //   search: localStorage.getItem("input"),
    //   shortfilm: checked,
    // });
    // //   // onSubmit(Queries)
    // //   // resetForm(searchQueries);
    // //   console.log(searchQueries);
    // resetForm(searchData);
    console.log(searchData);
    //   // }
  }, [values]);

  // useEffect(() => {
  //   if (searchData) {
  //     resetForm(searchData);
  //   }
  // }, [ ]);

  function handleCheced()  {
    localStorage.setItem("checked", values.shortfilm);
    // const { search, shortfilm } = searchQueries;
    // if (!search || !shortfilm) {
    //   return;
    // }
    // setSearchData(values)
    // const { input,  checked } = setSearchQueries;
    // localStorage.setItem("input", values.search),
    // localStorage.setItem("searchQueries", JSON.stringify(values));
    // localStorage.setItem("searchQueries:"  (values.search) + checked) ;
    // onSubmit(values);
    console.log("blkbmljgbfbknfbknkf");
    // resetForm();
  };

  return (
    <form
      className={FORM_STYLES.form}
      onSubmit={handleSubmit}
      formIsValid={isValid}
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
        // value={values.name || ""}
        // required
      />
      {/* <FilterCheckbox
        type="checkbox"
        id="shortfilm"
        name="shortfilm"
        label="Короткометражки"
        styleSettings={FORM_STYLES_CHECKBOX}
        inputClassName={FORM_STYLES_CHECKBOX.input}
        labelClassName={FORM_STYLES_CHECKBOX.label}
        sliderClassName={FORM_STYLES_CHECKBOX.slider}
        onFocusClassName={FORM_STYLES_CHECKBOX.focus}
        onChange={handleChange}
        value={values.shortfilm}
        // onclick={localStorage.setItem("checked", values.shortfilm)}
        // onclick={onChange}
      /> */}
      <Input
        type="checkbox"
        id="checkbox"
        name="shortfilm"
        label="Короткометражки"
        styleSettings={FORM_STYLES_CHECKBOX}
        onChange={handleChange}
        value={values.shortfilm}
        onclick={handleCheced}
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
