<template>
  <span class="badge" :class="['badge--' + mode]">
      <slot></slot>
  </span>
</template>

<script>
export default {
    props:['mode']
}
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.3rem 1.25rem;
  background-color: #ccc;
  color: #292929;
  font-size: 1rem;
  border-radius: 30px;
}

.badge--highlight {
  background-color: #f0b800;
  color: black;
}

.badge--elegant {
  background-color: #45006d;
  color: white;
}
</style>