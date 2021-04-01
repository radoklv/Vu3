<template>
  <section>
    <BaseCard @submit.prevent="submitForm">
      <h1>How was your leaning experience?</h1>
      <form>
        <div class="form-control">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>

        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input
            type="radio"
            id="rating-poor"
            value="poor"
            v-model="choosenRating"
          />
          <label for="rating-poor">Poor</label>
        </div>

        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            value="average"
            v-model="choosenRating"
          />
          <label for="rating-average">Average</label>
        </div>

        <div class="form-control">
          <input
            type="radio"
            id="rating-great"
            value="great"
            v-model="choosenRating"
          />
          <label for="rating-great">Great</label>
        </div>
        <p v-if="isFormInvalid">One or more fields are not valid!</p>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <BaseButton>Submit</BaseButton>
      </form>
    </BaseCard>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      choosenRating: null,
      isFormInvalid: false,
      errorMessage: null,
    };
  },

  methods: {
    submitForm() {
      this.isFormInvalid = false;
      this.errorMessage = null;
      if (this.enteredName != "" && this.choosenRating != null) {
        const formData = {
          name: this.enteredName,
          rating: this.choosenRating,
        };

        fetch("https://module---http-default-rtdb.firebaseio.com/surveys.json", {
          method: "POST",
          headers: {
            "Content-Type": "application.json",
          },
          body: JSON.stringify(formData),
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Could not save data!");
            }
          })
          .catch((err) => {
            console.log(err);
            this.errorMessage = err.message;
          });
      } else {
        this.isFormInvalid = true;
        return;
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type="text"] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>
