import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import type { FirebaseApp, FirebaseOptions } from 'firebase/app';
import type { Analytics } from 'firebase/analytics';
// import { dev } from '$app/environment' // browser
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig: FirebaseOptions = {
	apiKey: 'AIzaSyAhVzIbyS8zG1Su0xTTZ1jbCqLkAO_HMm0',
	authDomain: 'personal-website-46a49.firebaseapp.com',
	projectId: 'personal-website-46a49',
	storageBucket: 'personal-website-46a49.appspot.com',
	messagingSenderId: '258594875840',
	appId: '1:258594875840:web:c7217f867527bb70ad8025',
	measurementId: 'G-XQ3SX9PY6P'
};

const app: FirebaseApp = initializeApp(firebaseConfig);
let analytics: Analytics;
isSupported().then((analyticsSupported) => {
	if (analyticsSupported) analytics = getAnalytics(app);
});

// export default app;
export { app, analytics };

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
