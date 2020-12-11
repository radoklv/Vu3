<template>
  <header class="header">
    <div class="container">
      <div class="header_logo">
        <router-link to="/products">Vue Shop</router-link>
      </div>

      <div class="header_nav">
        <ul>
          <li>
            <router-link to="/products">Products</router-link>
          </li>

          <li>
            <router-link to="/cart">Cart</router-link>
            <base-badge mode="elegant">{{cartQty}}</base-badge>
          </li>
        </ul>
      </div>

      <div class="header_action">
        <base-button>Login</base-button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getQuantity"]),

    cartQty() {
      return this.getQuantity;
    },
  },
};
</script>

<style scoped>
.header {
  padding: 10px 0;
}

.header .container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.header_logo a {
  border-bottom: none !important;
  font-size: 2rem;
}

.header .header_nav ul {
  display: flex;
  flex-direction: row;
}

.header .header_nav a {
  display: inline-block;
  padding: 5px 10px;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 600;
  color: #45006d;
}

.header .router-link-active {
  border-bottom: 2px solid #45006d;
}
</style>
