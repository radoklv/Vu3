<template>
  <section class="base-card">
      <slot></slot>
  </section>
</template>


<style scoped>
    .base-card{
        box-shadow: 0 0 10px #000;
        border-radius: 20px;
        padding: 20px;
        background-color: rgb(233, 251, 231);
        margin: 0 0 15px;
    }
</style>