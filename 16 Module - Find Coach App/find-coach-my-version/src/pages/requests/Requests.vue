<template>
  <base-card>
    <h2>Requests Page</h2>
    <h5 v-if="!haveRequests">There is No Requests!</h5>
    <ul v-else>
      <request-item
        v-for="request in requests"
        :key="request.id"
        :request="request"
      ></request-item>
    </ul>
  </base-card>
</template>

<script>
import RequestItem from "../../components/requests/RequestItem";
export default {
  components: {
    RequestItem,
  },

  created(){
    this.loadRequests()
  },

  methods: {
    async loadRequests(){
      await this.$store.dispatch('requests/fetchRequests')
    }
  },

  computed: {
    requests() {
      return this.$store.getters["requests/getRequests"];
    },

    haveRequests() {
      return this.$store.getters["requests/haveRequests"];
    },
  },
};
</script>

<style scoped>
p > span {
  font-weight: 600;
}
</style>
