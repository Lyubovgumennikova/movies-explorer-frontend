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
  isLoadingData,
  handleSaveMovie,
  resStatus,
}) {
  const [isMoviesApiError, setIsMoviesApiError] = useState(false);

  const FOPM_STYLES = {
    logo: "header__logo",
  };
  let location = useLocation();

  const handleErrors = () => {
    if (resStatus) {
      switch (resStatus) {
        case 200:
          setIsMoviesApiError(false);
          break;
        default:
          setIsMoviesApiError(true);
          break;
      };
    };
  };

  useEffect(() => {
    handleErrors();
  }, [resStatus])

  const handleSubmit = (data) => {
    handleSearchSavedMovies(data);
  };

  return (
    <main className="savedMovies">
      <Header styleSettings={FOPM_STYLES}>
        <AuthNavigation />
        <MenuButton onOpenMenu={onOpenMenu} />
      </Header>
      <SearchForm onSubmit={handleSubmit} handleSaveMovie={handleSaveMovie} />
      {!isLoadingData && isNoMoviesFound && (
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
