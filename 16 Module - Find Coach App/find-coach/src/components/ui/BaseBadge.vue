<template>
  <span class="badge" :class="area">
    {{area.toUpperCase()}}
  </span>
</template>

<script>
export default {
  props: ["area"],
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin: 0 0.5rem 0.5rem 0;
}

.frontend {
  background-color: #3d008d !important;
  color: white;
}

.backend {
  background-color: #71008d;
  color: white;
}

.career {
  background-color: #8d006e;
  color: white;
}
</style>
