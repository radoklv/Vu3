<template>
  <button v-if="getAuthState" @click="changeAuthState">Logout</button>
  <button v-else @click="changeAuthState">Login</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getAuthState'])
  },

  methods: {
    ...mapActions(['changeAuthState'])
  }
};
</script>

<style></style>
