import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:
    import.meta.env.VITE_FIREBASE_API_KEY ||
    'AIzaSyDQvQa33Bg9JZ4-VAlMqvx1f7C7Wkyd7lw',
  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'prasad-80f29.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'prasad-80f29',
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ||
    'prasad-80f29.firebasestorage.app',
  messagingSenderId:
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '349614555537',
  appId:
    import.meta.env.VITE_FIREBASE_APP_ID ||
    '1:349614555537:web:4950395fda2279841b5a30',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-5189BMMPKD',
};

// Initialize Firebase
let app;
try {
  app = initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Firebase initialization error:', error);
  throw new Error(
    'Failed to initialize Firebase. Please check your configuration.'
  );
}

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Analytics (optional, only in browser)
export const analytics =
  typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;
