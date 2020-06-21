import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDelsKTT1YbVaVpXUwI9yuA2WdXj1hr6-w",
    authDomain: "ecomstar-db.firebaseapp.com",
    databaseURL: "https://ecomstar-db.firebaseio.com",
    projectId: "ecomstar-db",
    storageBucket: "ecomstar-db.appspot.com",
    messagingSenderId: "806897425303",
    appId: "1:806897425303:web:e2cfe60ac5272d736e42d2",
    measurementId: "G-YSJGS7ZND2"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;