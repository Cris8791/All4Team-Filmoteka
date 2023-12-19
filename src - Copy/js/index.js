import {
  fetchMovieGenres,
  fetchTrendingMovies,
  fetchSearchedMovies,
} from './api.js';
import { renderMoviesList, renderPaginationButtons } from './render.js';
import {
  WATCHED_KEY,
  QUEUE_KEY,
  saveMovieList,
  loadMovieList,
} from './storage.js';
import {
  uploadWatchedQueuedMoviesToDB,
  downloadWatchedQueuedMoviesFromDB,
  itemAccess,
} from './db.js';

var crtPage = 0,
  totalPages = 0,
  totalResults = 0,
  trending = true,
  searchQuery = '',
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
  pos = 0,
  movieArray = [],
  watchedList = [],
  // allMovies = [],
  queueList = [];

// spinner section
const spinnerElem = document.querySelector('.spinner');
// hideSpinner();
function hideSpinner() {
  spinnerElem.style.display = 'none';
}
function showSpinner() {
  spinnerElem.style.display = 'block';
}
// end of spinner section

// modal section
const closeModalButton = document.getElementById('closeModalBtn');
const backdrop = document.querySelector('.backdrop.visually-shown');
closeModalButton.addEventListener('click', function () {
  backdrop.style.display = 'none';
});
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    backdrop.style.display = 'none';
  }
});
backdrop.addEventListener('click', function (event) {
  if (event.target === backdrop) {
    backdrop.style.display = 'none';
  }
});

const watchedBtn = document.querySelector('.watched-btn');
const queueBtn = document.querySelector('.queue-btn');
watchedBtn.addEventListener('click', watchedBtnClick);
queueBtn.addEventListener('click', queueBtnClick);

function watchedBtnClick() {
  // debugger;
  if (movieArray[pos].watched) {
    movieArray[pos].watched = false;
    watchedBtn.innerHTML = 'Add to watched';
    let extractPos = watchedList.findIndex(
      movie => movie.id === movieArray[pos].id
    );
    watchedList.splice(extractPos, 1);
    console.log(watchedList);
    // watchedList.push(movieArray[pos]);
    // watchList;
    // console.log(watchedList);
    // const watchedMoviesLength = watchedList.length;
    // if (watchedMoviesLength === 0) {
    // debugger;
    // const moviePlaced = allMovies.findIndex(
    //   movie => movie.id === movieArray[pos].id
    // );
    // console.log(moviePlaced);
    // allMovies[moviePlaced].watched = false;
    // } else {
    //   const moviePlaced = watchedList.findIndex(
    //     movie => movie.id === movieArray[pos].id
    //   );
    //   console.log(moviePlaced);
    //   watchedList[moviePlaced].watched = false;
    // }
  } else {
    // debugger;
    movieArray[pos].watched = true;
    // let isOnList = false;
    // console.log('The list of movies watched is: ', watchedList);
    // console.log('There are ', watchedList.length, ' movies wached');
    // if (watchedList.length !== 0) {
    //   watchedList.forEach(movie => {
    //     console.log(movie.id);
    //     console.log(movieArray[pos].id);
    //     if (movieArray[pos].id === movie.id) {
    //       movie.watched = true;
    //       isOnList = true;
    //       watchedBtn.innerHTML = 'Remove from watched';
    //     }
    //   });
    // }
    // if (isOnList === false) {
    //   watchedList.push(movieArray[pos]);
    //   watchedBtn.innerHTML = 'Remove from watched';
    // }
    watchedList.push(movieArray[pos]);
    watchedBtn.innerHTML = 'Remove from watched';
    // let moviePlacement = watchedList.findIndex(
    //   movie => movie.id === movieArray[pos].id
    // );
    // watchedList[moviePlacement].watched = true;
  }
  // saveMovieList(WATCHED_KEY, watchedList);
  // upload the list of watched movies to the firestore database
  uploadWatchedQueuedMoviesToDB('watched', watchedList);
  //------------------------------------------------------
}
function queueBtnClick() {
  if (movieArray[pos].queued) {
    movieArray[pos].queued = false;
    queueBtn.innerHTML = 'Add to queue';
    let extractPos = queueList.findIndex(
      movie => movie.id === movieArray[pos].id
    );
    queueList.splice(extractPos, 1);
    // queueList.push(movieArray[pos]);
    // const watchedMoviesLength = watchedList.length;
    // debugger;
    // if (watchedMoviesLength === 0) {
    // const moviePlaced = allMovies.findIndex(
    //   movie => movie.id === movieArray[pos].id
    // );
    // console.log(moviePlaced);
    // allMovies[moviePlaced].queued = false;
    // } else {
    //   const moviePlaced = watchedList.findIndex(
    //     movie => movie.id === movieArray[pos].id
    //   );
    //   console.log(moviePlaced);
    //   watchedList[moviePlaced].queued = false;
    // }
    // queueList[moviePlaced].queued = false;
  } else {
    movieArray[pos].queued = true;
    //   let isOnList = false;
    //   console.log('The list of movies queued is: ', queueList);
    //   console.log('There are ', queueList.length, ' movies in the queue');
    //   if (queueList.length !== 0) {
    //     queueList.forEach(movie => {
    //       console.log(movie.id);
    //       console.log(movieArray[pos].id);
    //       if (movieArray[pos].id === movie.id) {
    //         movie.queued = true;
    //         isOnList = true;
    //         queueBtn.innerHTML = 'Remove from queue';
    //       }
    //     });
    //   }
    //   if (isOnList === false) {
    //     queueList.push(movieArray[pos]);
    //     queueBtn.innerHTML = 'Remove from queue';
    //   }
    queueList.push(movieArray[pos]);
    queueBtn.innerHTML = 'Remove from queue';
  }
  // saveMovieList(QUEUE_KEY, queueList);
  //upload the list of queued movies to the firestore database
  console.log(queueList);
  uploadWatchedQueuedMoviesToDB('queue', queueList);
  //----------------------------------------------------
}
// end of modal section

// search section
const searchForm = document.querySelector('.search-form'),
  inputElem = document.querySelector('form>input');

async function renderTrendingMovies() {
  const result = await fetchTrendingMovies(crtPage);
  const spanElem = document.querySelector('.error-message');
  if (spanElem.innerHTML !== '') return;
  processMoviesData(result);
  trending = true;
  renderMoviesList(movieArray);
  renderPaginationButtons(crtPage, totalPages);
  hideSpinner();
  const pagContainer = document.querySelector('.buttons-div');
  pagContainer.addEventListener('click', pageSelector);
  window.scrollTo(0, 0);
}
async function renderSearchedMovies(text) {
  const result = await fetchSearchedMovies(text, crtPage);
  const spanElem = document.querySelector('.error-message');
  if (result.total_results === 0) {
    spanElem.innerText =
      'Search result not successful. Enter the correct movie name and search again';
  } else {
    spanElem.innerText = '';
  }
  processMoviesData(result);
  trending = false;
  renderMoviesList(movieArray);
  renderPaginationButtons(crtPage, totalPages);
  if (totalPages > 1) {
    const pagContainer = document.querySelector('.buttons-div');
    pagContainer.addEventListener('click', pageSelector);
  }
  window.scrollTo(0, 0);
}
function onSearch(element) {
  element.preventDefault();
  searchQuery = inputElem.value.trim();
  if (searchQuery === '') {
    console.log('NOTIFY: Please, fill the main field');
    return;
  }
  inputElem.value = '';
  movieArray = [];
  crtPage = 1;
  renderSearchedMovies(searchQuery);
}

searchForm.addEventListener('submit', onSearch);
// end of search section

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
      if (poster_path === null) {
        movieData.poster_path =
          'https://dummyimage.com/395x574/000/fff.jpg&amp;text=no+poster';
      } else {
        movieData.poster_path =
          'https://www.themoviedb.org/t/p/w500' + poster_path;
      }

      movieData.release_year = parseInt(release_date);
      // transform array "genre_ids" in string "genres", property of movieData
      let genre = '';
      for (let i = 0; i < genre_ids.length; i++) {
        if (i > 0) {
          genre += ', ';
        }
        let j = 0;
        while (listOfGenres[j]['id'] !== genre_ids[i]) j++;
        genre += listOfGenres[j].name;
      }
      movieData.genres = genre;
      //add "watched" and "queue" properties
      // debugger;
      if (watchedList.findIndex(movie => movie.id === movieData.id) > -1) {
        movieData.watched = true;
      } else movieData.watched = false;
      if (queueList.findIndex(movie => movie.id === movieData.id) > -1) {
        movieData.queued = true;
      } else movieData.queued = false;
      movieArray.push(movieData);
    }
  );
  totalPages = data.total_pages;
  if (totalPages > 300) {
    totalPages = 250;
  }
}

// set the values ​​stored in the database in the lists of watched movies and put them in the queue
async function setStoredValues() {
  downloadWatchedQueuedMoviesFromDB();
  await new Promise(resolve => {
    setTimeout(() => {
      resolve(takeItem());
    }, 1000);
  });
}

function takeItem() {
  try {
    // debugger;
    const itemData = itemAccess.data();
    const itemDataLength = Object.keys(itemData).length;
    console.log(itemDataLength);
    if (
      itemDataLength === 0 ||
      itemData.queuedMovies === undefined ||
      itemData.watchedMovies === undefined
    ) {
      initializePage();
      return;
    }
    // const pickedMoviesTextified = itemData;
    // const pickedMovies = JSON.parse(pickedMoviesTextified);
    // console.log(pickedMovies);
    // debugger;
    // const pickedMoviesLength = Object.keys(pickedMovies).length;
    const queuedMoviesLength = itemData.queuedMovies.length;
    const watchedMoviesLength = itemData.watchedMovies.length;
    const watchedMovies = itemData.watchedMovies;
    const queuedMovies = itemData.queuedMovies;
    console.log(watchedMoviesLength);
    console.log(queuedMoviesLength);
    // if (pickedMoviesLength === 0) {
    //   movies = [];
    // }
    // debugger;
    if (queuedMoviesLength !== 0) {
      if (queuedMovies !== '[]') {
        const queuedListText = itemData.queuedMovies;
        queueList = JSON.parse(queuedListText);
      }
    }
    if (watchedMoviesLength !== 0) {
      if (watchedMovies !== '[]') {
        const watchedListText = itemData.watchedMovies;
        watchedList = JSON.parse(watchedListText);
      }
    }
    // let moviesWatched = [];
    // let moviesQueued = [];
    // pickedMovies.forEach(movie => {
    //   if (movie.watched === true) {
    //     moviesWatched.push(movie);
    //   }
    //   if (movie.queued === true) {
    //     moviesQueued.push(movie);
    //   }
    // });

    // watchedList = moviesWatched;
    // queueList = moviesQueued;
    // allMovies = pickedMovies;
    initializePage();
    console.log(
      'You movies saved in watched are:',
      watchedList,
      'and queued are: ',
      queueList
    );
  } catch (error) {
    console.log(`I couldn't load the data from the database, because: `, error);
  }
}
//----------------------------------------------------------------------

async function initializePage() {
  showSpinner();

  //read the movies in library (if there are some)
  // watchedList = loadMovieList(WATCHED_KEY);
  // queueList = loadMovieList(QUEUE_KEY);
  // setStoredValues();
  // debugger;

  //fetch movie genres and put the result in listOfGenres
  const listOfGen = await fetchMovieGenres();
  listOfGenres = listOfGen.genres;

  //fetch movies for landing page
  crtPage = 1;
  trending = true;
  const result = await fetchTrendingMovies(crtPage);
  processMoviesData(result);

  renderMoviesList(movieArray);
  const moviesDivElem = document.querySelector('.movies-div');
  moviesDivElem.addEventListener('click', showModal);
  crtPage = 1;
  renderPaginationButtons(crtPage, totalPages);
  const pagContainer = document.querySelector('.buttons-div');
  pagContainer.addEventListener('click', pageSelector);
  hideSpinner();
}

function showModal(event) {
  // debugger;
  // if()
  if (event.target.nodeName !== 'IMG') return;
  const imgId = event.target.attributes[0].value;
  pos = movieArray.findIndex(movie => imgId - movie.id === 0);
  // fill modal content with movie data
  const titleElem = document.querySelector('.title-film');
  const imgElem = document.querySelector('.movie-poster');
  const voteElem = document.querySelector('.vote');
  const votesElem = document.querySelector('.votes');
  const popularityElem = document.querySelector('.popularity');
  const origTitleElem = document.querySelector('.title');
  const genresElem = document.querySelector('.genres');
  const overviewElem = document.querySelector('.description-text');

  let m = movieArray[pos];
  titleElem.innerHTML = m.title;
  imgElem.src = m.poster_path;
  voteElem.innerHTML = m.vote_average;
  votesElem.innerHTML = ' / ' + m.vote_count;
  popularityElem.innerHTML = m.popularity;
  origTitleElem.innerHTML = m.original_title;
  genresElem.innerHTML = m.genres;
  overviewElem.innerHTML = m.overview;

  if (m.watched) {
    watchedBtn.innerHTML = 'Remove from watched';
  } else {
    watchedBtn.innerHTML = 'Add to watched';
  }
  if (m.queued) {
    queueBtn.innerHTML = 'Remove from queue';
  } else {
    queueBtn.innerHTML = 'Add to queue';
  }

  // show modal window
  backdrop.style.display = 'block';
}
function pageSelector() {
  let pageNo = crtPage;
  let btnTxt = event.target.innerText;
  if (btnTxt === '...') return;
  switch (btnTxt) {
    case '←':
      pageNo--;
      break;
    case '→':
      pageNo++;
      break;
    default:
      pageNo = Number(btnTxt);
  }
  crtPage = pageNo;
  if (trending) {
    movieArray = [];
    renderTrendingMovies();
  } else {
    movieArray = [];
    renderSearchedMovies(searchQuery);
  }
}
setStoredValues();
