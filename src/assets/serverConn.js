import {io} from 'socket.io-client';
import store from "@/assets/vuex.js";
import {Player} from "../../server/assets/player.js";

let socket = null;
let pingTimer = null;

export function connectToWebSocket($router) {
    if (socket !== null) {
        return;
    }
    socket = io('http://localhost:8080');
    startServerPing();
    socket.on("tasksUpdated", (data) => {
        store.dispatch('setTasks', data);
    });
    socket.on('sendPlayers', (data) => {
        console.log(data);
        store.dispatch('setPlayers', data);
    });
    socket.on('setPlayer', (data) => {
        console.log(data);
        store.dispatch('setPlayer', data);
    });
    socket.on('gameStarted', () => {
        console.log('Game started');
        store.dispatch('setGameStarted', true);
        $router.push('/game/tasks');
    });
    socket.on('endGame', () => {
        console.log('Game ended');
        $router.push('/');
        store.dispatch('endGame');
        socket.emit('close');
        stopServerPing();
        socket.disconnect();
        socket = null;
    });
    socket.on('getGameStarted', (data) => {
        store.dispatch('setGameStarted', data);
    });
    socket.on('nameExists', () => {
        console.log('Name exists');
        $router.push('/');
        socket.disconnect();
        socket = null;
    });
    socket.on('gameInProgress', () => {
        console.log('Game in progress');
        $router.push('/');
        stopServerPing();
        socket.disconnect();
        socket = null;
    });
}

function startServerPing(){
    pingTimer = setInterval(()=>{
        socket.emit('ping');
    },5000);
}
function stopServerPing(){
    clearInterval(pingTimer);
    pingTimer = null;
}

export function isConnected() {
    // console.log(socket);
    return socket !== null;
}

export function setTaskActive(taskID, isActive) {
    // store.dispatch('setTaskActive',{taskID,isActive});
    socket.emit('taskActive', taskID, isActive);
}

export function getTasksUpdate() {
    socket.emit('getTasksUpdate');
}

export function newPlayer(playerName) {
    socket.emit('newPlayer', playerName);
}

export function serverStartGame() {
    socket.emit('startGame');
}

export function getGameStarted() {
    socket.emit('getGameStarted');
}

export function getPlayers() {
    socket.emit('getPlayers');
}

export function endGame() {
    socket.emit('endGame');
}
