<template>
  <div class="page-contain login-page">
    <!-- Main content -->
    <div id="main-content" class="main-content">
      <div class="container">
        <div class="row">
          {{ responseData }}
          <!--Form Sign In-->
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="signin-container">
              <p class="form-row">
                <label for="fid-name"
                  >username:<span class="requite">*</span></label
                >
                <input
                  type="text"
                  id="fid-name"
                  name="name"
                  v-model="username"
                  class="txt-input"
                />
              </p>
              <p class="form-row">
                <label for="fid-pass"
                  >Password:<span class="requite">*</span></label
                >
                <input
                  type="password"
                  id="fid-pass"
                  name="password"
                  v-model="password"
                  class="txt-input"
                />
              </p>
              <p class="form-row wrap-btn">
                <button
                  @click="userLogin"
                  class="btn btn-submit btn-bold"
                  type="button"
                >
                  sign in
                </button>
                <a href="#" class="link-to-help">Forgot your password</a>
              </p>
            </div>
          </div>

          <!--Go to Register form-->
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="register-in-container">
              <div class="intro">
                <h4 class="box-title">New Customer?</h4>
                <p class="sub-title">
                  Create an account with us and you’ll be able to:
                </p>
                <ul class="lis">
                  <li>Check out faster</li>
                  <li>Save multiple shipping anddesses</li>
                  <li>Access your order history</li>
                  <li>Track new orders</li>
                  <li>Save items to your Wishlist</li>
                </ul>
                <router-link class="btn btn-bold" to="/signup"
                  >Create an account</router-link
                >
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
  name: "Login",
  data() {
    return {
      username: null,
      password: null,
      responseData: null,
    };
  },

  methods: {
    userLogin() {
      axios
        .post("http://127.0.0.1:8000/api/v1/token/login/", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          this.$store.state.token = response.data.auth_token;
          console.log(this.$store.state.token);
        })
        .then(() => {
          if (this.$store.state.cart) {
            this.$router.push("/checkout");
          } else {
            this.$router.push("/");
          }
        })
        .catch(function (error) {
          this.responseData = error;
        });
    },
  },
};
</script>