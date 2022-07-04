import React, { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";

function MoviesCardList({
  locationPathname,
  data,
  onSaveMovie,
  onDeleteMovie,
  // moviesData,
  isLoadingData,
}) {
  const FORM_STYLES = {
    button: "moviesCardList__button",
  };

  const PAGE_SIZE = 1;
  const [index, setIndex] = useState(0);
  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    const numberOfItems = PAGE_SIZE * (index + 5);
    const newArray = [];
    for (let i = 0; i < data.length; i++) {
      if (i < numberOfItems) newArray.push(data[i]);
    }
    setVisibleData(newArray);
  }, [data, index]);

    const handleShowButtonClick = () => {
    setIndex(index + 3);
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
              onDeletedMovie={onDeleteMovie}
            />
          </li>
        ))}
      </ul>
      {locationPathname === "/movies" ? (
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
