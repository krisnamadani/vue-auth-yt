import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB4p8xtpjKOduvdTT3qWD7grJTPnXqhKCs",
    authDomain: "vue-auth-yt-d0f69.firebaseapp.com",
    projectId: "vue-auth-yt-d0f69",
    storageBucket: "vue-auth-yt-d0f69.appspot.com",
    messagingSenderId: "954938912912",
    appId: "1:954938912912:web:ba63a898bc989b48c62815"
};

firebase.initializeApp(firebaseConfig)

createApp(App).use(router).mount('#app')
