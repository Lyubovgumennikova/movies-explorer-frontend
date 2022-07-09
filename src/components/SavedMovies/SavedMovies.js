import React from "react";
// import { useLocation } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
// import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./SavedMovies.css";
import Preloader from "../Preloader/Preloader";
import MenuButton from "../MenuButton/MenuButton";
import { useLocation } from "react-router-dom";

function SavedMovies({ onDeleteMovie, savedMovies, onOpenMenu, onSubmit }) {
  const FOPM_STYLES = {
    logo: "header__logo",
  };
  const location = useLocation();
  console.log(location.pathname);

  const handleSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <main className="savedMovies">
      <Header styleSettings={FOPM_STYLES}>
        <AuthNavigation />
        <MenuButton onOpenMenu={onOpenMenu} />
      </Header>
      <SearchForm onSubmit={handleSubmit} />
      <MoviesCardList
        data={savedMovies}
        locationPathname={location.pathname}
        // onDeleteSavedMovie={onDeleteMovie}
        // onSaveMovie={moviesData}
      />
      <Footer />
    </main>
  );
}

export default SavedMovies;
//{handleChange}
