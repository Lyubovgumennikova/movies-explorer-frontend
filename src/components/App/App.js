import React, { useState, useEffect } from "react";
// import Header from '../Header/Header';
// import Navigation from "../Navigation/Navigation";
// import Footer from '../Footer/Footer';
import Movies from "../Movies/Movies";
// import Preloader from '../Preloader/Preloader';
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
// import api from '../../utils/Api';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import ImagePopup from './ImagePopup';
// import EditProfilePopup from './EditProfilePopup';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
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
import { Navigate } from "react-router-dom";
import { createBrowserHistory } from "history";

import { useNavigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const navigate = useNavigate();
  // const navigate = useHistory();
  // const history = useHistory ();
  const history = createBrowserHistory();

  const handleLogin = (data) => {
    // Navigate("/movies");
    // setIsLoggedIn(true);
    // history("/movies");
    <Navigate to="/movies" replace={true} />;
  };


  return (
    <div className="page">
      <Router>
        {/* <Header>
      <Navigation />
      </Header> */}
        <Routes>
          <Route exact path="/" element={<Main />} />
          {/* <Route exact path='/' exact element={<Navigation />} /> */}
          <Route path="/signup" element={<Register />} />
          <Route
            path="/signin"
            element={<Login onLogin={handleLogin} loggedIn={isLoggedIn} />}
          />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
