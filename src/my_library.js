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
  getMovies,
} from './firestore/db.js';

var watchedList = [],
  queueList = [],
  movArray = [],
  watchedActive = true;
var m;

function waitingResponse() {
  const requestDataAfterOneSec = new Promise(resolve => {
    setTimeout(() => {
      resolve(takeItem());
    }, 1000);
  });
}

async function initializeLibrary() {
  // watchedList = loadMovieList(WATCHED_KEY);
  // queueList = loadMovieList(QUEUE_KEY);
  // console.log(watchedList);
  // console.log(queueList);

  const accessDB = downloadWatchedQueuedMoviesFromDB();

  const responseReceived = await waitingResponse();
}

function takeItem() {
  const pickList = getMovies.data();
  console.log(pickList);
  // debugger;
  const pickListLength = Object.keys(pickList).length;
  const queuedMoviesLenght = pickList.queuedMovies.length;
  const watchedMoviesLenght = pickList.watchedMovies.length;
  const firstMovieWatched = pickList.watchedMovies[0];
  const firstMovieQueued = pickList.queuedMovies[0];
  console.log(pickList.watchedMovies[0]);
  if (pickListLength === 0) {
    watchedList = [];
    queueList = [];
  }
  // debugger;
  if (queuedMoviesLenght !== 0) {
    if (firstMovieQueued !== '[]') {
      const queuedListText = pickList.queuedMovies[0];
      queueList = JSON.parse(queuedListText);
    }
  }
  if (watchedMoviesLenght !== 0) {
    if (firstMovieWatched !== '[]') {
      const watchedListText = pickList.watchedMovies[0];
      watchedList = JSON.parse(watchedListText);
    }
  }
  console.log(
    'The server returned the following lists of watched movies: ',
    watchedList,
    'and queued movies: ',
    queueList
  );
  //----------------------------------------------------------------------

  renderMoviesList(watchedList);
  //   +WATCHED button become active
}
function watchedBtnClick() {
  watchedActive = true;
  renderMoviesList(watchedList);
}
function queueBtnClick() {
  watchedActive = false;
  renderMoviesList(queueList);
}
document.addEventListener('DOMContentLoaded', initializeLibrary);
const watchedBtn = document.querySelector('.watched-btn');
const queueBtn = document.querySelector('.queue-btn');

watchedBtn.addEventListener('click', watchedBtnClick);
queueBtn.addEventListener('click', queueBtnClick);

//
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

function watchedBtnClick2() {
  if (m.watched) {
    m.watched = false;
    watchedBtn2.innerHTML = 'Add to watched';
    let extractPos = watchedList.findIndex(movie => movie.id === m.id);
    watchedList.splice(extractPos, 1);
  } else {
    watchedBtn2.innerHTML = 'Remove from watched';
    m.watched = true;
    watchedList.push(m);
  }
  saveMovieList(WATCHED_KEY, watchedList);

  // upload the list of watched movies to the firestore database
  uploadWatchedQueuedMoviesToDB('watched', watchedList);
  //------------------------------------------------------

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
  } else {
    queueBtn2.innerHTML = 'Remove from queue';
    m.queued = true;
    queueList.push(m);
  }
  saveMovieList(QUEUE_KEY, queueList);

  //upload the list of queued movies to the firestore database
  uploadWatchedQueuedMoviesToDB('queued', queueList);
  //----------------------------------------------------

  if (watchedActive) {
    renderMoviesList(watchedList);
  } else {
    renderMoviesList(queueList);
  }
}
// end of modal section
btnsDivElem2 = document.querySelector('.movdiv2');
btnsDivElem2.addEventListener('click', showModal2);

function showModal2(event) {
  if (watchedActive) {
    movArray = watchedList;
  } else {
    movArray = queueList;
  }
  const imgId = event.target.attributes[0].value;
  pos = movArray.findIndex(movie => imgId - movie.id === 0);
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
