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

import { useNavigate, useLocation } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Menu from "../Menu/Menu";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import * as mainApi from "../../utils/MainApi";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import NOTIFICATION_TEXT_ERROR from "../../constants/NotificationText";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [infoTooltip, setInfoTooltip] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [moviesData, setMoviesData] = useState([]);

  const [isLoadingMoviesData, setIsLoadingMoviesData] = useState(true); //плейсхолдер
  const [isNoMoviesFound, setIsNoMoviesFound] = useState(false); // не найдено
  // const [errorMessage, setErrorMessage] = useState(null);

  const [isErrorsModale, setIsErrorsModale] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  const [foundSavedMoviesData, setFoundSavedMoviesData] = useState([]);

  const [regResStatus, setRegResResStatus] = useState(null);
  const [logResStatus, setLogResStatus] = useState(null);
  const [profResStatus, setProfResStatus] = useState(null);

  let navigate = useNavigate();
  const { pathname } = useLocation();

  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (!localStorage.getItem("jwt")) {
      navigate("/");
      return;
    }
    mainApi
      .getContent(jwt)
      .then((res) => {
        if (!res) return;
        setCurrentUser(res.data);
        setIsLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => console.log(err));
  };

  const handleRegister = (data) => {
    // setIsLoggedIn(true);
    mainApi
      .register(data.name, data.email, data.password)
      .then((res) => {
        setRegResResStatus(res.status);
        handleLogin({
          email: data.email,
          password: data.password,
        });
      })
      .catch((err) => {
        setRegResResStatus(err);
        console.log(`${err}`);
      })
      .finally(() => {
        setIsLoggedIn(false);
      });
  };

  const handleLogin = (data) => {
    mainApi
      .authorize(data.email, data.password)
      .then((res) => {
        if (!res.jwt) return;
        setLogResStatus(res.status);
        localStorage.setItem("jwt", res.jwt);
        setIsLoggedIn(true);
        setIsSubmitted(true);
        setInfoTooltip(true);
        // navigate("/movies");
      })
      .catch((err) => {
        setLogResStatus(err);
        console.log(`${err}`);
      })
      .finally(() => {
        setInfoTooltip(false);
      });
  };

  const handleUpdateUser = (data) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setIsLoggedIn(true);
      mainApi
        .setUserInfo(data.name, data.email, token)
        .then((res) => {
          setProfResStatus(res.status);
          setCurrentUser(res.data);
          localStorage.setItem("currentUser", JSON.stringify(res.data));
          setProfResStatus(
            NOTIFICATION_TEXT_ERROR.PROFILE_SUCCESS_TEXT);
        })
        .catch((err) => {
          setProfResStatus(err);
          console.log(`${err}`);
        })
        .finally(() => {
          // setIsLoggedIn(false);
        });
    }
  };

  function handleSignOut(evt) {
    evt.preventDefault();
    setIsLoggedIn(false);
    setMoviesData([]);
    setCurrentUser({});
    setSavedMovies([]);
    setFoundSavedMoviesData([]);
    localStorage.clear();
    navigate("/");
  }

  const handleSearchMoviesData = (searchQueries = {}) => {
    const localMoviesData = JSON.parse(localStorage.getItem("movies"));
    if (localMoviesData) {
      const filteredMovies = FilterCheckbox(searchQueries, localMoviesData);
      if (filteredMovies.length === 0) {
        setIsNoMoviesFound(true);
      } else {
        setIsNoMoviesFound(false);
      }

      localStorage.setItem(
        "filtered-movies",
        JSON.stringify(markAsSaved(filteredMovies))
      );

      setMoviesData(markAsSaved(filteredMovies));
    }
  };

  const getInitialSavedMoviesIds = () => {
    const initialSavedMoviesIds = [];
    foundSavedMoviesData.forEach((savedMovie) => {
      initialSavedMoviesIds.push(savedMovie.movieId);
    });

    return initialSavedMoviesIds;
  };

  const markAsSaved = (foundMoviesArr) => {
    const initialSavedMoviesIdsArr = getInitialSavedMoviesIds();
    foundMoviesArr.forEach((foundMovie) => {
      foundMovie.saved = initialSavedMoviesIdsArr.some(
        (savedMovieId) => savedMovieId === foundMovie.id
      );
    });

    foundSavedMoviesData.forEach((savedMovie) => {
      foundMoviesArr.forEach((foundMovie) => {
        if (foundMovie.id === savedMovie.movieId) {
          foundMovie._id = savedMovie._id;
        }
      });
    });
    return foundMoviesArr;
  };

  const handleSaveMovie = (data) => {
    const cardLiked = moviesData.find((card) => card.id === data.movieId);

    const token = localStorage.getItem("jwt");
    if (token) {
      mainApi
        .saveMovie(data, token)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          // setOpenNotificationModal();
          console.log(err);
        })
        .finally(() => {
          handleSearchSavedMovies();
        });
    }
  };

  const handleSearchSavedMovies = (searchQueries = {}) => {
    const token = localStorage.getItem("jwt");

    if (token) {
      mainApi
        .getSavedMovies(token)
        .then((res) => {
          if (res.data.length === 0) {
            setFoundSavedMoviesData(res.data);
            // setSavedMovies(res.data);
            return;
          } else {
            console.log(res);
          }

          const savedMovies = res.data.reverse();

          const filteredSavedMovies = FilterCheckbox(
            searchQueries,
            savedMovies
          );

          if (filteredSavedMovies.length === 0) {
            setIsNoMoviesFound(true);
          } else {
            setIsNoMoviesFound(false);
          }
          setFoundSavedMoviesData(filteredSavedMovies);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleDeleteMovie = (data) => {
    moviesData.forEach((movie) => {
      if (movie.saved) {
        if (movie._id === data) {
          delete movie.saved;
          delete movie._id;
        }
      }
    });

    const token = localStorage.getItem("jwt");

    if (token) {
      mainApi
        .deleteMovie(data, token)
        .then(() => {
          const deleteMovies = savedMovies.filter((c) => c._id !== data._id);
          setSavedMovies(deleteMovies);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          handleSearchSavedMovies();
        });
    }
  };

  const handleOpenMenuClick = () => {
    setMenuIsOpen(true);
  };

  const setCloseMenu = () => {
    setMenuIsOpen(false);
  };

  useEffect(() => {
    tokenCheck();
    const token = localStorage.getItem("jwt");
    if (token) {
      setIsLoadingMoviesData(true);
      moviesApi
        .getMoviesData()
        .then((moviesData) => {
          const localMoviesData = JSON.parse(localStorage.getItem("movies"));
          const renderedPrevMovies = JSON.parse(
            localStorage.getItem("filtered-movies")
          );

          if (renderedPrevMovies) {
            setMoviesData(markAsSaved(renderedPrevMovies));
          } else {
            if (localMoviesData) {
              setMoviesData(markAsSaved(localMoviesData));
            } else {
              localStorage.setItem("movies", JSON.stringify(moviesData));
              // localStorage.setItem("movies", JSON.stringify(moviesData));
              // localStorage.setItem("input", );
            }
          }
        })

        .catch((
          err //console.log(err)
        ) => setIsErrorsModale(true))
        .finally(() => {
          setIsLoadingMoviesData(false);
        });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      return navigate("/");
    }
  }, [isLoggedIn]);
  React.useEffect(() => {
    const handleWindowLoad = () => {
      setIsLoadingMoviesData(false);
    };

    window.addEventListener("load", handleWindowLoad);

    return () => window.removeEventListener("load", handleWindowLoad);
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path="/" element={<Main loggedIn={isLoggedIn} />} />
          <Route
            path="/signup"
            element={
              <Register
                onRegister={handleRegister}
                loggedIn={isLoggedIn}
                isSubmitted={isSubmitted}
                regResStatus={regResStatus}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                onLogin={handleLogin}
                isSubmitted={isSubmitted}
                logResStatus={logResStatus}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <PrivateRoute loggedIn={isLoggedIn}>
                <Movies
                  redirectTo="/"
                  isLoadingMoviesData={isLoadingMoviesData}
                  onSubmit={handleSearchMoviesData}
                  onSaveMovie={handleSaveMovie}
                  onDeleteMovie={handleDeleteMovie}
                  moviesData={markAsSaved(moviesData)}
                  onOpenMenu={handleOpenMenuClick}
                  loggedIn={isLoggedIn}
                  isNoMoviesFound={isNoMoviesFound}
                  isSubmitted={isSubmitted}
                  // handleSubmit={handleSubmit}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <PrivateRoute loggedIn={isLoggedIn}>
                <SavedMovies
                  redirectTo="/"
                  loggedIn={isLoggedIn}
                  savedMovies={foundSavedMoviesData}
                  onOpenMenu={handleOpenMenuClick}
                  isLoadingMoviesData={isLoadingMoviesData}
                  isNoMoviesFound={isNoMoviesFound}
                  handleSearchSavedMovies={handleSearchSavedMovies}
                  onDeleteMovie={handleDeleteMovie}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute loggedIn={isLoggedIn}>
                <Profile
                  redirectTo="/"
                  component={Profile}
                  loggedIn={isLoggedIn}
                  onUpdateUser={handleUpdateUser}
                  onSignOut={handleSignOut}
                  onOpenMenu={handleOpenMenuClick}
                  profResStatus={profResStatus}
                />
              </PrivateRoute>
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>

      {menuIsOpen && <Menu isOpen={menuIsOpen} onClose={setCloseMenu} />}
      <InfoTooltip
        isOpen={isErrorsModale}
        onClose={setCloseMenu}
        name="register"
        loggedIn={isLoggedIn}
        // location={location}
        infoTooltip={infoTooltip}
      />
    </div>
  );
}

export default App;
