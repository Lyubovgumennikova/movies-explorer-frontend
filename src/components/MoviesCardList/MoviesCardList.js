import React, { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({
  locationPathname,
  data,
  onSaveMovie,
  onDeleteMovie,
  moviesData,
  isLoadingData,
}) {
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [isShowButtonActive, setIsShowButtonActive] = useState(false);
  // const [numberMoviesToRender, setNumberMoviesToRender] = useState(0);
  // const [numberOfAddMovies, setNumberOfAddMovies] = useState(0);

  const FORM_STYLES = {
    form: "form",
    group: "form__group",
    label: "input__label",
    input: "text-field__input",
    valid: "text-field__input_valid",
    gbutton: "form__submit-button",
    link: "login__input-text_link",
    error: "message__error",
    button: "show-more__button",
  };
const startIndex = 0 ;
const numberOfAddMovies = 6
  const handleShowButtonClick = () => {
    // a.slice(startIndex, startIndex + amountOfItems)
    data.slice(startIndex, moviesToRender.length + numberOfAddMovies);
    // setMoviesToRender(data.slice(startIndex, moviesToRender.length + numberOfAddMovies));
    // if (moviesToRender.length >= data.length - numberOfAddMovies) {
    //   setIsShowButtonActive(false);
    // }
  };

  // React.useEffect(() => {
  //   countNumberMoviesToRender();
  // }, [size.width])

  // React.useEffect(() => {
  //   if (locationPathname === "/movies") {
  //     // setMoviesToRender(data.slice(ZERO_NUMBER, numberMoviesToRender));
  //     setMoviesToRender(data);

  //     if (data.length <= numberMoviesToRender) {
  //       setIsShowButtonActive(false);
  //     } else {
  //       setIsShowButtonActive(true);
  //     }
  //   } else if (locationPathname === "/saved-movies") {
  //     setMoviesToRender(data);
  //     setIsShowButtonActive(false);
  //   }
  // }, [data, numberMoviesToRender]);

  return (
    <section className="moviesCardList">
      <ul className="movies-card-list">

        {/* {moviesToRender.map((item) => ( */}
        {[...Array(12).keys()].map((item) => (
          <li key={item.id || item._id}>
            <MoviesCard
              data={item}
              locationPathname={locationPathname}
              onSaveMovie={onSaveMovie}
              onDeleteSavedMovie={onDeleteMovie}
            />
          </li>
        ))}
      </ul>

      {!locationPathname === "/movies" && isShowButtonActive ? (
        <Button
          onClick={handleShowButtonClick}
          styleSettings={FORM_STYLES}
          buttonText="Ещё "
        />
        ) : null}
    </section>
  );
}

export default MoviesCardList;
