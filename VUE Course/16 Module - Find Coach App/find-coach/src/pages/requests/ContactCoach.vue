<template>
  <div>
    <base-spinner v-if="isLoading"></base-spinner>
    <base-dialog
      title="There is an Error"
      :show="!!error"
      @close="clearError"
      >{{ error }}</base-dialog
    >
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">Your Email</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>

      <div class="form-control">
        <label for="message">Message</label>
        <textarea id="message" rows="5" v-model.trim="message"></textarea>
      </div>

      <div class="actions">
        <base-button>Send Message</base-button>
        <p v-if="!isFormValid">There are invalid fields!</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["id"],

  data() {
    return {
      isLoading: false,
      email: "",
      message: "",
      isFormValid: true,
      error: null,
    };
  },

  methods: {
    async submitForm() {
      this.isFormValid = true;

      if (this.email == "" || !this.email.includes("@") || this.message == "") {
        this.isFormValid = false;
        return;
      }

      const formData = {
        coachId: this.id,
        email: this.email,
        message: this.message,
      };

      this.isLoading = true;
      try {
        await this.$store.dispatch("requests/addRequest", formData);
      } catch (error) {
        this.error = error.message;
      }
      this.isLoading = false;

      if (this.error) {
        return;
      } else {
        this.$router.replace("/coaches");
      }
    },

    clearError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
