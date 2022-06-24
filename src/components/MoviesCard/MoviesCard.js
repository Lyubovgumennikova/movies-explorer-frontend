import React, { useContext, useState }  from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./MoviesCard.css"

function MoviesCard({
  data,
  locationPathname,
  onSaveMovie,
  onDeleteMovie,
}) {
  const currentUser = useContext(CurrentUserContext);
  // const isOwn = data.owner._id === currentUser._id;
  // // Создаём переменную, которую после зададим в `className` для кнопки удаления
  // const cardDeleteButtonClassName = `element__remove-button ${
  //   isOwn ? "element__remove-button_active" : "element__remove-button_hidden"
  // }`;
  // // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  // const isLiked = data.likes.some((i) => i._id === currentUser._id);

  // // Создаём переменную, которую после зададим в `className` для кнопки лайка
  // const cardLikeButtonClassName = `${
  //   isLiked ? `element__vector element__vector_active` : `element__vector `
  // }`;


  // const movieData = {
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
  // };
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


  const handleClickButton = () => {
    if (locationPathname === "/movies") {
      if (!data.saved) {
        onSaveMovie(movieData);
      } else {
        onDeleteMovie(data._id);
      }
    } else if (locationPathname === "/saved-movies") {
      onDeleteMovie(data._id);
    }
  };

  const MOVIES_CARD_STYLE_SETTINGS = {
    article: "movies-card-article",
    header: "movies-card-article__header",
    textContainer: "movies-card-article__text-container",
    title: "movies-card-article__title",
    subtitle: "movies-card-article__subtitle",
    imageSection: "movies-card-article__image-section",
    image: "movies-card-article__image",
    favoriteButton: "movies-card-article__favorite-button",
    removeFavoritesButtonIcon:
      "movies-card-article__favorite-button-icon-remove",
    addFavoritesButtonIcon: "movies-card-article__favorite-button-icon-add",
  };

  return (
    <article className="movies-card-article">
      <div className="movies-card-article__header">
        <p className="movies-card-article__title">
          {movieData.nameRU || movieData.nameEN}
          {/* {data.nameRU} */}
        </p>
        <p className="movies-card-article__subtitle">{movieData.duration}</p>
        <button
          aria-label="remove"
          type="button"
          className="movies-card-article__favorite-button" //{cardLikeButtonClassName}
          onClick={handleClickButton}
        ></button>
      </div>
      <a
        href={movieData.trailerLink}
        target="_blank"
        aria-label={`Открыть трейлер фильма "${movieData.nameRU || movieData.nameEN}" на youtube.com`}
        rel="noreferrer"
      >
        <img
          className= "movies-card-article__image"
          alt={movieData.nameRU || movieData.nameEN}
          src={movieData.image}
        />
      </a>
    </article>
  );
}

export default MoviesCard;
