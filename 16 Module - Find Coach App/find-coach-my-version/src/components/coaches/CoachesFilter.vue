<template>
  <div class="form-group row">
    <div class="form-control col-12 col-md-4">
      <input
        type="checkbox"
        id="frontend"
        checked
        value="frontend"
        @change="changeFilter($event)"
      />
      <label for="frontend">Frontend</label>
    </div>

    <div class="form-control col-12 col-md-4">
      <input
        type="checkbox"
        id="backend"
        checked
        value="backend"
        @change="changeFilter($event)"
      />
      <label for="backend">Backend</label>
    </div>

    <div class="form-control col-12 col-md-4">
      <input
        type="checkbox"
        id="career"
        checked
        value="career"
        @change="changeFilter($event)"
      />
      <label for="career">Career</label>
    </div>
  </div>

  <div class="form-group-search">
    <label for="search">Search Coach by Name</label>
    <input type="text" id="search" v-model.trim="word" @keyup="search" />
  </div>
</template>

<script>
export default {
  emits: ["updatedFilter", "emittedWord"],

  data() {
    return {
      filter: {
        frontend: true,
        backend: true,
        career: true,
      },

      word: "",
    };
  },

  methods: {
    changeFilter() {
      const checkboxValue = event.target.defaultValue;
      const isChecked = event.target.checked;

      const updatedFilter = {
        ...this.filter,
        [checkboxValue]: isChecked,
      };

      this.filter = updatedFilter;
      this.$emit("updatedFilter", this.filter);
    },

    search() {
      this.$emit("emittedWord", this.word);
    },
  },
};
</script>

<style scoped>
.form-group {
  display: flex;
  flex-direction: row;
  margin: 0;
}

.form-group-search {
  text-align: center;
  margin: 15px 0;
}

.form-group-search label {
  display: block;
}

.form-control {
  text-align: center;
}

.form-control label {
  margin-left: 10px;
  font-weight: 600;
}
</style>
