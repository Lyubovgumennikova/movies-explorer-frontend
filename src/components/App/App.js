import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
// import Footer from '../Footer/Footer';
import Movies from "../Movies/Movies";
// import Preloader from '../Preloader/Preloader';
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import api from "../../utils/Api";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import ImagePopup from './ImagePopup';
// import EditProfilePopup from './EditProfilePopup';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import EditAvatarPopup from './EditAvatarPopup';
// import AddPlacePopup from './AddPlacePopup';
// import DeleteCardPopup from './DeleteCardPopup';
// import ProtectedRoute from './ProtectedRoute';
import Register from "../Register/Register";
import Login from "../Login/Login";
// import InfoTooltip from './InfoTooltip';
// import * as AuthApi from '../utils/AuthApi.js';
// import {
//   useHistory,
//   useLocation,
// } from 'react-router-dom';
// import { Navigate } from "react-router-dom";
import { createBrowserHistory } from "history";

import {
  Navigate,
  useNavigate,
  useLocation,
  useMatch,
  matchPath,
} from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Menu from "../Menu/Menu";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import MenuButton from "../MenuButton/MenuButton";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [moviesData, setMoviesData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [isLoadingMoviesData, setIsLoadingMoviesData] = React.useState(false);
  // const [movieData, setMovieData] = useState([]);
  //   country: data.country || "Нет данных",
  //   director: data.director || "Нет данных",
  //   duration: data.duration || 0,
  //   year: data.year || "Нет данных",
  //   description: data.description || "Нет данных",
  //   image: data.image,
  //   trailerLink: data.trailerLink,
  //   thumbnail: data.thumbnail,
  //   nameRU: data.nameRU || "Нет данных",
  //   nameEN: data.nameEN || "Нет данных",
  //   movieId: data.id,
  // });

  // const location = useLocation();
  // let navigate = useNavigate();
  // const navigate = useHistory();
  // const history = useHistory ();
  // const history = createBrowserHistory();
  // import { useLocation, matchPath } from "react-router";
  // const { pathname } = useLocation();

  // const exclusionRoutesPath = [
  //   '/signin',
  //   '/signup',
  // ];
  // const exclusionRoutesPath = matchPath("/signin", pathname);
  // '/signin',
  // '/signup',

  // const handleSearchMoviesData = (searchQueries = {}) => {
  //   const localMoviesData = JSON.parse(localStorage.getItem('movies'));
  //   if (localMoviesData) {
  //     // const filteredMovies = searchFilter(searchQueries, localMoviesData);

  //     if (filteredMovies.length === 0) {
  //       setIsNoMoviesFound(true);
  //     } else {
  //       setIsNoMoviesFound(false);
  //     }

  //     localStorage.setItem('filtered-previously-movies', JSON.stringify(markAsSaved(filteredMovies)));

  //     setMoviesData(markAsSaved(filteredMovies));
  //   }
  // };

  const handleSaveFavoriteMovie = (data) => {
    const token = localStorage.getItem("jwt");
    // if (token) {
    //   mainApi.saveMovie(data, token)
    //     .then((res) => {
    //     })
    //     .catch((err) => {
    //       setOpenNotificationModal();
    //       setNotificationText(`${SAVE_MOVIE_ERROR_TEXTS.BASE_TEXT} ${err}`)
    //       console.log(err);
    //     })
    //     .finally(() => {
    //       handleSearchSavedMoviesData();
    //     })
    // } else {
    //   history.push('/signin');
    // };
  };

  const handleDeleteSavedMovie = (id) => {
    const token = localStorage.getItem("jwt");

    // if (token) {
    //   mainApi.deleteSavedMovie(id, token)
    //     .then((res) => {
    //       markAsUnsaved(id);
    //     })
    //     .catch((err) => {
    //       setOpenNotificationModal();
    //       setNotificationText(`${DELETE_MOVIE_ERROR_TEXTS.BASE_TEXT} ${err}`)
    //       console.log(err);
    //     })
    //     .finally(() => {
    //       const isAfterDelete = true;
    //       handleSearchSavedMoviesData(isAfterDelete);
    //     )
    // };
  };

  const handleOpenMenuClick = () => {
    setMenuIsOpen(true);
  };

  const setCloseMenu = () => {
    setMenuIsOpen(false);
  };

  function handleClick() {
    console.log("APP");
    // Navigate("/movies");
    setSearchQuery("git");
  }
  const handleLogin = (data) => {
    // Navigate("/movies");
    // setIsLoggedIn(true);
    // history("/movies");
    // navigate("/movies");
    // Navigate("/movies");
    // <Navigate to="/movies" replace={true} />;
    // <navigate(to="/movies", {replace:true})
  };

  const handleSubmit = (evt) => {
    console.log(setSearchQuery);
    console.log(searchQuery);
    evt.preventDefault();
    // onSubmit(value);
    setIsSubmitted(true);
    // setSearchQuery("");
  };

  useEffect(() => {
    console.log("useEffect");
    api.getMoviesData().then((res) => {

          // console.log(items);
          console.log(res.status)
          // setMoviesApiResStatus(res.status);
          const moviesData = res;
          // localStorage.setItem('name', 'Alex');
          // localStorage.setItem('movies', JSON.stringify(moviesData));

          const localMoviesData = JSON.parse(localStorage.getItem('movies'));
          // console.log(localMoviesData);
          // const renderedPrevMovies = JSON.parse(localStorage.getItem('filtered-previously-movies'));
          // console.log(renderedPrevMovies);
          setIsSubmitted(false);
          const DATA =localStorage.setItem('movies', JSON.stringify(moviesData));
          console.log(DATA);
          setMoviesData(localMoviesData);
        });

    // console.log(res);
    // if (isSubmitted) {
    //   // setIsLoggedIn(true)
    //   api.getMoviesData(searchQuery).then((items) => {
    //     setMoviesData(items);

    //     setIsSubmitted(false);
    //     // setSearchQuery("");
    //   });
    // }

    // api.search(searchQuery).then(data => {
    //   console.log(data)
    // })
    // const handleWindowLoad = () => {
    //   setIsLoadingData(false);
    // };

    // window.addEventListener('load', handleWindowLoad);

    // return () => window.removeEventListener('load', handleWindowLoad);
  }, [searchQuery, isSubmitted]);

  return (
    <div className="page">
      <Router>
        <Header>{isLoggedIn ? <Navigation /> : <AuthNavigation />}</Header>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/signup" element={<Register />} />
          <Route
            path="/signin"
            element={<Login onLogin={handleLogin} loggedIn={isLoggedIn} />}
          />
          <Route
            path="/movies"
            element={
              <Movies
                handleChange={searchQuery}
                isLoadingData={isLoadingData}
                // onSubmit={onSubmit}
                onSaveMovie={handleSaveFavoriteMovie}
                onDeleteSavedMovie={handleDeleteSavedMovie}
                moviesData={moviesData}
                // moviesData={markAsSaved(moviesData)}
                onOpenMenu={handleOpenMenuClick}
                // loggedIn={loggedIn}
                // component={Movies}
                // isNoMoviesFound={isNoMoviesFound}
                // isLoadingData={isLoadingMoviesData}
                // resStatus={moviesApiResStatus}
                //
                //
                //
                //
              />
            }
          />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
        <Menu isOpen={menuIsOpen} onClose={setCloseMenu} />
      </Router>
    </div>
  );
}

export default App;
