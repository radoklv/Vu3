<template>
  <div>
    <base-dialog :show="!!error" title="An Error Occured" @close="clearError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <coach-filter @updated-filters="updatedFilters($event)"></coach-filter>
    </section>

    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadCoaches">Refresh</base-button>
          <base-button v-if="!isCoach" link to="/register"
            >Register as Coach</base-button
          >
        </div>

        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>

        <ul v-if="hasCoaches">
          <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :coach="coach"
          ></coach-item>
        </ul>
        <h3 v-else>There Is No Coaches!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachItem from "../../components/coach/CoachItem";
import CoachFilter from "../../components/coach/CoachFilter";

export default {
  components: {
    CoachItem,
    CoachFilter,
  },

  created() {
    this.loadCoaches();
  },

  data() {
    return {
      isLoading: false,
      error: null,
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },

  methods: {
    updatedFilters(filters) {
      this.filters = filters;
    },

    async loadCoaches() {
      this.isLoading = true;

      try {
        await this.$store.dispatch("coaches/loadCoaches");
      } catch (error) {
        this.error = error.message || "Somethong went wrong!";
      }
      this.isLoading = false;
    },

    clearError() {
      this.error = null;
    },
  },

  computed: {
    isCoach() {
      return this.$store.getters["coaches/isCoach"];
    },

    filteredCoaches() {
      const filteredCoaches = this.$store.getters["coaches/getCoaches"];
      return filteredCoaches.filter((coach) => {
        if (this.filters.frontend && coach.areas.includes("frontend")) {
          return true;
        }

        if (this.filters.backend && coach.areas.includes("backend")) {
          return true;
        }

        if (this.filters.career && coach.areas.includes("career")) {
          return true;
        }

        return false;
      });
    },

    hasCoaches() {
      return !this.isLoading && this.$store.getters["coaches/hasCoaches"];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
