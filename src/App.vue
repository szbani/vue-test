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
    <router-link to="/game/tasks">Tasks</router-link>
    <router-link to="/">Home</router-link>
    <router-view></router-view>

  </main>
</template>

<style scoped>

</style>
