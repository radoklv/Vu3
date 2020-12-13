<template>
  <base-card>
    <coaches-filter @updatedFilter="updateFilter"></coaches-filter>
  </base-card>
  <base-card>
    <div class="actions">
      <base-button mode="outline">Refresh</base-button>
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
      filter: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },

  created(){
      this.loadCoaches()
  },

  methods:{
    updateFilter(newFilter){
      this.filter = newFilter
    },

    async loadCoaches(){
      await this.$store.dispatch('coaches/fetchCoaches')
    }
  },

  computed: {
    coaches() {
      // return this.$store.getters["coaches/getCoaches"];

      return this.$store.getters['coaches/getCoaches'].filter(coach =>{
        if(coach.areas.includes('frontend') && this.filter.frontend == true){
          return true
        }

        if(coach.areas.includes('backend') && this.filter.backend == true){
          return true
        }

        if(coach.areas.includes('career') && this.filter.career == true){
          return true
        }

        return false
      })
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
