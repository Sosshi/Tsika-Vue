<template>
  <div class="page-contain login-page">
    <!-- Main content -->
    <div id="main-content" class="main-content">
      <div class="container">
        {{ responseData }}
        <div class="row">
          <!--Form Sign In-->
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" s>
            <div class="signin-container">
              <form name="frm-login">
                <p class="form-row">
                  <label for="fid-name"
                    >Username:<span class="requite">*</span></label
                  >
                  <input
                    type="text"
                    id="fid-name"
                    name="username"
                    v-model="username"
                    class="txt-input"
                  />
                </p>
                <p class="form-row">
                  <label for="fid-name"
                    >Email Address:<span class="requite">*</span></label
                  >
                  <input
                    type="email"
                    id="fid-name"
                    name="email"
                    v-model="email"
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
                <p class="form-row">
                  <label for="fid-pass"
                    >Confirm Password:<span class="requite">*</span></label
                  >
                  <input
                    type="password"
                    id="fid-pass"
                    name="password2"
                    v-model="password2"
                    class="txt-input"
                  />
                </p>
                <p class="form-row wrap-btn">
                  <button
                    class="btn btn-submit btn-bold"
                    type="button"
                    @click="createUserAccount"
                  >
                    sign in
                  </button>
                  <a href="#" class="link-to-help">Forgot your password</a>
                </p>
              </form>
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
  data() {
    return {
      username: null,
      password: null,
      password2: null,
      email: null,
      responseData: null,
    };
  },

  methods: {
    createUserAccount() {
      if (this.password === this.password2) {
        axios
          .post("http://127.0.0.1:8000/api/v1/users/", {
            username: this.username,
            password: this.password,
            email: this.email,
          })
          .then(() => {
            this.$router.push("/login");
          })
          .catch(function (error) {
            this.responseData = error;
          });
      } else {
        this.isNotMatching = true;
      }
    },
  },
};
</script>