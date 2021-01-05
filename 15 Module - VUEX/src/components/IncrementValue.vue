<template>
  <div class="action">
    <!-- <button @click="incrementCounter(10)">Increment by 10</button> -->
    <button @click="increment(10)">Increment by 10</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    // incrementCounter(payload) {
    //   this.$store.commit('increment', payload);
    // }

    incrementCounter(payload) { //Mutations е хубаво да се достъпват през Actions, а не като горният метод
      this.$store.dispatch('increment', payload);
    },

    ...mapActions([ //Това е еквивалентен метод на горния. По различн начин се достъпва Action
        'increment'
    ])

    // ...mapActions({ // Може също да се мапват имената на Action-ите по този начин
    //     inc: 'increment'
    // })
  }
  
};
</script>

<style scoped>
.action {
  text-align: center;
}
</style>
