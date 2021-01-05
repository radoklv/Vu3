<template>
  <ul>
    <LearningResource
      v-for="res in storedResourses"
      :key="res.id"
      :resource="res"
    >
    </LearningResource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource';

export default {
  inject: ['storedResourses'],

  components: {
    LearningResource
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}

</style>
