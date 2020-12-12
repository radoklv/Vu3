<template>
  <base-card>
    <h2>Requests Page</h2>
    <h5 v-if="!haveRequests">There is No Requests!</h5>
    <ul v-else>
      <li v-for="request in requests" :key="request.id">
       {{request.coachId}} {{ request.email }} {{ request.message }}
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

    haveRequests(){
      return this.$store.getters["requests/haveRequests"]
    }
  },
};
</script>

<style></style>
