import {io} from 'socket.io-client';
import { provide } from 'vue';
const socket = io('http://localhost:8080');
socket.on('liveContent', (data) => {
    // this.liveContent = data;
    console.log(data)
});
socket.on('message', (data) => {
    console.log(data)
});
socket.on("tasksUpdated", (data) => {
    console.log(data)
    provide('tasks',data);
});

export function serverStartTaskCreation(){
    socket.emit('startTaskCreation');
}

export function setTaskActive(task){
    socket.emit('taskActive',task);
}
