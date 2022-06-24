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
// import Notification from "../Notification/Notification";
// import MOVIES_ERRORS_TEXTS from "../../constants/movies-errors-texts";
// import NO_MOVIES_FOUND_TEXT from "../../constants/no-movies-found-text";

function SavedMovies({
  onDeleteSavedMovie,
  savedMovies,
  isSavedMoviesEmpty,
  isLoadingData,
  handleSearchSavedMoviesData,
  getSavedMoviesResStatus,
  isNoSavedMoviesFound,
  onClick,
  // handleChange,
  moviesData,
  isSubmitted,
}) {
  // const [isMoviesApiError, setIsMoviesApiError] = React.useState(false);

  const handleSubmit = (data) => {
    console.log("submtn");
    handleSearchSavedMoviesData(data);
  };

  // let location = useLocation();

  // const handleErrors = () => {
  //   if (getSavedMoviesResStatus) {
  //     switch (getSavedMoviesResStatus) {
  //       case 200:
  //         setIsMoviesApiError(false);
  //         break;
  //       default:
  //         setIsMoviesApiError(true);
  //         break;
  //     }
  //   }
  // };

  // React.useEffect(() => {
  //   handleErrors();
  // }, [getSavedMoviesResStatus]);

  // React.useEffect(() => {
  //   handleSearchSavedMoviesData();
  // }, []);

  const handleClick = () => console.log("rkfnr");

  return (
    <main className="savedMovies">
      <Header>
        <AuthNavigation />
      </Header>

      <SearchForm onSubmit={handleSubmit} />
      {/* {!isLoadingData && isSavedMoviesEmpty && (
        <Notification text={NO_MOVIES_FOUND_TEXT.SAVED_IS_EMPTY} />
      )}
      {!isLoadingData && isNoSavedMoviesFound && (
        <Notification text={NO_MOVIES_FOUND_TEXT.BASE_TEXT} />
      )}
      {isMoviesApiError && (
        <Notification text={MOVIES_ERRORS_TEXTS.BASE_ERROR} />
      )} */}
      <MoviesCardList
        data={savedMovies}
        // locationPathname={location.pathname}
        onDeleteSavedMovie={onDeleteSavedMovie}
      />
       {/* {isLoadingData ? (
          <Preloader />
        ) : (
          moviesData.map((movieCard) => (
            <MoviesCard key={movieCard._id} {...movieCard} />
          ))
        )} */}
      <Footer />
    </main>
  );
}

export default SavedMovies;
//{handleChange}
