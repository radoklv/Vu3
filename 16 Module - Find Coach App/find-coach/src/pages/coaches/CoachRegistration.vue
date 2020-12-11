<template>
  <div>
    <base-card>
      <h2>Register as a coach now</h2>
      <coach-form @form-data="addNewData"></coach-form>
      <base-spinner v-if="isLoading"></base-spinner>
    </base-card>
  </div>
</template>

<script>
import CoachForm from "../../components/coach/CoachForm";
export default {
  data() {
    return {
      isLoading: false,
    };
  },

  components: {
    CoachForm,
  },

  methods: {
    async addNewData(data) {
      this.isLoading = true;
      await this.$store.dispatch("coaches/addCoach", data);
      this.isLoading = false;
      this.$router.replace("/coaches");
    },
  },
};
</script>

<style></style>
