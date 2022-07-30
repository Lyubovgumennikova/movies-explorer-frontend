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
