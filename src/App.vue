<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import './assets/serverConn.js';
import Tasks from './components/Tasks.vue'

</script>

<template>
  <header>
  </header>
  <main>
    <Tasks/>
    <connection/>

  </main>
</template>

<style scoped>

</style>
