import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import "./Movies.css";
import MenuButton from "../MenuButton/MenuButton";
import NOTIFICATION_TEXT_ERROR from "../../constants/NotificationText";

function Movies({
  moviesData,
  onSubmit,
  onSaveMovie,
  onDeleteMovie,
  isNoMoviesFound,
  isLoadingMoviesData,
  // isLoadingData,
  onOpenMenu,
}) {
  const [isMoviesApiError, setIsMoviesApiError] = useState(false);
  const location = useLocation();

  const FOPM_STYLES = {
    logo: "header__logo",
  };

  const handleSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <main className="movies">
      <Header styleSettings={FOPM_STYLES}>
        <AuthNavigation />
        <MenuButton onOpenMenu={onOpenMenu} />
      </Header>
      <SearchForm onSubmit={handleSubmit} />
      {isLoadingMoviesData && <Preloader />}
      {!isLoadingMoviesData && isNoMoviesFound && (
        <p>{NOTIFICATION_TEXT_ERROR.NO_MOVIES_TEXT}</p>
      )}
      {isMoviesApiError && <p>{NOTIFICATION_TEXT_ERROR.MOVIES_ERROR}</p>}
      <MoviesCardList
        data={moviesData}
        locationPathname={location.pathname}
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
      />
      <Footer />
    </main>
  );
}

export default Movies;
