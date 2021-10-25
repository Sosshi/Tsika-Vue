<template>
  <ProductsList :products="productsList"></ProductsList>
</template>

<script>
import axios from "axios";
import ProductsList from "@/components/ProductsList.vue";
export default {
  name: "Search",
  components: {
    ProductsList,
  },
  data() {
    return {
      productsList: null,
      product: this.$route.params.products,
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/v1/products/?search=" + this.product)
      .then((response) => (this.productsList = response.data));
  },
};
</script>