<template>
  <base-card>
    <h2>Requests Page</h2>

    <ul>
      <li v-for="request in requests" :key="request.id">
        {{ request.email }} {{ request.message }}
      </li>
    </ul>
  </base-card>
</template>

<script>
export default {
  computed: {
    requests() {
      return this.$store.getters["requests/getRequests"];
    },
  },
};
</script>

<style></style>
