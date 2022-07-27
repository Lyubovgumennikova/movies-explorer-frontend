// FilterCheckbox
// const FilterCheckbox = (searchQueries, moviesData) => {
//   const { search = '', shortfilm = false } = searchQueries;

//   const filterKeyword = (movie) => {
//     return JSON.stringify(movie).toLowerCase().includes(search.toLowerCase())
//   }

//   const filterShortfilm = (movie) => {
//     return movie.duration <= 40;
//   }

//   if (shortfilm) {
//     return moviesData.filter(filterShortfilm).filter(filterKeyword);
//   } else {
//     return moviesData.filter(filterKeyword);
//   }
// }




// export default FilterCheckbox;

// const FilterCheckbox = (searchQueries, moviesData) => {
//   const { search = '', checked } = searchQueries;

//   const filterKeyword = (movie) => {
//     return JSON.stringify(movie).toLowerCase().includes(search.toLowerCase())
//   }

  // const filterShortfilm = (movie) => {
  //   return movie.duration <= 40;
  // }

    // return moviesData.filter(filterShortfilm).filter(filterKeyword);

    // return moviesData.filter(filterKeyword);

  // if (checked) {
  //   return moviesData.filter(filterShortfilm).filter(filterKeyword);
  // } else {
  //   return moviesData.filter(filterKeyword);
  // }
// }

// export default FilterCheckbox;

import React from 'react';

function FilterCheckbox(props) {

  const [onFocus, setOnFocus] = React.useState(false);

  const handleFocus = () => {
    setOnFocus(true);
  };

  const handleBlur = () => {
    setOnFocus(false);
  };

  return (
    <label
      className={onFocus ? `${props.labelClassName} ${props.onFocusClassName}` : props.labelClassName}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <input
        className={props.inputClassName}
        type={props.settings.type}
        id={props.settings.id}
        name={props.settings.name}
        required={props.settings.required}
        onChange={props.onChange}
        value={props.value}
        checked={props.value || ''}
      />
      <span
        className={props.sliderClassName}
      />
      {props.settings.label}
    </label>
  )
}

export default FilterCheckbox;
