<template>
  <div>
    <section>
      <base-card>
        <header>
          <h2>Requests Recieved</h2>
        </header>
        <base-dialog :show="!!error" title="Error" @close="clearError">{{
          error
        }}</base-dialog>

        <base-spinner v-if="isLoading && error != null"></base-spinner>

        <ul v-else-if="hasRequests && !isLoading">
          <requests-item
            v-for="request in recievedRequests"
            :key="request.id"
            :email="request.email"
            :message="request.message"
          ></requests-item>
        </ul>

        <h3 v-else>You haven't recieved any requests yet!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import RequestsItem from "../../components/requests/RequestItem";

export default {
  components: {
    RequestsItem,
  },

  data() {
    return {
      isLoading: false,
      error: null,
    };
  },

  created() {
    this.fetchRequests();
  },

  methods: {
    async fetchRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("requests/loadRequests");
      } catch (error) {
        this.error = error.message || "Failed To Fetch";
      }

      this.isLoading = false;
    },

    clearError() {
      this.error = null;
    },
  },

  computed: {
    recievedRequests() {
      return this.$store.getters["requests/getRequests"];
    },

    hasRequests() {
      return this.$store.getters["requests/hasRequests"];
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
