import axios from 'axios';
const TMDB_URL = `https://api.themoviedb.org/3/`,
  API_KEY = `cfa02d8137a4395c6860edb4676198c3`,
  PART1 = 'include_adult=false',
  PART2 = 'language=en-US';

async function fetchMovieGenres() {
  try {
    const response = await axios.get(
      `${TMDB_URL}/genre/movie/list?api_key=${API_KEY}&${PART2}`
    );
    return response.data;
  } catch (error) {
    console.error(`Oops! Something went wrong! Error:` + error);
  }
}

async function fetchTrendingMovies() {
  try {
    const response = await axios.get(
      `${TMDB_URL}/trending/movie/day?api_key=${API_KEY}&${PART1}&${PART2}`
    );
    return response.data;
  } catch (error) {
    console.error(`Oops! Something went wrong! Error:` + error);
  }
}

async function fetchSearchedMovies(searchQuery, pageNo) {
  try {
    const response = await axios.get(
      `${TMDB_URL}/search/movie?query=${searchQuery}&api_key=${API_KEY}&${PART1}&${PART2}&page=${pageNo}`
    );
    return response.data;
  } catch (error) {
    console.error(`Oops! Something went wrong! Error:` + error);
  }
}

export { fetchMovieGenres, fetchTrendingMovies, fetchSearchedMovies };
