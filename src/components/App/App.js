import React, { useState, useEffect } from "react";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import moviesApi from "../../utils/MoviesApi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Register from "../Register/Register";
import Login from "../Login/Login";
// import InfoTooltip from './InfoTooltip';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./App.css";

import {
  Navigate,
  useNavigate,
  useLocation,
  useMatch,
  matchPath,
} from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Menu from "../Menu/Menu";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import * as mainApi from "../../utils/MainApi";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [infoTooltip, setInfoTooltip] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [moviesData, setMoviesData] = useState([]);

  const [isLoadingMoviesData, setIsLoadingMoviesData] = useState(true); //плейсхолдер
  const [isNoMoviesFound, setIsNoMoviesFound] = useState(false); // не найдено
  // const [errorMessage, setErrorMessage] = useState(null);

  // const [isErrorsModale, setIsErrorsModale] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  // const [tokenAuthResStatus, setTokenAuthResStatus] = React.useState(null);

  // const [foundMovies, setFoundMovies] = useState([]);

  // const [foundSavedMovies, setFoundSavedMovies] = useState([]); //найдены сохраненные

  const [isNoSavedMoviesFound, setIsNoSavedMoviesFound] = React.useState(false); // не найдены

  // const [registrationResStatus, setRegistrationResStatus] = React.useState(
  //   null
  // );
  // const [moviesApiResStatus, setMoviesApiResStatus] = React.useState(null);
  // const { pathname } = useLocation();
  let navigate = useNavigate();
  const { pathname } = useLocation();

  const routePathMain = matchPath("/signup", pathname);
  // const exclusionRoutesPath = matchPath(exclusionRoutesPathsArrayFooter, pathname);
  // const exclusionRoutesPathFooter = matchPath["/signin", "/signup", "/profile"];

  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (!localStorage.getItem("jwt")) {
      navigate("/signin");
      return;
    }
    mainApi
      .getContent(jwt)
      .then((res) => {
        if (!res) return;

        // setTokenAuthResStatus(res.status);
        setCurrentUser(res.data);
        setIsLoggedIn(true);
        navigate("/movies");
      })
      .catch(
        (err) => console.log(err)
        // { setTokenAuthResStatus(err) }
      );
  };

  const handleRegister = (data) => {
    setIsRegister(true);
    mainApi
      .register(data.name, data.email, data.password)
      .then(() => {
        setIsLoggedIn(true);
        // isErrorsModale(true)
        handleLogin({
          email: data.email,
          password: data.password,
        });
        // setInfoTooltip(true);
      })
      .catch((err) => {
        console.log(`${err}`);
        // setInfoTooltip(true);
        // setRegistrationResStatus(err);
        //setUpdateCurrentUserResStatus(err);
      })
      .finally(() => {
        // setIsRegister(false);
        // setIsLoadingUpdateCurrentUser(false);
      });
  };

  const handleLogin = (data) => {
    // if (!jwt) return;
    mainApi
      .authorize(data.email, data.password)
      .then((data) => {
        if (!data.jwt)
          // const myError = new Error('please improve your code')
          return;

        localStorage.setItem("jwt", data.jwt);
        setIsLoggedIn(true);

        setInfoTooltip(true);
        navigate("/movies");
      })
      .catch((err) => setIsRegister(true))
      .finally(() => {
        setInfoTooltip(false);
      });
  };

  const handleUpdateUser = (data) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      // setIsLoadingUpdateCurrentUser(true);
      mainApi
        .setUserInfo(data)
        .then((res) => {
          setCurrentUser(res.data);
          // setUpdateCurrentUserResStatus(res.status);
          localStorage.setItem("currentUser", JSON.stringify(res.data));
          // setOpenNotificationModal();
          // setNotificationText(PROFILE_UPDATE_SUCCESS_TEXT.BASE_TEXT);
        })
        .catch((err) => {
          console.log(`${err}`);
          //setUpdateCurrentUserResStatus(err);
        })
        .finally(() => {
          setIsSubmitted(false);
          // setIsLoadingUpdateCurrentUser(false);
        });
    }
  };

  function handleSignOut() {
    // evt.preventDefault();
    setIsLoggedIn(false);
    setMoviesData([]);
    setCurrentUser({});
    // setFoundSavedMoviesData([]);

    localStorage.clear();
    navigate("/");
  }

  const handleSearchMoviesData = (searchQueries = {}) => {
    const localMoviesData = JSON.parse(localStorage.getItem("movie"));
    if (localMoviesData) {
      const filteredMovies = FilterCheckbox(searchQueries, localMoviesData);
      if (filteredMovies.length === 0) {
        setIsNoMoviesFound(true);
      } else {
        setIsNoMoviesFound(false);
      }

      localStorage.setItem("filtered-movies", JSON.stringify(filteredMovies));
      // localStorage.setItem('searchQueries', JSON.stringify(searchQueries));
      // localStorage.setItem('shortfilm', JSON.stringify(searchQueries));

      setMoviesData(filteredMovies);
    }
  };

  // const getInitialSavedMoviesIds = () => {
  //   const initialSavedMoviesIds = [];

  //   foundSavedMovies.forEach((savedMovie) => {
  //     initialSavedMoviesIds.push(savedMovie.movieId);
  //   });

  //   return initialSavedMoviesIds;
  // };

  // const markAsSaved = (foundMoviesArr) => {
  //   const initialSavedMoviesIdsArr = getInitialSavedMoviesIds();
  //   foundMoviesArr.forEach((foundMovie) => {
  //     foundMovie.saved = initialSavedMoviesIdsArr.some((savedMovieId) => savedMovieId === foundMovie.id);
  //   })

  //   foundSavedMovies.forEach((savedMovie) => {
  //     foundMoviesArr.forEach((foundMovie) => {
  //       if (foundMovie.id === savedMovie.movieId) {
  //         foundMovie._id = savedMovie._id;
  //       }
  //     })
  //   })
  //   return foundMoviesArr;
  // }

  function handleCardLike(data) {
    // const localMoviesData = JSON.parse(localStorage.getItem("movies"));
    const token = localStorage.getItem("jwt");

    // savedMovies.forEach((foundMovie) => {
    //   // foundMovie.saved = getInitialSavedMoviesIds.some((savedMovieId) => savedMovieId === foundMovie.id);
    // });
    // const cardLiked = cards.find((card) => card.id === id);

    // function savedMovies() {
    //   return initialSavedMoviesIds;
    // }

    setSavedMovies(
      savedMovies.map((card) =>
        card.id === data.movieId ? { ...card, saved: true } : card
      )
    );
    // localStorage.setItem(
    //   "movie",
    //   JSON.stringify(
    //     moviesData.map((card) =>
    //       card.id === data.movieId ? { ...card, saved: true } : card
    //     )
    //   )
    // );
    // Отправляем запрос в API и получаем обновлённые данные карточки
    mainApi
      .saveMovie(data, token)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
        localStorage.setItem(
          "savedMovies",
          JSON.stringify([newMovie, ...savedMovies])
        );
        //     const localsavedMovies = JSON.parse(localStorage.setItem("savedMovies"));
        // console.log(localsavedMovies);
      })
      //   .then((newCard) => {
      //     setMoviesData((state) =>
      //       state.map((c) => (c._id === card.movieId ? newCard : c))
      //     );
      //     const localsavedMovies = JSON.parse(localStorage.setItem("savedMovies"));
      // console.log(localsavedMovies);
      //   })
      .catch((err) => console.log(err));
  }

  const handleSaveMovie = (data) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      mainApi
        .saveMovie(data, token)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          // setOpenNotificationModal();
          // setNotificationText(`${SAVE_MOVIE_ERROR_TEXTS.BASE_TEXT} ${err}`)
          console.log(err);
        })
        .finally(() => {
          handleSearchSavedMovies();
        });
    }

    // const token = localStorage.getItem("jwt");
    // if (token) {
    //   mainApi.saveMovie(data, token)
    //   .then((newSavedMovies) => {
    //     setSavedMovies([newSavedMovies, ...savedMovies]);
    //     localStorage.setItem('savedMovies', JSON.stringify([newSavedMovies, ...savedMovies]));

    //   })

    //   //
    // }

    // localStorage.setItem(setSavedMovies(data));
  };

  const handleSearchSavedMovies = (
    searchQueries = {},
    isAfterDelete = false
  ) => {
    const token = localStorage.getItem("jwt");

    if (token) {
      mainApi
        .getSavedMovies(token)
        .then((res) => {
          // setGetSavedMoviesResStatus(res.status);

          if (res.data.length === 0) {
            // setIsSavedMoviesEmpty(true);
            setSavedMovies(res.data);
            return;
          } else {
            console.log(res);
            // setIsSavedMoviesEmpty(false);
          }

          const savedMovies = res.data.reverse();

          const filteredSavedMovies = FilterCheckbox(
            searchQueries,
            savedMovies
          );

          if (filteredSavedMovies.length === 0) {
            setIsNoSavedMoviesFound(true);
          } else {
            setIsNoSavedMoviesFound(false);
          }
          setSavedMovies(filteredSavedMovies);
        })
        .catch((err) => {
          console.log(err);
          // setMoviesApiResStatus(err)
        });
    }
  };

  const handleDeleteSavedMovie = (id) => {
    // const token = localStorage.getItem("jwt");
    console.log("delete");
  };

  const handleOpenMenuClick = () => {
    setMenuIsOpen(true);
  };

  const setCloseMenu = () => {
    setMenuIsOpen(false);
  };

  useEffect(() => {
    tokenCheck();
    // if (!isLoggedIn) return;
    const token = localStorage.getItem("jwt");
    if (token) {
      setIsLoadingMoviesData(true);
      moviesApi
        .getMoviesData()
        .then((moviesData) => {
          const localMoviesData = JSON.parse(localStorage.getItem("movie"));
          const renderedPrevMovies = JSON.parse(
            localStorage.getItem("filtered-movies")
          );
          console.log(renderedPrevMovies);
          if (renderedPrevMovies) {
            setMoviesData(renderedPrevMovies);
            // setMoviesData(markAsSaved(renderedPrevMovies));
          } else {
            if (localMoviesData) {
              // setMoviesData(markAsSaved(localMoviesData));
              setMoviesData(localMoviesData);
            } else {
              localStorage.setItem("movie", JSON.stringify(moviesData));
              // localStorage.setItem("input", name);
            }
          }
        })

        // .catch((
        //   err //console.log(err)
        // ) => setIsErrorsModale(true))
        .finally(() => {
          setIsLoadingMoviesData(false);
        });
    }
  }, [isLoggedIn]);

  return (
    <div className="page">
      {/* <CurrentUserContext.Provider value={currentUser}> */}
      {/* {pathname.match(routePathMain) ? null : (
          <Header  loggedIn={isLoggedIn} > */}
      {/* {isLoggedIn ? <AuthNavigation /> : <Navigation />}
            {isLoggedIn ? (
              <MenuButton onOpenMenu={handleOpenMenuClick} />
            ) : null} */}
      {/* </Header>
        )} */}
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path="/" element={<Main loggedIn={isLoggedIn} />} />
          <Route
            path="/signup"
            element={
              <Register
                onRegister={handleRegister}
                isRegister={isRegister}
                loggedIn={isLoggedIn}
              />
            }
          />
          <Route path="/signin" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/movies"
            element={
              <PrivateRoute loggedIn={isLoggedIn}>
                <Movies
                  // component={Movies}
                  isLoadingMoviesData={isLoadingMoviesData}
                  onSubmit={handleSearchMoviesData}
                  // onSaveMovie={handleSaveMovie}
                  // onSaveMovie={handleSearchSavedMovies}
                  onSaveMovie={handleCardLike}
                  onDeleteSavedMovie={handleDeleteSavedMovie}
                  moviesData={moviesData}
                  onOpenMenu={handleOpenMenuClick}
                  loggedIn={isLoggedIn}
                  isNoMoviesFound={isNoMoviesFound}
                  // resStatus={moviesApiResStatus}
                  isSubmitted={isSubmitted}
                  // handleSubmit={handleSubmit}
                  // handleChange={setSearchQuery}
                  // searchQuery={searchQuery}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <PrivateRoute loggedIn={isLoggedIn}>
                <SavedMovies
                  loggedIn={isLoggedIn}
                  savedMovies={savedMovies}
                  onOpenMenu={handleOpenMenuClick}
                  // isSavedMoviesEmpty={isSavedMoviesEmpty}

                  isLoadingMoviesData={isLoadingMoviesData}
                  // isNoSavedMoviesFound={isNoSavedMoviesFound}

                  handleSearchSavedMovies={handleSearchSavedMovies}
                  onDeleteSavedMovie={handleDeleteSavedMovie}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute loggedIn={isLoggedIn}>
                <Profile
                  loggedIn={isLoggedIn}
                  onUpdateUser={handleUpdateUser}
                  onSignOut={handleSignOut}
                  onOpenMenu={handleOpenMenuClick}
                />
              </PrivateRoute>
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        {/* {pathname.match(routePathMain) ? (
          // <Footer>{!isLoggedIn ? <Navigation /> : <AuthNavigation />}</Footer>
          <Footer />
        ) : null} */}
      </CurrentUserContext.Provider>
      {/* <Footer /> */}
      {/* <Menu isOpen={menuIsOpen} onClose={setCloseMenu} /> */}
      {menuIsOpen && <Menu isOpen={menuIsOpen} onClose={setCloseMenu} />}
      <InfoTooltip
        // isOpen={isErrorsModale}
        isOpen={isRegister}
        onClose={setCloseMenu}
        name="register"
        loggedIn={isLoggedIn}
        // location={location}
        infoTooltip={infoTooltip}
        // text={text}
      />
      {/* </Router> */}
    </div>
  );
}

export default App;
