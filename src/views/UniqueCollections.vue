<template>
  <ProductsList :products="products"></ProductsList>
</template>

<script>
import ProductsList from "../components/ProductsList.vue";
import axios from "axios";
export default {
  name: "UniqueCollections",
  components: {
    ProductsList,
  },
  data() {
    return {
      products: null,
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/v1/products/")
      .then((response) => (this.products = response.data));
  },
};
</script>