<template>
  <section class="cart-page">
    <div class="container">
      <div class="cart-page_head">
        <h2>Your Cart</h2>
        <p>
          Total Amout:
          <base-badge mode="elegant">{{ totalToFixed }}</base-badge>
        </p>
      </div>
      <div class="cart-page_body">
        <ul class="row">
          <cart-item
            v-for="item in cart.items"
            :key="item.id"
            :item="item"
          ></cart-item>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import CartItem from "../components/cart/CartItem";
export default {
  components: {
    CartItem,
  },
  inject: ["cart"],

  computed: {
    totalToFixed() {
      return this.cart.total.toFixed(2);
    },
  },
};
</script>

<style scoped>
.cart-page_head {
  text-align: center;
}

.cart-page_head h2 {
  border-bottom: 1px solid #3b3b3b;
}
</style>
