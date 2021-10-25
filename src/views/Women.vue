<template>
  <ProductsList :products="products"></ProductsList>
</template>

<script>
import ProductsList from "../components/ProductsList.vue";
import axios from "axios";
export default {
  name: "Women",
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
      .get("http://127.0.0.1:8000/api/v1/categories/3/")
      .then((response) => (this.products = response.data.products));
  },
};
</script>