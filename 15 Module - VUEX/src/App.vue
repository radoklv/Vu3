<template>
  <base-container title="Vuex" v-if="getAuthState">
    <display-counter></display-counter>
    <increment-counter></increment-counter>
  </base-container>

  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import { mapGetters } from "vuex";

import BaseContainer from './components/BaseContainer.vue';
import IncrementCounter from './components/IncrementValue.vue'
import DisplayCounter from './components/DisplayCounter.vue'
import UserAuth from './components/UserAuth.vue'

export default {
  components: {
    BaseContainer,
    IncrementCounter,
    DisplayCounter,
    UserAuth
  },

  methods:{
    incrementCounter(payload){
       this.$store.commit('increment', payload)
    }
  },

  computed:{
    ...mapGetters([
      'getAuthState'
    ])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>