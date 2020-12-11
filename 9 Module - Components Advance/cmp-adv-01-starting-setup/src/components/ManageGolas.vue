<template>
  <h2>Manage Golas Components</h2>
  <input type="text" ref="goal" />
  <button @click="setGoals">Set Goal</button>

  <teleport to="body">  
    <alert-dialog v-if="inputIsValid">
        <h2>Input is invalid!</h2>
        <p>Please enter at least a few characters</p>
        <button @click="inputIsValid = false">Close</button>
    </alert-dialog>
  </teleport>
</template>

<script>
import AlertDialog from "./AlertDialog";

export default {
  components: {
    "alert-dialog": AlertDialog,
  },
  data() {
    return {
      inputIsValid: false,
    };
  },

  methods: {
    setGoals() {
      const enteredValue = this.$refs.goal.value;

      if (enteredValue == "") {
        this.inputIsValid = true;
      }
    },
  },
};
</script>
