import {createStore} from 'vuex'
import {Player} from '../../server/assets/player.js'

const store = createStore({
    state() {
        ongoingTasks: []
        player: Player
        players: []
        gameMaster: false
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
        addPlayer(state, player) {
            if (state.players != null)state.players.push(player);
            else state.players = [player];
        },
        setPlayer(state, player) {
            state.player = player;
        },
        setPlayers(state, players) {
            state.players = players;
        },
        setGameMaster(state, bool) {
            state.gameMaster = bool;
        }
    },
    actions: {
        addTask(context, task) {
            context.commit('addTask', task);
        },
        setTasks(context, tasks) {
            context.commit('setTasks', tasks);
        },
        removeTask(context, index) {
            context.commit('removeTask', index);
        },
        setPlayer(context, player) {
            context.commit('setPlayer', player);
            context.commit('addPlayer', player);
        },
        setPlayers(context, players) {
            context.commit('setPlayers', players);
        },
        setGameMaster(context, bool) {
            context.commit('setGameMaster', bool);
        },
    },
    getters: {
        getTasks: state => state.ongoingTasks,
        getPlayers: state => state.players,
        getPlayer: state => state.player,
        isGameMaster: state => state.gameMaster,
        isConnected: state => state.player != null,
    }
});

export default store;