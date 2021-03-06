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

  const PAGE_SIZE = document.documentElement.clientWidth;
  const [index, setIndex] = useState(0);
  const [visibleData, setVisibleData] = useState([]);
  // const [numberOfItems, setNumberOfItems]= useState(0);



  useEffect(() => {
    const numberOfItems = index + 5;
    // const numberOfItems = () => {
    //   if (PAGE_SIZE >= 1280) { setIndex(index + 8)
    //   // } else if (1280 > PAGE_SIZE >= 768)
    //   // setIndex(index + 5)
    //   } else  setIndex(index + 3)
    // };

    const newArray = [];
    for (let i = 0; i < data.length; i++) {
      if (i < numberOfItems) newArray.push(data[i]);
    }
    setVisibleData(newArray);
  }, [data, index]);

  const handleShowButtonClick = () => {
    if (PAGE_SIZE >= 1280) setIndex(index + 3);
    else setIndex(index + 2);
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
