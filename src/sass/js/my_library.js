import { renderMoviesList, renderPaginationButtons } from './render.js';
import {
  WATCHED_KEY,
  QUEUE_KEY,
  saveMovieList,
  loadMovieList,
} from './storage.js';

var watchedList = [],
  queueList = [],
  movArray = [],
  watchedActive = true;
var m;

function initializeLibrary() {
  watchedList = loadMovieList(WATCHED_KEY);
  queueList = loadMovieList(QUEUE_KEY);
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
document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle'),
    mainSection = document.querySelector('main');

  darkModeToggle.addEventListener('click', () => {
    toggleDarkMode();
  });

  function toggleDarkMode() {
    mainSection.classList.toggle('dark-mode');

    const isDarkMode = mainSection.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
  }
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === 'true') {
    toggleDarkMode();
  }
});
