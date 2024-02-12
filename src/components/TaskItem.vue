<script setup>
import {onMounted, ref, defineProps} from 'vue';

const emits = defineEmits(['timerZero']);

const {task} = defineProps({
  task: {
    type: Object,
    required: true
  },
});

const {id, taskName, taskPoints, time} = task;

let taskRef = ref(task);
let timer = null;
let taskPointsRef = ref(taskPoints)
let timeRef = ref(time)
let timeRemaining = ref(time);
const progress = ref(100)

const startTime = () => {
  console.log("StartTime");
  timer = setInterval(() => {
    timerLogic();
  }, 1000);
};

const timerLogic = () => {
  if (timeRemaining.value > 0) {
    timeRemaining.value -= 1;
    progress.value = (timeRemaining.value / time) * 100;
  } else {
    clearInterval(timer);
    timer = null;
    emits('timerZero');
  }
};

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
  <v-list-item type="button" @click="pauseTime">
    <div slot="headline">{{ taskName }}</div>
    <div slot="supporting-text">
      <v-progress-linear v-model="progress"/>
    </div>
    <div slot="trailing">{{ taskPointsRef }}</div>
  </v-list-item>
</template>

<style scoped>
md-list-item {
  border: 1px solid rgba(167, 133, 133, 0.39);
}


</style>