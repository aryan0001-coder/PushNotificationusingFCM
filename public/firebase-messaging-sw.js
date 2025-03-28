importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyChwZJXxIux_sNZLql7jbAvv_9ywJztM6E",
  authDomain: "notify-cb9da.firebaseapp.com",
  projectId: "notify-cb9da",
  storageBucket: "notify-cb9da.firebasestorage.app",
  messagingSenderId: "519379339217",
  appId: "1:519379339217:web:f858bb333f479dad76c2f0",
  measurementId: "G-MKXJ8QW7Q8",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
