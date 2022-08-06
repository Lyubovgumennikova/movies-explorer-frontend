import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import "./SearchForm.css";
import icon from "../../images/icon__movie.svg";

import Button from "../Button/Button";
import { useFormWithValidation } from "../../utils/FormValidation";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Form from "../Form/Form";

function SearchForm({ onSubmit, handleSearchSavedMovies }) {
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({});

  // // const [searchData, setSearchData] = useState({
  // //   // search: "",
  // //   // shortfilm: false,
  // // });

  // // const [searchD, setSearchD] = useState({
  // //   search: "",
  // //   shortfilm: false,
  // // });

  // // const checked = localStorage.getItem("checked");
  // // const input = localStorage.getItem("input");

  // // const FORM_STYLES = {
  // //   form: "searchForm",
  // //   textInput: "searchForm__text",
  // //   input: "searchForm__text",
  // //   label: "searchForm__group",
  // //   button: "searchForm__submitButton",
  // //   required: true,
  // // };

  // // const FORM_STYLES_CHECKBOX = {
  // //   group: "searchForm__checkbox",
  // //   input: "searchForm__checkbox_input",
  // //   error: "searchForm__checkbox_slider", //slider
  // //   label: "searchForm__checkbox-label",
  // //   focus: "searchForm__checkbox-label_focus",
  // //   required: false,
  // //   // labelText: "Короткометражки",
  // // };

  // // const handleSubmit = (e) => {
  // //   e.preventDefault();
  // //   onSubmit(values);
  // //   console.log(searchData);
  // //   // const checked = values.shortfilm || false;
  // //   // const search = values.search;
  // //   // setSearchData({
  // //   //   search: search,
  // //   //   shortfilm: checked,
  // //   // });

  // //   resetForm();
  // // };

  // // useEffect(() => {
  // //   setSearchData({
  // //     //   // search: input,
  // //       search: localStorage.getItem("input"),
  // //       shortfilm: localStorage.getItem("checked"),
  // //     //   // shortfilm: checked,
  // //     });
  // //     localStorage.setItem("searchQueries", JSON.stringify(searchData));

  // //     console.log(searchData);
  // // }, []);


  // // useEffect(() => {
  // //   const searchDjjhg = localStorage.getItem("searchQueries");
  // //   console.log(searchDjjhg);
  // //   if (!searchDjjhg) return;

  // //   setSearchData(JSON.parse(searchDjjhg));
  // //   resetForm(searchData)
  // //   console.log(searchDjjhg);
  // // }, []);

  // // // useEffect(() => {
  // // //   if (searchData) {
  // // //     resetForm(searchData);
  // // //   }
  // // // }, [ ]);

  // // function handleCheced()  {
  // //   localStorage.setItem("checked", values.shortfilm);
  // //   // const { search, shortfilm } = searchQueries;
  // //   // if (!search || !shortfilm) {
  // //   //   return;
  // //   // }
  // //   // setSearchData(values)
  // //   // const { input,  checked } = setSearchQueries;
  // //   // localStorage.setItem("input", values.search),
  // //   // localStorage.setItem("searchQueries", JSON.stringify(values));
  // //   // localStorage.setItem("searchQueries:"  (values.search) + checked) ;
  // //   // onSubmit(values);
  // //   console.log("blkbmljgbfbknfbknkf");
  // //   // resetForm();
  // // };

  // const [searchData, setSearchData] = useState({
  //   search: "",
  //   shortfilm: false,
  // });

  // const [searchD, setSearchD] = useState({
  //   search: "",
  //   shortfilm: false,
  // });

  // const checked = localStorage.getItem("checked");
  // const input = localStorage.getItem("input");

  // const FORM_STYLES = {
  //   form: "searchForm",
  //   textInput: "searchForm__text",
  //   input: "searchForm__text",
  //   label: "searchForm__group",
  //   button: "searchForm__submitButton",
  //   required: true,
  // };

  // const FORM_STYLES_CHECKBOX = {
  //   group: "searchForm__checkbox",
  //   input: "searchForm__checkbox_input",
  //   error: "searchForm__checkbox_slider", //slider
  //   label: "searchForm__checkbox-label",
  //   focus: "searchForm__checkbox-label_focus",
  //   required: false,
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit(values);
  //   console.log(searchData);
  //   resetForm();
  // };

  // useEffect(() => {
  //   const searchDjjhg = localStorage.getItem("searchQueries");
  //   console.log(searchDjjhg);
  //   if (searchDjjhg) {
  //     try {
  //       setSearchData(JSON.parse(searchDjjhg));
  //     } catch (err) {
  //       localStorage.removeItem("searchQueries");
  //     }
  //   } else {
  //   }
  //   const checked = values.shortfilm || false;
  //   const search = values.search || "";
  //   setSearchData({
  //     search: search,
  //     shortfilm: checked,
  //   });

  //   localStorage.setItem("searchQueries", JSON.stringify(searchData));
  //   // setSearchData({
  //   //   // search: input,
  //   //   search: localStorage.getItem("input"),
  //   //   shortfilm: localStorage.getItem("checked"),
  //   //   // shortfilm: checked,
  //   // });

  //   // localStorage.setItem("searchQueries", JSON.stringify(searchData));
  //   // const Queries = JSON.parse(localStorage.getItem("searchQueries"));
  //   const Queries = JSON.parse(localStorage.getItem("searchQueries"));
  //   // if (Queries.search === null) {
  //   //   return;
  //   // }
  //   console.log(Queries);
  //     onSubmit(Queries);

  //   // if (values)
  //   // setSearchD({
  //   //   search: localStorage.getItem("input"),
  //   //   shortfilm: checked,
  //   // });
  //   // //   // onSubmit(Queries)
  //   // //   // resetForm(searchQueries);
  //   // //   console.log(searchQueries);
  //   // resetForm(searchData);
  //   console.log(searchData);
  //   //   // }
  // }, [values]);

  // function handleCheced()  {
  //   localStorage.setItem("checked", values.shortfilm);
  //   // const { search, shortfilm } = searchQueries;
  //   // if (!search || !shortfilm) {
  //   //   return;
  //   // }
  //   // setSearchData(values)
  //   // const { input,  checked } = setSearchQueries;
  //   // localStorage.setItem("input", values.search),
  //   // localStorage.setItem("searchQueries", JSON.stringify(values));
  //   // localStorage.setItem("searchQueries:"  (values.search) + checked) ;
  //   // onSubmit(values);
  //   console.log("blkbmljgbfbknfbknkf");
  //   // resetForm();
  // };

  // // useEffect(() => {
  // //   if (searchData) {
  // //     resetForm(searchData);
  // //   }
  // // }, [ ]);



  // // useEffect(() => {
  // //   const input = localStorage.getItem("input")
  // //   const checked = localStorage.getItem("checked")
  // //   setSearchData({
  // //       search: input,
  // //       // search: localStorage.getItem("input"),
  // //       // shortfilm: localStorage.getItem("checked"),
  // //       shortfilm: checked,
  // //     });
  // //     localStorage.setItem("searchQueries", JSON.stringify(searchData));
  // //     // resetForm(searchData)
  // //     console.log(searchData);
  // // }, [checked]);


  // // useEffect(() => {
  // //   // const searchDjjhg = localStorage.getItem("searchQueries");
  // //   const searchDjjhg = setSearchData(JSON.parse(localStorage.getItem("searchQueries")));
  // //   console.log(searchDjjhg);
  // //   if (!searchDjjhg) return;

  // //   // setSearchData(JSON.parse(searchDjjhg));
  // //   resetForm(searchDjjhg)
  // //   console.log(searchDjjhg);
  // // }, []);

  // // useEffect(() => {
  // //   if (searchData) {
  // //     resetForm(searchData);
  // //   }
  // // }, [searchData, resetForm ]);

  // // useEffect(() => {
  // //   if (currentUser) {
  // //     resetForm(currentUser);
  // //   }
  // // }, [currentUser, resetForm]);

  // // useEffect(() => {
  // //   setFormIsValid(isValid);
  // //   setIsEdited(true);
  // // }, [isValid, values]);

  // return (
  //   <form
  //     className={FORM_STYLES.form}
  //     onSubmit={handleSubmit}
  //     formIsValid={isValid}
  //   >
  //     <Input
  //       placeholder="Фильм"
  //       type="text"
  //       id="search"
  //       name="search"
  //       ariaLabel="найти"
  //       styleSettings={FORM_STYLES}
  //       onChange={handleChange}
  //       value={values.search}
  //       // value={values.name || ""}
  //       // required
  //     />
  //     <Input
  //       type="checkbox"
  //       id="checkbox"
  //       name="shortfilm"
  //       label="Короткометражки"
  //       styleSettings={FORM_STYLES_CHECKBOX}
  //       onChange={handleChange}
  //       value={values.shortfilm}
  //       onclick={handleCheced}
  //       // onclick={localStorage.setItem("checked", values.shortfilm)}
  //       // onclick={handleSubmit}
  //     />
  //     <Button
  //       type="submit"
  //       title="Найти"
  //       styleSettings={FORM_STYLES}
  //       // disabled={isLoadingData}
  //       disabled={isValid}
  //       buttonText={
  //         <img
  //           src={icon}
  //           className="searchForm__submitButton_icon"
  //           alt="Найти"
  //         />
  //       }
  //     />
  //   </form>

  const [searchData, setSearchData] = useState({
    search: "",
    shortfilm: false,
  });

  const [isChecked, setIsChecked] = useState(false)

  const [searchD, setSearchD] = useState({
    search: "",
    shortfilm: false,
  });

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
    input: `${isChecked ? "searchForm__checkbox_input" : "searchForm__checkbox_input:checked"}`,
    // input: "searchForm__checkbox_input",
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
    resetForm();
  };

  useEffect(() => {
    // const searchQueries = localStorage.getItem("searchQueries");
    // console.log(searchQueries);
    // if (searchQueries) {
    //   try {
    //     setSearchData(JSON.parse(searchQueries));
    //   } catch (err) {
    //     localStorage.removeItem("searchQueries");
    //   }
    // } else {
    // }
    const checked = values.shortfilm || false;
    const search = values.search || "";
    setSearchData({
      search: search,
      shortfilm: checked,
    });

    setSearchD({
      search: values.search,
      shortfilm: values.shortfilm,
    });

    console.log(searchD);
    console.log(isChecked);
//
    // localStorage.setItem("searchQueries", JSON.stringify(searchQueries ));

    localStorage.setItem("searchQueri;lkhgf", JSON.stringify(searchData));
    // setSearchData({
    //   // search: input,
    //   search: localStorage.getItem("input"),
    //   shortfilm: localStorage.getItem("checked"),
    //   // shortfilm: checked,
    // });

    // localStorage.setItem("searchQueries", JSON.stringify(searchData));
    // const Queries = JSON.parse(localStorage.getItem("searchQueries"));
    // const Queries = JSON.parse(localStorage.getItem("searchQueries"));
    // if (Queries.search === null) {
    //   return;
    // }
    // console.log(Queries);
      // onSubmit(Queries);

    // if (values)
    // setSearchD({
    //   search: localStorage.getItem("input"),
    //   shortfilm: checked,
    // });
    // //   // onSubmit(Queries)
    // //   // resetForm(searchQueries);
    // //   console.log(searchQueries);
    // resetForm(searchData);
    onSubmit(searchData);
    console.log(searchData);
    //   // }
  }, [values]);


  const Queries = JSON.parse(localStorage.getItem("searchQueries"));
  useEffect(() => {

    if (Queries) {
      resetForm(Queries);
    }
  }, []);

  useEffect(() => {
    // setFormIsValid(isValid);
    setIsChecked(true);
  }, [isValid, values]);

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
