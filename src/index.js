import {
  fetchMovieGenres,
  fetchTrendingMovies,
  fetchSearchedMovies,
} from './api.js';
import {
  WATCHED_KEY,
  QUEUE_KEY,
  saveMovieList,
  loadMovieList,
} from './storage.js';

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
  movieArray = [],
  watchedList = [],
  queueList = [];

async function fetchMovies() {
  const result = await fetchSearchedMovies('Otto', 1);
  console.dir('****fetchMovies  ', result);
}
function processMoviesData(data) {
  //get the movie data and put them into movieData, and push them into movieArray
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
      //add "watched" and "queue" properties
      if (watchedList.findIndex(movie => movie.id === movieData.id) > -1) {
        movieData.watched = true;
      } else movieData.watched = false;
      if (queueList.findIndex(movie => movie.id === movieData.id) > -1) {
        movieData.queued = true;
      } else movieData.queued = false;
      movieArray.push(movieData);
    }
  );
}
async function initializePage() {
  //put the spinner until the initialize is done
  //******TO DO ******/

  //read the movies in library (if there are some)
  watchedList = loadMovieList(WATCHED_KEY);
  queueList = loadMovieList(QUEUE_KEY);

  //fetch movie genres and put the result in listOfGenres
  const listOfGen = await fetchMovieGenres();
  listOfGenres = listOfGen.genres;

  //fetch movies for landing page
  const result = await fetchTrendingMovies();
  processMoviesData(result);

  renderMoviesList(movieArray);

  // **************
  console.log('1 movieArray= ', movieArray);
}
function renderMoviesList(list) {
  const markup = list
    .map(({ poster_path, title, genres, release_year, vote_average }) => {
      // adaug elemente in markup
      return `<div>
    <img src="${poster_path}" alt="movie poster" loading="lazy" />
            <p>   ${title} </p>
            <p> ${genres} ${release_year} ${vote_average} </p>
        </div>`;
    })
    .join('');
  const bodyElem = document.querySelector('body');
  bodyElem.insertAdjacentHTML('beforeend', markup);
}
initializePage();
