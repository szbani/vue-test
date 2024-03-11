<script>
import {getPlayers, isConnected, getGameStarted, serverStartGame} from "@/assets/serverConn.js";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  data: () => ({
    dialogVisible: false,
  }),
  mounted() {
    if (!isConnected()) this.$router.push({path: '/'});
    if (this.gameStarted) {
      this.backToGameDialog()
    }
  },
  setup() {
    if (isConnected()) {
      getPlayers();
      const store = useStore();
      const players = computed(() => store.getters.getPlayers);
      const gameMaster = computed(() => store.getters.isGameMaster);
      getGameStarted();
      const gameStarted = computed(() => store.getters.isGameStarted);

      return {
        players,
        gameMaster,
        gameStarted
      };
    }
    return {
      players: [],
      gameMaster: false,
      gameStarted: false,
    };
  },
  methods: {
    startGame() {
      serverStartGame();
      this.$router.push({path: '/game/tasks'});
    },
    backToGameDialog() {
      this.dialogVisible = true;
    },
    reconnectToGame() {
      this.dialogVisible = false;
      this.$router.push({path: '/game/tasks'});
    }
  }
}
</script>

<template>
  <div v-if="gameStarted">
    <v-dialog v-model="dialogVisible" max-width="500">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
            v-bind="activatorProps"
            color="surface-variant"
            text="újracsatlakozás"
            variant="flat"
        ></v-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card title="Szeretnél újracsatlakozni?">
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                text="Újracsatlakozás"
                @click="reconnectToGame"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
  <div v-if="!gameStarted">
    <div v-for="(player,index) in players" :key="player.data.id+'_'+player.data.connected">
      <v-card>
        <v-card-item :title="player.data.name" :subtitle="player.data.point">
        </v-card-item>
      </v-card>
    </div>
    <v-btn class="mt-5" v-if="gameMaster" @click="startGame()">Játék indítása</v-btn>
  </div>
</template>

<style scoped>

</style>