<template>
  <BaseTerms
    v-if="showTerms"
    @close="toggleTerms"
    @agree="confirmTerms = true"
    @not-agree="confirmTerms = false"
  >
    <template #default>
      <p>This are the terms you should agree with, to continue!</p>
    </template>
  </BaseTerms>
  <form @submit.prevent="submitForm">
    <div
      class="form-control"
      :class="{ invalidName: userNameValidity === 'invalid' }"
    >
      <label for="user-name">Your Name</label>
      <input
        id="user-name"
        name="user-name"
        type="text"
        v-model.trim="userName"
        @blur="validateNameInput"
      />
    </div>
    <div
      class="form-control"
      :class="{ invalidAge: userAgeValidity === 'invalid' }"
    >
      <label for="age">Your Age (Years)</label>
      <input
        id="age"
        name="age"
        type="number"
        v-model="userAge"
        @blur="validateAgeInput"
      />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="dropdown">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input
          id="interest-news"
          name="interest"
          type="checkbox"
          value="news"
          v-model="checkbox"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          name="interest"
          type="checkbox"
          value="tutorials"
          v-model="checkbox"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          id="interest-nothing"
          name="interest"
          type="checkbox"
          value="nothing"
          v-model="checkbox"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input
          id="how-video"
          name="how"
          type="radio"
          value="video"
          v-model="radiobutton"
        />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input
          id="how-blogs"
          name="how"
          type="radio"
          value="blog"
          v-model="radiobutton"
        />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input
          id="how-other"
          name="how"
          type="radio"
          value="other"
          v-model="radiobutton"
        />
        <label for="how-other">Other</label>
      </div>
    </div>
    
    <RatingControl v-model="rating"></RatingControl>

    <div class="form-control">
      <input
        type="checkbox"
        id="confirm-terms"
        name="confirm-terms"
        v-model="confirmTerms"
      />
      <label for="confirm-terms">Agree with the terms of use?</label>
      <button class="blue" @click.prevent="toggleTerms">Show Terms</button>
    </div>
    <div>
      <button class="green">Save Data</button>
    </div>
  </form>
</template>

<script>
import RatingControl from './RatingControl'
export default {
  components: {
    RatingControl
  },

  data() {
    return {
      userName: null,
      userAge: null,
      dropdown: 'google',
      checkbox: [],
      radiobutton: null,
      rating: null,
      
      confirmTerms: null,
      showTerms: false,


      userNameValidity: 'pending',
      userAgeValidity: 'pending'
    };
  },

  methods: {
    submitForm() {
      console.log("Username: "+this.userName);
      this.userName = null;
      
      console.log("Userage: "+this.userAge);
      this.userAge = null;

      console.log("Dropdown option: "+this.dropdown);
      this.dropdown = 'google';

      console.log("Checkbox option: "+this.checkbox);
      this.checkbox = [];

      console.log("Radiobutton option: "+this.radiobutton);
      this.radiobutton = null;

      console.log("Is terms confirmed: "+this.confirmTerms);
      this.confirmTerms = null;

      console.log("Rating: "+this.rating)
      this.rating = null
    },

    toggleTerms() {
      this.showTerms === true
        ? (this.showTerms = false)
        : (this.showTerms = true);
    },

    validateNameInput() {
      if (this.userName === null) {
        this.userNameValidity = 'invalid';
        console.log(this.userNameValidity);
      } else {
        this.userNameValidity = 'valid';
        console.log(this.userNameValidity);
      }
    },

    validateAgeInput() {
      if (this.userAge === null) {
        this.userAgeValidity = 'invalid';
      } else {
        this.userAgeValidity = 'valid';
      }
    }
  }
};
</script>
>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

.form-control.invalidName input,
.form-control.invalidAge input {
  border-color: red;
}

.form-control.invalidName label,
.form-control.invalidAge label {
  color: red;
}
</style>
