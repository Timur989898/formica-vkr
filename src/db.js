import firebase from 'firebase/app'
import 'firebase/firestore'
import store from '@/store'
import router from "@/router";

const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID,
    measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
};

// Get a Firestore instance
export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        store.commit('auth/setProfile', user.providerData[0], {root: true});
    } else {
        router.push('/login');
    }
});

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })