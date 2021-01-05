<template>
  <div class="backdrop" @click="$emit('close')" v-if="isOpen"></div>
  <transition name="modal">
    <dialog open v-if="isOpen">
      <slot></slot>
    </dialog>
  </transition>
</template>

<script>
export default {
  emits: ['close'],
  props: ['isOpen']
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
}


.modal-enter-active {
  animation: pop-enter 0.5s ease-out;
}

.modal-leave-active {
  animation: pop-leave 0.5s ease-out;
}

@keyframes pop-enter {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes pop-leave {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0);
  }
}
</style>
