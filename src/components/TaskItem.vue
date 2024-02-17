<script setup>
import {onMounted, ref, defineProps, reactive} from 'vue';
import {setTaskActive} from "@/assets/serverConn.js";
import { Task } from "@/assets/Task.js"

const emits = defineEmits(['timerZero']);

const {task} = defineProps({
  task: {
    type: Object,
    required: true
  }
});

const {id, taskName, taskPoints, time} = task;

let taskRef = task;
let timer = null;
const progress = ref((taskRef.timeRemaining / time) * 100)

const startTime = () => {
  // console.log("StartTime");
  timer = setInterval(() => {
    timerLogic();
  }, 1000);
};

const timerLogic = () => {
  if (taskRef.timeRemaining > 0 && !taskRef.active) {
    taskRef.timeRemaining -= 1;
    progress.value = (taskRef.timeRemaining / time) * 100;
  } else {
    clearInterval(timer);
    timer = null;
    emits('timerZero');
  }
};

const startTask = () => {
  // console.log(taskRef)
  if (!taskRef.active) {
    taskRef.active = true;
    setTaskActive(taskRef, true);
  }else{
    taskRef.active = false;
    setTaskActive(taskRef,false);
  }
  // console.log(taskRef.value.active);
  pauseTime();
}

const pauseTime = () => {
  if (timer == null)
    startTime();
  else {
    clearInterval(timer);
    timer = null;
  }
};


onMounted(() => {
  startTime()
});
</script>


<template>
  <v-list-item type="button" @click="startTask">
    <div slot="headline">{{ taskRef.taskName }}</div>
    <div slot="supporting-text">
      <v-progress-linear v-model="progress"/>
    </div>
    <div slot="trailing">{{ taskRef.taskPoints }}</div>
  </v-list-item>
</template>

<style scoped>
md-list-item {
  border: 1px solid rgba(167, 133, 133, 0.39);
}


</style>