<template>
  <header class="header row">
    <div class="header_logo col-12 col-md-6">
      <router-link to="/">Coach Finder by Rado</router-link>
    </div>

    <ul class="header_nav col-12 col-md-6">
      <li>
        <router-link to="/coaches">Coaches</router-link>
      </li>

      <li v-if="isLoggedIn">
        <router-link to="/requests">Requests</router-link>
      </li>

      <li v-else>
        <router-link to="/auth">Login</router-link>
      </li>

      <li v-if="isLoggedIn">
        <base-button mode="flat" @click="logout">Logout</base-button>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },

  methods:{
    logout(){
      this.$store.dispatch('logout')
      this.$router.replace('/')
    }
  }
};
</script>

<style scoped>
.header {
  padding: 20px;
  margin: 0 0 15px;
  background-color: #0cbb14;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header a {
  text-decoration: none;
}

.header_nav{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.header_logo a {
  font-size: 30px;
  font-weight: 600;
  color: #fff;
}


.header_nav li a {
  padding: 7px 10px 10px;
  font-size: 25px;
  color: #fff;
  margin: 0 5px;
}
.header_nav li button{
  font-size: 25px;
}

.header_nav a:hover,
.header_nav a.active {
  background-color: #018f08;
  border-radius: 10px;
}


@media only screen and (max-width: 500px) {
 .header_logo {
   text-align: center;
 }
}
</style>
