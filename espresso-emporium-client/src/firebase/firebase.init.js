import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyBMN9IxZBvhwtJTXLQT8dBjStd6pX2k9jQ',
  authDomain: 'espresso-euporium.firebaseapp.com',
  projectId: 'espresso-euporium',
  storageBucket: 'espresso-euporium.firebasestorage.app',
  messagingSenderId: '538861508350',
  appId: '1:538861508350:web:812ca5f4546ab7bdef77af',
};

const app = initializeApp(firebaseConfig);
export default app;
