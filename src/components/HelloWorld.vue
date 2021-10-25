<template>
  <div class="hello">
    <button @click="addToCart">I AM a Button</button>
    {{ cartLen }}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      sampleData: {
        name: "Jacket",
        price: 500,
      },
    };
  },
  computed: {
    cartLen() {
      return this.$store.state.cart.length;
    },
  },
  methods: {
    addToCart() {
      this.$store.commit("addProductToCart", this.sampleData);
      this.storeToLocalStorage(this.$store.state.cart);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
