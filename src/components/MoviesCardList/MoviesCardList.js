import React, { useContext, useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";
import "./MoviesCardList.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MoviesCardList({
  locationPathname,
  data,
  onSaveMovie,
  onDeleteMovie,
}) {
  const currentUser = useContext(CurrentUserContext);
  const FORM_STYLES = {
    button: "moviesCardList__button",
  };

  const PAGE_SIZE = document.documentElement.clientWidth;
  const [index, setIndex] = useState(0);
  const [visibleData, setVisibleData] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [isShowButtonActive, setIsShowButtonActive] = useState(false);
  const ZERO_NUMBER = 0;

  const addStep = (PAGE_SIZE) => {
    if (PAGE_SIZE >= 1280) {
      return 3;
    }
    return 2;
  };

  useEffect(() => {
    if (locationPathname === "/movies") {
      if (PAGE_SIZE >= 1280) setNumberOfItems(index + 12);
      else if (PAGE_SIZE <= 635) setNumberOfItems(index + 5);
      else setNumberOfItems(index + 8);
    } else if (locationPathname === "/saved-movies") {
      data.forEach((movie) =>{
        if (movie.owner === currentUser._id) {
                      setNumberOfItems(data.length);

        }
      })

      // else  setNumberOfItems(null);
    }

    const newArray = [];
    for (let i = 0; i < data.length; i++) {
      if (i < numberOfItems) newArray.push(data[i]);
    }
    setVisibleData(newArray);
    if (data.length <= numberOfItems) {
      setIsShowButtonActive(false);
    } else {
      setIsShowButtonActive(true);
    }
  }, [data, numberOfItems]);

  const handleShowButtonClick = () => {
    if (PAGE_SIZE >= 1280) {
      setVisibleData(data.slice(ZERO_NUMBER, visibleData.length + 3));
    } else {
      setVisibleData(data.slice(ZERO_NUMBER, visibleData.length + 2));
    }
    if (visibleData.length >= data.length - index) {
      setIsShowButtonActive(false);
    }
  };

  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__conteiner">
        {visibleData.map((item) => (
          <li key={item.id || item._id}>
            <MoviesCard
              data={item}
              locationPathname={locationPathname}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie}
            />
          </li>
        ))}
      </ul>
      {locationPathname === "/movies" && isShowButtonActive ? (
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
