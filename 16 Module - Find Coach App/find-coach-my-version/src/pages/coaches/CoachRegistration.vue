<template>
  <base-spinner v-if="isLoading"></base-spinner>
  <base-card>
    <h2>Register as Coach</h2>
    <coach-form @formData="addCoach"></coach-form>
  </base-card>
</template>

<script>
import CoachForm from "../../components/coaches/CoachForm";
export default {
  components: {
    CoachForm,
  },

  data() {
    return {
      isLoading: false,
    };
  },

  methods: {
    async addCoach(coachData) {
      this.isLoading = true;
      await this.$store.dispatch("coaches/addCoach", coachData);
      this.isLoading = false;
      this.$router.replace("/");
    },
  },
};
</script>

<style></style>
