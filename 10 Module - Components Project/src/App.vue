<template>
  <Header title="Vue is Awesome!"></Header>
  <TheResource></TheResource>
</template>

<script>
import TheResource from './components/learning-resources/TheResource';
import Header from './components/layout/TheHeader.vue';

export default {
  components: {
    TheResource,
    Header
  },

  data() {
    return {
      activeComponent: 'AddResource',
    };
  },

};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
