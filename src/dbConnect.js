import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// import credentials
import { Credential, credentials } from "../credentials.js";

// initialize the firebase app by bringing the credential as an object
initializeApp({
  credential: cert(credentials),
});

export const db = getFirestore();
