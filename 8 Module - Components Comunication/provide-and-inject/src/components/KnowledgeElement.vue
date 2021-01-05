<template>
  <li>
    <h3>{{ topic.name }}</h3>
    <p>{{ topic.description }}</p>
    <button @click="selectTopic(topic.id)">Learn More</button>
  </li>
</template>

<script>
export default {
  inject: ['selectTopic'],
  props: ['topic'],
};
</script>