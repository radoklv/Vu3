<template>
  <base-card>
    <base-dialog :show="!!error" @close="handleError">
      {{ error }}
    </base-dialog>

    <form @submit.prevent="submitForm">
      <div class="form-body">
        <div class="form-control" :class="{ invalid: !email.isValid }">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model.trim="email.val"
            @change="clearValidateError('email')"
          />
          <p v-if="!email.isValid">
            Email is Not Valid!
          </p>
        </div>

        <div class="form-control" :class="{ invalid: !password.isValid }">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model.trim="password.val"
            @change="clearValidateError('password')"
          />
          <p v-if="!password.isValid">
            Password need to be at leas 6 characters!
          </p>
        </div>

        <h3 v-if="!isFormValid">Form Is Not Valid!</h3>
      </div>

      <div class="form-action">
        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button mode="flat" @click.prevent="switchMode">{{
          switchModeButtonCaption
        }}</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      error: null,
      isLoading: false,
      mode: "login",
      isFormValid: true,

      email: {
        val: "",
        isValid: true,
      },

      password: {
        val: "",
        isValid: true,
      },
    };
  },


  computed: {
    submitButtonCaption() {
      if (this.mode == "login") {
        return "Login";
      } else {
        return "Sing Up";
      }
    },

    switchModeButtonCaption() {
      if (this.mode == "login") {
        return "Switch to Sign Up";
      } else {
        return "Switch to Login";
      }
    },
  },

  methods: {
    handleError() {
      this.error = null;
    },

    switchMode() {
      if (this.mode == "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },

    clearValidateError(input) {
      this[input].isValid = true;
    },

    validateForm() {
      this.isFormValid = true;
      this.email.isValid = true;
      this.password.isValid = true;

      if (this.email.val == "" && !this.email.val.includes("@")) {
        this.email.isValid = false;
        this.isFormValid = false;
      }

      if (this.password.val.length < 6) {
        this.password.isValid = false;
        this.isFormValid = false;
      }
    },

    async submitForm() {
      this.validateForm();

      if (!this.isFormValid) {
        return;
      }
      const userData = {
        email: this.email.val,
        password: this.password.val,
      };

      this.isLoading = true;
      try {
        if (this.mode == "login") {
          await this.$store.dispatch("login", userData);
        } else {
          await this.$store.dispatch("signup", userData);
        }
        const redirectUrl = '/' + (this.$route.query.redirect || 'coaches')
        this.$router.replace(redirectUrl);
      } catch (error) {
        this.error = error.message;
      }
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.form-control {
  height: auto;
  margin-bottom: 15px;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
}

.form-action {
  display: flex;
  justify-content: center;
}

.form-body h3 {
  text-align: center;
  color: red;
}

.invalid label {
  color: red;
}

.invalid input {
  background-color: #ffcaca;
  border-color: #fff0f0;
}
</style>
