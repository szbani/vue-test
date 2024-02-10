<script setup>
import TaskItem from "@/components/TaskItem.vue";
import {ref, onMounted} from 'vue';

const tasks = ref([]);

const maxTasks = 2;

let taskNumber = 1;
let activeGame = true;
let activeGameInterval = null;

onMounted(() => {
  startCreatingTasks();
});

const startCreatingTasks = () => {
  console.log('Creating tasks');
  activeGameInterval = setInterval(() => {
    if (tasks.value.length < maxTasks)
      addTask('Task ' + taskNumber++);
  }, 2000);
};

const stopCreatingTasks = () => {
  clearInterval(activeGameInterval);
  activeGame = false;
};

const addTask = (taskName) => {
  tasks.value.push({
    id: taskNumber,
    taskName,
    taskPoints: Math.ceil(Math.random() * 500 + 500),
    time: Math.ceil(Math.random() * 0) + 5
  });
};

const deleteTask = (taskToDelete) => {
  console.log('Deleting task', taskToDelete);
  console.log('Before', tasks.value);
  let taskid = tasks.value.findIndex(taskToDelete.valueOf);
  console.log('taskToDelete:', taskid);
};

</script>

<template>
  <md-List>
    <div v-for="(task,index) in tasks" :key="index">
      <TaskItem :task="task" @timerZero="deleteTask($event)"/>
      <md-divider v-if="index !== tasks.length - 1" class="m-2"/>
    </div>
  </md-List>
</template>

<style scoped>

md-list-item {
  border: 1px solid rgba(167, 133, 133, 0.39);
}
</style>