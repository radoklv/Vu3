<template>
  <base-card>
    <div class="actions">
      <base-button mode="outline">Refresh</base-button>
      <base-button mode="outline" link to="/registration">Register As Coach</base-button>
    </div>
    <ul>
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
export default {
  components: {
    CoachItem,
  },

  computed: {
    coaches() {
      return this.$store.getters["coaches/getCoaches"];
    },
  },
};
</script>

<style scoped>
  .actions{
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
  }

</style>
