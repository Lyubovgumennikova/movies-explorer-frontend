import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import getValidUrl from "../../utils/getValidUrl";
import "./MoviesCard.css";


function MoviesCard({ data, locationPathname, onSaveMovie, onDeleteMovie }) {
  const currentUser = useContext(CurrentUserContext);
  const BASE_URL = "https://api.nomoreparties.co";
  // const [isSaved, setIsSaved] = useState(false);
  // const isSaved = data.saved.some((i) => i._id === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const isOwn = data.owner === currentUser._id;
  const cardButtonClassName = `${
    isSaved ? `moviesCard__button_active` : `moviesCard__button `
  }`;

  const [buttonLabel, setButtonLabel] = useState("moviesCard__button ");

  const DELETE_BUTTON_LABEL = "moviesCard__button_delete";
  const ADD_BUTTON_LABEL = "moviesCard__button_active";
  const BUTTON_LABEL = "moviesCard__button";

  const [movieData, setMovieData] = useState({
    country: data.country || "Нет данных",
    director: data.director || "Нет данных",
    duration: data.duration || 0,
    year: data.year || "Нет данных",
    description: data.description || "Нет данных",
    image: getValidUrl(data),
    // image:`${BASE_URL}${data.image.url}`,
    trailerLink: data.trailerLink || "https://www.aa/#",
    thumbnail: data.thumbnail || "https://www.aa/#",
    nameRU: data.nameRU || "Нет данных",
    nameEN: data.nameEN || "Нет данных",
    movieId: data.id,
    // saved: false,
  });

  // setCards([{like: !cardLiked.like}])
  const handleClickButton = () => {
    // const isSaved = data.saved
    if (locationPathname === "/movies") {
      // setIsSaved(!isSaved);
      if (!isSaved) {
        // if (!data.saved ) {
          // movieData.saved = true
        // setIsSaved(true);
        // const saveMovie = data.push("saved");
        // onSaveMovie.push(data.saved);
        // console.log(total)
        onSaveMovie(movieData);
      } else {
        // setIsSaved(false);
        onDeleteMovie(data);
      }
    } else if (locationPathname === "/saved-movies") {
      onDeleteMovie(data._id);
    }
  };
  const isSaved = data.saved
  useEffect(() => {

    if (locationPathname === "/saved-movies") {
      setButtonLabel(DELETE_BUTTON_LABEL);
    } else if (locationPathname === "/movies") {
      // setButtonLabel(cardButtonClassName);
      setButtonLabel(!isSaved ? BUTTON_LABEL : ADD_BUTTON_LABEL)
    }
  }, [isSaved, locationPathname]);

  return (
    <article className="moviesCard__article">
      <div className="moviesCard__article_header">
        <p className="moviesCard__title">
          {data.nameRU || data.nameEN}
        </p>
        <p className="moviesCard__subtitle">{data.duration}</p>
        <button
          // aria-label="remove"
          type="button"
          className={buttonLabel}
          onClick={handleClickButton}
          // isSaved={data.saved}
          // isSaved={isSaved}
        ></button>
      </div>
      <a
        href={data.trailerLink}
        target="_blank"
        aria-label={`Открыть трейлер фильма "${data.nameRU ||
          data.nameEN}" на youtube.com`}
        rel="noreferrer"
      >
        <img
          className="moviesCard__image"
          alt={data.nameRU || data.nameEN}
          src={movieData.image}
          // src={`${BASE_URL}${data.image.url}`}
          // src={getValidUrl(data)}
        />
      </a>
    </article>
  );
}

export default MoviesCard;
