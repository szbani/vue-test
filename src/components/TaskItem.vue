<script setup>
import { onMounted, ref} from 'vue';

const { taskName, taskPoints, time} = defineProps({
  taskName: {
    type: String,
    required: true
  },
  taskPoints: {
    type: Number,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
});

let timer = null;
let taskPointsRef = ref(taskPoints)
let timeRef = ref(time)
let timeRemaining = ref(time);

const startTime = () => {
  console.log("StartTime");
    timer = setInterval(() => {
      // console.log(timeRemaining);
      if (timeRemaining.value > 0) {
        timeRemaining.value -= 0.2;
      } else {
        // console.log("time is up")
        clearInterval(timer);
        timer = null;
        this.$destroy()
        // Do something when time is up, like emit an event or show a message
      }
    }, 200);
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
  // You can set timeRemaining here directly from the props
  startTime()
});
</script>


<template>
  <md-List-item type="button" @click="pauseTime">
    <div slot="headline">{{ taskName }}</div>
    <div slot="supporting-text">
      <md-linear-progress :value="timeRemaining / timeRef"/>
    </div>
    <div slot="trailing-supporting-text">{{ taskPointsRef }}</div>
  </md-List-item>
</template>

<style scoped>
md-list-item {
  border: 1px solid rgba(167, 133, 133, 0.39);
}

</style>