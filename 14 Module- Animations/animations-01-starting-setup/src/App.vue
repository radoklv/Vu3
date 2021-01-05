<template>
  <div class="container">
    <router-view v-slot="slotProps">
      <transition name="cmp" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>

  <div class="container">
    <UsersList></UsersList>
  </div>

  <div class="container">
    <div class="block" :class="{ animate: blockAnimation }"></div>
    <button @click="animateBlock">Animate</button>
  </div>

  <base-modal @close="hideDialog" :isOpen="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <transition name="button-toggle" mode="out-in">
      <button v-if="toggleButton" @click="toggleButton = !toggleButton">
        Button ON
      </button>
      <button v-else @click="toggleButton = !toggleButton">Button Off</button>
    </transition>
  </div>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import UsersList from './components/UsersList.vue';
export default {
  components: {
    UsersList
  },

  data() {
    return {
      dialogIsVisible: false,
      blockAnimation: false,
      toggleButton: true
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },

    animateBlock() {
      this.blockAnimation = !this.blockAnimation;
    }
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
  outline: none;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  transition: transform 0.3s ease-out;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  transform: translateX(-150px);
}

.cmp-enter-active,
.button-toggle-enter-active {
  animation: fade-in 0.5s ease-out;
}

.cmp-leave-active,
.button-toggle-leave-active {
  animation: fade-out 0.5s ease-out;
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
