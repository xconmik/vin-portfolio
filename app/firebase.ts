import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAlWr25kF6DrBuKdLtUANlJI_OM0E0Qh6E',
  authDomain: 'vin-portfolio-b3530.firebaseapp.com',
  projectId: 'vin-portfolio-b3530',
  storageBucket: 'vin-portfolio-b3530.firebasestorage.app',
  messagingSenderId: '22704807491',
  appId: '1:22704807491:web:2ea9ec0ab992a161217ef6',
  measurementId: 'G-E9YTLDPJTZ',
};

export const firebaseApp = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const analyticsPromise = isSupported()
  .then((supported) => (supported ? getAnalytics(firebaseApp) : null))
  .catch(() => null);
