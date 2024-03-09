<script>
import {getPlayers, serverStartGame} from "@/assets/serverConn.js";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  setup() {
    getPlayers();
    const store = useStore();
    const players = computed(() => store.getters.getPlayers);
    const gameMaster = computed(() => store.getters.isGameMaster);
    console.log(gameMaster.value);
    return {
      players,
      gameMaster
    };
  },
  methods: {
    startGame(){
      serverStartGame();
      this.$router.push({path: '/game/tasks'});
    }
  }
}
</script>

<template>
  <!--    <v-btn @click="getUsers">getusers</v-btn>-->
  <div v-for="(player,index) in players" :key="player.data.id+'_'+player.data.connected">
    <v-card>
      <v-card-item :title="player.data.name" :subtitle="player.data.point">
      </v-card-item>
    </v-card>
  </div>
  <v-btn class="mt-5" v-if="gameMaster" @click="startGame()">Játék indítása</v-btn>
</template>

<style scoped>

</style>