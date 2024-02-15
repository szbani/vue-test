// const websocket = require('ws');
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

    socket.on('taskActive', (task,isactive) => {
        console.log('TaskActive: ' + task.taskName);
        Tasks.setTaskActive(task,isactive);
    });

    // socket.on('')

});

function broadcast(data) {
    io.emit('liveContent', data);
}

// id taskname taskpoint time, reamining time
let taskCreateTimer = null;
let taskNumber = 1;
const Tasks = {
    tasks: [],
    addTask() {
        const time = Math.ceil(Math.random() * 10 + 10);
        const task = {
            id: taskNumber,
            taskName: 'task ' + taskNumber,
            taskPoints: Math.ceil(Math.random() * 500 + 500),
            time: time,
            timeRemaining: time,
            active: false,
        }
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
                console.log(task.timeRemaining + ' ' + task.taskName);
            }
        }, 1000)
    },
    deleteTask(task) {
        this.tasks.splice(this.tasks.indexOf(task), 1)
        io.emit('tasksUpdated', this.tasks);
    },
    setTaskActive(taskt,isActive) {
        console.log(taskt);
        const task = Tasks.tasks.find(t => t.id === taskt.id);
        console.log(task);
        task.active = !!isActive;
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
