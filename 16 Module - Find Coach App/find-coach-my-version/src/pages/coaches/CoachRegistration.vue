<template>
  <base-dialog title="Error" v-if="error">
    {{error}}
  </base-dialog>
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
      error: null,
      isLoading: false,
    };
  },

  methods: {
    async addCoach(coachData) {
      this.isLoading = true;
      try{
        await this.$store.dispatch("coaches/addCoach", coachData);
      }catch(error){
        this.error = error.message || "Failed to Add Coaches from Database"
      }
      this.isLoading = false;
      this.$router.replace("/");
    },
  },
};
</script>

<style></style>
