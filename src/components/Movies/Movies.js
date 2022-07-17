import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";
import "./Movies.css";
import Button from "../Button/Button";
// import { useLocation } from "react-router-dom";
import MenuButton from "../MenuButton/MenuButton";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import NO_MOVIES_FOUND_TEXT from "../../constants/noMoviesFound";

function Movies({
  isLoadingMoviesData,
  moviesData,
  onSubmit,
  onSaveMovie,
  onDeleteMovie,
  isNoMoviesFound,
  resStatus,
  onOpenMenu,
}) {
  const [isMoviesApiError, setIsMoviesApiError] = useState(false);
  const location = useLocation();

  const FOPM_STYLES = {
    logo: "header__logo",
  };

  const handleSubmit = (data) => {
    onSubmit(data);
    console.log("movies");
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
        <p>{NO_MOVIES_FOUND_TEXT.BASE_TEXT}</p>
      )}
      {isMoviesApiError && <p>{NO_MOVIES_FOUND_TEXT.BASE_ERROR}</p>}
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
