import React, { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";
import "./MoviesCardList.css";

function MoviesCardList({
  locationPathname,
  data,
  onSaveMovie,
  onDeleteMovie,
}) {
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [isShowButtonActive, setIsShowButtonActive] = useState(false);
  // const [numberMoviesToRender, setNumberMoviesToRender] = useState(0);
  const [numberMoviesToAdd, setNumberMoviesToAdd] = useState(0);

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

  const handleShowButtonClick = () => {
    console.log("rkfnr");
    setMoviesToRender(data.slice(moviesToRender.length + numberMoviesToAdd));
    if (moviesToRender.length >= data.length - numberMoviesToAdd) {
      setIsShowButtonActive(false);
    }
  };

  // React.useEffect(() => {
  //   countNumberMoviesToRender();
  // }, [size.width])

  // React.useEffect(() => {
  //   if (locationPathname === "/movies") {
  //     setMoviesToRender(data.slice(ZERO_NUMBER, numberMoviesToRender));
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
    <section className="movies-card-list">
      {moviesToRender.map((card) => (
        <MoviesCard
          key={card._id} //item.id || item._id
          card={card}
          locationPathname={locationPathname}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
        />
      ))}
      {/* {moviesToRender.map((card) => (
        <MoviesCard
          key={card._id} //item.id || item._id
          card={card}
          locationPathname={locationPathname}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
        />
      ))} */}
      {/* {locationPathname === "/movies" && isShowButtonActive ? ( */}
      <Button
        onClick={handleShowButtonClick}
        styleSettings={FORM_STYLES}
        buttonText="Ещё "
      />
      {/* ) : null} */}
    </section>
  );
}

export default MoviesCardList;
