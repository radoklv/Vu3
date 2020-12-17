<template>
  <teleport to="body">
    <div v-if="show" class="backdrop" @click="closeDialog"></div>
    <transition name="dialog">
      <dialog open v-if="show">
        <div class="dialog-head">
          <h2>{{ title }}</h2>
        </div>

        <div class="dialog-body">
          <slot></slot>
        </div>

        <div class="dialog-action">
          <base-button mode="outline" @click="closeDialog">Close</base-button>
        </div>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  emits: ["close"],

  props: {
    show:{
      type: Boolean,
      required: true,
    },

    title: {
      type: String,
      required: false,
      default: "Alert",
    },
  },

  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
dialog {
  position: fixed;
  z-index: 100;
  padding: 0;
  border-radius: 10px;
  overflow: hidden;
}

.dialog-head {
  padding: 5px;
  background-color: blueviolet;
  text-align: center;
  color: #fff;
}

.dialog-body {
  padding: 20px;
  text-align: center;
}

.backdrop {
  background-color: rgba(0, 0, 0, 0.349);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;
}

.dialog-action {
  text-align: center;
  margin: 5px 0;
}

.dialog-enter-active{
  animation: pop-in .2s ease-out
}

.dialog-leave-active{
  animation:  pop-out .2s ease-out;
}

@keyframes pop-in {
  from{
    transform: scale(0);
  }to{
    transform: scale(1);
  }
}

@keyframes pop-out {
  from{
    transform: scale(1);
  }to{
    transform: scale(0);
  }
}
</style>
