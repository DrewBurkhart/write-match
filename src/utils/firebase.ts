/* eslint-disable @typescript-eslint/no-unused-vars */
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA3UoeuUjnT0CwowRRcN8ZR1HEvcxqtjc0",
  authDomain: "write-match.firebaseapp.com",
  projectId: "write-match",
  storageBucket: "write-match.appspot.com",
  messagingSenderId: "135291893117",
  appId: "1:135291893117:web:dfa6fd5d24e3205ae24814",
  measurementId: "G-QLJ1JZRS4P"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const db = getFirestore(app)
export default app
