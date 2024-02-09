<script setup>
import TaskItem from "@/components/TaskItem.vue";
import { ref, onMounted } from 'vue';

const tasks = ref([]);
let taskNumber = 1;
let activeGame = true;
let activeGameInterval = null;

onMounted(() => {
  startCreatingTasks();
});

const startCreatingTasks = () => {
  console.log('Creating tasks');
  activeGameInterval = setInterval(() => {
    if (tasks.value.length < 10)
      addTask('Task ' + taskNumber++);
  }, 2000);
};

const stopCreatingTasks = () => {
  clearInterval(activeGameInterval);
  activeGame = false;
};

const addTask = (taskName) => {
  tasks.value.push({ name: taskName });
};
</script>

<template>
  <md-List>
    <div v-for="(task,index) in tasks" :key="index">
      <TaskItem :taskName="task.name" :taskPoints="Math.ceil(Math.random()*500+500)"
                :time="Math.ceil(Math.random()*10)+10"/>
      <md-divider v-if="task != tasks.at(tasks.length-1)" class="m-2"/>
    </div>
  </md-List>
</template>

<style scoped>

md-list-item {
  border: 1px solid rgba(167, 133, 133, 0.39);
}
</style>