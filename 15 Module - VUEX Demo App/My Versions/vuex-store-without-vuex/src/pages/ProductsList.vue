<template>
  <section class="products">
    <div class="container">
      <input type="text" v-model="lowered">
      <button @click="lowered=''">DELETE</button>
      <div>
<span>{{lowered.toLowerCase()}}</span>
      </div>
      
      <ul>
        <product-item
          v-for="product in products"
          :key="product.id"
          :product="product"
        ></product-item>
      </ul>
    </div>
  </section>
</template>

<script>
import ProductItem from "../components/products/ProductItem";
export default {
  data(){
    return{
      lowered: ''
    }
  },
  components: { ProductItem },
  inject: ["products"],
};
</script>

<style scoped>
ul {
  list-style: none;
  max-width: 40rem;
  margin: 2rem auto;
}
</style>
