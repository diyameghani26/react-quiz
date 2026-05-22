import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBHV0_GZZkcCg2qGXivd35pa-aqL2xued4",
  authDomain: "reactiq-quiz.firebaseapp.com",
  projectId: "reactiq-quiz",
  storageBucket: "reactiq-quiz.firebasestorage.app",
  messagingSenderId: "932168922854",
  appId: "1:932168922854:web:cc2c8cc3273e720efd6d27"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)