<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import './assets/serverConn.js';
import Tasks from './components/Tasks.vue'

</script>

<template>
  <header>
    <h1>
      Feladatok
    </h1>
  </header>
  <main>
    <Tasks/>
    <connection/>

  </main>
</template>

<style scoped>

</style>
