import './assets/main.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue';
import App from './App.vue';

import "@material/web/all.js";

const app = createApp(App);
app.mount('#app');
