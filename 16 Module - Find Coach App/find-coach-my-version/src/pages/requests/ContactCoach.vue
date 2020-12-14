<template>
  <base-spinner v-if="isLoading"></base-spinner>
  <form @submit.prevent="addRequest" class="form">
    <div class="form-body">
      <div class="form-control" :class="{ invalid: !email.isValid }">
        <label for="">Your Email</label>
        <input
          type="email"
          id="email"
          v-model.trim="email.val"
          @change="clearValidity('email')"
        />
      </div>

      <div class="form-control" :class="{ invalid: !message.isValid }">
        <label for="message">Your Message</label>
        <textarea
          name="message"
          id="message"
          rows="5"
          v-model.trim="message.val"
          @change="clearValidity('message')"
        ></textarea>
      </div>
    </div>

    <div class="form-action">
      <h3 v-if="!isFormValid">There are empty fields!</h3>
      <base-button mode="outline">Send</base-button>
    </div>
  </form>
</template>

<script>
export default {
  props: ["id"],

  data() {
    return {
      isLoading: false,

      isFormValid: true,

      email: {
        val: "",
        isValid: true,
      },

      message: {
        val: "",
        isValid: true,
      },
    };
  },

  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },

    validateForm() {
      this.email.isValid = true;
      this.message.isValid = true;
      this.isFormValid = true;

      if (this.email.val == "") {
        (this.email.isValid = false), (this.isFormValid = false);
      }

      if (this.message.val == "") {
        (this.message.isValid = false), (this.isFormValid = false);
      }
    },

    addRequest() {
      this.validateForm();

      if (!this.isFormValid) {
        return;
      }

      const reqData = {
        coachId: this.id,
        email: this.email,
        message: this.message,
      };
      
      this.isLoading = true;
      this.$store.dispatch('requests/addRequests', reqData)
      this.isLoading = false;
      this.$router.replace(`/coaches`)
    },
  },
};
</script>

<style scoped>
.form {
  margin: 15px;
}
.form-body {
  margin-bottom: 15px;
}

.form-action {
  text-align: center;
}

.form-action h3 {
  color: red;
}

.form-control {
  height: auto;
  margin-bottom: 15px;
}

.form-control label {
  display: block;
  font-weight: 600;
}

.form-control textarea {
  width: 100%;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  background-color: rgb(255, 198, 198);
}
</style>
