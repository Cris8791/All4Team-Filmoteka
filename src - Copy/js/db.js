import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from '../../node_modules/firebase/firestore';
import { app } from './firebase_config.js';
// import { watchedMocieList, queuedMovieList } from '';
// import { DeviceUUID } from 'device-uuid/lib/device-uuid.js';
// import { v4 as uuid } from 'uuid';
// import { biri } from 'biri';

const db = getFirestore(app);
// const biri = require('biri');
const deviceID = 'your-device-ID';
// const x = async function y() {
//   new Promise((resolve) => {
//     setTimeout(resolve(z),1000);
//   })
// };

// function z() {
//   const deviceID = await biri();
// }

const itemPath = doc(db, 'watched_and_queued_movie_list', `${deviceID}`);
// let savedMovies = '[]';
let watchedQueuedMovies = {
  watchedMovies: [],
  queuedMovies: [],
};

console.dir(app);
console.dir(db);
console.log(deviceID);

//download the list of watched and queued movies from the firestore database
const downloadWatchedQueuedMoviesFromDB = async function getItem() {
  try {
    itemAccess = await getDoc(itemPath);
    savedMovies = itemAccess.data();
    console.log(savedMovies);
    // savedMoviesLength = Object.keys(savedMovies).length;
    // console.log(savedMoviesLength);
    watchedQueuedMovies.watchedMovies = savedMovies.watchedMovies;
    watchedQueuedMovies.queuedMovies = savedMovies.queuedMovies;
    console.log(
      'The movies added to watched are: ',
      savedMovies.watchedMovies,
      'and queued are: ',
      savedMovies.queuedMovies
    );
    // if (savedMoviesLength === 0) {
    // debugger;
    //   return;
    // }
    // debugger;
    // watchedQueuedMovies.movies = savedMovies;
    // watchedQueuedMovies.queuedMovies = movieLists.queuedMovies;
    // console.log(getMovies.data());
    // const getWatchedMovies = getMovies.data().watchedMovies;
    // const getQueuedMovies = getMovies.data().queuedMovies;
    // console.log(getWatchedMovies, getQueuedMovies);
  } catch (error) {
    console.log(`I couldn't find the list of movies, because: `, error);
  }
};
//---------------------------------------------------------------------

// upload the list of watched and queued movies to the firestore database
const uploadWatchedQueuedMoviesToDB = async function setItem(
  listType,
  addMovies
) {
  // debugger;
  downloadWatchedQueuedMoviesFromDB();
  console.log(listType, addMovies);
  // let addMovies = [];
  // debugger;
  // if (addWatchedMovies === null) {
  //   if ((addQueuedMovies = null)) {
  //   }
  // }
  // const addWatchedMoviesLength = addWatchedMovies.length;
  // const addQueuedMoviesLength = addQueuedMovies.length;
  // console.log(addWatchedMoviesLength);
  // if (addWatchedMoviesLength !== 0) {
  //   if (addQueuedMoviesLength !== 0) {
  //     addWatchedMovies.forEach(watchedMovie => {
  //       addQueuedMovies.forEach(queuedMovie => {
  //         if (watchedMovie.id === queuedMovie.id) {
  //           let moviePlaced = addWatchedMovies.findIndex(
  //             movie => movie.id === watchedMovie.is
  //           );
  //           addWatchedMovies.splice(moviePlaced, 1);
  //         }
  //       });
  //     });
  //   }
  // }
  // const addMovies = addWatchedMovies.concat(addQueuedMovies);
  const addMoviesTextified = JSON.stringify(addMovies);
  console.log(addMoviesTextified);
  // if (addMovieTextified === '[]') {
  //   return;
  // }
  // watchedQueuedMovies.movies = addMoviesTextified;
  if (listType === 'watched') {
    watchedQueuedMovies.watchedMovies = [];
    watchedQueuedMovies.watchedMovies.push(addMoviesTextified);
  } else {
    watchedQueuedMovies.queuedMovies = [];
    watchedQueuedMovies.queuedMovies.push(addMoviesTextified);
  }

  try {
    // debugger;
    await setDoc(itemPath, watchedQueuedMovies);
    console.log('The list of movies has been successfully added');
  } catch (error) {
    console.log(`I couldn't save the list of movies, because: `, error);
  }
};
// -------------------------------------------------------------------

// uploadData();

// set the values ​​stored in the database in the lists of watched movies and put them in the queue
// async function setStoredValues() {
//   const accessDB = downloadWatchedQueuedMoviesFromDB();
//   const returnedResponse = await waitingResponse();
// }

// function waitingResponse() {
//   const taskResolved = new Promise(resolve => {
//     setTimeout(() => {
//       resolve(takeItem());
//     }, 1000);
//   });
// }

// function takeItem() {
//   try {
//     const pickList = getMovies.data();
//     console.log(pickList);
// debugger;
//     const pickListLength = Object.keys(pickList).length;
//     const queuedMoviesLenght = pickList.queuedMovies.length;
//     const watchedMoviesLenght = pickList.watchedMovies.length;
//     const firstMovieWatched = pickList.watchedMovies[0];
//     const firstMovieQueued = pickList.queuedMovies[0];
//     console.log(pickList.watchedMovies[0]);
//     if (pickListLength === 0) {
//       watchedList = [];
//       queueList = [];
//     }
// debugger;
//     if (queuedMoviesLenght !== 0) {
//       if (firstMovieQueued !== '[]') {
//         const queuedListText = pickList.queuedMovies[0];
//         queueList = JSON.parse(queuedListText);
//       }
//     }
//     if (watchedMoviesLenght !== 0) {
//       if (firstMovieWatched !== '[]') {
//         const watchedListText = pickList.watchedMovies[0];
//         watchedList = JSON.parse(watchedListText);
//       }
//     }
//     console.log(
//       'You have saved the following movies in the list of watched movies',
//       watchedList,
//       'and queued movies: ',
//       queueList
//     );
//   } catch (error) {
//     console.log(
//       `I couldn't load the data from the database, because: `,
//       error.message
//     );
//   }
//----------------------------------------------------------------------

// downloadWatchedQueuedMoviesFromDB();

export {
  uploadWatchedQueuedMoviesToDB,
  downloadWatchedQueuedMoviesFromDB,
  itemAccess,
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
