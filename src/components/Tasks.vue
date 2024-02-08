<script>
import TaskItem from "@/components/TaskItem.vue";

export default {
  components: {
    TaskItem
  },
  data() {
    return {
      tasks: [],
      taskNumber: 1
    };
  },
  mounted() {
    this.startCreatingTasks();

  },

  activeGame: true,
  activeGameInterval: null,

  methods: {
    startCreatingTasks() {
      // while(this.activeGame){
      console.log('Creating tasks');
      this.activeGameInterval = setInterval(() => {
        if (this.tasks.length < 10)
          this.addTask('Task ' + this.taskNumber++);
      }, 2000);
      // }
    },

    StopCreatingTasks() {
      clearInterval(this.activeGameInterval);
      this.activeGame = false;
    },

    addTask(taskName) {
      this.tasks.push({name: taskName});
    }
  }
}
</script>

<template>
  <md-List>
    <div v-for="(task,index) in tasks" :key="index">
      <TaskItem :taskName="task.name" :taskPoints="Math.ceil(Math.random()*500+500)" :time="Math.ceil(Math.random()*10)+10"/>
      <md-divider v-if="task != tasks.at(tasks.length-1)" class="m-2"/>
    </div>
  </md-List>
</template>

<style scoped>

md-list-item {
  border: 1px solid rgba(167, 133, 133, 0.39);
}
</style>