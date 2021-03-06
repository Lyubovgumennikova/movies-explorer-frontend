import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./MoviesCard.css";

function MoviesCard({ data, locationPathname, onSaveMovie, onDeleteMovie }) {
  const currentUser = useContext(CurrentUserContext);
  const BASE_URL = "https://api.nomoreparties.co";
  // const isOwn = data.owner._id === currentUser._id;
  // // Создаём переменную, которую после зададим в `className` для кнопки удаления
  // const cardDeleteButtonClassName = `element__remove-button ${
  //   isOwn ? "element__remove-button_active" : "element__remove-button_hidden"
  // }`;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  // const isSaved = data.saved.some((i) => i._id === currentUser._id);
  const [isSaved, setIsSaved] = useState(false);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardButtonClassName = `${
    isSaved ? `moviesCard__button_active` : `moviesCard__button `
  }`;

  const [buttonLabel, setButtonLabel] = useState("moviesCard__button ");

  const DELETE_BUTTON_LABEL = "moviesCard__button_delete";
  const ADD_BUTTON_LABEL = "moviesCard__button_active";

  const [movieData, setMovieData] = useState({
    country: data.country || "Нет данных",
    director: data.director || "Нет данных",
    duration: data.duration || 0,
    year: data.year || "Нет данных",
    description: data.description || "Нет данных",
    image: data.image,
    trailerLink: data.trailerLink,
    thumbnail: data.thumbnail,
    nameRU: data.nameRU || "Нет данных",
    nameEN: data.nameEN || "Нет данных",
    movieId: data.id,
  });

  // setCards([{like: !cardLiked.like}])
  const handleClickButton = () => {
    if (locationPathname === "/movies") {
      if (!isSaved) {
        // if (!data.saved) {
        setIsSaved(true);
        onSaveMovie(movieData);
      } else {
        setIsSaved(false);
        // onDeleteMovie(data._id);
      }
    } else if (locationPathname === "/saved-movies") {
      onDeleteMovie(data._id);
    }
  };

  useEffect(() => {
    if (locationPathname === "/saved-movies") {
      setButtonLabel(DELETE_BUTTON_LABEL);
    } else if (locationPathname === "/movies") {
      setButtonLabel(isSaved ? buttonLabel : ADD_BUTTON_LABEL);
    }
  }, [isSaved, locationPathname]);

  return (
    <article className="moviesCard__article">
      <div className="moviesCard__article_header">
        <p className="moviesCard__title">
          {movieData.nameRU || movieData.nameEN}
        </p>
        <p className="moviesCard__subtitle">{movieData.duration}</p>
        <button
          // aria-label="remove"
          type="button"
          className={cardButtonClassName}
          onClick={handleClickButton}
          isSaved={data.saved}
          // isSaved={isSaved}
        ></button>
      </div>
      <a
        href={movieData.trailerLink}
        target="_blank"
        aria-label={`Открыть трейлер фильма "${movieData.nameRU ||
          movieData.nameEN}" на youtube.com`}
        rel="noreferrer"
      >
        <img
          className="moviesCard__image"
          alt={movieData.nameRU || movieData.nameEN}
          // src={movieData.image.url}
          src={`${BASE_URL}${movieData.image.url}`}
        />
      </a>
    </article>
  );
}

export default MoviesCard;
