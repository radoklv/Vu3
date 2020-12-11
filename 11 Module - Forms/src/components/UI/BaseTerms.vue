<template to="body">
  <div class="dialog-background" @click="$emit('close')">
    <dialog class="dialog" open>
      <div class="dialog_head">
        <h2>Terms And Conditions!</h2>
      </div>

      <div class="dialog_body">
        <slot></slot>
      </div>

      <div class="dialog_action">
        <button class="green" @click="$emit('agree')">Agree</button>
        <button class="red" @click="$emit('not-agree')">Not Agree</button>
      </div>
    </dialog>
  </div>
</template>

<style scoped>
.dialog-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 0, 0, 0.13);
}
.dialog {
  z-index: 50;
  position: fixed;
  top: 25%;
  left: 25%;
  transform: translate(-50%, 50%);
}

.dialog .dialog_head {
  padding: 1rem;
  background-color: rgb(230, 72, 72);
  text-align: center;
  font-size: 30px;
}

.dialog .dialog_action {
  display: flex;
  justify-content: space-around;
}

</style>
