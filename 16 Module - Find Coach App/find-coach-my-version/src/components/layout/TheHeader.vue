<template>
  <header class="header">
      <div class="header_logo">
        <router-link to="/">Coach Finder by Rado</router-link>
      </div>

      <div class="header_nav">
        <router-link to="/coaches">Coaches</router-link>
        <router-link to="/requests">Requests</router-link>
      </div>
  </header>
</template>

<script>
export default {};
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

.header_logo a{
  font-size: 30px;
  font-weight: 600;
  color: #fff
}

.header_nav a{
  padding: 7px 10px 10px;
  font-size: 25px;
  color: #fff;
  margin: 0 5px;
}


.header_nav a:hover,
.header_nav a.active{
  background-color: #018f08;
  border-radius: 10px;
}


</style>
