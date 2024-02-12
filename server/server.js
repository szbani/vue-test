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

    socket.emit('message','Welcome to the chat!');

    socket.on('message', message => {
        console.log('Received: ' + message);
    });

    socket.on('close', () => {
        console.log('Client disconnected');
    });

});

let i = 0;
setInterval(() => {
    const liveContent = 'Live Content ' + i++;
    broadcast(liveContent);
}, 2000);

function broadcast(data) {
    io.emit('liveContent', data);
}


const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
