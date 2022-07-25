import React, { useContext, useEffect, useState } from "react";
import getValidUrl from "../../utils/getValidUrl";
import "./MoviesCard.css";

function MoviesCard({ data, locationPathname, onSaveMovie, onDeleteMovie }) {
  const isSaved = data.saved;
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
    trailerLink: data.trailerLink || "https://www.aa/#",
    thumbnail: data.thumbnail || "https://www.aa/#",
    nameRU: data.nameRU || "Нет данных",
    nameEN: data.nameEN || "Нет данных",
    movieId: data.id,
  });

  const handleClickButton = () => {
    if (locationPathname === "/movies") {
      if (!isSaved) {
        onSaveMovie(movieData);
      } else {
        onDeleteMovie(data._id);
      }
    } else if (locationPathname === "/saved-movies") {
      onDeleteMovie(data._id);
    }
  };

  const getTimeFromMins = (mins) => {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return hours + "ч. " + minutes + "м.";
  };

  useEffect(() => {
    if (locationPathname === "/saved-movies") {
      setButtonLabel(DELETE_BUTTON_LABEL);
    } else if (locationPathname === "/movies") {
      setButtonLabel(!isSaved ? BUTTON_LABEL : ADD_BUTTON_LABEL);
    }
  }, [isSaved, locationPathname]);

  return (
    <article className="moviesCard__article">
      <div className="moviesCard__article_header">
        <p className="moviesCard__title">{data.nameRU || data.nameEN}</p>
        <p className="moviesCard__subtitle">{getTimeFromMins(data.duration)}</p>
        <button
          type="button"
          className={buttonLabel}
          onClick={handleClickButton}
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
        />
      </a>
    </article>
  );
}

export default MoviesCard;
