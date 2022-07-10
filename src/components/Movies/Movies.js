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
  isLoadingData,
  resStatus,
  moviesData,
  onSubmit,
  onSaveMovie,
  onDeleteMovie,
  isNoMoviesFound,
  onOpenMenu,
  handleChange,
  isSubmitted,
  // handleSubmit,

  searchQuery,
}) {
  const FOPM_STYLES = {
    logo: "header__logo",
  };
  const location = useLocation();

  const handleSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <main className="movies">
      {/* <Header styleSettings={FOPM_STYLES}> */}
        {/* <AuthNavigation /> */}
        {/* <MenuButton onOpenMenu={onOpenMenu} /> */}
      {/* </Header> */}
      <SearchForm onSubmit={handleSubmit} />
      {/* {!isLoadingData && isNoMoviesFound && (
        <p>{NO_MOVIES_FOUND_TEXT.BASE_TEXT}</p>
      )}
      {isLoadingData && <Preloader />} */}
      {/* {isMoviesApiError && (
        <InfoTooltip
          text={NO_MOVIES_FOUND_TEXT.BASE_ERROR}
        />
      )} */}
      <MoviesCardList
        data={moviesData}
        locationPathname={location.pathname}
        onSaveMovie={onSaveMovie}
        onDeleteSavedMovie={onDeleteMovie}
      />
      <Footer />
    </main>
  );
}

export default Movies;
