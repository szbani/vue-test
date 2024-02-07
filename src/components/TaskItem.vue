<script setup>
// export default {
//   name: "TaskItem"
// }
defineProps({
  taskName: {
    type: String,
    required: true
  }
})
</script>

<template>

  <md-List-item type="button">
    <md-List-item-content>
      <md-List-item-title>{{ taskName }}</md-List-item-title>
    </md-List-item-content>
  </md-List-item>
</template>

<style scoped>
  md-list-item{
    border: 1px solid rgba(167, 133, 133, 0.39);
  }

</style>