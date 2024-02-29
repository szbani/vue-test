import './assets/main.css';
import store from "@/assets/vuex.js";
import * as VueRouter from "vue-router";

import { createApp } from 'vue';
import App from './App.vue';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import tasks from "@/components/Tasks.vue";
import Task from "@/components/Task.vue";
import Menu from "@/components/Menu.vue";
import Lobby from "@/components/Lobby.vue";

const vuetify = createVuetify({
    styles: {
        configFile: 'src/assets/tasks.scss',
    }
});
export default createVuetify()

// const Home = {template: '<div>Home</div>'}

const routes = [
    {path: '/game/tasks', component: tasks},
    {path: '/', component: Menu},
    {path: '/game/:taskID', component: Task, props: true},
    {path: '/game/lobby', component: Lobby, props: true}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

const app = createApp(App);
app.use(vuetify);
app.use(store);
app.use(router);
app.mount('#app');


