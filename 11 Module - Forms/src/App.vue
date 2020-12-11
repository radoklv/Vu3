<template>
  <the-form></the-form>
</template>

<script>
import TheForm from './components/TheForm.vue';

export default {
  components: {
    TheForm
  }  
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  background-color: #292929;
}

button {
  font: inherit;
  color: rgb(88, 88, 88);
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  outline: none;
}



button.blue{
  padding: 0.5rem;
  margin: 0 0.5rem;
  background-color: rgb(88, 216, 248);
}

button.green{
  background-color: rgb(53, 245, 110);
}

button.red{
  background-color: rgb(255, 60, 60);
}
</style>