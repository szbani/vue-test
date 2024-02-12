<script>
import Vue from 'vue';
import { io } from 'socket.io-client';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  actions:{
    taskActiveToSocket(context,task){
      socket.emit('taskActive', task);
    }
  },
  created(){

    const socket = io('http://localhost:8080');
    socket.on('liveContent', (data) => {
      this.liveContent = data;
      console.log(data)
    });
    socket.on('message', (data) => {
      console.log(data)
    });
    socket.on("tasksUpdated", (data) => {
      console.log(data)
    });
  }
});
</script>

<template>
  <div>
    <h1>
      Connection
    </h1>
  </div>
</template>

<style scoped>

</style>