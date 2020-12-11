<template>
  <form @submit.prevent="addCoach">
    <div class="form-control" :class="{invalid: !firstName.isValid}">
      <label for="firstname">First Name</label>
      <input type="text" id="firstname" v-model="firstName.val" @change="clearValidity('firstName')" />
    </div>

    <div class="form-control" :class="{invalid: !lastName.isValid}">
      <label for="lastname">Last Name</label>
      <input type="text" id="lastname" v-model="lastName.val"  @change="clearValidity('lastName')"/>
    </div>

    <div class="form-group" :class="{invalid: !areas.isValid}">
      <div class="form-control" >
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model.trim="areas.val"
          @change="clearValidity('areas')"
        />
        <label for="frontend">Frontend</label>
      </div>

      <div class="form-control">
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model.trim="areas.val"
          @change="clearValidity('areas')"
        />
        <label for="backend">Backend</label>
      </div>

      <div class="form-control">
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model.trim="areas.val"
          @change="clearValidity('areas')"
        />
        <label for="career">Career</label>
      </div>
    </div>

    <div class="form-control" :class="{invalid: !hourlyRate.isValid}">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        id="rate"
        name="rate"
        v-model.trim="hourlyRate.val"
        @change="clearValidity('hourlyRate')"
      />
    </div>

    <div class="form-control" :class="{invalid: !description.isValid}">
      <label for="description">Description</label>
      <textarea
        name="description"
        id="description"
        v-model.trim="description.val"
        @change="clearValidity('description')"
      ></textarea>
      <p v-if="!description.isValid">Field need at least 10 characters!</p>
    </div>

    <div class="form-action">
      <h4 v-if="!isFormValid">There are invalid fields!</h4>
      <base-button mode="fill">Submit</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      isFormValid: true,

      firstName: {
        val: "",
        isValid: true,
      },

      lastName: {
        val: "",
        isValid: true,
      },

      areas: {
        val: [],
        isValid: true,
      },

      hourlyRate: {
        val: 0,
        isValid: true,
      },

      description: {
        val: "",
        isValid: true,
      },
    };
  },

  methods: {

    clearValidity(input){
        this[input].isValid = true
    },

    validateForm() {
      this.isFormValid = true;
      this.firstName.isValid = true;
      this.lastName.isValid = true;
      this.areas.isValid = true;
      this.description.isValid = true;
      this.hourlyRate.isValid = true;

      if (this.firstName.val == '') {
        this.firstName.isValid = false;
        this.isFormValid = false;
      }

      if (this.lastName.val == '') {
        this.lastName.isValid = false;
        this.isFormValid = false;
      }

      if (this.areas.val.length <= 0 ) {
        this.areas.isValid = false;
        this.isFormValid = false;
      }

      if (this.hourlyRate.val <= 0) {
        this.hourlyRate.isValid = false;
        this.isFormValid = false;
      }

      if (this.description.val.length < 10) {
        this.description.isValid = false;
        this.isFormValid = false;
      }

    },

    addCoach(){
        this.validateForm()

        if(!this.isFormValid){
            return
        }
        
        const formData = {
          firstName: this.firstName.val,
          lastName: this.lastName.val,
          areas: this.areas.val,
          description: this.description.val,
          hourlyRate: this.hourlyRate.val
        }

        this.$emit('formData', formData)
    }
  },
};
</script>

<style scoped>
.form-control {
  text-align: center;
  height: auto;
  margin: 0 0 15px 0;
}

.form-control label {
  display: block;
  font-weight: 600;
}

.form-control input,
.form-control textarea {
  border-radius: 10px;
  border: 1px solid rgb(156, 156, 156);
  padding: 10px;
}

.form-control input:focus,
.form-control textarea:focus {
  background-color: rgb(190, 255, 195);
  outline: none;
}

.form-control textarea {
  width: 100%;
}

.form-group {
  display: flex;
  flex-direction: row;
}

.form-group label {
  display: inline-block;
  margin: 0 0 0 10px;
}

.form-action {
  text-align: center;
}

.invalid label{
    color: red;
}

.invalid input,
.invalid textarea{
    background-color: rgb(251, 173, 173);
}


</style>
