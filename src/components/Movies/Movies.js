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
// import Button from "../Button/Button";

function Movies({
  isLoadingData,
  resStatus,
  moviesData,
  onSubmit,
  onSaveMovie,
  onDeleteMovie,
  isNoMoviesFound,

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
  const [isMoviesApiError, setIsMoviesApiError] = useState(false);

  const handleSubmit = (data) => {
    onSubmit(data);
  }

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

  React.useEffect(() => {
    handleErrors();
  }, [resStatus])

  return (
    <main className="movies">
      <Header>
        <AuthNavigation />
        <MenuButton/>
      </Header>
      <SearchForm
        onSubmit={handleSubmit}
        // handleChange={handleChange}
        // isSubmitted={isSubmitted}
        // handleSubmit={handleSubmit}
        // searchQuery={searchQuery}
      />
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
        locationPathname={location.pathname}
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
