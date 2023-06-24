export const checkLike = (movie) => {
    const saveMovies = JSON.parse(localStorage.getItem('saveMovie'));

    if (saveMovies !== null) {
      const resultFilter = saveMovies.filter((element) => {
        return element.movieId === movie.id;
      })
      return resultFilter;
    }
    return false
  }