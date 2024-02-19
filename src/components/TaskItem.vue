<script setup>
import {defineProps, computed, watch} from 'vue';
import {setTaskActive} from "@/assets/serverConn.js";
import {Task} from "../../server/assets/Task.js"

const emits = defineEmits(['timerZero']);

const {task} = defineProps({
  task: {
    type: Task,
    required: true
  }
});
const progress = computed(() => task.data.timeRemaining / task.data.time * 100);

watch(() => task.data.timeRemaining, (newVal) => {
  if (newVal <= 0) {
    setTimeout(() => {
      emits('timerZero');
    }, 100);
    // emits('timerZero');
  }
});

const signUpToTask = () => {
  if (!task.data.active) {
    setTaskActive(task.data.id, true);
  } else {
    setTaskActive(task.data.id, false);
  }
};

</script>


<template>
  <v-list-item type="button" @click="signUpToTask" class="pa-0">
<!--    <v-expand-x-transition>-->
      <v-sheet v-show="task.data.active" class="w-100 h-100 position-absolute" color="rgba(0,0,0,0.5)"/>
      <v-progress-linear class="h-100 w-100 d-block position-absolute" v-model="progress"/>
<!--    </v-expand-x-transition>-->
    <div slot="headline" class="ps-3 text-h6 font-weight-black">{{ task.data.name }}</div>
<!--    <div slot="supporting-text">-->
<!--    </div>-->
    <div slot="trailing" class="ps-3 text-subtitle-1 font-weight-bold">pont: {{ task.data.point }}</div>
  </v-list-item>
</template>

<style scoped>
md-list-item {
  border: 1px solid rgba(167, 133, 133, 0.39);
}


</style>