import { createStore } from 'vuex'

const store = createStore({
    state() {
        ongoingTasks: []
    },
    mutations: {
        addTask(state, task) {
            state.ongoingTasks.push(task)
        },
        setTasks(state, tasks) {
            state.ongoingTasks = tasks;
        },
        removeTask(state, index) {
            state.ongoingTasks.splice(index, 1)
        }
    },
    actions:{
        addTask(context, task) {
            context.commit('addTask', task);
        },
        setTasks(context, tasks) {
            context.commit('setTasks', tasks);
        },
        removeTask(context, index) {
            context.commit('removeTask', index);
        }
    },
    getters:{
        getTasks: state => state.ongoingTasks,
    }
});

export default store;