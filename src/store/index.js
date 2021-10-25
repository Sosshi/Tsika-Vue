import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
    token: null,
  },
  mutations: {
    addProductToCart(state, product) {
      state.cart.push(product)
    },

    removeItem(state, position) {
      state.cart.splice(position, 1)
    }
  },
  actions: {},
  modules: {},
  getters: {

    getProductsIDs: state => {
      let idArray = []
      for (let item of state.cart) {
        idArray.push(item.id)
      }
      return idArray
    },

    getCartItemsTotal: state => {
      let total = 0
      for (let item of state.cart) {
        total = total + item.quantity
      }
      return total
    },
    totalPrice: state => {
      let price = 0
      for (let item of state.cart) {
        if (item.quantity) {
          price = price + (parseFloat(item.price) * item.quantity)

        } else { price = price + parseFloat(item.price) }

      }
      return price;
    },

    shipmentCost: state => {
      let cost = 0
      for (let item of state.cart) {
        if (item.quantity) {
          cost = cost + (parseFloat(item.shipment_method_cost[0].price) * item.quantity)
        } else {
          cost = cost + parseFloat(item.shipment_method_cost[0].price)
        }

      }
      return cost;
    },

    totalCost: (state, getters) => {
      return parseFloat(getters.shipmentCost) + parseFloat(getters.totalPrice)
    },

    isExist: (state) => (id) => {
      for (let item of state.cart) {
        if (item.id == id) {
          return true
        }
      }
      return false
    }
  }
});
