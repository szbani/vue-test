import {io} from 'socket.io-client';
import store from "@/assets/vuex.js";
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
    store.dispatch('setTasks', data);
});

export function setTaskActive(task,isactive){
    socket.emit('taskActive',task,isactive);
}

export function serverStartTaskCreation(){
    socket.emit('startTaskCreation');
}