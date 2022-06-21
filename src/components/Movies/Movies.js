import React from "react";
// import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";
import "./Movies.css"


function Movies({isLoadingData, moviesData, onSubmit, onSaveMovie, onDeleteMovie}) {
  // const [isMoviesApiError, setIsMoviesApiError] = React.useState(false);

  const handleSubmit = (data) => {
    onSubmit(data);
  }
  const handleClick = () => console.log("rkffffnr")
  return (
    <main className="movies">
      <Header>
        <AuthNavigation />
      </Header>
      <SearchForm onSubmit={handleSubmit} handleClick={handleClick}/>
      {isLoadingData && (
        <Preloader />
      )}
      <MoviesCardList
       data={moviesData}
      //  locationPathname={location.pathname}
      //  onSaveMovie={onSaveMovie}
      //  onDeleteSavedMovie={onDeleteMovie}
      />

      <Footer />
    </main>
  );
}

export default Movies;
