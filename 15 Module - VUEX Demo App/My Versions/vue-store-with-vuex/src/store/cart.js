export default {
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },

  getters: {
    getItems(state) {
      return state.items;
    },

    getTotal(state) {
      return state.total;
    },

    getQuantity(state) {
      return state.qty;
    },
  },

  mutations: {
    addItem(state, payload) {
      const product = payload;
      const productInCartIndex = state.items.findIndex(
        (el) => el.prodId === product.id
      );

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          prodId: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          qty: 1,
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.total += product.price;
      console.table(state.items)
    },

    removeItem(state, payload) {
      const prodId = payload.id;
      const item = state.items.find(el => el.prodId == prodId);
      state.qty -= item.qty;
      state.total -= item.price * item.qty;
      state.items = state.items.filter(el => el.prodId != item.prodId);
    },
  },

  actions: {
    addItem(context, payload) {
      const prodId = payload.id;
      const products = context.rootGetters["getProducts"];
      const product = products.find((product) => product.id === prodId);
      context.commit("addItem", product);
    },

    removeItem(context, payload) {
      context.commit("removeItem", payload);
    },
  },
};
