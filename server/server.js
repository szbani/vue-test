// const websocket = require('ws');
import {Task} from "@/assets/Task";

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// const wss = new websocket.Server({port: 8080});

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    }
});

io.on('connection', socket => {
    console.log('Client connected');
    startTaskCreation();
    socket.emit('message', 'Welcome to the chat!');
    socket.emit('tasksUpdated', this.tasks);

    socket.on('message', message => {
        console.log('Received: ' + message);
    });

    socket.on('close', () => {
        console.log('Client disconnected');
    });

    socket.on('startTaskCreation', () => {
        console.log('Starting task creation');
        setInterval(() => {
            startTaskCreation()
        }, 2000);
    });

    socket.on('stopTaskCreation', () => {
        console.log('Stopping task creation');
        stopTaskCreation();
    });

    socket.on('taskActive', (task,isActive) => {
        console.log('TaskActive: ' + task.taskName);
        Tasks.setTaskActive(task,isActive);
    });

    // socket.on('')

});

function broadcast(data) {
    io.emit('liveContent', data);
}

let taskCreateTimer = null;
let taskNumber = 1;
const Tasks = {
    tasks: [],
    addTask() {
        const name = 'task ' + taskNumber;
        const point = Math.ceil(Math.random() * 500 + 500);
        const time = Math.ceil(Math.random() * 10 + 10);
        const task = new Task(taskNumber,name,point,time)
        this.tasks.push(task);
        taskNumber++;
        this.timerStart(task);
    },
    timerStart(task) {
        const timer = setInterval(() => {
            if (!task.active) {
                if (task.timeRemaining <= 0) {
                    clearInterval(timer);
                    this.deleteTask(task);
                }
                task.timeRemaining -= 1;
            }
        }, 1000)
    },
    deleteTask(task) {
        this.tasks.splice(this.tasks.indexOf(task), 1)
        io.emit('tasksUpdated', this.tasks);
    },
    setTaskActive(taskt,isActive) {
        const task = Tasks.tasks.find(t => t.id === taskt.id);
        task.active = isActive;
        io.emit('tasksUpdated', this.tasks);
    },
};

function startTaskCreation() {
    if (taskCreateTimer == null) {
        const maxTasks = 2;
        console.log('Creating tasks');
        taskCreateTimer = setInterval(() => {
            // console.log(Tasks.tasks);
            if (Tasks.tasks.length < maxTasks) {
                Tasks.addTask();
                io.emit('tasksUpdated', Tasks.tasks);
            }
        }, 2000);
    }
}

function stopTaskCreation() {
    clearInterval(taskCreateTimer);
    taskCreateTimer = null;
}

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
