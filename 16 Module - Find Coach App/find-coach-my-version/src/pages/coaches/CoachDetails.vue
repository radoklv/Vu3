<template>
  <base-card>
    <h2>{{ fullName }}</h2>
    <h4>{{ rate }}</h4>
  </base-card>

  <base-card>
    <h5>Interested? Contact {{ fullName }} now!</h5>
    <base-button link :to="coachLink">Contact</base-button>
    <router-view></router-view>
  </base-card>

  <base-card>
    <base-badge
      v-for="(area, index) in areas"
      :key="index"
      :area="area"
    ></base-badge>
    <p>{{ description }}</p>
  </base-card>
</template>

<script>
export default {
  props: ["id"],

  data() {
    return {
      selectedCoach: null,
    };
  },

  created() {
    this.selectedCoach = this.$store.getters["coaches/getCoaches"].find(
      (coach) => coach.id == this.id
    );
  },

  computed: {
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },

    rate() {
      return "$" + this.selectedCoach.hourlyRate + "/h";
    },

    areas() {
      return this.selectedCoach.areas;
    },

    description() {
      return this.selectedCoach.description;
    },

    coachLink() {
      return "/coaches/" + this.id + "/contact";
    },
  },
};
</script>

<style scoped>
.base-card_body {
  margin: 15px 0 0 0;
}
</style>
