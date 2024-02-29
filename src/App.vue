<script setup>
import './assets/serverConn.js';

</script>

<template>
  <header>
  </header>
  <main>
    <router-link to="/game/tasks">Tasks</router-link>
    <router-link to="/">Menu</router-link>
    <router-view></router-view>

  </main>
</template>

<style scoped>

</style>
