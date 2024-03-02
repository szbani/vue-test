<script>
import TaskItem from "@/components/TaskItem.vue";
import {computed} from 'vue';
import {getTasksUpdate} from "@/assets/serverConn.js";
import {useStore} from "vuex";
import {Task} from "../../server/assets/Task.js";

export default {
  computed: {
    Task() {
      return Task
    }
  },
  components: {
    TaskItem
  },
  setup() {
    getTasksUpdate()
    const store = useStore();
    const tasks = computed(() => store.getters.getTasks);
    // watch(() => tasks.value, (newVal) => {
    //   console.log(newVal);
    // });
    return {
      tasks
    };
  },
  // watch:{
  //   tasks(newVal){
  //     console.log(newVal);
  //   }
  // },
  methods: {
    deletTask(index) {
      this.$store.commit('removeTask', index);
    }
  }
}

</script>

<template>
  <v-sheet height="500px" class="pa-6 bg-amber-lighten-3" >
    <h1>Feladatok</h1>
    <v-list lines="one" class="bg-amber-accent-1">
      <div v-for="(task,index) in tasks" :key="task">
        <TaskItem v-if="!task.inactive" :task="Task.fromObject(task)" @timerZero="deletTask(index)" class="mt-2"/>
        <!--      <md-divider v-if="index !== tasks.length - 1" class="m-2"/>-->
      </div>
    </v-list>
  </v-sheet>
</template>

<style scoped>

md-list-item {
  border: 1px solid rgba(167, 133, 133, 0.39);
}
</style>