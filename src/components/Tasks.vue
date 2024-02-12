<script>
import TaskItem from "@/components/TaskItem.vue";
import {ref, onMounted, computed} from 'vue';
import {mapState, mapActions} from "vuex";
import $store from '@/assets/serverConn.js';
export default {
  components: {
    TaskItem
  },
  computed: {
    ...mapState(['tasks'])
  },
  methods:{
    ...mapActions(['startCreatingTasks', 'taskActiveToSocket'])
  },
  // setup() {
  //
  //
  //   let activeGame = true;
  //   // let activeGameInterval = null;
  // },
  mounted() {
    // this.startCreatingTasks();
    this.store.dispatch('startCreatingTasks');
  }
}

//
// const tasks = ref([]);
//
// const {tasks: mappedTasks} = mapState(['tasks']);
// const {startCreatingTasks, taskActive} = mapActions(['startCreatingTasks', 'taskActiveToSocket']);
//
// const maxTasks = 2;
//
// let taskNumber = 0;
// let activeGame = true;
// // let activeGameInterval = null;
//
//
// onMounted(() => {
//   startCreatingTasks();
//   // startTaskCreation();
// });

// const startCreatingTasks = () => {
//   console.log('Creating tasks');
//   activeGameInterval = setInterval(() => {
//     if (tasks.value.length < maxTasks)
//       addTask('Task ' + taskNumber++);
//   }, 2000);
// };

// const stopCreatingTasks = () => {
//   clearInterval(activeGameInterval);
//   activeGame = false;
// };
//
// const addTask = (taskName) => {
//   tasks.value.push({
//     id: taskNumber,
//     taskName,
//     taskPoints: Math.ceil(Math.random() * 500 + 500),
//     time: Math.ceil(Math.random() * 15) + 5
//   });
// };
//
// const deleteTask = (index) => {
//   tasks.value.splice(index, 1);
// };

</script>

<template>
  <v-list lines="one">
    <div v-for="(task,index) in tasks" :key="task.id">
      <TaskItem :task="task" @timerZero="deleteTask(index)"/>
      <!--      <md-divider v-if="index !== tasks.length - 1" class="m-2"/>-->
    </div>
  </v-list>
</template>

<style scoped>

md-list-item {
  border: 1px solid rgba(167, 133, 133, 0.39);
}
</style>