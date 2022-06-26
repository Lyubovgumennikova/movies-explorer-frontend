import React from "react";
// import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";
import "./Movies.css";
import Button from "../Button/Button";
import { useLocation } from "react-router-dom";
import MenuButton from "../MenuButton/MenuButton";
// import Button from "../Button/Button";

function Movies({
  isLoadingData,
  moviesData,
  onSubmit,
  onSaveMovie,
  onDeleteMovie,
  searchQuery,
  isSubmitted,
  handleChange,
  onOpenMenu,
}) {
  const handleSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <main className="movies">
      <SearchForm onSubmit={handleSubmit} />
      {/* {isLoadingData && (
        <Preloader />
      )} */}
      {/* {isMoviesApiError && (
        <Notification
          text={MOVIES_ERRORS_TEXTS.BASE_ERROR}
        />
      )} */}
      <MoviesCardList
        data={moviesData}
        locationPathname={useLocation.pathname}
        // searchQuery={searchQuery}
        onSaveMovie={onSaveMovie}
        onDeleteSavedMovie={onDeleteMovie}
        // isSubmitted={isSubmitted}
        // handleChange={handleChange}
        // onSubmit={onSubmit}
      />
      <Footer />
    </main>
  );
}

export default Movies;
