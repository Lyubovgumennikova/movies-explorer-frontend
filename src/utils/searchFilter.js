const searchFilter = (searchQueries, moviesData) => {
  const { search = '', shortfilm = false } = searchQueries;

  const filterSearchQueries = (movie) => {
    return JSON.stringify(movie).toLowerCase().includes(search.toLowerCase())
  }

  const filterShortfilm = (movie) => {
    return movie.duration <= 40;
  }

  if (shortfilm) {
    return moviesData.filter(filterShortfilm).filter(filterSearchQueries);
  } else {
    return moviesData.filter(filterSearchQueries);
  }
}

export default searchFilter;
