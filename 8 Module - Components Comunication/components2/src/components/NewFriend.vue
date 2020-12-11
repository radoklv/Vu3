<template>
  <section class="container add-new">
    <h1>Add New Frend</h1>
    <form @submit.prevent="addNewFriend">
      <div class="form-input">
        <label for="name">Name</label>
        <input type="text" name="name" v-model="name" />
      </div>

      <div class="form-input">
        <label for="phone">Phone</label>
        <input type="number" name="phone" v-model="phone" />
      </div>

      <div class="form-input">
        <label for="email">Email</label>
        <input type="email" name="email" v-model="email" />
      </div>

      <button>Add New Friend</button>
    </form>
  </section>
</template>

<script>
export default {
  emits:['new-friend'],

  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },

  methods: {
    getRandomID(){
        return Math.floor(Math.random() * (999 - 100 + 1) + 100);
    },
    addNewFriend() {
      const newFriend = {
        id: this.getRandomID(),
        name: this.name,
        phone: this.phone,
        email: this.email,
        isFavourite: false
      };

      this.$emit("new-friend", newFriend);
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
}

.add-new {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
</style>
