import {io} from 'socket.io-client';
import Vuex from 'vuex';


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
});

export default new Vuex.Store({
    state: {
        tasks: [],
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        addTask(state, task) {
            state.tasks.push(task);
        },
    },
    actions: {
        taskActiveToSocket(context, task) {
            socket.emit('taskActive', task);
        },
        startCreatingTasks(context,state,mutations){
            let taskNumber = 1;
            const maxTasks = 2;
            console.log('Creating tasks');
            setInterval(() => {
                if (state.tasks.value.length < maxTasks)
                    mutations.addTask('Task ' + taskNumber++);
            }, 2000);
        },
        taskActive(context, task) {
            console.log('Task active: ' + task);
        }
    },

});
