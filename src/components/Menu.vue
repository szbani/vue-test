<script>
import store from "@/assets/vuex.js";
import {connectToWebSocket, isConnected, getGameStarted, newPlayer} from "@/assets/serverConn.js";

export default {
  data: () => ({
    password: '',
    PW: 'AdminPW',
    name: '',
    gameMasterPW: [
      value => {
        if (!value) {
          return 'Jelszó megadása kötelező';
        }
        return true;
      }
    ],
    connected: false,
    playerRules: [
      value => {
        if (!value) {
          return 'Nem Adtál meg nevet';
        }
        return true;
      }
    ]
  }),
  mounted() {
  },
  setup() {
    const connected = store.getters.isConnected;
    if (connected) {
      const player = store.getters.getPlayer;
      return {connected, player};
    }
    return {connected};
  },
  methods: {
    isConnected,
    handleGameLogin() {
      if (this.name == '') return;
      connectToWebSocket(this.$router);
      newPlayer(this.name);
      store.dispatch('setGameMaster', false);
      this.$router.push({path: '/game/lobby'});
    },
    gameMasterLogin() {
      if (this.password !== this.PW) return 'Hibás jelszó';
      connectToWebSocket(this.$router);
      store.dispatch('setGameMaster', true);
      this.$router.push({path: '/game/lobby'});
    },
    reconnectToGame() {
      getGameStarted();
      if(store.getters.isGameStarted) this.$router.push({path: '/game/tasks'});
      else this.$router.push({path: '/game/lobby'});
      // connectToWebSocket(this.$router);
    },
  }
}
</script>

<template>
  <v-sheet v-if="!isConnected()">
    <h4 class="text-h6 font-weight-bold ma-2 mt-3">Játékos</h4>
    <v-form @submit.prevent="handleGameLogin">
      <v-text-field label="Név" v-model="name" :rules="playerRules"></v-text-field>
      <v-btn class="mt-2" type="submit">Belépés</v-btn>
    </v-form>
  </v-sheet>
  <v-sheet v-else>
    <h4 class="text-h6 font-weight-bold ma-2 mt-3">Újracsatlakozás</h4>
    <v-form @submit.prevent="reconnectToGame">
      <v-btn class="mt-2" type="submit">Újracsatlakozás</v-btn>
    </v-form>
  </v-sheet>
  <v-sheet class="mt-5">
    <h4 class="text-h6 font-weight-bold ma-2 mt-3">JátékMester</h4>
    <v-form @submit.prevent="gameMasterLogin">
      <v-text-field label="Jelszó" v-model="password" type="password" :rules="gameMasterPW"></v-text-field>
      <v-btn class="mt-2" type="submit">Belépés</v-btn>
    </v-form>
  </v-sheet>
</template>

<style scoped>

</style>