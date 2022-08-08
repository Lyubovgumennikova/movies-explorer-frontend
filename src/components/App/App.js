import React, { useState, useEffect } from "react";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import moviesApi from "../../utils/MoviesApi";
import { Routes, Route } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Register from "../Register/Register";
import Login from "../Login/Login";
import searchFilter from "../../utils/searchFilter";

import "./App.css";

import { useNavigate } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Menu from "../Menu/Menu";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import * as mainApi from "../../utils/MainApi";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import NOTIFICATION_TEXT_ERROR from "../../constants/NotificationText";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);

  const [infoTooltip, setInfoTooltip] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [moviesData, setMoviesData] = useState([]);

  const [isLoadingMoviesData, setIsLoadingMoviesData] = useState(true); //плейсхолдер
  const [isNoMoviesFound, setIsNoMoviesFound] = useState(false); // не найдено

  const [isSavedMoviesEmpty, setIsSavedMoviesEmpty] = useState(false); //пустой

  const [isErrorsModale, setIsErrorsModale] = useState(false);

  const [foundSavedMoviesData, setFoundSavedMoviesData] = useState([]);

  const [regResStatus, setRegResResStatus] = useState(null);
  const [logResStatus, setLogResStatus] = useState(null);
  const [profResStatus, setProfResStatus] = useState(null);
  const [moviesResStatus, setMoviesResStatus] = useState(null);

  const navigate = useNavigate();

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
      })
      .catch((err) => console.log(err));
  };

  const handleRegister = (data) => {
    setIsLoadingData(true);
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
        setIsLoadingData(false);
      });
  };

  const handleLogin = (data) => {
    setIsLoadingData(true);
    mainApi
      .authorize(data.email, data.password)
      .then((res) => {
        if (!res.jwt) return;
        setLogResStatus(res.status);
        localStorage.setItem("jwt", res.jwt);
        setIsLoggedIn(true);
        setInfoTooltip(true);
        navigate("/movies");
      })
      .then(() => {
        tokenCheck();
      })
      .catch((err) => {
        setLogResStatus(err);
        console.log(`${err}`);
      })
      .finally(() => {
        setInfoTooltip(false);
        setIsLoadingData(false);
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
          setProfResStatus(NOTIFICATION_TEXT_ERROR.PROFILE_SUCCESS_TEXT);
        })
        .catch((err) => {
          setProfResStatus(err);
          console.log(`${err}`);
        })
        .finally(() => {
          setIsLoggedIn(false);
        });
    }
  };

  function handleSignOut(evt) {
    evt.preventDefault();
    setIsLoggedIn(false);
    setMoviesData([]);
    setCurrentUser({});
    setFoundSavedMoviesData([]);
    localStorage.clear();
    navigate("/");
  }

  const handleSearchMoviesData = (searchQueries = {}) => {
    const localMoviesData = JSON.parse(localStorage.getItem("movies"));
    if (localMoviesData) {
      const filteredMovies = searchFilter(searchQueries, localMoviesData);
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

  useEffect(() => {
    handleSearchMoviesData();
  }, []);

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
    const token = localStorage.getItem("jwt");
    if (token) {
      mainApi
        .saveMovie(data, token)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          handleSearchSavedMovies();
        });
    } else {
      navigate("/signin");
    }
  };

  const handleSearchSavedMovies = (searchQueries = {}) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      mainApi
        .getSavedMovies(token)
        .then((res) => {
          if (res.data.length === 0) {
            setIsSavedMoviesEmpty(true);
            setFoundSavedMoviesData(res.data);
            return;
          } else {
            setIsSavedMoviesEmpty(false);
            console.log(res);
          }

          const savedMovies = res.data.reverse();

          const filteredSavedMovies = searchFilter(searchQueries, savedMovies);

          if (filteredSavedMovies.length === 0) {
            setIsNoMoviesFound(true);
          } else {
            setIsNoMoviesFound(false);
          }

          setFoundSavedMoviesData(filteredSavedMovies);
        })
        .catch((err) => {
          console.log(err);
          setMoviesResStatus(err);
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
          const deleteMovies = foundSavedMoviesData.filter(
            (c) => c._id !== data._id
          );
          setFoundSavedMoviesData(deleteMovies);
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
            }
          }
        })

        .catch((err) => {
          console.log(err);
          setMoviesResStatus(err);
          setIsErrorsModale(true);
        })
        .finally(() => {
          setIsLoadingMoviesData(false);
        });
    }
  }, [isLoggedIn]);

  React.useEffect(() => {
    const handleWindowLoad = () => {
      setIsLoadingData(false);
      // setIsLoggedIn(true);
    };

    window.addEventListener("load", handleWindowLoad);

    return () => window.removeEventListener("load", handleWindowLoad);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getContent()
        .then((res) => {
          //console.log(res)
          if (res) {
            setIsLoggedIn(true);
            navigate({ replace: false });
          }
        })
        .catch(() => {
          setIsLoggedIn(false);
        });
    }
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path="/" element={<Main loggedIn={isLoggedIn} />} />
          <Route
            exact
            path="/signup"
            element={
              <Register
                onRegister={handleRegister}
                loggedIn={isLoggedIn}
                regResStatus={regResStatus}
                isLoadingData={isLoadingData}
              />
            }
          />
          <Route
            exact
            path="/signin"
            element={
              <Login
                onLogin={handleLogin}
                logResStatus={logResStatus}
                isLoadingData={isLoadingData}
              />
            }
          />
          <Route
            exact
            path="/movies"
            element={
              <PrivateRoute loggedIn={isLoggedIn}>
                <Movies
                  isLoadingData={isLoadingMoviesData}
                  onSubmit={handleSearchMoviesData}
                  onSaveMovie={handleSaveMovie}
                  onDeleteMovie={handleDeleteMovie}
                  moviesData={markAsSaved(moviesData)}
                  onOpenMenu={handleOpenMenuClick}
                  handleSearchSavedMovies={handleSearchSavedMovies}
                  isNoMoviesFound={isNoMoviesFound}
                  resStatus={moviesResStatus}
                  checked={handleSearchMoviesData}
                  handleSaveMovie={handleSaveMovie}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/saved-movies"
            element={
              <PrivateRoute loggedIn={isLoggedIn}>
                <SavedMovies
                  savedMovies={foundSavedMoviesData}
                  onOpenMenu={handleOpenMenuClick}
                  isLoadingData={isLoadingMoviesData}
                  isSavedMoviesEmpty={isSavedMoviesEmpty}
                  isNoMoviesFound={isNoMoviesFound}
                  handleSearchSavedMovies={handleSearchSavedMovies}
                  onDeleteMovie={handleDeleteMovie}
                  handleSaveMovie={handleSaveMovie}
                />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <PrivateRoute loggedIn={isLoggedIn} replace>
                <Profile
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
          <Route path="*" element={<NotFound replace />} />
        </Routes>
      </CurrentUserContext.Provider>
      {menuIsOpen && <Menu isOpen={menuIsOpen} onClose={setCloseMenu} />}
      <InfoTooltip
        isOpen={isErrorsModale}
        onClose={setCloseMenu}
        name="register"
        loggedIn={isLoggedIn}
        infoTooltip={infoTooltip}
      />
    </div>
  );
}

export default App;
