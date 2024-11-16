import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBoHW87Svon5ASg5QndQ3FkKEgm4FJd6Qg",
  authDomain: "farhan-dev-portfolio.firebaseapp.com",
  projectId: "farhan-dev-portfolio",
  storageBucket: "farhan-dev-portfolio.firebasestorage.app",
  messagingSenderId: "648751036567",
  appId: "1:648751036567:web:4c3521bf36c9789ed8d1d2",
  measurementId: "G-44VJ50WG13"
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 