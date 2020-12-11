<template>
  <base-card>
    <li class="coach">
      <div class="coach_name">
        <h3>{{ fullName }}</h3>
      </div>

      <div class="coach_rate">
        <p>${{ coach.hourlyRate }}/hour</p>
      </div>

      <div class="coach-areas">
        <base-badge
          v-for="(area, index) in coach.areas"
          :key="index"
          :area="area"
        ></base-badge>
      </div>

      <div class="coach_action">
        <base-button link to="/contact" mode="flat">Contact</base-button>
        <base-button link :to="contactLink" mode="outline"
          >View Details</base-button
        >
      </div>
    </li>
  </base-card>
</template>

<script>
export default {
  props: ["coach"],

  computed: {
    fullName() {
      return this.coach.firstName + " " + this.coach.lastName;
    },

    contactLink() {
      return "/coaches/" + this.coach.id;
    },
  },
};
</script>

<style scoped>
.coach_name {
  display: flex;
  flex-direction: row;
}

.coach_rate p {
  font-size: 25px;
  margin-bottom: 0;
  font-weight: 600;
}

.coach_action {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
