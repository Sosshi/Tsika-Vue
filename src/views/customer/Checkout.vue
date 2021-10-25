<template>
  <div class="page-contain checkout">
    <!-- Main content -->
    <div id="main-content" class="main-content">
      <div class="container sm-margin-top-37px">
        <div class="row">
          <!--checkout progress box-->
          <div class="col-lg-7 col-md-7 col-sm-6 col-xs-12">
            <div class="checkout-progress-wrap">
              <ul class="steps">
                <li class="step 2nd">
                  <div class="checkout-act">
                    <h3 class="title-box">
                      <span class="number">1</span>Shipping
                    </h3>
                  </div>
                  <form action="" name="frm-login">
                    <br />
                    <p class="form-row">
                      <label for="input_email">Phone Number</label><br />
                      <input
                        style="width: 400px"
                        type="text"
                        name="phone"
                        id="input_email"
                        v-model="pnumber"
                        placeholder="Your Phone number"
                      />
                    </p>

                    <p class="form-row">
                      <label for="input_email">Address</label><br />
                      <input
                        style="width: 400px"
                        type="text"
                        name="address"
                        id="input_email"
                        v-model="address"
                        placeholder="Your email"
                      />
                    </p>

                    <p class="form-row">
                      <label for="input_email"
                        >Any extra information you would like the seller to know
                        like size or color</label
                      ><br />
                      <textarea
                        style="width: 400px"
                        type="text"
                        name="email"
                        id="input_email"
                        v-model="extraInfo"
                        placeholder="Extra info"
                      />
                    </p>
                  </form>
                </li>
                <li class="step 3rd">
                  <div class="checkout-act">
                    <h3 class="title-box">
                      <span class="number">2</span>Payment
                    </h3>
                    <br />
                    <br />
                    <div>
                      <div id="v-model-radiobutton">
                        <input
                          type="radio"
                          id="one"
                          value="Aitel Money"
                          v-model="picked"
                        />
                        <label for="Airtel Money">Airtel Money</label>
                        <br />
                        <input
                          type="radio"
                          id="two"
                          value="Mpamba"
                          v-model="picked"
                        />
                        <label for="Mpamba">Mpamba</label>
                        <br />
                      </div>
                    </div>
                    <p class="btn-control">
                      <button class="btn" @click="completerOrder">
                        Make Payment
                      </button>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!--Order Summary-->
          <div
            class="
              col-lg-5 col-md-5 col-sm-6 col-xs-12
              sm-padding-top-48px sm-margin-bottom-0
              xs-margin-bottom-15px
            "
          >
            <div class="order-summary sm-margin-bottom-80px">
              <div class="title-block">
                <h3 class="title">Order Summary</h3>
                <a href="#" class="link-forward">Edit cart</a>
              </div>
              <div class="cart-list-box short-type">
                <span class="number"
                  >{{ this.$store.getters.getCartItemsTotal }} items</span
                >
                <ul class="cart-list">
                  <li
                    class="cart-elem"
                    v-for="product in this.$store.state.cart"
                    :key="product.id"
                  >
                    <div class="cart-item">
                      <div class="product-thumb">
                        <a class="prd-thumb" href="#">
                          <figure>
                            <img
                              :src="getImageUrl(product.images[0].image)"
                              width="113"
                              height="113"
                              alt="shop-cart"
                            />
                          </figure>
                        </a>
                      </div>
                      <div class="info">
                        <span class="txt-quantity">1X</span>
                        <a href="#" class="pr-name">{{ product.name }}</a>
                      </div>
                      <div class="price price-contain">
                        <ins
                          ><span class="price-amount"
                            ><span class="currencySymbol">MK</span
                            >{{ product.price }}</span
                          ></ins
                        >
                      </div>
                    </div>
                  </li>
                </ul>
                <ul class="subtotal">
                  <li>
                    <div class="subtotal-line">
                      <b class="stt-name">Subtotal</b>
                      <span class="stt-price"
                        >MK{{ this.$store.getters.totalPrice }}</span
                      >
                    </div>
                  </li>
                  <li>
                    <div class="subtotal-line">
                      <b class="stt-name">Transport Cost</b>
                      <span class="stt-price"
                        >MK{{ this.$store.getters.shipmentCost }}</span
                      >
                    </div>
                  </li>
                  <li>
                    <div class="subtotal-line">
                      <b class="stt-name">Tax</b>
                      <span class="stt-price">MK0.00</span>
                    </div>
                  </li>
                  <li>
                    <div class="subtotal-line">
                      <b class="stt-name">total:</b>
                      <span class="stt-price"
                        >MK{{ this.$store.getters.totalCost }}</span
                      >
                    </div>
                  </li>
                </ul>
              </div>
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
  name: "Checkout",
  data() {
    return { picked: null, pnumber: null, extraInfo: null, address: null };
  },
  mounted() {
    this.isLogin();
  },
  methods: {
    completerOrder() {
      axios
        .post(
          "http://127.0.0.1:8000/api/v1/orders/",
          {
            address: this.username,
            notice: this.extraInfo,
            phone_number: this.pnumber,
            products: this.$store.getters.getProductsIDs,
          },
          { key: "value" }
        )
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    isLogin() {
      if (this.$store.state.token) {
        return;
      } else {
        this.$router.push("/login");
      }
    },
    getImageUrl(url) {
      url = "http://127.0.0.1:8000/media" + url.slice(21);
      return url;
    },
  },
};
</script>