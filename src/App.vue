<script setup>
// import './assets/serverConn.js';

</script>

<template>
  <header>
  </header>
  <main>
    <nav class="bg-blue-lighten-2 d-inline-flex w-100">
      <router-link to="/game/tasks">
        <v-btn>Tasks</v-btn>
      </router-link>
      <router-link to="/">
        <v-btn>Menu</v-btn>
      </router-link>
    </nav>
    <router-view></router-view>

  </main>
</template>

<style scoped>

</style>
