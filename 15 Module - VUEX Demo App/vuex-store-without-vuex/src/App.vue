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

  provide(){
    return{
      products: this.products,
      addProductToCart: this.addProductToCart,
      deleteProductFromCart: this.deleteProductFromCart,
      cart: this.cart
    }
  },

  data() {
    return {
      isLoggedIn: false,

      products: [
        {
          id: "p1",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg",
          title: "Book Collection",
          description:
            "A collection of must-read books. All-time classics included!",
          price: 99.99,
        },
        {
          id: "p2",
          image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg",
          title: "Mountain Tent",
          description: "A tent for the ambitious outdoor tourist.",
          price: 129.99,
        },
        {
          id: "p3",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
          title: "Food Box",
          description:
            "May be partially expired when it arrives but at least it is cheap!",
          price: 6.99,
        },
      ],
      cart: { items: [], total: 0, qty: 0 },
    };
  },

  methods:{
    addProductToCart(item){

      const productInCartIndex = this.cart.items.findIndex( el => el.id === item.id)

      if(productInCartIndex >= 0){
        console.log('Producta veche e dobaven vednuj')
        this.cart.items[productInCartIndex].qty++
      }else{
        const newItem ={
          id: item.id,
          title: item.title,
          image: item.image,
          price: item.price,
          qty: 1
        }
        this.cart.items.push(newItem)
      }

      this.cart.total += item.price;
      this.cart.qty++
    },

    deleteProductFromCart(id){
      const productInCartIndex = this.cart.items.findIndex(el => el.id === id)
      this.cart.qty--
      this.cart.total -= this.cart.items[productInCartIndex].price
      this.cart.items.splice(productInCartIndex, 1)

    }
  }
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
