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

function Movies({
  isLoadingData,
  moviesData,
  onSubmit,
  onSaveMovie,
  onDeleteMovie,
  searchQuery,
  isSubmitted,
  handleChange,
}) {
  const handleSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <main className="movies">
      <Header>
        <AuthNavigation />
      </Header>
      <SearchForm onSubmit={handleSubmit} />
       {/* {isLoadingData
       <Preloader />} */}
      <MoviesCardList
        data={moviesData}
        locationPathname={useLocation.pathname}
        searchQuery={searchQuery}
        onSaveMovie={onSaveMovie}
        onDeleteSavedMovie={onDeleteMovie}
        isSubmitted={isSubmitted}
        handleChange={handleChange}
        onSubmit={onSubmit}
      />
      <Footer />
    </main>
  );
}

export default Movies;
