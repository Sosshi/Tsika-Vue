<template>
  <!--Hero Section-->
  <div class="hero-section hero-background">
    <h1 class="page-title">Organic Fruits</h1>
  </div>

  <div id="main-content" class="main-content">
    <div class="container">
      <!--Cart Table-->
      <div class="shopping-cart-container">
        <div class="row">
          <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
            <h3 class="box-title">Your cart items</h3>
            <form class="shopping-cart-form" action="#" method="post">
              <table class="shop_table cart-form">
                <thead>
                  <tr>
                    <th class="product-name">Product Name</th>
                    <th class="product-price">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="cart_item"
                    v-for="(product, index) in getCartItems"
                    :key="product.id"
                  >
                    <td class="product-thumbnail" data-title="Product Name">
                      <a class="prd-thumb" href="#">
                        <figure>
                          <img
                            width="113"
                            height="113"
                            :src="getImageUrl(product.images[0].image)"
                            alt="shipping cart"
                          />
                        </figure>
                      </a>
                      <a class="prd-name" href="#">{{ product.name }}</a>
                      <div class="action">
                        <button
                          @click="removeFromCart(index)"
                          href="#"
                          class="remove"
                        >
                          <a href="#"
                            ><i class="fa fa-trash-o" aria-hidden="true"></i
                          ></a>
                        </button>
                      </div>
                    </td>
                    <td class="product-price" data-title="Price">
                      <div class="price price-contain">
                        <ins
                          ><span class="price-amount"
                            ><span class="currencySymbol">MK</span
                            >{{ product.price - 1000 }}</span
                          ></ins
                        >
                      </div>
                    </td>
                  </tr>
                  <tr class="cart_item wrap-buttons">
                    <td class="wrap-btn-control" colspan="4">
                      <router-link to="/" class="btn back-to-shop"
                        >Back to Shop</router-link
                      >
                      <button
                        @click="clearAll"
                        class="btn btn-clear"
                        type="reset"
                      >
                        clear all
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
          <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div class="shpcart-subtotal-block">
              <div class="subtotal-line">
                <b class="stt-name"
                  >Subtotal
                  <span class="sub"
                    >({{ this.$store.getters.getCartItemsTotal }}ittems)</span
                  ></b
                >
                <span class="stt-price"
                  >MK{{ this.$store.getters.totalPrice }}</span
                >
              </div>
              <div class="subtotal-line">
                <b class="stt-name">Transport</b>
                <span class="stt-price"
                  >MK{{ this.$store.getters.shipmentCost }}</span
                >
              </div>

              <div class="subtotal-line">
                <b class="stt-name">Total Cost</b>
                <span class="stt-price"
                  >MK{{ this.$store.getters.totalCost }}</span
                >
              </div>
              <div class="btn-checkout">
                <button class="btn checkout" @click="checkout">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  components: {},
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    getCartItems() {
      return this.$store.state.cart;
    },
  },
  methods: {
    checkout() {
      console.log(this.$store.state.token);
      if (this.$store.state.token) {
        this.$router.push("/checkout");
      } else {
        this.$router.push("login");
      }
    },
    getImageUrl(url) {
      url = "http://127.0.0.1:8000/media" + url.slice(21);
      return url;
    },
    clearAll() {
      this.$store.state.cart = [];
    },
    removeFromCart(position) {
      return this.$store.commit("removeItem", position);
    },
  },
};
</script>