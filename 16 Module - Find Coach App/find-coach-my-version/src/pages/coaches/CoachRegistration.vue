<template>
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

  methods: {
      addCoach(coachData){
          this.$store.dispatch('coaches/addCoach', coachData),
          this.$router.replace('/')
      }
  },

};
</script>

<style></style>
