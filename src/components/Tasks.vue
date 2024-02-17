<script>
import TaskItem from "@/components/TaskItem.vue";
import {computed, reactive} from 'vue';
import {serverStartTaskCreation} from "@/assets/serverConn.js";
import {useStore} from "vuex";
import {Task} from '@/assets/Task.js'

export default {
  components: {
    TaskItem
  },

  // computed: {
  //   ...mapState(['tasks'])
  // },
  // methods:{
  //   ...mapActions(['startCreatingTasks', 'taskActiveToSocket'])
  // },
  setup() {
    const store = useStore();

    const tasks = computed(() => store.getters.getTasks);

    return {
      tasks
    };
  },
  mounted() {
    serverStartTaskCreation()
    // this.startCreatingTasks();
    // this.store.dispatch('startCreatingTasks');
  }
}

</script>

<template>
  <v-list lines="one">
    <div v-for="(task,index) in tasks" :key="task.id">
      <TaskItem :task="task"/>
      <!--      <md-divider v-if="index !== tasks.length - 1" class="m-2"/>-->
    </div>
  </v-list>
</template>

<style scoped>

md-list-item {
  border: 1px solid rgba(167, 133, 133, 0.39);
}
</style>