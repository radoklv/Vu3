<template>
  <div>
    <base-dialog title="Error" :show="!!error" @close="closeDialog">
      {{ error }}
    </base-dialog>

    <base-spinner v-if="isLoading && error != null"></base-spinner>

    <base-card>
      <coaches-filter @updatedFilter="updateFilter($event)"></coaches-filter>
    </base-card>
    <base-card>
      <div class="actions">
        <base-button mode="outline" @click="refreshList">Refresh</base-button>
        <base-button v-if="!isCoach" mode="outline" link to="/registration"
          >Register As Coach</base-button
        >
      </div>
      <h2 v-if="!hasCoaches">There is no Coaches!</h2>
      <ul v-else>
        <coach-item
          v-for="coach in coaches"
          :key="coach.id"
          :coach="coach"
        ></coach-item>
      </ul>
    </base-card>
  </div>
</template>

<script>
import CoachItem from "../../components/coaches/CoachItem";
import CoachesFilter from "../../components/coaches/CoachesFilter";
export default {
  components: {
    CoachItem,
    CoachesFilter,
  },

  data() {
    return {
      isLoading: true,

      error: null,

      filter: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },

  created() {
    this.loadCoaches();
  },

  methods: {
    refreshList() {
      this.$store.dispatch("resetTimestamp");
      this.$store.dispatch("fetchCoaches");
    },

    updateFilter(newFilter) {
      this.filter = newFilter;
    },

    async loadCoaches() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("coaches/fetchCoaches");
      } catch (error) {
        this.error = error.message;
      }

      this.isLoading = false;
    },

    closeDialog() {
      this.error = null;
    },
  },

  computed: {
    coaches() {
      return this.$store.getters["coaches/getCoaches"].filter((coach) => {
        if (coach.areas.includes("frontend") && this.filter.frontend == true) {
          return true;
        }

        if (coach.areas.includes("backend") && this.filter.backend == true) {
          return true;
        }

        if (coach.areas.includes("career") && this.filter.career == true) {
          return true;
        }

        return false;
      });
    },

    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },

    isCoach() {
      return this.$store.getters["coaches/isCoach"];
    },
  },
};
</script>

<style scoped>
.actions {
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
}
</style>
