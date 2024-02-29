<script>
export default {
  data: () => ({
    name: '',
    rules: [
      value => {
        if (!value) {
          return 'Név megadása kötelező';
        }
        return true;
      }
    ],
  }),
  methods: {
    handleGameLogin(){
      if(this.name == '') return;
      this.$router.push({path: '/game/lobby',query: {name: this.name}});
      return;
    }
  }
}
</script>

<template>
  <v-sheet>
    <v-form @submit.prevent="handleGameLogin">
      <v-text-field label="Név" v-model="name" :rules="rules"></v-text-field>
      <v-btn class="mt-2" type="submit">Kész</v-btn>
    </v-form>
  </v-sheet>
</template>

<style scoped>

</style>