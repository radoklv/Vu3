<template>
  <BaseDialog v-if="inputIsInvalid" title="Hello" @close-event="inputIsInvalid = false">
    <template #default>
      <p>All inputs need to be filled with information!</p>
    </template>
  </BaseDialog>
  <BaseCard>
    <form @submit.prevent="submitForm()">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" ref="titleInput" />
      </div>

      <div class="form-control">
        <label for="desc">Description</label>
        <input type="text" id="desc" name="desc" ref="descInput" />
      </div>

      <div class="form-control">
        <label for="link">Link</label>
        <input type="text" id="link" name="link" ref="linkInput" />
      </div>

      <BaseButton type="submit">Add</BaseButton>
    </form>
  </BaseCard>
</template>

<script>
export default {
  inject: ['addResource'],

  data() {
    return {
      inputIsInvalid: false
    };
  },

  methods: {
    submitForm() {
      const title = this.$refs.titleInput.value;
      const desc = this.$refs.descInput.value;
      const link = this.$refs.descInput.value;

      if (title.trim() === '' || desc.trim() === '' || link.trim() === '') {
        this.inputIsInvalid = true;
        return;
      } else {
        this.addResource(title, desc, link);
      }
    },

    // closeDialog() {
    //   this.inputIsInvalid = false;
    // }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
