import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import Footer from "../Footer/Footer";
import "./SavedMovies.css";
import Preloader from "../Preloader/Preloader";
import MenuButton from "../MenuButton/MenuButton";
import { useLocation } from "react-router-dom";
import NO_MOVIES_FOUND_TEXT from "../../constants/noMoviesFound";

function SavedMovies({
  onDeleteMovie,
  onOpenMenu,
  savedMovies,
  handleSearchSavedMovies,
  isNoMoviesFound,
  isLoadingMoviesData,
}) {
  const [isMoviesApiError, setIsMoviesApiError] = useState(false);

  const FOPM_STYLES = {
    logo: "header__logo",
  };
  const location = useLocation();
    // const [savedMovies, setSavedMovies] = useState([]);

  const handleSubmit = (data) => {
    handleSearchSavedMovies(data);
  };

  // useEffect(() => {
  //   const localsavedMovies = localStorage.getItem("savedMovies");
  //   console.log(localsavedMovies);

  //   setSavedMovies(savedMovies);
  // }, []);

  useEffect(() => {
    // handleSearchSavedMovies();
    localStorage.getItem("savedMovies");
  }, [])

  return (
    <main className="savedMovies">
      <Header styleSettings={FOPM_STYLES}>
        <AuthNavigation />
        <MenuButton onOpenMenu={onOpenMenu} />
      </Header>
      <SearchForm onSubmit={handleSubmit} />
      {!isLoadingMoviesData && isNoMoviesFound && (
        <p>{NO_MOVIES_FOUND_TEXT.BASE_TEXT}</p>
      )}
      {isMoviesApiError && <p>{NO_MOVIES_FOUND_TEXT.BASE_ERROR}</p>}
      <MoviesCardList
        data={savedMovies}
        locationPathname={location.pathname}
        onDeleteMovie={onDeleteMovie}
      />
      <Footer />
    </main>
  );
}

export default SavedMovies;
