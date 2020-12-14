<template>
  <base-spinner v-if="isLoading"></base-spinner>
  <base-card>
    <h2>Requests Page</h2>
    <h5 v-if="!haveRequests">There is No Requests!</h5>
    <ul v-else>
      <request-item
        v-for="request in requests"
        :key="request.id"
        :request="request"
        @deleting="deletingEvent($event)"
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
  data(){
    return{
      isLoading: false
    }
  },

  created(){
    this.loadRequests()
  },

  methods: {

    async loadRequests(){
      this.isLoading = true;
      await this.$store.dispatch('requests/fetchRequests');
      this.isLoading = false;
    },

    deletingEvent(event){
      this.isLoading = event
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
