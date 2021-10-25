<template>
  <div class="page-contain single-product">
    <div class="container">
      <!-- Main content -->
      <div id="main-content" class="main-content">
        <!-- summary info -->
        <div class="sumary-product single-layout">
          <div class="media">
            <ul
              class="biolife-carousel slider-for"
              data-slick='{"arrows":false,"dots":false,"slidesMargin":30,"slidesToShow":1,"slidesToScroll":1,"fade":true,"asNavFor":".slider-nav"}'
            >
              <li v-for="image in product.images" :key="image.id">
                <img
                  :src="getImageUrl(image.image)"
                  alt=""
                  width="500"
                  height="500"
                />
              </li>
            </ul>
            <ul
              class="biolife-carousel slider-nav"
              data-slick='{"arrows":false,"dots":false,"centerMode":false,"focusOnSelect":true,"slidesMargin":10,"slidesToShow":4,"slidesToScroll":1,"asNavFor":".slider-for"}'
            >
              <li v-for="image in product.images" :key="image.id">
                <img
                  :src="getImageUrl(image.image)"
                  alt=""
                  width="88"
                  height="88"
                />
              </li>
            </ul>
          </div>
          <div class="product-attribute">
            <h3 class="title">{{ product.name }}</h3>
            <div class="rating">
              <b class="category">{{ category }}</b>
            </div>
            <p class="excerpt">
              {{ product.description }}
            </p>
            <div class="price">
              <ins
                ><span class="price-amount"
                  ><span class="currencySymbol">MK</span
                  >{{ product.price }}</span
                ></ins
              >
            </div>
          </div>
          <div class="action-form">
            <div class="quantity-box">
              <span class="title">Quantity:</span>
              <div class="qty-input">
                <input
                  type="text"
                  name="qty12554"
                  value="1"
                  data-max_value="20"
                  data-min_value="1"
                  data-step="1"
                />
                <a href="#" class="qty-btn btn-up"
                  ><i class="fa fa-caret-up" aria-hidden="true"></i
                ></a>
                <a href="#" class="qty-btn btn-down"
                  ><i class="fa fa-caret-down" aria-hidden="true"></i
                ></a>
              </div>
            </div>
            <div class="buttons">
              <a
                v-if="clicked"
                class="btn add-to-cart-btn"
                @click="addToCart(product)"
                >add to cart</a
              >
            </div>
            <div class="social-media">
              <ul class="social-list">
                <li>
                  <a href="#" class="social-link"
                    ><i class="fa fa-twitter" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="social-link"
                    ><i class="fa fa-facebook" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="social-link"
                    ><i class="fa fa-pinterest" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="social-link"
                    ><i class="fa fa-share-alt" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="#" class="social-link"
                    ><i class="fa fa-instagram" aria-hidden="true"></i
                  ></a>
                </li>
              </ul>
            </div>
            <div class="acepted-payment-methods">
              <ul class="payment-methods">
                <li>
                  <img
                    src="../assets/assets/images/card1.jpg"
                    alt=""
                    width="51"
                    height="36"
                  />
                </li>
                <li>
                  <img
                    src="../assets/assets/images/card2.jpg"
                    alt=""
                    width="51"
                    height="36"
                  />
                </li>
                <li>
                  <img
                    src="../assets/assets/images/card3.jpg"
                    alt=""
                    width="51"
                    height="36"
                  />
                </li>
                <li>
                  <img
                    src="../assets/assets/images/card4.jpg"
                    alt=""
                    width="51"
                    height="36"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Product",
  components: {},
  data() {
    return {
      productId: this.$route.params.id,
      category: "",
      product: {},
      clicked: true,
    };
  },

  methods: {
    getImageUrl(url) {
      url = "http://127.0.0.1:8000/media" + url.slice(21);
      return url;
    },
    addToCart(item) {
      this.$store.commit("addProductToCart", item);
      this.clicked = false;
    },
  },

  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/v1/products/" + this.productId)
      .then((response) => (this.product = response.data))
      .then(() => {
        this.category = this.product.category.name;
      });
  },
};
</script>