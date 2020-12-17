<template>
  <the-header></the-header>
  <div class="container">
    <router-view v-slot="slotProps">
      <transition name="cmp" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
  background-color: #4e4242;
  position: relative;
}

ul {
  list-style: none;
  padding: 0;
}

.cmp-enter-active {
  animation: fade-in 0.2s ease-out;
}

.cmp-leave-active {
  animation: fade-out 0.2s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
