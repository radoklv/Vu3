<template>
  <button @click="redirectPage">
    Redirect to another page programatically
  </button>

  <button @click="saveChanges">
    Save Changes
  </button>

  <span>Data {{ isDataSaved == true ? 'is' : 'is not' }} saved! </span>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['users'],

  data() {
    return {
      isDataSaved: false
    };
  },

  methods: {
    redirectPage() {
      this.$router.push('/teams');
    },

    saveChanges() {
      this.isDataSaved = true;
    }
  },

  beforeRouteEnter(_, _2, next) {
    console.log('beforeRouteEnter() called from UsersList cmp');
    next();
  },

  beforeRouteLeave(_, _2, next) {
    console.log('beforeRouteLeave() called from UserList cmp')
    if (this.isDataSaved) {
      next();
    } else {
      const isConfirmed = confirm(
        'You have unsaved changes. Do you really wanna to exit?'
      );
      next(isConfirmed);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
