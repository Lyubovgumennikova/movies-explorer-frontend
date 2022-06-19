import React from "react";
// import { useLocation } from "react-router-dom";
// import SearchForm from "../SearchForm/SearchForm";
// import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
// import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";
// import Notification from "../Notification/Notification";
// import Notification from "../Notification/Notification";
// import MOVIES_ERRORS_TEXTS from "../../constants/movies-errors-texts";
// import NO_MOVIES_FOUND_TEXT from "../../constants/no-movies-found-text";

function Movies({
  isLoadingData,
  resStatus,
  moviesData,
  onSubmit,
  onSaveMovie,
  onDeleteSavedMovie,
  isNoMoviesFound,
}) {
  // let location = useLocation();

  // const [isMoviesApiError, setIsMoviesApiError] = React.useState(false);

  // const handleSubmit = (data) => {
  //   onSubmit(data);
  // };

  // const handleErrors = () => {
  //   if (resStatus) {
  //     switch (resStatus) {
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
  // }, [resStatus]);

  return (
    <main>
      <Header>
        <AuthNavigation />
      </Header>

      {/* <SearchForm onSubmit={handleSubmit} />
      {!isLoadingData && isNoMoviesFound && (
        <Notification text={NO_MOVIES_FOUND_TEXT.BASE_TEXT} />
      )}
      {isLoadingData && <Preloader />}
      {isMoviesApiError && (
        <Notification text={MOVIES_ERRORS_TEXTS.BASE_ERROR} />
      )} */}
      <MoviesCardList
        data={moviesData}
        // locationPathname={location.pathname}
        onSaveMovie={onSaveMovie}
        onDeleteSavedMovie={onDeleteSavedMovie}
      />
      <MoviesCard />
      <Footer />
    </main>
  );
}

export default Movies;
