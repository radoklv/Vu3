<template>
  <section class="products">
    <div class="container">
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
import { mapGetters } from 'vuex'

export default {
  components: { ProductItem },

  computed:{
    ...mapGetters([
      'getProducts'
    ]),
    products(){
      return this.getProducts
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  max-width: 40rem;
  margin: 2rem auto;
}
</style>
