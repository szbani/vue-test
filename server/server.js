// const websocket = require('ws');
import {Task} from "./assets/Task.js";
import {Player} from "./assets/player.js"
import express from 'express';
import http from 'http';
import {Server} from 'socket.io';
import {v4 as uuidv4} from 'uuid';

// const wss = new websocket.Server({port: 8080});

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    }
});

const connections = {}

io.on('connection', socket => {
    console.log('Client connected');
    startTaskCreation();
    const userId = uuidv4();
    connections[userId] = socket;

    socket.emit('message', 'Welcome to the chat!');
    if (Tasks.tasks.length > 0) {
        socket.emit('tasksUpdated', Tasks.getValidTasks());
    }

    socket.on('message', message => {
        console.log('Received: ' + message);
    });

    socket.on('taskActive', (taskID, isActive) => {
        console.log('TaskActive: ' + taskID + ' ' + isActive);
        Tasks.setTaskActive(taskID, isActive);
    });

    socket.on('getTasksUpdate', () => {
        console.log('Sending tasks update');
        socket.emit('tasksUpdated', Tasks.getValidTasks());
    });
    // socket.on('')
    socket.on('newPlayer', (playerName) => {
        console.log('new player:' + playerName)
        const newPlayer = new Player(userId, playerName);
        Players.addPlayer(newPlayer);
        socket.emit('setPlayer', newPlayer);
        io.emit('sendPlayers', Players.players);
    });
    socket.on('getPlayers', () => {
        // console.log(Players.players);
        socket.emit('sendPlayers', Players.players);
    });

    socket.on('startGame', () => {
        console.log('Game started');
        // console.log(Players.players);
        Players.players.forEach(player => {
            // console.log(player.data.id);
            connections[player.data.id].emit('gameStarted');
        });
    });

    socket.on('close', () => {
        console.log('Client disconnected')
        delete connections[userId];
    });
});

export function sendPlayersToPlayer(userId) {
    const socket = connections[userId];
    if (socket) {
        socket.emit(Players.players);
    }
}

// id taskname taskpoint time, reamining time
let taskCreateTimer = null;
let taskNumber = 1;
const Tasks = {
    tasks: [],
    addTask() {
        const name = 'task ' + taskNumber;
        const point = Math.ceil(Math.random() * 500 + 500);
        const time = Math.ceil(Math.random() * 10 + 10);
        const task = new Task(taskNumber, name, point, time)
        // task.startTimer();
        this.tasks.push(task);
        taskNumber++;
        // this.timerStart(task);
    },
    getValidTasks() {
        return this.tasks.filter(task => !task.inactive);
    },
    setTaskActive(taskID, isActive) {
        const task = Tasks.tasks.find(t => t.data.id === taskID);
        // console.log(task);
        task.data.active = isActive;
        io.emit('tasksUpdated', this.getValidTasks());
    },
};

export function startTaskCreation() {
    if (taskCreateTimer == null) {
        const maxTasks = 2;
        console.log('Creating tasks');
        taskCreateTimer = setInterval(() => {
            // console.log(Tasks.tasks);
            // const valid = Tasks.getValidTasks();
            // console.log();
            if (Tasks.getValidTasks().length < maxTasks) {
                Tasks.addTask();
                io.emit('tasksUpdated', Tasks.getValidTasks());
            }
        }, 2000);
    }
}

export function stopTaskCreation() {
    clearInterval(taskCreateTimer);
    taskCreateTimer = null;
}

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const Players = {
    players: [],
    addPlayer(player) {
        this.players.push(player);
    },
    resetPlayer() {
        this.players.clear;
    },
    updatePlayer(player) {
        this.players.players.find(p => p.data.id === player.data.id);
    },

};

