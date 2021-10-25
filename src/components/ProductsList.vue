<template>
  <div class="product-category grid-style">
    <div class="row">
      <ul class="products-list">
        <li
          v-for="product in products"
          :key="product.name"
          class="product-item col-lg-2 col-md-3 col-sm-4 col-xs-6"
        >
          <div class="contain-product layout-default">
            <div class="product-thumb">
              <router-link
                :to="{ name: 'Product', params: { id: product.id } }"
                class="link-to-product"
              >
                <img
                  :src="getImageUrl(product.images[0].image)"
                  :alt="product.name"
                  style="height: 270px"
                  class="product-thumnail"
                />
              </router-link>
            </div>
            <div class="info">
              <b class="categories">{{ product.category.name }}</b>
              <h4 class="product-title">
                <a href="#" class="pr-name">{{ product.name }}</a>
              </h4>
              <div class="price">
                <ins
                  ><span class="price-amount"
                    ><span class="currencySymbol">MK</span
                    >{{ product.price - 1000 }}</span
                  ></ins
                >
                <del
                  ><span class="price-amount"
                    ><span class="currencySymbol">MK</span
                    >{{ product.price }}</span
                  ></del
                >
              </div>
              <div class="shipping-info">
                <p class="shipping-day">3-Day Shipping</p>
                <p class="for-today">Pree Pickup Today</p>
              </div>
              <div class="slide-down-box">
                <p class="message">
                  {{ product.description }}
                </p>
                <div class="buttons">
                  <a class="btn wishlist-btn"
                    ><i class="fa fa-heart" aria-hidden="true"></i
                  ></a>
                  <button
                    v-if="!this.$store.getters.isExist(product.id)"
                    @click="addToCart(product)"
                    class="btn add-to-cart-btn"
                  >
                    <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>add
                    to cart
                  </button>
                  <a class="btn compare-btn"
                    ><i class="fa fa-random" aria-hidden="true"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "ProductsList",
  props: {
    products: Array,
  },
  methods: {
    getImageUrl(url) {
      url = "http://127.0.0.1:8000/media" + url.slice(21);
      return url;
    },
    addToCart(item) {
      item.quantity = 1;
      this.$store.commit("addProductToCart", item);
      this.$toast.success(`Product added to Cart`);
    },
  },
};
</script>
  