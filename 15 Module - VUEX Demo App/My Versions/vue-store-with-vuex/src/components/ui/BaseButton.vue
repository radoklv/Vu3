<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  padding: 3px 10px 5px;
  border-radius: 20px;
  color: #fff;
  border: 1px solid #45006d;
  background-color: #45006d;
  color: #fff;
  text-transform: uppercase;
  transition: all 0.2s ease-out;
}


button:hover {
  background-color: transparent;
  color: #45006d;
}

button:focus{
    outline: none
}
</style>
