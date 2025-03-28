import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyChwZJXxIux_sNZLql7jbAvv_9ywJztM6E",
  authDomain: "notify-cb9da.firebaseapp.com",
  projectId: "notify-cb9da",
  storageBucket: "notify-cb9da.firebasestorage.app",
  messagingSenderId: "519379339217",
  appId: "1:519379339217:web:f858bb333f479dad76c2f0",
  measurementId: "G-MKXJ8QW7Q8",
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
