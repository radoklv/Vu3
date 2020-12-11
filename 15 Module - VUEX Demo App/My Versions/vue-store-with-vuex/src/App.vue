<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader";

export default {
  components: {
    TheHeader,
  },


  data() {
    return {
      isLoggedIn: false,
      // cart: { items: [], total: 0, qty: 0 },
    };
  },

  // methods:{
  //   addProductToCart(item){

  //     const productInCartIndex = this.cart.items.findIndex( el => el.id === item.id)

  //     if(productInCartIndex >= 0){
  //       console.log('Producta veche e dobaven vednuj')
  //       this.cart.items[productInCartIndex].qty++
  //     }else{
  //       const newItem ={
  //         id: item.id,
  //         title: item.title,
  //         image: item.image,
  //         price: item.price,
  //         qty: 1
  //       }
  //       this.cart.items.push(newItem)
  //     }

  //     this.cart.total += item.price;
  //     this.cart.qty++
  //   },

  //   deleteProductFromCart(id){
  //     const productInCartIndex = this.cart.items.findIndex(el => el.id === id)
  //     this.cart.qty--
  //     this.cart.total -= this.cart.items[productInCartIndex].price
  //     this.cart.items.splice(productInCartIndex, 1)

  //   }
  // }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

ul{
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
