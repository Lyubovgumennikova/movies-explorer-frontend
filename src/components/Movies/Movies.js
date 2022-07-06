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
  // const [show, setShow] = useState("index");
  // const [movies, setMovies] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const location = useLocation();
  console.log(location.pathname);


  const handleSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <main className="movies">
      <Header>
        <AuthNavigation />
        <MenuButton onOpenMenu={onOpenMenu} />
      </Header>
      <SearchForm onSubmit={handleSubmit} />
      {/* {isLoadingData ? (
        <Preloader />
      // ) : show === "movie" ? (
        // <InfoTooltip />
      ) : (
        <MoviesCardList
          data={moviesData}
          locationPathname={useLocation.pathname}
          onSaveMovie={onSaveMovie}
          onDeleteSavedMovie={onDeleteMovie}
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
