// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyCWSTknQMMfaXIQIz7R7D8ID0JvxsYZroA",
    authDomain: "fouladnama-ir.firebaseapp.com",
    projectId: "fouladnama-ir",
    storageBucket: "fouladnama-ir.appspot.com",
    messagingSenderId: "687205196065",
    appId: "1:687205196065:web:a704958c415de0fe645e60"
    };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
//   console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});