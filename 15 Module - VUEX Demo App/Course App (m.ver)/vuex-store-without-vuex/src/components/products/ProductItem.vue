<template>
  <li class="product">
    <div class="row">
      <div class="col-12 col-md-4">
        <div class="product_image">
          <img :src="product.image" alt="Product Picture" />
        </div>
      </div>

      <div class="col-12 col-md-8">
        <div class="product_descr">
          <h4>{{ product.title }}</h4>
          <base-badge mode="highlight">${{product.price}}</base-badge>
          <p>{{product.description}}</p>
        </div>
      </div>

      <div class="col-12">
        <div class="product_action">
          <base-button @click="addToCart">Add to Cart</base-button>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["product"],
  inject: ["addProductToCart"],

  methods:{
      addToCart(){

          const item = {
              id: this.product.id,
              image: this.product.image,
              title: this.product.title,
              price: this.product.price
          }

        this.addProductToCart(item)
      
      }
  }
};
</script>

<style scoped>

li{
    margin: 1.5rem auto;
}
.product {
  margin-bottom: 15px;
  padding: 10px;
  box-shadow: 0 0 5px #000;
}

.product:last-child {
  margin-bottom: 0;
}

.product_image img {
    width: 100%;;
  border-radius: 10px;
}

.product_action{
    text-align: center;
}
</style>
