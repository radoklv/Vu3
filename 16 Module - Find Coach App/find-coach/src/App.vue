<template>
  <the-header></the-header>
  <div class="body">
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
  font-family: "Roboto", sans-serif,;
}

body {
  margin: 0;
  background-color: rgb(221, 209, 209);
}

.cmp-enter-active{
  animation: slide-in .5s ease-out;
}

.cmp-leave-active{
  animation: slide-out .5s ease-out;
}

@keyframes slide-in {
  from{
    transform: translateY(-200%);
  }
  to{
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from{
    transform: translateY(0%)
  }to{
    transform: translateY(-200%);
  }
}
</style>
