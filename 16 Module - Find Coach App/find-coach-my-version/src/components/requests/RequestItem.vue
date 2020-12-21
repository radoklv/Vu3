<template>
  <li>
    <base-dialog :show="!!error" title="Error" @close="clearError">
      {{ error }}
    </base-dialog>
    <base-card>
      <h4>
        From: <a :href="mailTo">{{ request.email }}</a>
      </h4>
      <p><span>Message: </span>{{ request.message }}</p>
      <base-button @click="deleteRequest">Delete</base-button>
    </base-card>
  </li>
</template>

<script>
export default {
  emits: ["deleting"],
  props: ["request"],

  data() {
    return {
      error: null,
    };
  },

  methods: {
    clearError() {
      this.error = false;
    },

    async deleteRequest() {
      if (confirm("Do you Really wonna to Delete this Requstes?")) {
        this.$emit("deleting", true);
        try {
          await this.$store.dispatch("requests/deleteRequest", this.request.id);
        } catch (error) {
          this.error = error.message;
        }

        this.$emit("deleting", false);
      } else {
        return;
      }
    },
  },

  computed: {
    mailTo() {
      return "mailTo:" + this.request.email;
    },
  },
};
</script>

<style scoped>
p > span {
  font-weight: 600;
}
</style>
