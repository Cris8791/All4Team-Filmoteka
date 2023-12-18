import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { app } from './firebase_config.js';
// import { watchedMocieList, queuedMovieList } from '';
import { DeviceUUID } from 'device-uuid/lib/device-uuid.js';

const db = getFirestore(app);
const deviceID = new DeviceUUID().get();
const listPath = doc(db, 'watched_and_queued_movie_list', `${deviceID}`);
let getMovies = '';
const watchedQueuedMovies = {
  watchedMovies: [],
  queuedMovies: [],
};

console.dir(app);
console.dir(db);
console.log(deviceID);

const uploadWatchedQueuedMoviesToDB = async function createItem(
  listType,
  movies
) {
  console.log(listType, movies);
  // debugger;
  const moviesTextified = JSON.stringify(movies);
  console.log(moviesTextified);
  // if (moviesTextified === '[]') {
  //   return;
  // }
  if (listType === 'watched') {
    watchedQueuedMovies.watchedMovies = [];
    watchedQueuedMovies.watchedMovies.push(moviesTextified);
  } else {
    watchedQueuedMovies.queuedMovies = [];
    watchedQueuedMovies.queuedMovies.push(moviesTextified);
  }

  try {
    const addMovies = await setDoc(listPath, watchedQueuedMovies);
    console.log('The list of movies has been successfully added');
  } catch (error) {
    console.log(`I couldn't save the list of movies, because: `, error.message);
  }
};

// uploadData();

const downloadWatchedQueuedMoviesFromDB = async function readItem() {
  try {
    getMovies = await getDoc(listPath);
    console.log(
      'The list of watched movies is: ',
      getMovies.data().watchedMovies,
      'and the list of queued movies is: ',
      getMovies.data().queuedMovies
    );
    console.log(getMovies.data());
    // const getWatchedMovies = getMovies.data().watchedMovies;
    // const getQueuedMovies = getMovies.data().queuedMovies;
    // console.log(getWatchedMovies, getQueuedMovies);
  } catch (error) {
    console.log(`I couldn't find the list of movies, because: `, error.message);
  }
};

// downloadWatchedQueuedMoviesFromDB();

export {
  uploadWatchedQueuedMoviesToDB,
  downloadWatchedQueuedMoviesFromDB,
  getMovies,
};

// upload the list of watched movies to the firestore database
// uploadWatchedQueuedMoviesToDB('watched', watchedList);
//------------------------------------------------------

//upload the list of queued movies to the firestore database
// uploadWatchedQueuedMoviesToDB('queued', queueList);
//----------------------------------------------------

// download the list of watched and queued movies from the firestore database
// const accessDB = downloadWatchedQueuedMoviesFromDB();
// setTimeout(() => {
//   const accessData = getMovies.data();
//   watchedList = accessData.watchedMovies;
//   queueList = accessData.queuedMovies;
// }, 200);
// console.log(watchedList, queueList);
// ----------------------------------------------------------------------

// import {
//   uploadWatchedQueuedMoviesToDB,
//   downloadWatchedQueuedMoviesFromDB,
// } from './js/db.js';
