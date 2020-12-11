<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :topic="topic"
      :key="topic.id"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  inject: ['topics'],
};
</script>