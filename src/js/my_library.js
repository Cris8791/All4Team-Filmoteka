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

var watchedList = [],
  queueList = [],
  // allMovies = [],
  movArray = [],
  // moviesWatched = [],
  // moviesQueued = [],
  watchedActive = true;
var m;

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
    const itemData = itemAccess.data();
    console.log(itemData);
    if (itemData === undefined) {
      downloadWatchedQueuedMoviesFromDB();
      initializeLibrary();
      return;
    }
    const itemDataLength = Object.keys(itemData).length;
    console.log(itemDataLength);
    if (
      itemDataLength === 0 ||
      itemData.queuedMovies === undefined ||
      itemData.watchedMovies === undefined
    ) {
      initializeLibrary();
      return;
    }
    // const pickedMoviesTextified = itemData.movies;
    // const pickedMovies = JSON.parse(pickedMoviesTextified);
    // console.log(pickedMovies);
    // debugger;
    // const pickListLength = Object.keys(pickList).length;
    const queuedMoviesLength = itemData.queuedMovies.length;
    const watchedMoviesLength = itemData.watchedMovies.length;
    const watchedMovies = itemData.watchedMovies;
    const queuedMovies = itemData.queuedMovies;
    console.log(queuedMoviesLength);
    // if (pickListLength === 0) {
    //   watchedList = [];
    //   queueList = [];
    // }
    // debugger;
    if (queuedMoviesLength !== 0) {
      if (queuedMovies !== '[]') {
        const queuedListText = itemData.queuedMovies[0];
        queueList = JSON.parse(queuedListText);
      }
    }
    if (watchedMoviesLength !== 0) {
      if (watchedMovies !== '[]') {
        const watchedListText = itemData.watchedMovies[0];
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
    // allMovies = pickedMovies;
    // sortMovies(pickedMovies);

    initializeLibrary();
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

function initializeLibrary() {
  // debugger;
  // watchedList = loadMovieList(WATCHED_KEY);
  // queueList = loadMovieList(QUEUE_KEY);
  setActiveStyles(watchedBtn);
  const clearBtn = document.querySelector('.clear-btn');
  clearBtn.innerText = 'CLEAR WATCHED LIST';
  if (watchedList.length > 0) {
    renderMoviesList(watchedList);
  } else {
    const spanElem = document.querySelector('.error-message');
    spanElem.innerText = 'Oops! Your "watched" library is empty!';
  }
  clearBtn.addEventListener('click', clearBtnClick);
}

function clearBtnClick() {
  if (watchedActive) {
    console.log('clear watched list');
    watchedList = [];
    // saveMovieList(WATCHED_KEY, watchedList);
    uploadWatchedQueuedMoviesToDB('watched', watchedList);
  } else {
    console.log('clear queue list');
    queueList = [];
    // saveMovieList(QUEUE_KEY, queueList);
    uploadWatchedQueuedMoviesToDB('queued', queueList);
  }
  const moviesDivElem = document.querySelector('.movies-div');
  moviesDivElem.innerHTML = '';
}
function setActiveStyles(element) {
  element.classList.add('active');
}

function removeActiveStyles(element) {
  element.classList.remove('active');
}

function watchedBtnClick() {
  setActiveStyles(watchedBtn);
  removeActiveStyles(queueBtn);
  watchedActive = true;
  const clearBtn = document.querySelector('.clear-btn');
  clearBtn.innerText = 'CLEAR WATCHED LIST';
  const spanElem = document.querySelector('.error-message');
  if (watchedList.length === 0) {
    spanElem.innerText = 'Oops! Your "watched" library is empty!';
    const moviesDivElem = document.querySelector('.movies-div');
    moviesDivElem.innerHTML = '';
    return;
  } else {
    spanElem.innerText = '';
  }
  renderMoviesList(watchedList);
}
function queueBtnClick() {
  setActiveStyles(queueBtn);
  removeActiveStyles(watchedBtn);
  watchedActive = false;
  const clearBtn = document.querySelector('.clear-btn');
  clearBtn.innerText = 'CLEAR QUEUE LIST';
  const spanElem = document.querySelector('.error-message');
  if (queueList.length === 0) {
    spanElem.innerText = 'Oops! Your "queue" library is empty!';
    const moviesDivElem = document.querySelector('.movies-div');
    moviesDivElem.innerHTML = '';
    return;
  } else {
    spanElem.innerText = '';
  }

  renderMoviesList(queueList);
}
document.addEventListener('DOMContentLoaded', setStoredValues);
const watchedBtn = document.querySelector('.watched-btn');
const queueBtn = document.querySelector('.queue-btn');

watchedBtn.addEventListener('click', watchedBtnClick);
queueBtn.addEventListener('click', queueBtnClick);

// modal section
const closeModalButton2 = document.getElementById('closeModalBtn2');
const backdrop2 = document.querySelector('.bckdrp');
closeModalButton2.addEventListener('click', function () {
  backdrop2.style.display = 'none';
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    backdrop2.style.display = 'none';
  }
});
backdrop2.addEventListener('click', function (event) {
  if (event.target === backdrop2) {
    backdrop2.style.display = 'none';
  }
});

const watchedBtn2 = document.querySelector('.wbtn2');
const queueBtn2 = document.querySelector('.qbtn2');
watchedBtn2.addEventListener('click', watchedBtnClick2);
queueBtn2.addEventListener('click', queueBtnClick2);

//sotingMovies
// function sortMovies(movies) {
//   movies.forEach(movie => {
//     if (movie.watched === true) {
//       moviesWatched.push(movie);
//     }
//     if (movie.queued === true) {
//       moviesQueued.push(movie);
//     }
//   });
//   watchedList = moviesWatched;
//   queueList = moviesQueued;
// }
//---------------------------------------------------

function watchedBtnClick2() {
  // debugger;
  if (m.watched) {
    m.watched = false;
    watchedBtn2.innerHTML = 'Add to watched';
    let extractPos = watchedList.findIndex(movie => movie.id === m.id);
    watchedList.splice(extractPos, 1);
    // const queuedMoviesLength = queueList.length;
    // if (queuedMoviesLength === 0) {
    // const moviePlaced = allMovies.findIndex(movie => movie.id === m.id);
    // allMovies[moviePlaced].watched = false;
    // } else {
    //   const moviePlaced = queueList.findIndex(movie => movie.id === m.id);
    //   queueList[moviePlaced].watched = false;
    // }
    //update both lists if the film is in both lists
    queueList.forEach(movieQueued => {
      if (movieQueued.queued === true && movieQueued.watched === true) {
        movieQueued.watched = false;
      }
    });
    //-------------------------------------------------------------------
  } else {
    watchedBtn2.innerHTML = 'Remove from watched';
    m.watched = true;
    // let isOnList = false;
    // console.log('The list of movies watched is: ', watchedList);
    // console.log('There are ', watchedList.length, ' movies wached');
    // if (watchedList.length !== 0) {
    //   watchedList.forEach(movie => {
    //     console.log(movie.id);
    //     console.log(m.id);
    //     if (m.id === movie.id) {
    //       movie.watched = true;
    //       isOnList = true;
    //       watchedBtn2.innerHTML = 'Remove from watched';
    //     }
    //   });
    // }
    // if (isOnList === false) {
    watchedList.push(m);
    //   watchedBtn2.innerHTML = 'Remove from watched';
    // }
  }

  // saveMovieList(WATCHED_KEY, watchedList);
  // upload the list of watched movies to the firestore database
  uploadWatchedQueuedMoviesToDB('watched', watchedList);
  uploadWatchedQueuedMoviesToDB('queued', queueList);
  //------------------------------------------------------
  //displays a message if the list is empty
  if (watchedList.length === 0) {
    const spanElem = document.querySelector('.error-message');
    spanElem.innerText = 'Oops! Your "watched" library is empty!';
  }
  //----------------------------------------------------
  // sortMovies(watchedList);
  // sortMovies(queueList);
  if (watchedActive) {
    renderMoviesList(watchedList);
  } else {
    renderMoviesList(queueList);
  }
}
function queueBtnClick2() {
  if (m.queued) {
    m.queued = false;
    queueBtn2.innerHTML = 'Add to queue';
    let extractPos = queueList.findIndex(movie => movie.id === m.id);
    queueList.splice(extractPos, 1);
    // const queuedMoviesLength = queueList.length;
    // if (queuedMoviesLength === 0) {
    // const moviePlaced = allMovies.findIndex(movie => movie.id === m.id);
    // allMovies[moviePlaced].queued = false;
    // } else {
    //   const moviePlaced = queueList.findIndex(movie => movie.id === m.id);
    //   queueList[moviePlaced].queued = false;
    // }
    //update both lists if the film is in both lists
    watchedList.forEach(movieWatched => {
      if (movieWatched.queued === true && movieWatched.watched === true) {
        movieWatched.queued = false;
      }
    });
    //---------------------------------------------------------------------
  } else {
    queueBtn2.innerHTML = 'Remove from queue';
    m.queued = true;
    // let isOnList = false;
    // console.log('The list of movies queued is: ', queueList);
    // console.log('There are ', queueList.length, ' movies in the queue');
    // if (queueList.length !== 0) {
    //   queueList.forEach(movie => {
    //     console.log(movie.id);
    //     console.log(m.id);
    //     if (m.id === movie.id) {
    //       movie.queued = true;
    //       isOnList = true;
    //       queueBtn2.innerHTML = 'Remove from queue';
    //     }
    //   });
    // }
    // if (isOnList === false) {
    queueList.push(m);
    //   queueBtn2.innerHTML = 'Remove from queue';
    // }
  }
  // saveMovieList(QUEUE_KEY, queueList);
  //upload the list of queued movies to the firestore database
  uploadWatchedQueuedMoviesToDB('queued', queueList);
  uploadWatchedQueuedMoviesToDB('watched', watchedList);
  //----------------------------------------------------
  //displays a message if the list is empty
  if (queueList.length === 0) {
    const spanElem = document.querySelector('.error-message');
    spanElem.innerText = 'Oops! Your "queue" library is empty!';
  }
  //----------------------------------------------------
  // sortMovies(watchedList);
  // sortMovies(queuedList);
  if (watchedActive) {
    renderMoviesList(watchedList);
  } else {
    renderMoviesList(queueList);
  }
}
// end of modal section
const btnsDivElem2 = document.querySelector('.movdiv2');
btnsDivElem2.addEventListener('click', showModal2);

function showModal2(event) {
  if (event.target.nodeName !== 'IMG') return;
  // debugger;
  // look for the list in which watched or queued is false and I make it true if the movie is in both lists
  // watchedList.forEach(movieWatched => {
  //   queueList.forEach(movieQueued => {
  //     if (movieWatched.id === movieQueued.id) {
  //       if (movieWatched.queued === true && movieWatched.watched === true) {
  //         if (movieQueued.queued === true || movieQueued.watched === true) {
  //           let moviePlaced = queueList.findIndex(
  //             movie => movie.id === movieWatched.id
  //           );
  //           if (queueList[moviePlaced].watched) {
  //             queueList[moviePlaced].queued = true;
  //           } else {
  //             queueList[moviePlaced].watched = true;
  //           }
  //         }
  //       }
  //       if (movieQueued.queued === true && movieQueued.watched === true) {
  //         if (movieWatched.queued === true || movieWatched.watched === true) {
  //           let moviePlaced = watchedList.findIndex(
  //             movie => movie.id === movieQueued.id
  //           );
  //           if (watchedList[moviePlaced].watched) {
  //             watchedList[moviePlaced].queued = true;
  //           } else {
  //             watchedList[moviePlaced].watched = true;
  //           }
  //         }
  //       }
  //     }
  //   });
  // });
  //----------------------------------------------------------------------
  if (watchedActive) {
    movArray = watchedList;
    // const imgId = event.target.attributes[0].value;
    // var pos = watchedList.findIndex(movie => imgId - movie.id === 0);
    // // fill modal content with movie data
    // const titleElem = document.querySelector('.title-film');
    // const imgElem = document.querySelector('.movie-poster');
    // const voteElem = document.querySelector('.vote');
    // const votesElem = document.querySelector('.votes');
    // const popularityElem = document.querySelector('.popularity');
    // const origTitleElem = document.querySelector('.title');
    // const genresElem = document.querySelector('.genres');
    // const overviewElem = document.querySelector('.description-text');

    // m = movArray[pos];
    // titleElem.innerHTML = m.title;
    // imgElem.src = m.poster_path;
    // voteElem.innerHTML = m.vote_average;
    // votesElem.innerHTML = ' / ' + m.vote_count;
    // popularityElem.innerHTML = m.popularity;
    // origTitleElem.innerHTML = m.original_title;
    // genresElem.innerHTML = m.genres;
    // overviewElem.innerHTML = m.overview;

    // watchedBtn2.innerHTML = 'Add to watched';
  } else {
    movArray = queueList;
    // const imgId = event.target.attributes[0].value;
    // var pos = queueList.findIndex(movie => imgId - movie.id === 0);
    // // fill modal content with movie data
    // const titleElem = document.querySelector('.title-film');
    // const imgElem = document.querySelector('.movie-poster');
    // const voteElem = document.querySelector('.vote');
    // const votesElem = document.querySelector('.votes');
    // const popularityElem = document.querySelector('.popularity');
    // const origTitleElem = document.querySelector('.title');
    // const genresElem = document.querySelector('.genres');
    // const overviewElem = document.querySelector('.description-text');

    // m = movArray[pos];
    // titleElem.innerHTML = m.title;
    // imgElem.src = m.poster_path;
    // voteElem.innerHTML = m.vote_average;
    // votesElem.innerHTML = ' / ' + m.vote_count;
    // popularityElem.innerHTML = m.popularity;
    // origTitleElem.innerHTML = m.original_title;
    // genresElem.innerHTML = m.genres;
    // overviewElem.innerHTML = m.overview;
  }
  const imgId = event.target.attributes[0].value;
  var pos = movArray.findIndex(movie => imgId - movie.id === 0);
  // fill modal content with movie data
  const titleElem = document.querySelector('.title-film');
  const imgElem = document.querySelector('.movie-poster');
  const voteElem = document.querySelector('.vote');
  const votesElem = document.querySelector('.votes');
  const popularityElem = document.querySelector('.popularity');
  const origTitleElem = document.querySelector('.title');
  const genresElem = document.querySelector('.genres');
  const overviewElem = document.querySelector('.description-text');

  m = movArray[pos];
  titleElem.innerHTML = m.title;
  imgElem.src = m.poster_path;
  voteElem.innerHTML = m.vote_average;
  votesElem.innerHTML = ' / ' + m.vote_count;
  popularityElem.innerHTML = m.popularity;
  origTitleElem.innerHTML = m.original_title;
  genresElem.innerHTML = m.genres;
  overviewElem.innerHTML = m.overview;

  // queueBtn2.innerHTML = 'Add to queue';
  if (m.watched) {
    watchedBtn2.innerHTML = 'Remove from watched';
  } else {
    watchedBtn2.innerHTML = 'Add to watched';
  }
  if (m.queued) {
    queueBtn2.innerHTML = 'Remove from queue';
  } else {
    queueBtn2.innerHTML = 'Add to queue';
  }

  // show modal window
  backdrop2.style.display = 'block';
}
