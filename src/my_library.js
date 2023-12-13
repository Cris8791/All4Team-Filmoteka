import { renderMoviesList, renderPaginationButtons } from './render.js';
import {
  WATCHED_KEY,
  QUEUE_KEY,
  saveMovieList,
  loadMovieList,
} from './storage.js';

var watchedList = [],
  queueList = [];

function initializeLibrary() {
  watchedList = loadMovieList(WATCHED_KEY);
  queueList = loadMovieList(QUEUE_KEY);
  renderMoviesList(watchedList);
  //   +WATCHED button become active
}
function watchedBtnClick() {
  renderMoviesList(watchedList);
}
function queueBtnClick() {
  renderMoviesList(queueList);
}
document.addEventListener('DOMContentLoaded', initializeLibrary);
const watchedBtn = document.querySelector('.watched-btn');
const queueBtn = document.querySelector('.queue-btn');

watchedBtn.addEventListener('click', watchedBtnClick);
queueBtn.addEventListener('click', queueBtnClick);
