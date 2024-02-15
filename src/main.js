import './assets/main.css';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css'
import store from "@/assets/vuex.js";

import { createApp } from 'vue';
import App from './App.vue';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
// // import '@/assets/tasks.scss';
//
const vuetify = createVuetify({
    styles: {
        configFile: 'src/assets/tasks.scss',
    }
});

export default createVuetify()

const app = createApp(App);
app.use(vuetify);
app.use(store);
app.mount('#app');


