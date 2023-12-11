import {
  fetchMovieGenres,
  fetchTrendingMovies,
  fetchSearchedMovies,
} from './api';

var pageData = {
    crtPage: 0,
    totalPages: 0,
    totalResults: 0,
  },
  listOfGenres,
  movieData = {
    id: 0,
    title: '',
    original_title: '',
    overview: '',
    poster_path: '',
    genres: '',
    popularity: 0,
    release_year: 0,
    vote_average: 0,
    vote_count: 0,
  },
  movieArray = new Array();

async function fetchMovies() {
  const result = await fetchSearchedMovies('Otto', 1);
  console.dir(result);
}
function processMoviesData(data) {
  movieArray = [];
  console.log('data   ', data);
  data.results.map(
    ({
      id,
      title,
      original_title,
      overview,
      poster_path,
      genre_ids,
      popularity,
      release_date,
      vote_average,
      vote_count,
    }) => {
      movieData = {
        id,
        title,
        original_title,
        overview,
        popularity,
        vote_average,
        vote_count,
      };
      movieData.poster_path =
        'https://www.themoviedb.org/t/p/w500' + poster_path;
      movieData.release_year = parseInt(release_date);
      // transform array "genre_ids" in string "genres", property of movieData
      let genre = '';
      for (i = 0; i < genre_ids.length; i++) {
        if (i > 0) {
          genre += ', ';
        }
        let j = 0;
        while (listOfGenres[j]['id'] !== genre_ids[i]) j++;
        genre += listOfGenres[j].name;
      }
      movieData.genres = genre;
      movieArray.push(movieData);
    }
  );
}
async function initializePage() {
  //put the spinner until the initialize is done
  //******TO DO ******/

  //fetch movie genres and put the result in listOfGenres
  const listOfGen = await fetchMovieGenres();
  listOfGenres = listOfGen.genres;

  //fetch movies for landing page
  const result = await fetchTrendingMovies();
  processMoviesData(result);
  console.log(movieArray);
}

initializePage();
