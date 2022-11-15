// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  writeBatch,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdmE_aeAN4B2iTjOhHQ_87XKwvw2UlrKs",
  authDomain: "aesthetic-co-db.firebaseapp.com",
  projectId: "aesthetic-co-db",
  storageBucket: "aesthetic-co-db.appspot.com",
  messagingSenderId: "327565620416",
  appId: "1:327565620416:web:e283cd212b3f509139a925",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

/*================================================ A U T H E N T I C A T I O N ==============================================*/

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

/*================================================ F I R E S T O R E ==============================================*/

export const firebaseDB = getFirestore(); //Initialize db instance

export const createUserRefDocAuth = async (authData, additionalInfo = {}) => {
  if (!authData) return;
  const userRefDoc = doc(firebaseDB, "USERS_LIST", authData.uid);
  const userRefData = await getDoc(userRefDoc);

  if (!userRefData.exists()) {
    const { displayName, email } = authData;
    const dateCreatedAt = new Date();

    try {
      await setDoc(userRefDoc, {
        displayName,
        email,
        dateCreatedAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userRefDoc;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectDataToAdd
) => {
  const collectionRef = collection(firebaseDB, collectionKey);
  const batch = writeBatch(firebaseDB);

  objectDataToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(firebaseDB, "COLLECTION_LIST");
  const q = query(collectionRef);

  const querySnapShots = await getDocs(q);

  const categoryMap = querySnapShots.docs.reduce((accu, docSnapShots) => {
    const { title, items } = docSnapShots.data();
    accu[title.toLowerCase()] = items;
    return accu;
  }, {});
  return categoryMap;
};
