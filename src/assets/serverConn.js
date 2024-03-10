import {io} from 'socket.io-client';
import store from "@/assets/vuex.js";

let socket = null;

export function connectToWebSocket($router) {
    if (socket !== null) {
        return;
    }
    socket = io('http://localhost:8080');
    socket.on('liveContent', (data) => {
        // this.liveContent = data;
        console.log(data);
    });
    socket.on('message', (data) => {
        console.log(data);
    });
    socket.on("tasksUpdated", (data) => {
        // console.log(data)
        store.dispatch('setTasks', data);
    });
    socket.on('sendPlayers', (data) => {
        console.log(data);
        store.dispatch('setPlayers', data);
    });
    socket.on('setPlayer', (data) => {
        // console.log(data);
        store.dispatch('setPlayer', data);
    });
    socket.on('gameStarted', () => {
        console.log('Game started');
        $router.push('/game/tasks');
    });
}

export function isConnected(){
    return socket !== null;
}

export function setTaskActive(taskID, isActive) {
    // store.dispatch('setTaskActive',{taskID,isActive});
    socket.emit('taskActive', taskID, isActive);
}

export function getTasksUpdate() {
    socket.emit('getTasksUpdate');
}

export function serverStartTaskCreation() {
    socket.emit('startTaskCreation');
}

export function newPlayer(playerName) {
    socket.emit('newPlayer', playerName);
}
export function serverStartGame(){
    socket.emit('startGame');
}
export function isGameStarted(){
    return socket.emit('isGameStarted');
}
export function getPlayers() {
    socket.emit('getPlayers');
}
