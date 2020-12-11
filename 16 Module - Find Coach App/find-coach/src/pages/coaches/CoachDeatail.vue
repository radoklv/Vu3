<template>
  <div>
    <section>
      <base-card>
        <h2>{{ selectedCoach.firstName }} {{ selectedCoach.lastName }}</h2>
        <h3>${{ selectedCoach.hourlyRate }}/hour</h3>
      </base-card>
    </section>

    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>

        <router-view></router-view>
      </base-card>
    </section>

    <section>
      <base-card>
        <base-badge
          v-for="(area, index) in areas"
          :key="index"
          :title="area"
          :type="area"
        ></base-badge>

        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ["id"],

  data() {
    return {
      selectedCoach: null,
    };
  },

  computed: {
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },

    rate() {
      return "$ " + this.selectedCoach.hourlyRate + "/hour";
    },

    contactLink() {
      return this.$route.path + "/contact";
    },

    areas() {
      return this.selectedCoach.areas;
    },

    description() {
      return this.selectedCoach.description;
    },
  },

  created() {
    this.selectedCoach = this.$store.getters["coaches/getCoaches"].find(
      (coach) => coach.id == this.id
    );
  },
};
</script>

<style></style>
