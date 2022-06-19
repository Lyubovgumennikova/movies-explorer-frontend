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


function Movies({}) {
  return (
    <main className="movies">
      <Header>
        <AuthNavigation />
      </Header>
      <SearchForm />
      <Preloader />
      <MoviesCardList />
      <MoviesCard />
      <Footer />
    </main>
  );
}

export default Movies;
