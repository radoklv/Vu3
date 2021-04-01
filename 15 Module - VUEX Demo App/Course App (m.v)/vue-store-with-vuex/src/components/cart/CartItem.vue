<template>
  <li class="col-12 col-md-4">
    <div class="item">
      <div class="item_image">
        <img :src="item.image" alt="title" />
      </div>

      <div class="item_title">
        <h3>{{ item.title }}</h3>
      </div>

      <div class="item_info">
        <p>
          Price per Item: <span>${{ item.price }}</span>
        </p>
        <p>
          Quantity: <span>{{ item.qty }}</span>
        </p>
      </div>

      <div class="item_total">
        <p>
          TOTAL: <span>{{ totalPrice }}</span>
        </p>
      </div>

      <div class="item_action">
        <base-button @click="deleteProduct">DELETE</base-button>
      </div>
    </div>
  </li>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["item"],

  computed: {
    totalPrice() {
      return (this.item.qty * this.item.price).toFixed(2);
    }
  },

  methods: {
    ...mapActions(['removeItem']),

    deleteProduct() {
      this.removeItem({id: this.item.prodId});
    },
  },
};
</script>

<style scoped>
.item {
  box-shadow: 0 0 5px #000;
  padding: 1rem;
  text-align: center;
}

.item_image {
  max-width: 10rem;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.5s ease-out;
}

.item_image:hover {
  border-radius: 5%;
  max-width: 12rem;
}

.item_image img {
  width: 100%;
  height: 100%;
}

.item_info {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.item span {
  font-weight: 600;
}

.item_total p {
  border-top: 1px solid #45006d;
  border-bottom: 2px solid #45006d;
}
</style>
