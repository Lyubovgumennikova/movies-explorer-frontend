import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import "./SearchForm.css";
import icon from "../../images/icon__movie.svg";

import Button from "../Button/Button";

function SearchForm({ onSubmit, handleSaveMovie }) {
  const [shortCards, setShortCards] = useState(false);
  const [query, setQuery] = useState("");

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
    label: "searchForm__checkbox-label",
    focus: "searchForm__checkbox-label_focus",
    required: false,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = localStorage.getItem("all_query");
    const checked = localStorage.getItem("all_short_movies");
    const searchData = {
      search: input,
      shortfilm: !checked,
    };
    onSubmit(searchData);
  };

  const updateQuery = (query) => {
    query = query.toLowerCase();
    setQuery(query);
    localStorage.setItem("all_query", query);
  };

  const updateShortMovies = (shortCards) => {
    setShortCards(shortCards);
    localStorage.setItem("all_short_movies", JSON.stringify(shortCards));
  };

  useEffect(() => {
    const input = localStorage.getItem("all_query");
    const checked = localStorage.getItem("all_short_movies");
    const searchData = {
      search: input,
      shortfilm: checked,
    };
    onSubmit(searchData);
  }, [shortCards]);

  useEffect(() => {
    handleSaveMovie(
      JSON.parse(localStorage.getItem("filtered-movies") || "[]")
    );

    updateQuery(localStorage.getItem("all_query") || "");

    updateShortMovies(
      JSON.parse(localStorage.getItem("all_short_movies") || "false")
    );
  }, []);

  return (
    <form className={FORM_STYLES.form} onSubmit={handleSubmit}>
      <Input
        placeholder="Фильм"
        type="text"
        id="search"
        name="search"
        ariaLabel="найти"
        styleSettings={FORM_STYLES}
        value={query}
        onChange={(event) => updateQuery(event.target.value)}
      />

      <Input
        type="checkbox"
        id="checkbox"
        name="shortfilm"
        label="Короткометражки"
        styleSettings={FORM_STYLES_CHECKBOX}
        value={shortCards}
        checked={shortCards}
        onChange={() => updateShortMovies(!shortCards)}
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
