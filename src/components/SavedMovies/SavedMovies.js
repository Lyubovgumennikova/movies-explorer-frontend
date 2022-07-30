import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import Footer from "../Footer/Footer";
import "./SavedMovies.css";
import MenuButton from "../MenuButton/MenuButton";
import { useLocation } from "react-router-dom";
import NOTIFICATION_TEXT_ERROR from "../../constants/NotificationText";

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

  useEffect(() => {
    handleSearchSavedMovies();
    // localStorage.getItem("savedMovies");
  }, [])

  return (
    <main className="savedMovies">
      <Header styleSettings={FOPM_STYLES}>
        <AuthNavigation />
        <MenuButton onOpenMenu={onOpenMenu} />
      </Header>
      <SearchForm onSubmit={handleSubmit} />
      {!isLoadingMoviesData && isNoMoviesFound && (
        <p>{NOTIFICATION_TEXT_ERROR.NO_MOVIES_TEXT}</p>
      )}
      {isMoviesApiError && <p>{NOTIFICATION_TEXT_ERROR.MOVIES_ERROR}</p>}
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
