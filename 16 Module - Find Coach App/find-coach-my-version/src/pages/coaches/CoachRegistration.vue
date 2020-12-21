<template>
  <div>
    <base-dialog title="Error" :show="!!error" @close="clearError">
      {{ error }}
    </base-dialog>
    <base-spinner v-if="isLoading && error != null"></base-spinner>
    <base-card>
      <h2>Register as Coach</h2>
      <coach-form @formData="addCoach"></coach-form>
    </base-card>
  </div>
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
    clearError(){
      this.error = null
    },
    
    async addCoach(coachData) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("coaches/addCoach", coachData);
      } catch (error) {
        this.error = error.message;
      }
      this.isLoading = false;
      this.$router.replace("/");
    },
  },
};
</script>

<style></style>
