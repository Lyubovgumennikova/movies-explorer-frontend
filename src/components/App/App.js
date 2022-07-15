import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
// import Footer from '../Footer/Footer';
import Movies from "../Movies/Movies";
// import Preloader from '../Preloader/Preloader';
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import moviesApi from "../../utils/MoviesApi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useLocation, matchPath } from "react-router";
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
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import MenuButton from "../MenuButton/MenuButton";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import Footer from "../Footer/Footer";
import * as mainApi from "../../utils/MainApi";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [infoTooltip, setInfoTooltip] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [moviesData, setMoviesData] = useState([]);
  const [isErrorsModale, setIsErrorsModale] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [tokenAuthResStatus, setTokenAuthResStatus] = React.useState(null);
  const [isNoMoviesFound, setIsNoMoviesFound] = React.useState(false);
  // const { pathname } = useLocation();
  let navigate = useNavigate();
  // const isAdminPath = matchPath("/movies/*", pathname);

  const [isLoadingMoviesData, setIsLoadingMoviesData] = useState(false);
  // const navigate = useNavigate();
  // console.log(navigate);

  // const location = useLocation();
  // console.log(location.pathname);
  // let navigate = useNavigate();
  // const navigate = useHistory();

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

        setTokenAuthResStatus(res.status);
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
        // setInfoTooltip(true);
        setIsLoggedIn(true);
        // isErrorsModale(true)
        handleLogin({
          email: data.email,
          password: data.password,
        });
        // navigate("/movies");
      })
      .catch((err) => {
        console.log(`${err}`);
        //setUpdateCurrentUserResStatus(err);
      })
      .finally(() => {
        setIsRegister(false);
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

  function handleSignOut() {
    // evt.preventDefault();
    setIsLoggedIn(false);
    // setMoviesData([]);
    setCurrentUser({});
    // setFoundSavedMoviesData([]);

    localStorage.clear();
    navigate("/");
  }

  const handle = (evt) => {
    evt.preventDefault();
    setIsLoggedIn(false);
    setMoviesData([]);
    // setCurrentUserData({});
    // setFoundSavedMoviesData([]);
    localStorage.clear();
    // history.push('/');
  };

  const handleSaveMovie = (data) => {
    const token = localStorage.getItem("jwt");

      mainApi.saveMovie(data, token)
    localStorage.getItem(setSavedMovies(data));
  };

  const handleSearchMoviesData = (searchQueries = {}) => {
    const moviesData = JSON.parse(localStorage.getItem("movies"));
    console.log("appmovies");
    if (moviesData) {
      const filteredMovies = FilterCheckbox(searchQueries, moviesData);
      console.log(filteredMovies);
      if (filteredMovies.length === 0) {
        setIsNoMoviesFound(true);
      } else {
        setIsNoMoviesFound(false);
      }

      localStorage.setItem(
        "movies",
        JSON.stringify(filteredMovies)
      );

      setMoviesData(filteredMovies);
    }
  };

  const handleDeleteSavedMovie = (id) => {
    const token = localStorage.getItem("jwt");
  };

  const handleOpenMenuClick = () => {
    setMenuIsOpen(true);
  };

  const setCloseMenu = () => {
    setMenuIsOpen(false);
  };

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   onSubmit(value);
  //   setIsSubmitted(true);
  //   // setSearchQuery("");
  // };

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

  // useEffect(() => {
  //   console.log("useEffect");
  //   setIsLoadingMoviesData(true);
  //   moviesApi
  //     .getMoviesData()
  //     .then((res) => {
  //       console.log(res);
  //       // console.log(res.status)
  //       // setMoviesApiResStatus(res.status);
  //       const moviesData = res;
  //       // localStorage.setItem('name', 'Alex');
  //       // localStorage.setItem('movies', JSON.stringify(moviesData));

  //       const moviesData = JSON.parse(localStorage.getItem("movies"));
  //       // console.log(moviesData);
  //       // const renderedPrevMovies = JSON.parse(localStorage.getItem('filtered-previously-movies'));
  //       // console.log(renderedPrevMovies);
  //       setIsSubmitted(false);
  //       const DATA = localStorage.setItem("movies", JSON.stringify(moviesData));
  //       console.log(DATA);
  //       setMoviesData(moviesData);
  //     })

  //     .catch((
  //       err //console.log(err)
  //     ) => setIsErrorsModale(true));
  // }, [isSubmitted]);

  useEffect(() => {
    tokenCheck();
    // const userData = [moviesApi.getUserInfo(), api.getInitialCards() ];
    if (!isLoggedIn) return;
    // tokenCheck();
    console.log(localStorage.getItem);
    // if (currentUser)
    //   Promise.all(userData)
    //     .then(([userData, items]) => {
    //       // setCards(items);
    //       setCurrentUser(userData);

    //       navigate("/users/me");
    //     })
    //     .catch((err) => console.log(err));
  }, []);

  const { pathname } = useLocation();
  // const { location } = props;
  const routePathMain = matchPath("/signup", pathname);
  // const exclusionRoutesPath = matchPath(exclusionRoutesPathsArrayFooter, pathname);
  // const exclusionRoutesPathFooter = matchPath["/signin", "/signup", "/profile"];

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
                // isRegister={isRegister}
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
                  isLoadingData={isLoadingData}
                  onSubmit={handleSearchMoviesData}
                  onSaveMovie={handleSaveMovie}
                  onDeleteSavedMovie={handleDeleteSavedMovie}
                  moviesData={moviesData}
                  // moviesData={markAsSaved(moviesData)}
                  onOpenMenu={handleOpenMenuClick}
                  loggedIn={isLoggedIn}
                  // component={Movies}
                  // isNoMoviesFound={isNoMoviesFound}
                  // isLoadingData={isLoadingMoviesData}
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
                  // onOpenMenu={handleOpenMenuClick}
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
        isOpen={isErrorsModale}
        onClose={setCloseMenu}
        name="register"
        loggedIn={isLoggedIn}
        // location={location}
        // infoTooltip={infoTooltip}
        // text={text}
      />
      {/* </Router> */}
    </div>
  );
}

export default App;
