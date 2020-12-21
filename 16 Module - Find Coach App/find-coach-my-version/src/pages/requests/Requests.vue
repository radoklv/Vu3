<template>
  <div>
    <base-dialog :show="!!error" title="Error" @close="clearError">
      {{ error }}
    </base-dialog>

    <base-spinner v-if="isLoading && error != null"></base-spinner>

    <base-card>
      <h2>Requests Page</h2>
      <base-button mode="outline" @click="loadRequests(true)">Refresh</base-button>
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
  </div>
</template>

<script>
import RequestItem from "../../components/requests/RequestItem";
export default {
  components: {
    RequestItem,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },

  created() {
    this.loadRequests();
  },

  methods: {
    clearError() {
      this.error = false;
    },

    async loadRequests(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("requests/fetchRequests", {forceRefresh: refresh});
      } catch (error) {
        this.error = error
      }

      this.isLoading = false;
    },

    deletingEvent(event) {
      this.isLoading = event;
    },
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
