/* eslint-disable @typescript-eslint/no-unused-vars */
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "",
  authDomain: "write-match.firebaseapp.com",
  projectId: "write-match",
  storageBucket: "write-match.appspot.com",
  messagingSenderId: "",
  appId: "",
  measurementId: "G-QLJ1JZRS4P"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const db = getFirestore(app)
export default app
