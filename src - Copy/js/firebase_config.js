import { initializeApp } from '../../node_modules/firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAKYrF2YoqGKSaSU407C9X91DqaZMAg4q4',
  authDomain: 'filmoteka-urraccon.firebase.com',
  projectId: 'filmoteka-urraccon',
  storageBucket: 'filmoteka-urraccon.appspot.com',
  messagingSenderId: '712511464775',
  appId: '1:712511464775:web:f28be5eb7fc38469c69862',
};

const app = initializeApp(firebaseConfig);

export { app };
