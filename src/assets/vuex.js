import { createStore } from 'vuex'
import { Player } from '../../server/assets/player.js'

const store = createStore({
    state() {
        ongoingTasks: []
        player: Player
        players: []
    },
    mutations: {
        addTask(state, task) {
            state.ongoingTasks.push(task)
        },
        setTasks(state, tasks) {
            // console.log(tasks);
            state.ongoingTasks = tasks;
        },
        removeTask(state, index) {
            state.ongoingTasks.splice(index, 1)
        },
        addPlayer(state, player){
            players.push(player);
        },
        setPlayer(state, player){
            state.player = player;
        },
    },
    actions:{
        addTask(context, task) {
            context.commit('addTask', task);
        },
        setTasks(context, tasks) {
            context.commit('setTasks', tasks);
        },
        removeTask(context, index) {
            context.commit('removeTask', index);
        },
        setPlayer(context,player){
            context.commit('setPlayer',player);
            context.commit('addPlayer',player);
        },
    },
    getters:{
        getTasks: state => state.ongoingTasks,
        getPlayers: state => state.players,
        getPlayer: state => state.player,
    }
});

export default store;